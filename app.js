// Belirli bir sınıfa sahip tüm elemanları seç
const toggles = document.querySelectorAll('.faq-toggle');

// Seçilen her eleman üzerinde forEach döngüsü uygula
toggles.forEach((toggle) => {
  // Her elemana 'click' olay dinleyicisi ekle
  toggle.addEventListener('click', () => {
    // Tıklanan elemanın üst öğesinin (parent node) sınıflarına 'active' sınıfını ekleyip kaldır
    toggle.parentNode.classList.toggle('active');
  });
});