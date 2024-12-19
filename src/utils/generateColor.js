// Kullanıcıya özel renk üreten fonksiyon
function generateColor(id) {
  // id'den hash değeri oluştur
  let hash = 0;

  // Basit bir hash fonksiyonu
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // 32 bit'e indirgenmiş bir hash
  }

  // Hash değerinden renk oluştur (RGB formatında)
  let r = (hash >> 16) & 0xff;
  let g = (hash >> 8) & 0xff;
  let b = hash & 0xff;

  // Sarı renkten kaçınmak için (r, g yüksek ve b düşük olduğunda)
  if (r > 200 && g > 200 && b < 100) {
    b += 100; // Mavi tonunu artır
    b = b > 255 ? 255 : b; // RGB sınırını aşma
  }

  // Rengi hex formatına dönüştür
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default generateColor;
