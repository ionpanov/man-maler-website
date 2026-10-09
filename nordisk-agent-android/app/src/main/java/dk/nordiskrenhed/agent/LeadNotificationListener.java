package dk.nordiskrenhed.agent;

import android.app.Notification;
import android.os.Bundle;
import android.content.pm.PackageManager;
import android.service.notification.NotificationListenerService;
import android.service.notification.StatusBarNotification;

public final class LeadNotificationListener extends NotificationListenerService {
    @Override
    public void onNotificationPosted(StatusBarNotification sbn) {
        handle(sbn);
    }

    @Override
    public void onListenerConnected() {
        super.onListenerConnected();
        StatusBarNotification[] active = getActiveNotifications();
        if (active != null) {
            for (StatusBarNotification item : active) handle(item);
        }
    }

    private void handle(StatusBarNotification item) {
        if (item == null) return;
        String pkg = item.getPackageName();
        if (pkg == null) return;
        // Only the package identifier is inspected for other apps;
        // notification title and content are read solely for the selected app.
        String label = pkg;
        try {
            PackageManager pm = getPackageManager();
            label = pm.getApplicationLabel(pm.getApplicationInfo(pkg, 0)).toString();
        } catch (Exception ignored) {}
        LocalStore.observe(this, pkg, label);
        if (!pkg.equals(LocalStore.source(this))) return;
        Notification notification = item.getNotification();
        if (notification == null) return;
        Bundle data = notification.extras;
        if (data == null) return;
        CharSequence title = data.getCharSequence(Notification.EXTRA_TITLE);
        CharSequence body = data.getCharSequence(Notification.EXTRA_BIG_TEXT);
        if (body == null) body = data.getCharSequence(Notification.EXTRA_TEXT);
        LocalStore.saveNotification(this, pkg, item.getKey(),
                title == null ? "" : title.toString(),
                body == null ? "" : body.toString(), item.getPostTime());
    }
}
