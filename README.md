<div align="center">

<img src="static/dark-logo.svg" width="140" alt="Dark Panel">

# DARK PANEL
**نسخهٔ V1 — پنل مدیریت سبک، سریع و تاریک**

</div>

---

## معرفی

**Dark Panel** یک پنل مدیریت کاربران و کانفیگ است که با **FastAPI** نوشته شده و برای اجرا روی **Railway** (یا هر VPS) آماده است. با یک رابط تاریک و روان، همه‌چیز را از یک جا کنترل می‌کنید: ساخت کاربر، حجم و انقضا، لینک اشتراک، کانفیگ‌ها و ورکرها.

### امکانات
- مدیریت کاربران: حجم، تاریخ انقضا، محدودیت تعداد IP، گروه‌بندی
- لینک اشتراک اختصاصی با صفحهٔ زیبا، QR و اتصال سریع
- پروتکل‌ها: VLESS (WS / XHTTP) و Reality، کانفیگ AmneziaWG
- مدیریت Cloudflare Worker (استقرار و همگام‌سازی پروکسی)
- پروکسی تلگرام (MTProto) و Web Proxy داخلی
- ربات فروش و ربات کانال تلگرام
- اسکنر IP و SNI
- نودهای ریموت، بکاپ و بازیابی کامل
- رابط فارسی / انگلیسی با تم تاریک

---

## استقرار روی Railway

1. این مخزن را در GitHub خودتان بسازید و فایل‌ها را آپلود کنید.
2. در Railway گزینهٔ **New Project ← Deploy from GitHub repo** را بزنید و مخزن را انتخاب کنید.
3. در بخش **Variables** این متغیرها را بگذارید:

| متغیر | توضیح |
|---|---|
| `ADMIN_PASSWORD` | رمز ورود پنل (**حتماً قوی بگذارید**) |
| `SECRET_KEY` | یک رشتهٔ تصادفی طولانی |
| `DATA_DIR` | `/data` (پیش‌فرض) |
| `SUPPORT_URL` | اختیاری — لینک پشتیبانی که در هدر اشتراک می‌آید |
| `UPDATE_REPO` | اختیاری — `username/repo` برای دکمهٔ بروزرسانی داخل پنل |
| `NOTIF_REPO` | اختیاری — `username/repo` برای اعلان‌های پنل (پوشهٔ `notif`) |

4. در بخش **Volumes** یک Volume بسازید و روی مسیر **`/data`** وصل کنید، وگرنه با هر دیپلوی اطلاعات پاک می‌شود.
5. در **Settings ← Networking** روی **Generate Domain** بزنید و پورت را روی **8080** بگذارید.
6. آدرس زیر را باز کنید:

```
https://your-domain.up.railway.app/dark
```

---

## نصب روی VPS

ابتدا در فایل `start.sh` مقدار `YOUR_GITHUB_USER` را با نام کاربری GitHub خودتان عوض کنید، سپس:

```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USER/dark-panel/main/start.sh | bash
```

---

## شخصی‌سازی

- **لینک‌های تماس** (تلگرام، کانال، GitHub): فقط فایل `static/branding.js` را ویرایش کنید. هر مقدار خالی، دکمه‌اش را مخفی می‌کند.
- **ظاهر:** تم در `static/dark-theme.css` است. رنگ‌ها در بالای همان فایل تعریف شده‌اند.
- **پس‌زمینه:** تصویر `static/img/bg.jpg` را عوض کنید.
- **لوگو:** `static/dark-logo.svg`

## اطلاعات پروژه

| | |
|---|---|
| نسخه | **V1** |
| پورت | `8080` |
| مسیر ورود | `/dark` |
| زبان | Python 3.13 · FastAPI |

---

<div align="center"><sub>DARK PANEL · V1</sub></div>
