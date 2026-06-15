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
    name: "Mochi Matcha Isi Coklat Lumer",
    category: "makanan",
    price: "Rp 9.000 – Rp15.700",
    priceCny: "¥",
    image: "https://i.imgur.com/CCtdpvF.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Kulit kenyal lembut berwarna hijau, isian coklat pekat yang meleleh saat digigit. Manis pas, aroma teh hijau asli. Kemasan satu per satu. Sangat laris dan lezat."
  },
  {
    id: 5,
    name: "Paket Jajanan Imlek Besar",
    category: "makanan",
    price: "Rp 101.000 – Rp146.000",
    priceCny: "¥",
    image: "https://i.imgur.com/5wfc4nO.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Satu kotak besar berisi lebih dari 200 bungkus camilan berbeda: permen, biskuit, kacang, jajanan pedas, minuman, dll. Lengkap sekali, cocok untuk hadiah, pesta, atau kebutuhan keluarga besar."
  },
  {
    id: 6,
    name: "Biskuit Selai Buah (Beli 1 Gratis 1)",
    category: "makanan",
    price: "Rp 15.700 – Rp24.700",
    priceCny: "¥",
    image: "https://i.imgur.com/kvyI2zP.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Biskuit renyah dengan isian selai buah asli di tengahnya. Rasanya manis asam segar, buahnya terasa nyata. Promosi beli 1 kotak dapat 1 kotak lagi."
  },
  {
    id: 7,
    name: "Manisan Buah Persik",
    category: "makanan",
    price: "Rp 7.800 – Rp12.300",
    priceCny: "¥",
    image: "https://i.imgur.com/2Bwspyj.png",
    origin: "Pinduoduo Market Place",
    description: "Buah persik segar yang diawetkan dengan gula, daging buah tebal, warnanya merah segar. Rasanya manis sedikit asam, kenyal, sangat enak dimakan langsung."
  },
  {
    id: 8,
    name: "Bobo Meledak (Bobo Pop)",
    category: "makanan",
    price: "Rp 11.200 – Rp18.000",
    priceCny: "¥",
    image: "https://i.imgur.com/75gg0A7.png",
    origin: "Pinduoduo Market Place",
    description: "Bola coklat renyah dengan isian krim putih yang lembut dan manis. Tekstur unik, sangat populer di media sosial. Kemasan kotak kecil."
  },
  {
    id: 9,
    name: "Coklat Aficion",
    category: "makanan",
    price: "Rp 31.500 – Rp45.000",
    priceCny: "¥",
    image: "https://i.imgur.com/Mar2YmF.png",
    origin: "Pinduoduo Market Place",
    description: "Coklat susu berkualitas tinggi, bahan baku impor, rasa lembut, manis pas, meleleh di mulut. Tekstur halus, tidak kasar. Kemasan elegan, cocok untuk dikonsumsi sendiri atau hadiah."
  },
  {
    id: 10,
    name: "Rumput Laut Pedas",
    category: "makanan",
    price: "Rp 4.500 – Rp7.800",
    priceCny: "¥",
    image: "https://i.imgur.com/jMhqP6B.png",
    origin: "Pinduoduo Market Place",
    description: "Rumput laut yang diiris halus, dibumbui cabai dan minyak wijen. Rasanya gurih, pedas, dan sedikit asin. Tekstur renyah, kaya serat dan mineral. Sangat populer sebagai lauk atau camilan."
  },
  {
    id: 11,
    name: "Biskuit Ham Jamur Hitam",
    category: "makanan",
    price: "Rp 6.700 – Rp11.200",
    priceCny: "¥",
    image: "https://i.imgur.com/wfjs0hF.png",
    origin: "Pinduoduo Market Place",
    description: "Biskuit renyah gurih, rasa daging ham dan jamur hitam truffle yang khas. Aroma wangi, rasa asin gurih, tekstur renyah. Cocok untuk camilan atau sarapan."
  },
  {
    id: 12,
    name: "permen kuromi",
    category: "makanan",
    price: "Rp 15.000",
    priceCny: "¥",
    image: "https://i.imgur.com/HRsLZYg.png",
    origin: "Pinduoduo Market Place",
    description: "3 kantong (sekitar 36 buah permen)"
  },
  {
    id: 13,
    name: "Latiao Campuran Kecil",
    category: "makanan",
    price: "Rp 13.500 – Rp20.200",
    priceCny: "¥",
    image: "https://i.imgur.com/BfRGu11.png",
    origin: "Pinduoduo Market Place",
    description: "Berbagai bentuk latiao ukuran kecil: stik, persegi, cincin, dll. Rasanya pedas gurih, tekstur kenyal, dikemas terpisah agar segar. Paling populer dan terjangkau."
  },
  {
    id: 14,
    name: "Latiao Lembar Lebar",
    category: "makanan",
    price: "Rp 6.700 – Rp11.200",
    priceCny: "¥",
    image: "https://i.imgur.com/VsAofkq.png",
    origin: "Pinduoduo Market Place",
    description: "Lembaran besar latiao yang sangat kenyal, bumbu merata, rasa pedas dan gurih yang kuat. Tekstur lembut namun tetap kenyal, rasanya sangat otentik. Camilan legendaris."
  },
  {
    id: 15,
    name: "Minuman Kopi Kelapa Tims",
    category: "makanan",
    price: "Rp 27.000 – Rp40.000",
    priceCny: "¥",
    image: "https://i.imgur.com/ZO8FlDY.png",
    origin: "Pinduoduo Market Place",
    description: "Minuman kopi siap minum, perpaduan kopi asli dengan susu kelapa. Rasanya lembut, wangi kelapa, tidak terlalu pahit atau manis. Kemasan kotak praktis, enak diminum dingin atau suhu ruang."
  },
  {
    id: 16,
    name: "Konjac Pedas (Mo Yu Shuang)",
    category: "makanan",
    price: "Rp 9.000 – Rp15.700",
    priceCny: "¥",
    image: "https://i.imgur.com/5mHnXi8.png",
    origin: "Pinduoduo Market Place",
    description: "Camilan dari umbi konjac, tekstur renyah dan berair, sangat rendah kalori. Dibumbui cabai, lada, dan garam, rasa pedas segar dan gurih. Sangat sehat, cocok untuk diet. Dikemas kecil-kecil."
  },
  {
    id: 17,
    name: "Mochi Ungu Rasa Ubi",
    category: "makanan",
    price: "Rp 15.700 – Rp24.700",
    priceCny: "¥",
    image: "https://i.imgur.com/jakAU14.png",
    origin: "Pinduoduo Market Place",
    description: "Kue ketan kenyal, lembut, berwarna ungu, berisi krim manis yang meleleh saat digigit. Kulit luarnya halus dan tidak lengket, isiannya banyak dan lembut. Rasa ubi ungu yang asli dan wangi. Dikemas satu per satu."
  },
  {
    id: 18,
    name: "Sereal Buah Kering & Susu",
    category: "makanan",
    price: "Rp 31.500 – Rp45.000",
    priceCny: "¥",
    image: "https://i.imgur.com/JMlrOxV.png",
    origin: "Pinduoduo Market Place",
    description: "Campuran serpihan gandum panggang, buah kering, biji-bijian, dan butiran susu. Bisa dimakan langsung atau diseduh dengan susu/panas. Kaya serat, sehat, mengenyangkan. Kemasan kantong besar 500g."
  },
  {
    id: 19,
    name: "Permen Lunak Kuromi",
    category: "makanan",
    price: "Rp 6.700 – Rp11.200",
    priceCny: "¥",
    image: "https://i.imgur.com/HRsLZYg.png",
    origin: "Pinduoduo Market Place",
    description: "Permen lunak kenyal, rasa buah-buahan, kemasan bergambar karakter Kuromi yang populer. Rasanya manis segar, tekstur lembut, tidak lengket di gigi. Sangat disukai anak-anak dan penggemar karakter."
  },
  {
    id: 20,
    name: "Teh Buah Goji, Murbei, Mawar",
    category: "makanan",
    price: "Rp 11.200 – Rp18.000",
    priceCny: "¥",
    image: "https://i.imgur.com/uETUORG.png",
    origin: "Pinduoduo Market Place",
    description: "Kantong teh berisi campuran buah goji hitam, murbei kering, dan kelopak bunga mawar. Seduh dengan air panas, rasanya manis alami, wangi bunga, kaya antioksidan dan vitamin. Baik untuk kesehatan kulit dan mata."
  },
  {
    id: 21,
    name: "Popcorn Rasa Mentega & Karamel",
    category: "makanan",
    price: "Rp 15.700 – Rp24.700",
    priceCny: "¥",
    image: "https://i.imgur.com/c4yyYlA.png",
    origin: "Pinduoduo Market Place",
    description: "Popcorn berondong jagung yang mekar sempurna, besar dan empuk. Ada dua varian rasa: mentega yang gurih lembut, dan karamel yang manis lengket. Dikemas dalam kantong besar, cukup untuk berbagi. Diproses higienis, tidak gosong, rasanya sangat enak."
  },
  {
    id: 22,
    name: "Kulit Ikan Goreng Pedas Manis 204g",
    category: "makanan",
    price: "Rp 27.000 – Rp40.000",
    priceCny: "¥",
    image: "https://i.imgur.com/iGf2xWH.png",
    origin: "Pinduoduo Market Place",
    description: ""
  },
  {
    id: 23,
    name: "Latiao Campuran 5 Rasa",
    category: "makanan",
    price: "Rp 11.200 – Rp18.000",
    priceCny: "¥",
    image: "https://i.imgur.com/opgUuOv.png",
    origin: "Pinduoduo Market Place",
    description: " Satu paket berisi 5 jenis latiao berbeda: lebar, tipis, kecil, pedas biasa, dan sangat pedas. Semua dari bahan berkualitas, rasa otentik, tekstur kenyal pas. Dikemas kecil-kecil, aman dan bersih."
  },
  {
    id: 24,
    name: "Vitamin C Stik Pedas",
    category: "makanan",
    price: "Rp 18.000 – Rp29.200",
    priceCny: "¥",
    image: "https://i.imgur.com/vlWtybm.png",
    origin: "Pinduoduo Market Place",
    description: "Camilan stik panjang, renyah, rasa pedas segar dengan tambahan vitamin C. Warna cerah, bumbu merata, rasanya unik: pedas, asam, dan sedikit manis. Sangat disukai anak muda."
  },
  {
    id: 25,
    name: "Kue Bundar Coklat (C2 Coklat & Keju)",
    category: "makanan",
    price: "Rp 20.000 – Rp34.000",
    priceCny: "¥",
    image: "https://i.imgur.com/Bfjtz3n.png",
    origin: "Pinduoduo Market Place",
    description: "Kue lembut berbentuk bundar dengan isian krim coklat dan keju kental di tengahnya. Tekstur kue sangat empuk, lembut di mulut, rasa manis yang pas dengan aroma coklat asli dan gurihnya keju. Dikemas per kotak, isinya beberapa keping, cocok untuk camilan pagi, sore, atau bekal. Bebas lemak trans, dipanggang dengan suhu terkontrol agar tetap segar."
  },
  {
    id: 26,
    name: " Lidi Rasa Blueberry (Mengyuan)",
    category: "makanan",
    price: "Rp 5.600 – Rp9.000",
    priceCny: "¥",
    image: "https://i.imgur.com/UsDaZpk.png",
    origin: "Pinduoduo Market Place",
    description: "Camilan stik panjang renyah, dilapisi coklat rasa blueberry yang manis dan sedikit asam segar. Bagian dalamnya renyah dan ringan, lapisan luarnya halus dan beraroma kuat. Kemasan kotak kecil praktis, berat bersih 16g. Sangat populer sebagai camilan ringan anak-anak maupun dewasa."
  },
  {
    id: 27,
    name: "Paket Campuran Jajanan Klasik",
    category: "makanan",
    price: "Rp 40.000 – Rp63.000",
    priceCny: "¥",
    image: "https://i.imgur.com/ZExZ9BT.png",
    origin: "Pinduoduo Market Place",
    description: "Satu paket berisi berbagai macam camilan legendaris Tiongkok: mi kering, kerupuk, permen, jajanan pedas, keripik, dll. Semua dikemas kecil-kecil, rasanya beragam: pedas, manis, asin, gurih. Sangat cocok untuk dibagikan, oleh-oleh, atau camilan santai. Isi lengkap, kualitas terjamin, rasa otentik seperti jajanan zaman dulu."
  },
  {
    id: 28,
    name: "Campuran Kismis Berwarna",
    category: "makanan",
    price: "Rp 27.000 – Rp40.000",
    priceCny: "¥",
    image: "https://i.imgur.com/l9Scx9G.png",
    origin: "Pinduoduo Market Place",
    description: "Kismis berkualitas tinggi dari berbagai jenis anggur: hijau, merah, hitam, kuning. Dikeringkan secara alami, besar-besar, daging tebal, manis alami tanpa tambahan gula. Kemasan toples kedap udara agar tetap kering dan segar. Bisa dimakan langsung, dicampur sereal, kue, atau minuman. Kaya zat besi dan vitamin."
  },
  {
    id: 29,
    name: "Kue Kering 7 Rasa",
    category: "makanan",
    price: "Rp 18.000 – Rp31.500",
    priceCny: "¥",
    image: "https://i.imgur.com/xuyVW9e.png",
    origin: "Pinduoduo Market Place",
    description: "Paket berisi kue kering dengan 7 rasa berbeda: coklat, kacang, buah, susu, dll. Bentuk lucu, rasa manis pas, renyah. Dikemas satu per satu agar tetap renyah. Cocok untuk camilan, tamu, atau bekal anak sekolah."
  },
  {
    id: 30,
    name: "Kacang Campuran Harian (Beli 1 Gratis 1)",
    category: "makanan",
    price: "Rp 56.000 – Rp85.000",
    priceCny: "¥",
    image: "https://i.imgur.com/XRtVV9i.png",
    origin: "Pinduoduo Market Place",
    description: "Campuran kacang mete, almond, kenari, kismis, kacang tanah, dan buah kering lainnya. Perbandingan seimbang, dipanggang kering tanpa minyak, sehat dan bergizi. Satu kotak isi 30 bungkus kecil, cukup untuk 1 bulan. Promosi beli 1 kotak dapat 1 kotak tambahan."
  },
  {
    id: 31,
    name: "Stroberi Kering Beku",
    category: "makanan",
    price: "Rp 22.500 – Rp36.000",
    priceCny: "¥",
    image: "https://i.imgur.com/0cTLnl7.png",
    origin: "Pinduoduo Market Place",
    description: "Stroberi segar yang dikeringkan dengan teknologi beku, sehingga bentuk, warna, dan rasa asli tetap terjaga. Tekstur renyah, rasa manis asam segar, tanpa tambahan gula atau pengawet. Kaya serat dan vitamin C. Cocok dimakan langsung, dicampur sereal, atau hiasan kue."
  },
  {
    id: 32,
    name: "Black Forest Coklat Wafer",
    category: "makanan",
    price: "Rp 11.200 – Rp18.000",
    priceCny: "¥",
    image: "https://i.imgur.com/7MZP9Xn.png",
    origin: "Pinduoduo Market Place",
    description: "Wafer berlapis coklat hitam dengan isian krim lembut. Tekstur renyah berlapis-lapis, rasa coklat pekat dan harum. Dikemas dalam kantong rapi, cocok untuk camilan sehari-hari."
  },
  {
    id: 33,
    name: "Paket Campuran Jajanan 100 Macam",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/Imu0SnK.png",
    origin: "Pinduoduo Market Place",
    description: "Isi lengkap segala jenis jajanan legendaris: pedas, manis, asin, kerupuk, permen, mi kering. Semua kemasan kecil. Sangat lengkap dan murah."
  },
  {
    id: 34,
    name: "Kismis Campuran 500g",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/r3lKN0T.png",
    origin: "Pinduoduo Market Place",
    description: "Besar-besar, daging tebal, manis alami. Kering bersih, tanpa biji. Kemasan toples kedap udara. Sehat dan bergizi."
  },
  {
    id: 35,
    name: "Latiao Boshi Sapi (Pedas)",
    category: "makanan",
    price: "Rp 6.700 – Rp11.200",
    priceCny: "¥",
    image: "https://i.imgur.com/dR4TEhn.png",
    origin: "Pinduoduo Market Place",
    description: "Camilan tradisional dari tepung gandum yang diproses, dibumbui cabai, lada, garam, dan rempah khas. Tekstur kenyal, rasa pedas gurih yang nikmat, tidak terlalu keras. Dikemas dalam bungkus kecil terpisah agar higienis dan mudah dibawa. Rasanya otentik, sangat populer di seluruh Tiongkok."
  },
  {
    id: 36,
    name: "Bobo Meledak Coklat",
    category: "makanan",
    price: "Rp 13.500 – Rp22.500",
    priceCny: "¥",
    image: "https://i.imgur.com/ycD9bOR.png",
    origin: "Pinduoduo Market Place",
    description: "Bola-bola coklat renyah di luar, berisi krim lembut yang meleleh saat digigit. Rasa coklat hitam yang pekat, tidak terlalu manis. Kemasan kotak, sangat populer di media sosial. Tekstur unik, rasanya lezat, cocok untuk camilan atau hadiah."
  },
  {
    id: 37,
    name: "27",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/XWnO3vO.png",
    origin: "Pinduoduo Market Place",
    description: "9.000 – Rp15.700"
  },
  {
    id: 38,
    name: "Latiao Pedas Campuran",
    category: "makanan",
    price: "Rp 7.200 – Rp12.300",
    priceCny: "¥",
    image: "https://i.imgur.com/x7ABsq5.png",
    origin: "Pinduoduo Market Place",
    description: "Berbagai jenis: batang, lembar, kecil, sangat pedas & sedang. Semua rasa otentik. Dikemas rapi."
  },
  {
    id: 39,
    name: "Gulungan Rumput Laut",
    category: "makanan",
    price: "Rp 9.000 – Rp14.600",
    priceCny: "¥",
    image: "https://i.imgur.com/FC4a1ca.png",
    origin: "Pinduoduo Market Place",
    description: "Rumput laut kering dipanggang, rasa asin gurih. Tekstur renyah sekali. Kemasan kotak, isi banyak. Sehat dan ringan."
  },
  {
    id: 40,
    name: "Kacang Campuran Harian (Beli 1 Gratis 1)",
    category: "makanan",
    price: "Rp 54.000 – Rp81.000",
    priceCny: "¥",
    image: "https://i.imgur.com/XRtVV9i.png",
    origin: "Pinduoduo Market Place",
    description: "Almond, mete, kenari, kismis, aprikot. Panggang kering, tidak berminyak. Kotak keluarga, beli 1 dapat 1."
  },
  {
    id: 41,
    name: " Keripik Beras Lada Sichuan",
    category: "makanan",
    price: "Rp 4.500 – Rp7.800",
    priceCny: "¥ ",
    image: "https://i.imgur.com/EbQEWSz.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Keripik beras tradisional, renyah, rasa khas lada Sichuan: pedas dan sedikit kebas di lidah. Bumbu merata, gurih, sangat renyah."
  },
  {
    id: 42,
    name: "Keripik Beras Merek Haoxiongdi",
    category: "makanan",
    price: "Rp 3.600 – Rp6.300",
    priceCny: "¥",
    image: "https://i.imgur.com/hZNIxiF.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Versi merek terkenal dari keripik beras lada Sichuan. Kualitas lebih baik, lebih renyah, bumbu lebih nikmat. Kemasan lebih menarik."
  },
  {
    id: 43,
    name: "Kue Kering Quduoduo",
    category: "makanan",
    price: "Rp ",
    priceCny: "¥",
    image: "https://i.imgur.com/0bDYuIA.jpeg",
    origin: "Pinduoduo Market Place",
    description: ""
  },


  // Bagian Aksesoris.
  {
    id: 100,
    name: "Casing HP Motif Gadis Kecil & Tulisan Beruntung",
    category: "aksesoris",
    price: "Rp 13.500 – Rp22.500",
    priceCny: "¥",
    image: "https://i.imgur.com/FvkFhaa.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Pelindung HP bahan silikon lembut, gambar kartun lucu, tulisan estetik. Melindungi seluruh bodi dan lensa kamera. Cocok untuk seri iPhone terbaru."
  },
  {
    id: 102,
    name: "Casing HP Hijau Motif Anak & Uang",
    category: "aksesoris",
    price: "Rp 13.500 – Rp22.500",
    priceCny: "¥",
    image: "https://i.imgur.com/CsiKMUC.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bahan polikarbonat keras + lapisan lembut, anti gores. Gambar anak lucu, tulisan motivasi ringan. Dilengkapi gantungan tali pendek dan hiasan daun semanggi. Desain ramping, mudah dipasang dan dilepas."
  },
  {
    id: 103,
    name: "Casing HP Ungu Kaligrafi Cina",
    category: "aksesoris",
    price: "Rp 15.700 – Rp24.700",
    priceCny: "¥",
    image: "https://i.imgur.com/4OOBhca.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Warna ungu lembut, tulisan kaligrafi emas. Dilengkapi tali gantungan motif geometri dan gantungan kunci kecil. Bahan tebal, melindungi sudut HP. Desain budaya Tiongkok modern."
  },
  {
    id: 104,
    name: "Casing HP Merah Putih Tulisan Politik",
    category: "aksesoris",
    price: "Rp 18.000 – Rp29.200",
    priceCny: "¥",
    image: "https://i.imgur.com/Q2hadeO.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Desain tegas, warna merah dan putih dengan tulisan berkarakter. Bahan kaca keras, permukaan halus dan berkilau. Sangat pas, lubang kamera presisi. Tahan air dan debu."
  },
  {
    id: 105,
    name: " Casing HP Biru Dewa Kekayaan",
    category: "aksesoris",
    price: "Rp 14.600 – Rp23.600",
    priceCny: "¥",
    image: "https://i.imgur.com/YjrazEa.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Gambar Dewa Kekayaan Tiongkok klasik, warna biru muda cerah. Bahan transparan di pinggir, keras di belakang. Tekstur halus, tidak meninggalkan bekas sidik jari. Simbol keberuntungan dan kemakmuran."
  },
  {
    id: 106,
    name: "Casing HP Hitam (Menjadi Wanita Kaya)",
    category: "aksesoris",
    price: "Rp 15.700 – Rp27.000",
    priceCny: "¥",
    image: "https://i.imgur.com/c8cJp5T.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bahan kaca temper asli, permukaan seperti kaca cermin. Gambar gadis rambut panjang, tulisan harapan kekayaan. Sangat kuat, anti pecah, pas bodi."
  },
  {
    id: 107,
    name: "Casing HP Ungu Motif Kipas & Bunga",
    category: "aksesoris",
    price: "Rp 13.500 – Rp22.500",
    priceCny: "¥",
    image: "https://i.imgur.com/pXlX5zS.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Motif kipas, awan, dan bunga gaya kuno. Dilengkapi tali gantungan panjang dan gantungan kunci. Bahan lembut, elastis, menyerap benturan."
  },
  {
    id: 108,
    name: "Casing HP Transparan + Rantai Mutiara",
    category: "aksesoris",
    price: "Rp Rp16.800 – Rp28.100",
    priceCny: "¥",
    image: "https://i.imgur.com/Xl7RWkU.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bahan bening, tidak mengubah warna asli HP. Tulisan harapan hidup lebih baik. Dilengkapi rantai hiasan mutiara buatan panjang 16 cm. Sangat cantik dan elegan."
  },
  {
    id: 109,
    name: "Casing HP Ungu (Mencari Uang Itu Penting)",
    category: "aksesoris",
    price: "Rp 12.300 – Rp21.300",
    priceCny: "¥",
    image: "https://i.imgur.com/O9aRVbs.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Warna ungu muda, gambar kelinci lucu, tulisan ringan tentang pentingnya rezeki. Bahan tebal, anti jatuh, pinggiran tinggi melindungi layar."
  },
  {
    id: 110,
    name: "Casing HP Hijau Buah Persik & Kata Bijak",
    category: "aksesoris",
    price: "Rp 13.500 – Rp22.500",
    priceCny: "¥",
    image: "https://i.imgur.com/zvuPHcH.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Gambar buah persik, bunga, dan tulisan keberuntungan. Bahan lembut, tali gantungan pendek. Desain simpel dan bermakna baik."
  },
  {
    id: 111,
    name: " Magnet Kulkas Logam Gambar Kota",
    category: "aksesoris",
    price: "Rp 19200",
    priceCny: "¥6.4",
    image: "https://i.imgur.com/MiYbew5.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bahan logam tipis, gambar bangunan bersejarah, pemandangan kota, dan tulisan nama tempat. Warna cerah, detail tajam. Bagian belakang magnet kuat. Bisa pesan desain sendiri, minimal 100 buah."
  },
  {
    id: 112,
    name: "Magnet Kulkas Logam Pasir Mengalir",
    category: "aksesoris",
    price: "Rp 19.100 – Rp31.500",
    priceCny: "¥",
    image: "https://i.imgur.com/QlKd84N.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Unik, ada cairan dan pasir berwarna di dalam yang bergerak saat digerakkan. Bercahaya dalam gelap. Motif taman, pagoda, bunga. Sangat indah dan populer."
  },
  {
    id: 113,
    name: "Gantungan Kunci Logam Kustom",
    category: "aksesoris",
    price: "Rp 10.100 – Rp20.200",
    priceCny: "¥",
    image: "https://i.imgur.com/etyE5k6.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bahan logam paduan, warna emas/perak, gambar tempat wisata atau desain sendiri. Teknologi ukir halus, awet dan tidak luntur. Cocok oleh-oleh, hadiah, promosi. Pabrik langsung, pesan banyak lebih murah."
  },
  {
    id: 114,
    name: "Kotak Hadiah Alat Tulis Gaya Cina",
    category: "aksesoris",
    price: "Rp 49.500 – Rp78.700",
    priceCny: "¥",
    image: "https://i.imgur.com/hJl8WIz.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Buku sampul kulit sintetis warna biru tua, ukiran emas kaligrafi. Pulpen logam serasi. Dilengkapi tas kertas cantik. Bisa ukir nama/logo perusahaan. Kualitas tinggi, cocok hadiah resmi."
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
  },
  {
    id: 116,
    name: "Set Hadiah Kotak Premium: Gelas Kopi + Penyangga Leher + Payung Lipat",
    category: "aksesoris",
    price: "Rp 110.000 – Rp 178.000",
    priceCny: "¥",
    image: "https://i.imgur.com/zJ8zoxI.jpeg",
    origin: "Pinduoduo Market Place",
    description: "1 buah gelas kopi tahan panas/dingin dengan layar suhu digital di tutupnya, 1 alat penyangga leher ergonomis berwarna senada, dan 1 payung lipat ringan berdesain serasi."
  },
  {
    id: 117,
    name: " Botol Minum Olahraga Gradasi Warna 1 Liter",
    category: "aksesoris",
    price: "Rp 27.000 – Rp 43.000",
    priceCny: "¥",
    image: "https://i.imgur.com/AcgUOJk.jpeg",
    origin: "Pinduoduo Market Place",
    description: "1000 ml, cukup untuk kebutuhan cairan sehari-hari saat olahraga, kerja, atau bepergian."
  },
  {
    id: 118,
    name: "Gelas Kopi Karakter Crayon Shinchan – LULUJUMP",
    category: "aksesoris",
    price: "Rp 40.000 – Rp 58.000",
    priceCny: "¥",
    image: "https://i.imgur.com/gnr9RQI.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Gambar karakter kartun populer Crayon Shinchan dengan berbagai ekspresi dan adegan lucu. Ada dua varian warna: kuning lembut dan biru muda. Dilengkapi tali jinjing kecil agar mudah dibawa. Tutup rapat, anti tumpah."
  },
  {
    id: 119,
    name: "Gelas Termos Kustom Pribadi / Perusahaan",
    category: "aksesoris",
    price: "Rp  34.000 – Rp 52.000",
    priceCny: "¥",
    image: "https://i.imgur.com/w16J0Jw.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Gelas termos gaya modern dengan penutup tekan, mudah dibuka satu tangan."
  },
  {
    id: 120,
    name: "Gelas Besar Bergagang Motif Karakter 2026",
    category: "aksesoris",
    price: "Rp 54.000 – Rp 79.000",
    priceCny: "¥",
    image: "https://i.imgur.com/Cufkoer.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Bagian dalam baja tahan karat, luar plastik keras berwarna putih, gagang kokoh."
  },
  {
    id: 121,
    name: "Gelas Besar Bergagang – Applied Nutrition",
    category: "aksesoris",
    price: "Rp 72.000 – Rp 101.000",
    priceCny: "¥",
    image: "https://i.imgur.com/yzv1nJO.jpeg",
    origin: "Pinduoduo Market Place",
    description: "Baja tahan karat berkualitas tinggi, dinding ganda, sangat awet, tidak berkarat."
  }
];

let currentProduct = null;

// Nomor WhatsApp Admin (GANTI DENGAN NOMOR ASLI ANDA)
const ADMIN_PHONE = '62881026039700';

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
