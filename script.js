// DATA PRODUK (Bisa ditambah/diedit sesuai kebutuhan)
const products = [
  // Bagian Makanan
  {
    id: 1,
    name: "HAKIM AL QODIR",
    category: "makanan",
    price: "",
    priceCny: " ",
    image: "https://i.imgur.com/hC5ja16.jpeg",
    origin: "OWNER HAB TRUSTIP",
    description: "OWNERRRR!"
  },
  {
    id: 2,
    name: "ALFIAN SLEBEW",
    category: "makanan",
    price: "",
    priceCny: "",
    image: "https://i.imgur.com/F3fXSEu.jpeg",
    origin: "OWNER HAB TRUSTIP",
    description: "OWNERRRR!"
  },
  {
    id: 3,
    name: "BRIAN LOS SANTOS",
    category: "makanan",
    price: " ",
    priceCny: "",
    image: "https://i.imgur.com/ulBZw2k.jpeg",
    origin: "OWNER HAB TRUSTIP",
    description: "OWNERRRR!"
  },
  {
    id: 4,
    name: "matcha isi cokeat",
    category: "makanan",
    price: "Rp 15.000",
    priceCny: "¥",
    image: "https://i.imgur.com/CCtdpvF.jpeg",
    origin: "Pinduoduo Market Place",
    description: "dapat 6 biji"
  },
  {
    id: 5,
    name: "",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/5wfc4nO.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 6,
    name: "jajan slai olai china",
    category: "makanan",
    price: "Rp 15.000",
    priceCny: "¥",
    image: "https://i.imgur.com/kvyI2zP.jpeg",
    origin: "Pinduoduo Market Place",
    description: "dapat 1 kotak"
  },
  {
    id: 7,
    name: "zheng taofu ",
    category: "makanan",
    price: "Rp 16.500",
    priceCny: "¥",
    image: "https://i.imgur.com/2Bwspyj.png",
    origin: "Pinduoduo Market Place",
    description: "dapat 1 biji"
  },
  {
    id: 8,
    name: "波波爆 bobo",
    category: "makanan",
    price: "Rp 23.000",
    priceCny: "¥",
    image: "https://i.imgur.com/75gg0A7.png",
    origin: "Pinduoduo Market Place",
    description: "dapat 2 "
  },
  {
    id: 9,
    name: "aficion chocolate",
    category: "makanan",
    price: "Rp 60.000",
    priceCny: "¥",
    image: "https://i.imgur.com/Mar2YmF.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 10,
    name: "1",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/jMhqP6B.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 11,
    name: "黑松露火腿",
    category: "makanan",
    price: "Rp 15.000",
    priceCny: "¥",
    image: "https://i.imgur.com/wfjs0hF.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 12,
    name: "2",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/HRsLZYg.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 13,
    name: "3",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/BfRGu11.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 14,
    name: "4",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/VsAofkq.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 15,
    name: "5",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/ZO8FlDY.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 16,
    name: "6",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/5mHnXi8.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 17,
    name: "7",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/jakAU14.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 18,
    name: "8",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/JMlrOxV.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 19,
    name: "9",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/HRsLZYg.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 20,
    name: "10",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/uETUORG.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 21,
    name: "11",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/c4yyYlA.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 22,
    name: "12",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/iGf2xWH.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 23,
    name: "13",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/opgUuOv.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 24,
    name: "14",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/vlWtybm.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 25,
    name: "15",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/Bfjtz3n.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 26,
    name: "16",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/UsDaZpk.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 27,
    name: "17",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/ZExZ9BT.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 28,
    name: "18",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/l9Scx9G.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 29,
    name: "19",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/xuyVW9e.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 30,
    name: "20",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/XRtVV9i.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 31,
    name: "21",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/0cTLnl7.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 32,
    name: "22",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/7MZP9Xn.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 33,
    name: "23",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/Imu0SnK.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 34,
    name: "24",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/r3lKN0T.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 35,
    name: "25",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/dR4TEhn.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 36,
    name: "26",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/ycD9bOR.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 37,
    name: "27",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/XWnO3vO.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 38,
    name: "28",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/x7ABsq5.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 39,
    name: "29",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/FC4a1ca.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 40,
    name: "30",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/XRtVV9i.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 41,
    name: "31",
    category: "makanan",
    price: "Rp 4500",
    priceCny: "¥ ",
    image: "https://i.imgur.com/EbQEWSz.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 42,
    name: "32",
    category: "makanan",
    price: "Rp 3600",
    priceCny: "¥",
    image: "https://i.imgur.com/hZNIxiF.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 43,
    name: "33",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/0bDYuIA.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },


  // Bagian Aksesoris
  {
    id: 100,
    name: "1",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/FvkFhaa.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 102,
    name: "2",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/CsiKMUC.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 103,
    name: "3",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/4OOBhca.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 104,
    name: "4",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/Q2hadeO.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 105,
    name: "5",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/YjrazEa.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 106,
    name: "6",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/c8cJp5T.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 107,
    name: "7",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/pXlX5zS.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 108,
    name: "8",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/Xl7RWkU.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 109,
    name: "9",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/O9aRVbs.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 110,
    name: "10",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/zvuPHcH.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 111,
    name: "冰箱贴金属",
    category: "aksesoris",
    price: "Rp 19200",
    priceCny: "¥6.4",
    image: "https://i.imgur.com/MiYbew5.jpeg",
    origin: "Pinduoduo Market Place",
    description: "企业定制冰箱贴金属磁吸贴定做文创ip纪念品年会周年小礼品订制"
  },
  {
    id: 112,
    name: "12",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/QlKd84N.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 113,
    name: "13",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/etyE5k6.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 114,
    name: "14",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/hJl8WIz.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 115,
    name: "12",
    category: "aksesoris",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/QlKd84N.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
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
  
  const message = `Halo Admin HAB TRUSTIP!%0A%0ASaya ingin memesan produk:%0A*${encodeURIComponent(product.name)}*%0AHarga: ${encodeURIComponent(product.price)}%0AAsal: ${encodeURIComponent(product.origin)}%0A%0AMohon info estimasi dan cara pemesanan. Terima kasih.`;
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
    
    let message = `Halo Admin HAB TRUSTIP!%0A%0A*Permintaan Jastip Baru*%0ANama: ${encodeURIComponent(nama)}%0ANo WA: ${encodeURIComponent(telp)}%0ALayanan dipilih: ${encodeURIComponent(layanan)}%0A`;
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
