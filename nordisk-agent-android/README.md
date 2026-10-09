# Nordisk Agent Android – test pentru Nordisk Renhed og Bygg ApS

Prima pagină: **Notificări și cereri**. Versiunea 0.1 permite utilizatorului să activeze voluntar permisiunea Android pentru citirea notificărilor, să selecteze aplicația 3byggetilbud, să salveze local textul notificărilor acesteia, să deschidă aplicația sursă și să păstreze manual cereri.

**Limitări:** nu intră în contul 3byggetilbud, nu vede automat toate fotografiile și descrierile, nu se conectează la OpenAI, nu trimite oferte. Modulele Finanțe și Calculator apar explicit ca neimplementate. Nu sunt preluate alte notificări în stocare. Aplicația nu are permisiunea INTERNET, iar toate datele rămân local pe telefon.

## Build
Workflow-ul GitHub Actions din această ramură construiește un APK de test cu Android SDK 35, Gradle 8.9 și Java 17. Instalarea se face manual după descărcarea artifact-ului Nordisk-Agent-APK din Actions. APK-ul de test este semnat cu cheia debug GitHub și nu trebuie considerat build de producție.

Această ramură este separată de main: **nu publică și nu modifică site-ul manmaler.dk**.
