// DATA PRODUK (Bisa ditambah/diedit sesuai kebutuhan)
const products = [
  {
    id: 1,
    name: "Kaos lengan panjang motif salib ",
    category: "elektronik",
    price: "Rp 119.400",
    priceCny: "¥39.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan panjang motif salib Sansekerta bergaya retro-chic dari merek trendi Amerika untuk pria dan wanita dengan pola unik."
  },
  {
    id: 2,
    name: "Tas Ransel Korean Version",
    category: "rumah",
    price: "Rp 67.800",
    priceCny: "¥22.6",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Ransel Modis Terbaru 2026 untuk Wanita, Gaya Korea, Serbaguna untuk Siswa SMP dan SMA, untuk Perjalanan, Ransel Kapasitas Besar."
  },
  {
    id: 3,
    name: "Kaos lengan pendek motif salib",
    category: "aksesoris",
    price: "Rp 89.400",
    priceCny: "¥29.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan pendek motif salib merek trendi Amerika, gaya musim semi/panas terbaru, potongan longgar, desain unik, atasan untuk pasangan."
  },
  {
    id: 4,
    name: "Jaket Denim, Gaya Baru Musim Gugur",
    category: "fashion",
    price: "Rp 159.000",
    priceCny: "¥53",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Jaket Denim, Gaya Baru Musim Gugur 2025, Jaket Kerja, Gaya Eropa, Jaket Pendek Wanita, Atasan INS, B165"
  },
  {
    id: 5,
    name: "MFNR, merek streetwear Amerika",
    category: "fashion",
    price: "Rp 177.000",
    priceCny: "¥59",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "MFNR, merek streetwear Amerika, menghadirkan kaos lengan panjang bercetak untuk pria dan wanita, atasan kerah bulat tebal bergaya high-street untuk musim gugur."
  },
  {
    id: 6,
    name: "Celana jeans model lurus dan melebar yang trendi",
    category: "fashion",
    price: "Rp 105.000",
    priceCny: "¥35",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Celana jeans model lurus dan melebar yang trendi, gaya kelas atas, potongan longgar, melangsingkan, celana jeans grafiti retro Amerika yang trendi, ukuran 12."
  },
  {
    id: 7,
    name: "Celana Panjang Retro Baru Musim Semi/Gugur",
    category: "elektronik",
    price: "Rp 90.000",
    priceCny: "¥30",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Celana Panjang Retro Baru Musim Semi/Gugur 2025 untuk Anak Laki-laki Ukuran Sedang dan Besar, Celana Panjang dengan Motif, Bergaya."
  },
  {
    id: 8,
    name: "Sandal Stitch Clogs Pria Bergaya Anti Selip Trendi",
    category: "elektronik",
    price: "Rp 60000",
    priceCny: "¥20",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Sandal Stitch Clogs Pria Bergaya Anti Selip Trendi Gaya Instagram Anti Selip dan Tahan Bau Sandal Tertutup untuk Pasangan."
  },
  {
    id: 9,
    name: "Kaos lengan panjang motif salib ",
    category: "rumah",
    price: "Rp 119.400",
    priceCny: "¥39.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan panjang motif salib Sansekerta bergaya retro-chic dari merek trendi Amerika untuk pria dan wanita dengan pola unik."
  },
  {
    id: 10,
    name: "Tas Ransel Korean Version",
    category: "rumah",
    price: "Rp 67.800",
    priceCny: "¥22.6",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Ransel Modis Terbaru 2026 untuk Wanita, Gaya Korea, Serbaguna untuk Siswa SMP dan SMA, untuk Perjalanan, Ransel Kapasitas Besar."
  },
  {
    id: 11,
    name: "Kaos lengan pendek motif salib",
    category: "rumah",
    price: "Rp 89.400",
    priceCny: "¥29.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan pendek motif salib merek trendi Amerika, gaya musim semi/panas terbaru, potongan longgar, desain unik, atasan untuk pasangan."
  },
  {
    id: 12,
    name: "Jaket Denim, Gaya Baru Musim Gugur",
    category: "aksesoris",
    price: "Rp 159.000",
    priceCny: "¥53",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Jaket Denim, Gaya Baru Musim Gugur 2025, Jaket Kerja, Gaya Eropa, Jaket Pendek Wanita, Atasan INS, B165"
  },
  {
    id: 13,
    name: "Kaos lengan pendek motif salib",
    category: "aksesoris",
    price: "Rp 89.400",
    priceCny: "¥29.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan pendek motif salib merek trendi Amerika, gaya musim semi/panas terbaru, potongan longgar, desain unik, atasan untuk pasangan."
  },
  {
    id: 14,
    name: "Jaket Denim, Gaya Baru Musim Gugur",
    category: "aksesoris",
    price: "Rp 159.000",
    priceCny: "¥53",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Jaket Denim, Gaya Baru Musim Gugur 2025, Jaket Kerja, Gaya Eropa, Jaket Pendek Wanita, Atasan INS, B165"
  },
  {
    id: 15,
    name: "Kaos lengan pendek motif salib",
    category: "elektronik",
    price: "Rp 89.400",
    priceCny: "¥29.8",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kaos lengan pendek motif salib merek trendi Amerika, gaya musim semi/panas terbaru, potongan longgar, desain unik, atasan untuk pasangan."
  },
  {
    id: 16,
    name: "Jaket Denim, Gaya Baru Musim Gugur",
    category: "fashion",
    price: "Rp 159.000",
    priceCny: "¥53",
    image: "https://i.imgur.com/do9Q8JR.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Jaket Denim, Gaya Baru Musim Gugur 2025, Jaket Kerja, Gaya Eropa, Jaket Pendek Wanita, Atasan INS, B165"
  }
];

