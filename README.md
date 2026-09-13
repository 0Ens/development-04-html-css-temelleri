# Enes Erul – Kişisel Portfolio Sayfası

Saf HTML + CSS ile sıfırdan yapılmış kişisel portfolio sayfası. Framework kullanılmadı.

## Sayfayı Açmak

```bash
# Direkt tarayıcıda aç:
start index.html

# Ya da VS Code Live Server ile sun
```

## HTML Doğrulama

```bash
# html-validate kur (bir kez):
npm install -g html-validate

# Doğrulamayı çalıştır:
html-validate index.html
```

Alternatif: [W3C Nu Validator](https://validator.w3.org/) — index.html'i yükle, 0 hata olmalı.

## Link Kontrolü

```bash
node check-links.mjs
```

## Tasarım Kararları

- **Navigasyon → Flexbox:** Nav tek boyutlu (yatay sıra). Flexbox tek eksen için idealdir; `space-between` ile adı sola, linkleri sağa iter.
- **Projeler → Grid:** Kartlar iki boyutlu düzen gerektirir. `auto-fit + minmax(280px, 1fr)` sayesinde media query yazmadan 320px'te 1, 768px'te 2, 1024px'te 3 sütun oluşur.

## Responsive Test

Sayfayı DevTools'ta şu genişliklerde test et (F12 → Toggle Device Toolbar):
- 320px — tek sütun kart, nav alt alta
- 768px — iki sütun kart
- 1024px — üç sütun kart

## Ne Öğrendim

- Semantik HTML etiketleri (`header`, `nav`, `main`, `section`, `article`, `footer`) ve doğru kullanım amacı
- `<article>` vs `<section>` farkı: article bağımsız içerik, section ilgili içeriklerin grubu
- CSS custom property'ler (`:root` değişkenleri) ile tutarlı tema yönetimi
- Flexbox ile tek boyutlu layout (nav)
- Grid `auto-fit + minmax` ile responsive layout — media query yazmadan
- `aria-label` ve `aria-labelledby` ile erişilebilirlik
- Klavye navigasyonu ve `focus-visible` ile erişilebilir odak göstergesi
