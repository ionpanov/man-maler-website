package dk.nordiskrenhed.agent;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.provider.Settings;
import android.text.InputType;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONObject;
import java.text.DateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;

public final class MainActivity extends Activity {
    private static final int DARK = Color.rgb(24, 52, 58);
    private static final int TEAL = Color.rgb(30, 88, 97);
    private static final int TEXT = Color.rgb(38, 45, 47);
    private static final int MUTED = Color.rgb(96, 107, 110);
    private static final int BORDER = Color.rgb(219, 227, 228);
    private static final int PANEL = Color.rgb(246, 249, 249);
    private final String[] tabs = {"Notificări", "Cereri", "Finanțe", "Calculator", "Setări"};
    private String active = "Notificări";
    private LinearLayout navigation, content;

    @Override
    protected void onCreate(Bundle saved) {
        super.onCreate(saved);
        createLayout();
        acceptShare(getIntent());
        draw();
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        acceptShare(intent);
        draw();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (content != null) draw();
    }

    private void acceptShare(Intent intent) {
        if (intent == null || !Intent.ACTION_SEND.equals(intent.getAction()) ||
                !"text/plain".equals(intent.getType())) return;
        String shared = intent.getStringExtra(Intent.EXTRA_TEXT);
        if (shared != null && !shared.trim().isEmpty()) {
            LocalStore.saveLead(this, "Cerere partajată", shared);
            active = "Cereri";
            Toast.makeText(this, "Textul a fost salvat", Toast.LENGTH_SHORT).show();
        }
        intent.setAction(null);
    }

    private int dp(float n) {
        return (int) (n * getResources().getDisplayMetrics().density + 0.5f);
    }

    private GradientDrawable background(int fill, boolean outline) {
        GradientDrawable shape = new GradientDrawable();
        shape.setColor(fill);
        shape.setCornerRadius(dp(12));
        if (outline) shape.setStroke(dp(1), BORDER);
        return shape;
    }

    private TextView label(String value, int size, int color, boolean bold) {
        TextView view = new TextView(this);
        view.setText(value);
        view.setTextSize(size);
        view.setTextColor(color);
        if (bold) view.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        return view;
    }

