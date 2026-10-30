# Precision Laser Clinic — Medical Aesthetics Website
# کلینیک لیزر پرسیژن — وب‌سایت زیبایی پزشکی

A modern, responsive website for a medical laser clinic based in Vancouver, BC. Built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no build tools, no dependencies.

وب‌سایت مدرن و ریسپانسیو برای یک کلینیک لیزر پزشکی در ونکوور کانادا. ساخته‌شده با HTML، CSS و JavaScript خالص — بدون فریم‌ورک، بدون بیلد، بدون وابستگی.

![Status](https://img.shields.io/badge/status-active-success)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## About / درباره پروژه

This website serves as the digital storefront for a medical laser clinic, showcasing three core services:

این وب‌سایت به عنوان ویترین دیجیتال یک کلینیک لیزر پزشکی فعالیت می‌کند و سه سرویس اصلی را معرفی می‌کند:

- **Laser Hair Removal** — لیزر موهای زائد
- **Tattoo Removal** — حذف تاتو
- **Skin Rejuvenation** — جوانسازی پوست

The design prioritizes clean aesthetics, medical professionalism, and ease of navigation for patients seeking information about treatments, pricing, and clinic location.

طراحی سایت بر پایه زیبایی تمیز، حرفه‌ای بودن در حوزه پزشکی و سهولت ناوبری برای بیمارانی که به دنبال اطلاعات درمان، قیمت و آدرس کلینیک هستند، بنا شده است.

---

## Features / امکانات

### Core Sections / بخش‌های اصلی
- **Hero Section** — with parallax scrolling / با افکت پارالاکس
- **Trust Badges** — clinic statistics / آمار کلینیک
- **About Section** — introducing the lead physician / معرفی پزشک
- **Services Grid** — with dedicated detail pages / با صفحات جداگانه برای هر خدمت
- **Transparent Pricing** — for each treatment / قیمت شفاف برای هر درمان
- **Before & After Gallery** — with hover reveals / گالری با افکت روی عکس‌ها
- **FAQ Accordion** — common patient questions / سوالات متداول
- **Contact Section** — with embedded Google Maps / با نقشه گوگل
- **Newsletter Form** — no backend required / بدون نیاز به بک‌اند

### Interactive Features / امکانات تعاملی
- **Smart Chatbot** — Floating assistant answering questions about treatments, pricing, and booking
- **چت‌بات هوشمند** — دستیار شناور که به سوالات درباره درمان، قیمت و نوبت‌دهی پاسخ می‌دهد

- **Mobile Hamburger Menu** — Fully responsive navigation
- **منوی همبرگری موبایل** — ناوبری کاملاً ریسپانسیو

- **Scroll Reveal Animations** — Elements fade in on scroll
- **انیمیشن ظاهر شدن** — المان‌ها با اسکرول ظاهر می‌شوند

- **Smooth Scroll Navigation** — Anchor links scroll smoothly
- **اسکرول نرم** — لینک‌ها به‌صورت نرم اسکرول می‌شوند

- **Sticky Navbar** — Compresses on scroll
- **نوار ناوبری چسبان** — با اسکرول فشرده می‌شود

### Design / طراحی
- **Font Pairing** — Playfair Display (headings) + Inter (body)
- **ترکیب فونت** — Playfair Display برای تیتر، Inter برای متن

- **Color Palette** — Deep teal, warm gold accent, cream background
- **پالت رنگی** — سبز تیره، طلایی گرم، پس‌زمینه کرم

- **Fully Responsive** — Optimized for mobile, tablet, desktop
- **کاملاً ریسپانسیو** — بهینه برای موبایل، تبلت، دسکتاپ

- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation
- **دسترس‌پذیری** — HTML سمانتیک، برچسب‌های ARIA، ناوبری با کیبورد

---

## Tech Stack / تکنولوژی‌ها

| Layer / لایه | Technology / تکنولوژی |
|--------------|----------------------|
| Markup / ساختار | HTML5 (semantic) |
| Styling / استایل | Pure CSS3 (Variables, Grid, Flexbox, Animations) |
| Behavior / رفتار | Vanilla JavaScript (ES6+) |
| Icons / آیکون | Font Awesome 6 (via CDN) |
| Fonts / فونت | Google Fonts (Playfair Display + Inter) |
| Maps / نقشه | Google Maps Embed API |

**No frameworks. No build step. No npm. Just open `index.html`.**
**بدون فریم‌ورک. بدون بیلد. بدون npm. فقط `index.html` رو باز کن.**

---

## Project Structure / ساختار پروژه

```
precision-laser-clinic/
│
├── index.html                  # Main landing page / صفحه اصلی
├── laser-hair-removal.html     # Laser hair removal detail page / صفحه لیزر مو
├── tattoo-removal.html         # Tattoo removal detail page / صفحه حذف تاتو
├── skin-rejuvenation.html      # Skin rejuvenation detail page / صفحه جوانسازی
│
├── css/
│   ├── style.css               # Global styles + shared components / استایل‌های عمومی
│   ├── laser-hair-removal.css  # Page-specific styles / استایل اختصاصی
│   ├── tattoo-removal.css      # Page-specific styles / استایل اختصاصی
│   └── skin-rejuvenation.css   # Page-specific styles / استایل اختصاصی
│
├── js/
│   └── main.js                 # All interactive behavior / رفتارهای تعاملی
│
└── assets/
    └── images/
        ├── hero-bg.jpeg        # Hero background / پس‌زمینه هدر
        ├── doctor.webp         # Doctor portrait / عکس پزشک
        ├── laser-hair.jpg      # Laser hair service / عکس سرویس
        ├── tattoo-removal.jpeg # Tattoo removal service / عکس سرویس
        ├── skin-rejuvenation.avif # Skin rejuvenation / عکس سرویس
        ├── gallery-1.webp      # Before/after 1 / گالری ۱
        ├── gallery-2.jpg       # Before/after 2 / گالری ۲
        └── gallery-3.webp      # Before/after 3 / گالری ۳
```

---

## Getting Started / اجرا

### Local Development / اجرای محلی

1. **Clone / کلون کن**
   ```bash
   git clone https://github.com/YOUR_USERNAME/precision-laser-clinic.git
   cd precision-laser-clinic
   ```

2. **Open in browser / باز کن توی مرورگر**
   - Double-click `index.html`
   - یا از یه سرور محلی استفاده کن:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. **Visit / آدرس**
   ```
   http://localhost
   ```

---

## Pages / صفحات

| Page / صفحه | URL | Content / محتوا |
|-------------|-----|-----------------|
| Home | `/index.html` | Hero, About, Services, Pricing, Gallery, FAQ, Contact |
| Laser Hair Removal | `/laser-hair-removal.html` | Detail, Steps, Pricing, Care |
| Tattoo Removal | `/tattoo-removal.html` | Detail, Steps, Pricing, Ink Colors |
| Skin Rejuvenation | `/skin-rejuvenation.html` | Detail, Steps, Pricing, Conditions |

---

## Customization / شخصی‌سازی

### Changing Colors / تغییر رنگ‌ها

All colors are defined as CSS variables in `css/style.css`:

همه رنگ‌ها به‌صورت متغیر CSS در `css/style.css` تعریف شده‌اند:

```css
:root {
    --primary: #0D3B3B;       /* Deep teal / سبز تیره */
    --primary-light: #1A5C5C; /* Lighter teal / سبز روشن */
    --accent: #D4A373;        /* Warm gold / طلایی گرم */
    --dark: #1E1E2A;          /* Charcoal / زغالی */
    --light: #FAF9F6;         /* Cream / کرم */
}
```

Change these values and the entire site updates automatically.
فقط این مقادیر رو تغییر بده، کل سایت به‌روز میشه.

### Customizing the Chatbot / شخصی‌سازی چت‌بات

Chatbot responses are defined in `js/main.js` inside the `getBotResponse()` function. To add new Q&A pairs:

پاسخ‌های چت‌بات در فایل `js/main.js` داخل تابع `getBotResponse()` تعریف شده‌اند. برای اضافه کردن سوال و جواب جدید:

```javascript
if (msg.includes('your keyword')) {
    return "Your custom response here.";
}
```

### Replacing Images / تغییر عکس‌ها

Place your images in `assets/images/` with the same filenames, or update paths in the HTML files.

عکس‌های خودت رو با همان اسم‌ها در `assets/images/` قرار بده، یا مسیرشون رو توی فایل‌های HTML تغییر بده.

---

## Browser Support / پشتیبانی مرورگرها

| Browser / مرورگر | Version / نسخه |
|------------------|----------------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

Modern browsers only. Uses CSS Grid, Flexbox, CSS Variables, and ES6+ features.

فقط مرورگرهای مدرن. از CSS Grid، Flexbox، متغیرهای CSS و امکانات ES6+ استفاده می‌کند.

---

## Deployment / انتشار

Since this is a static site, deploy anywhere:

چون سایت استاتیک است، هر جایی قابل انتشار است:

### GitHub Pages
1. Repository → **Settings** → **Pages**
2. Source: `main` / `root`
3. Save — site live at `https://Alimesri05.github.io/precision-laser-clinic/`

### Netlify / Vercel
- Drag & drop the project folder
- یا از طریق GitHub برای آپدیت خودکار

### Traditional Hosting / هاست معمولی
- Upload all files via FTP to your web host's `public_html` directory
- آپلود همه فایل‌ها از طریق FTP به پوشه `public_html`

---

## Roadmap / مسیر آینده

- [ ] Backend integration for booking form (Node.js + MongoDB)
- [ ] Admin dashboard to view appointment requests
- [ ] Multi-language support (EN / FA)
- [ ] Instagram feed integration
- [ ] Blog section for SEO content
- [ ] Patient portal with treatment history
- [ ] Dark mode toggle

---

## License / لایسنس

This project is proprietary software developed for a private client. All rights reserved.

این پروژه نرم‌افزار اختصاصی است که برای یک کارفرمای خصوصی توسعه یافته. تمامی حقوق محفوظ است.

Unauthorized copying, modification, or distribution of this code is strictly prohibited.

کپی، تغییر یا توزیع غیرمجاز این کد اکیداً ممنوع است.

---

## Author / نویسنده

**Ali Mesri (علی مصری)**

- GitHub: (https://github.com/Alimesri05)
- Email: mesriali931@gmail.com

---

## Acknowledgments / تشکر و قدردانی

- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Color inspiration from modern medical aesthetic clinics
