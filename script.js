// DATA PRODUK (Bisa ditambah/diedit sesuai kebutuhan)
const products = [
  {
    id: 1,
    name: "Smartwatch Xiaomi Mi Band 8",
    category: "elektronik",
    price: "Rp 450.000",
    priceCny: "¥199",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Xiaomi+Band+8",
    origin: "Xiaomi Official Store, China",
    description: "Fitness tracker dengan layar AMOLED, tahan air, baterai tahan 14 hari. Garansi resmi 1 tahun."
  },
  {
    id: 2,
    name: "Hoodie Fashion Korea",
    category: "fashion",
    price: "Rp 175.000",
    priceCny: "¥79",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Hoodie+Fashion",
    origin: "Guangzhou Fashion Market",
    description: "Hoodie oversized bahan cotton fleece, nyaman dipakai. Tersedia berbagai warna (Black, Grey, Navy, Pink). Ukuran S-XXL."
  },
  {
    id: 3,
    name: "Robot Vacuum Cleaner",
    category: "rumah",
    price: "Rp 1.250.000",
    priceCny: "¥549",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Robot+Vacuum",
    origin: "Xiaomi Youpin, China",
    description: "Robot vacuum dengan navigasi laser, daya hisap 2700Pa, kontrol via app. Bisa mapping rumah."
  },
  {
    id: 4,
    name: "iPhone 15 Case MagSafe",
    category: "aksesoris",
    price: "Rp 85.000",
    priceCny: "¥39",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=iPhone+Case",
    origin: "Shenzhen Accessories Market",
    description: "Case HP dengan magnet kuat, bahan TPU transparan anti-kuning. Support MagSafe charger."
  },
  {
    id: 5,
    name: "Sepatu Sneakers Pria/Wanita",
    category: "fashion",
    price: "Rp 325.000",
    priceCny: "¥149",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Sneakers",
    origin: "Putian, China (Kota Sepatu)",
    description: "Sneakers casual berbahan kulit sintetis, sol empuk. Tersedia ukuran 36-44. Desain minimalis."
  },
  {
    id: 6,
    name: "TWS Earbuds ANC",
    category: "elektronik",
    price: "Rp 275.000",
    priceCny: "¥129",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=TWS+Earbuds",
    origin: "Huqin Electronics, China",
    description: "True wireless stereo dengan active noise cancellation, baterai tahan 6 jam + case 24 jam."
  },
  {
    id: 7,
    name: "Lampu LED Strip RGB",
    category: "rumah",
    price: "Rp 95.000",
    priceCny: "¥45",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=LED+Strip",
    origin: "Guangzhou Lighting Market",
    description: "LED strip 5 meter dengan remote control, 16 warna, bisa sync dengan musik."
  },
  {
    id: 8,
    name: "Jam Tangan Pria Sport",
    category: "aksesoris",
    price: "Rp 195.000",
    priceCny: "¥89",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Jam+Tangan",
    origin: "Guangzhou Watch Market",
    description: "Jam tangan analog dengan strap stainless steel, tahan air 30m. Desain elegan."
  },
  {
    id: 9,
    name: "ihjuygyugiuh",
    category: "aksesoris",
    price: "Rp 195.000",
    priceCny: "¥89",
    image: "https://placehold.co/400x400/fce4d8/e65c2f?text=Jam+Tangan",
    origin: "Guangzhou Watch Market",
    description: "Jam tangan analog dengan strap stainless steel, tahan air 30m. Desain elegan."
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