    private void createLayout() {
        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setBackgroundColor(Color.WHITE);
        LinearLayout top = new LinearLayout(this);
        top.setOrientation(LinearLayout.VERTICAL);
        top.setPadding(dp(18), dp(18), dp(18), dp(18));
        top.setBackgroundColor(DARK);
        top.addView(label("Nordisk Agent", 24, Color.WHITE, true));
        top.addView(label("Nordisk Renhed og Bygg ApS", 13, Color.WHITE, false));
        root.addView(top);
        HorizontalScrollView strip = new HorizontalScrollView(this);
        strip.setHorizontalScrollBarEnabled(false);
        navigation = new LinearLayout(this);
        navigation.setPadding(dp(8), dp(8), dp(8), dp(8));
        strip.addView(navigation);
        root.addView(strip);
        ScrollView scroll = new ScrollView(this);
        content = new LinearLayout(this);
        content.setOrientation(LinearLayout.VERTICAL);
        content.setPadding(dp(18), dp(10), dp(18), dp(24));
        scroll.addView(content);
        root.addView(scroll, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, 0, 1));
        setContentView(root);
    }

    private LinearLayout card() {
        LinearLayout view = new LinearLayout(this);
        view.setOrientation(LinearLayout.VERTICAL);
        view.setPadding(dp(16), dp(15), dp(16), dp(15));
        view.setBackground(background(PANEL, true));
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(-1, -2);
        p.setMargins(0, dp(8), 0, dp(9));
        content.addView(view, p);
        return view;
    }

    private void body(LinearLayout parent, String value) {
        TextView view = label(value, 15, MUTED, false);
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(-1, -2);
        p.setMargins(0, dp(7), 0, dp(8));
        parent.addView(view, p);
    }

    private void action(LinearLayout parent, String title, Runnable runnable) {
        Button button = new Button(this);
        button.setText(title);
        button.setTextSize(14);
        button.setAllCaps(false);
        button.setTextColor(Color.WHITE);
        button.setBackground(background(TEAL, false));
        button.setMinimumHeight(dp(48));
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(-1, dp(50));
        p.setMargins(0, dp(7), 0, dp(6));
        parent.addView(button, p);
        button.setOnClickListener(view -> runnable.run());
    }

    private void draw() {
        navigation.removeAllViews();
        for (String tab : tabs) {
            Button button = new Button(this);
            button.setText(tab);
            button.setTextSize(12);
            button.setAllCaps(false);
            boolean selected = active.equals(tab);
            button.setTextColor(selected ? Color.WHITE : TEXT);
            button.setBackground(background(selected ? TEAL : PANEL, !selected));
            LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(-2, dp(48));
            p.setMargins(dp(4), 0, dp(4), 0);
            navigation.addView(button, p);
            button.setOnClickListener(view -> {
                active = tab;
                draw();
            });
        }
        content.removeAllViews();
        content.addView(label(active.equals("Notificări") ?
                "Notificări și cereri" : active, 22, TEXT, true));
        switch (active) {
            case "Notificări": drawNotifications(); break;
            case "Cereri": drawLeads(); break;
            case "Setări": drawSettings(); break;
            case "Calculator": comingSoon("Metraj, vopsea, ore de lucru, salarii, kilometri, parcare, gunoi, cheltuieli fixe, marjă, TVA 25%."); break;
            case "Finanțe": comingSoon("Încasări, facturi, cheltuieli, profit și situație lunară. Doar date reale."); break;
            default: drawNotifications();
        }
    }

    private String date(long time) {
        if (time <= 0) return "Data necunoscută";
        return DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT,
                Locale.forLanguageTag("ro-RO")).format(new Date(time));
    }

    private boolean listenerEnabled() {
        String enabled = Settings.Secure.getString(getContentResolver(),
                "enabled_notification_listeners");
        if (enabled == null) return false;
        ComponentName component = new ComponentName(this, LeadNotificationListener.class);
        for (String part : enabled.split(":")) {
            if (component.equals(ComponentName.unflattenFromString(part))) return true;
        }
        return false;
    }

    private void settingsNotificationAccess() {
        try {
            startActivity(new Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS));
        } catch (Exception ex) {
            Toast.makeText(this, "Caută «Acces la notificări» în Setări", Toast.LENGTH_LONG).show();
        }
    }

    private void openSource() {
        String pkg = LocalStore.source(this);
        if (pkg.isEmpty()) {
            active = "Setări";
            draw();
            return;
        }
        try {
            Intent intent = getPackageManager().getLaunchIntentForPackage(pkg);
            if (intent == null) throw new IllegalStateException("Missing launcher");
            startActivity(intent);
        } catch (Exception ex) {
            Toast.makeText(this, "Nu pot deschide 3byggetilbud.", Toast.LENGTH_LONG).show();
        }
    }

    private void drawNotifications() {
        LinearLayout status = card();
        status.addView(label(listenerEnabled() ? "Notificări: permisiune activă" :
                "Notificări: activarea este necesară", 16, TEXT, true));
        String source = LocalStore.source(this);
        body(status, source.isEmpty() ? "Sursă: niciuna, selecteaz-o din Setări."
                : "Sursă selectată: " + source);
        if (!listenerEnabled()) action(status, "Activează accesul", this::settingsNotificationAccess);
        if (source.isEmpty()) action(status, "Alege 3byggetilbud", () -> {
            active = "Setări";
            draw();
        });
        else action(status, "Deschide 3byggetilbud", this::openSource);

        JSONArray notifications = LocalStore.all(this, LocalStore.NOTIFICATIONS);
        content.addView(label("Notificări primite: " + notifications.length(), 17, TEXT, true));
        if (notifications.length() == 0) body(card(), "Încă nu există notificări de la aplicația selectată. Descrierea completă trebuie deschisă în 3byggetilbud.");
        for (int i = 0; i < notifications.length(); i++) {
            JSONObject obj = notifications.optJSONObject(i);
            if (obj == null) continue;
            String title = obj.optString("title", "Lucrare");
            String body = obj.optString("body", "");
            LinearLayout box = card();
            box.addView(label(title, 16, TEXT, true));
            body(box, body);
            body(box, date(obj.optLong("date", 0)));
            action(box, "Salvează ca cerere", () -> {
                LocalStore.saveLead(this, title, title + (body.isEmpty() ? "" : ": " + body));
                Toast.makeText(this, "Cerere salvată local", Toast.LENGTH_SHORT).show();
            });
            action(box, "Deschide aplicația sursă", this::openSource);
        }
        body(content, "Versiune de test: doar textul notificărilor aplicației selectate. Nu citește contul privat 3byggetilbud și nu trimite oferte.");
    }

    private EditText field(LinearLayout parent, String hint, boolean multiline) {
        EditText input = new EditText(this);
        input.setTextSize(16);
        input.setHint(hint);
        input.setBackground(background(Color.WHITE, true));
        input.setPadding(dp(12), dp(12), dp(12), dp(12));
        input.setInputType(multiline ? InputType.TYPE_CLASS_TEXT |
                InputType.TYPE_TEXT_FLAG_MULTI_LINE : InputType.TYPE_CLASS_TEXT);
        if (multiline) input.setMinLines(4);
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(-1, -2);
        p.setMargins(0, dp(7), 0, dp(8));
        parent.addView(input, p);
        return input;
    }

    private void drawLeads() {
        LinearLayout form = card();
        form.addView(label("Adaugă cerere din descriere", 16, TEXT, true));
        body(form, "Copiază sau partajează textul lucrării din 3byggetilbud. Nu introduce date inventate.");
        EditText title = field(form, "Titlu / client", false);
        EditText description = field(form, "Descrierea completă a lucrării", true);
        action(form, "Salvează cererea", () -> {
            if (description.getText().toString().trim().isEmpty()) {
                description.setError("Descrierea este necesară");
                return;
            }
            LocalStore.saveLead(this, title.getText().toString(),
                    description.getText().toString());
            draw();
        });
        JSONArray leads = LocalStore.all(this, LocalStore.LEADS);
        content.addView(label("Cereri salvate: " + leads.length(), 17, TEXT, true));
        for (int i = 0; i < leads.length(); i++) {
            JSONObject obj = leads.optJSONObject(i);
            if (obj == null) continue;
            LinearLayout box = card();
            box.addView(label(obj.optString("title"), 16, TEXT, true));
            body(box, obj.optString("details"));
            body(box, date(obj.optLong("date", 0)));
        }
    }

    private void drawSettings() {
        LinearLayout access = card();
        access.addView(label("Permisiune notificări", 16, TEXT, true));
        body(access, "Accesul este opțional și îl poți dezactiva oricând din Android.");
        action(access, "Deschide setările de acces", this::settingsNotificationAccess);

        LinearLayout source = card();
        source.addView(label("Selectează aplicația 3byggetilbud", 16, TEXT, true));
        body(source, "Se vor salva doar notificările din aplicația selectată.");
        PackageManager pm = getPackageManager();
        Intent query = new Intent(Intent.ACTION_MAIN);
        query.addCategory(Intent.CATEGORY_LAUNCHER);
        HashSet<String> added = new HashSet<>();
        List<ResolveInfo> apps = pm.queryIntentActivities(query, 0);
        for (ResolveInfo info : apps) {
            if (info.activityInfo == null) continue;
            String pkg = info.activityInfo.packageName;
            String name = info.loadLabel(pm).toString();
            String all = (pkg + " " + name).toLowerCase(Locale.ROOT);
            if ((all.contains("3byg") || all.contains("byggetilbud")) && added.add(pkg)) {
                selectSource(source, pkg, name);
            }
        }
        JSONArray seen = LocalStore.all(this, LocalStore.SEEN);
        for (int i = 0; i < seen.length(); i++) {
            JSONObject obj = seen.optJSONObject(i);
            if (obj == null) continue;
            String pkg = obj.optString("pkg");
            if (!pkg.isEmpty() && added.add(pkg)) {
                selectSource(source, pkg, obj.optString("label", pkg));
            }
        }
        if (added.isEmpty()) body(source, "Nu am identificat încă 3byggetilbud. Revino după o notificare sau verifică dacă aplicația este instalată.");
        LinearLayout security = card();
        security.addView(label("Date salvate pe telefon", 16, TEXT, true));
        body(security, "Fără acces la internet. Fără preluarea mesajelor din alte aplicații. Fără trimitere de oferte.");
        action(security, "Șterge notificările", () -> {
            LocalStore.clear(this, LocalStore.NOTIFICATIONS);
            draw();
        });
        action(security, "Șterge cererile", () -> {
            LocalStore.clear(this, LocalStore.LEADS);
            draw();
        });
    }

    private void selectSource(LinearLayout parent, String pkg, String label) {
        String suffix = pkg.equals(LocalStore.source(this)) ? " (selectată)" : "";
        action(parent, "Selectează: " + label + suffix, () -> {
            LocalStore.setSource(this, pkg);
            Toast.makeText(this, "Sursă selectată", Toast.LENGTH_SHORT).show();
            draw();
        });
    }

    private void comingSoon(String info) {
        LinearLayout box = card();
        box.addView(label("Etapă următoare – neimplementată încă", 16, TEXT, true));
        body(box, info);
        action(box, "Înapoi la notificări", () -> {
            active = "Notificări";
            draw();
        });
    }
}
