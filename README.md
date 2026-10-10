# No52 demo site

No52 takviye edici gıdaları için statik demo site tasarımıdır. Derleme veya sunucu gerekmez.

## Sayfalar

- `index.html`: ana sayfa (ürünler, sipariş adımları, bilgi köşesi, hakkımızda, iletişim)
- `urun-natured3k2.html`, `urun-nature-boost.html`: ürün sayfaları
- `bilgi-etiket.html`: örnek bilgi köşesi yazısı (taslak)
- `style.css`: görünüm

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir depo oluşturun, örneğin `no52-demo`.
2. Bu klasördeki dosyaları depoya yükleyin.
3. **Settings > Pages** bölümünde **Deploy from a branch**, **main** ve **/ (root)** seçin.
4. Adres `https://kamertulu-cmd.github.io/no52-demo/` olur.

## Doldurulacak yerler

- Marka hikayesi, adres ve telefon (`index.html` içinde köşeli parantezli metinler)
- Ürünlerin miktar bilgileri ve onaylı beyanlar (sayfalardaki "Taslak notu" kutuları)
- Nature Boost'un formu (softjel mi saşe mi) ve kullanım şekli
- Fiyatlar 10 Ekim 2026 tarihli Trendyol sayfalarından alındı; yayından önce güncelleyin
- Ürün görselleri Trendyol sunucusundan çağrılıyor; kalıcı olması için indirip depoya ekleyin
- Sayfalar arama motorlarına kapalıdır (`noindex`); herkese açık yayında kaldırın