let currentProduct = null;

// Nomor WhatsApp Admin (GANTI DENGAN NOMOR ASLI ANDA)
const ADMIN_PHONE = '62895385275533';

// Render produk ke grid
function renderProducts(category = "all") {
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/fce4d8/e65c2f?text=Product'">
      <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <div class="product-origin"><i class="fas fa-map-marker-alt"></i> ${product.origin.substring(0, 35)}${product.origin.length > 35 ? '...' : ''}</div>
        <div class="product-actions" onclick="event.stopPropagation()">
          <button class="btn-order-product" onclick="orderSpecificProduct(${product.id})"><i class="fab fa-whatsapp"></i> Pesan</button>
          <button class="btn-detail" onclick="showProductDetail(${product.id})">Detail</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Tampilkan modal detail
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentProduct = product;
  
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalOriginText = document.getElementById('modalOriginText');
  const modalDesc = document.getElementById('modalDesc');
  
  if (modalImage) modalImage.src = product.image;
  if (modalTitle) modalTitle.innerText = product.name;
  if (modalPrice) modalPrice.innerHTML = `${product.price} <span style="font-size:0.9rem; color:#7a8e9b;">(~${product.priceCny})</span>`;
  if (modalOriginText) modalOriginText.innerText = product.origin;
  if (modalDesc) modalDesc.innerHTML = product.description;
  if (modal) modal.style.display = 'flex';
}

// Tutup modal
function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.style.display = 'none';
}

// Order produk spesifik
function orderSpecificProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const message = `Halo Admin Jastip China Indo!%0A%0ASaya ingin memesan produk:%0A*${encodeURIComponent(product.name)}*%0AHarga: ${encodeURIComponent(product.price)}%0AAsal: ${encodeURIComponent(product.origin)}%0A%0AMohon info estimasi dan cara pemesanan. Terima kasih.`;
  window.open(`https://wa.me/${ADMIN_PHONE}?text=${message}`, '_blank');
}

// Order dari modal
function orderProduct() {
  if (currentProduct) {
    orderSpecificProduct(currentProduct.id);
  }
}

// Inisialisasi filter kategori
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      renderProducts(category);
    });
  });
}

// Inisialisasi form submit
function initForm() {
  const form = document.getElementById('jastipForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama')?.value.trim();
    const telp = document.getElementById('telp')?.value.trim();
    const linkProduk = document.getElementById('linkProduk')?.value.trim();
    const detail = document.getElementById('detail')?.value.trim();
    const layanan = document.getElementById('layananPilih')?.value;
    
    if (!nama || !telp) {
      alert('Mohon isi nama dan nomor WhatsApp terlebih dahulu.');
      return;
    }
    
    let message = `Halo Admin Jastip China Indo!%0A%0A*Permintaan Jastip Baru*%0ANama: ${encodeURIComponent(nama)}%0ANo WA: ${encodeURIComponent(telp)}%0ALayanan dipilih: ${encodeURIComponent(layanan)}%0A`;
    if (linkProduk) message += `Link Produk: ${encodeURIComponent(linkProduk)}%0A`;
    if (detail) message += `Detail: ${encodeURIComponent(detail)}%0A`;
    message += `%0A Mohon info total harga dan estimasi. Terima kasih.`;
    
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${message}`, '_blank');
  });
}

// Inisialisasi smooth scroll
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a, .btn-contact-nav');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Tutup modal dengan klik di luar
function initModalClose() {
  window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) closeModal();
  };
}

// Jalankan semua fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  initFilters();
  initForm();
  initSmoothScroll();
  initModalClose();
});
