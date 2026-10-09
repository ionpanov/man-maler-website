package dk.nordiskrenhed.agent;

import android.content.Context;
import android.content.SharedPreferences;
import org.json.JSONArray;
import org.json.JSONObject;

final class LocalStore {
    static final String NOTIFICATIONS = "notifications";
    static final String LEADS = "leads";
    static final String SEEN = "seen";
    static final String SOURCE = "source";
    private static final Object LOCK = new Object();

    private LocalStore() {}

    static SharedPreferences prefs(Context context) {
        return context.getApplicationContext()
                .getSharedPreferences("nordisk_agent_private", Context.MODE_PRIVATE);
    }

    static String source(Context context) {
        return prefs(context).getString(SOURCE, "");
    }

    static void setSource(Context context, String pkg) {
        synchronized (LOCK) {
            prefs(context).edit().putString(SOURCE, pkg).remove(NOTIFICATIONS).apply();
        }
    }

    static JSONArray all(Context context, String key) {
        try {
            return new JSONArray(prefs(context).getString(key, "[]"));
        } catch (Exception ignored) {
            return new JSONArray();
        }
    }

    private static void insert(Context context, String key, JSONObject object, String uniqueKey) {
        synchronized (LOCK) {
            JSONArray previous = all(context, key);
            JSONArray next = new JSONArray().put(object);
            String id = object.optString(uniqueKey);
            for (int i = 0; i < previous.length() && next.length() < 120; i++) {
                JSONObject existing = previous.optJSONObject(i);
                if (existing != null && !id.equals(existing.optString(uniqueKey))) {
                    next.put(existing);
                }
            }
            prefs(context).edit().putString(key, next.toString()).apply();
        }
    }

    static void observe(Context context, String pkg, String label) {
        String signature = (pkg + " " + label).toLowerCase(java.util.Locale.ROOT);
        if (!signature.contains("byggetilbud") && !signature.contains("3byg")) return;
        try {
            JSONObject object = new JSONObject();
            object.put("pkg", pkg);
            object.put("label", label);
            insert(context, SEEN, object, "pkg");
        } catch (Exception ignored) {}
    }

    static void saveNotification(Context context, String pkg, String notificationId,
                                  String title, String body, long date) {
        if (!pkg.equals(source(context)) || (title.isEmpty() && body.isEmpty())) return;
        try {
            JSONObject object = new JSONObject();
            object.put("id", notificationId);
            object.put("title", title);
            object.put("body", body);
            object.put("date", date);
            insert(context, NOTIFICATIONS, object, "id");
        } catch (Exception ignored) {}
    }

    static void saveLead(Context context, String title, String details) {
        if (details.trim().isEmpty()) return;
        try {
            JSONObject object = new JSONObject();
            object.put("id", "lead_" + System.nanoTime());
            object.put("title", title.trim().isEmpty() ? "Cerere" : title.trim());
            object.put("details", details.trim());
            object.put("date", System.currentTimeMillis());
            insert(context, LEADS, object, "id");
        } catch (Exception ignored) {}
    }

    static void clear(Context context, String key) {
        prefs(context).edit().remove(key).apply();
    }
}
