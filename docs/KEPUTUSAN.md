# HaHe: Keputusan Desain (final per 20 Okt 2026)

HaHe = singkatan dari kata **Handipe** dan **Hejan**, yang berarti Ular dan Tangga dalam bahasa Dayak Ngaju.
Game santai untuk bermain bersama keluarga, teman, sahabat, pasangan, dan siapa pun.
Alamat: hahe.totogutomo.com

## 1. Aturan dasar
- Aturan ular tangga standar. Tema hanya mengganti tampilan: pion, dadu, tangga, ular, latar, bingkai papan.
- Posisi ular dan tangga berbeda di tiap tema.

## 2. Tampilan
- Satu kode untuk HP/tablet (potret dan landscape) dan IFP (landscape panggung: papan besar di tengah, daftar pemain di samping).
- Pengguna bisa memilih potret atau landscape di HP.
- Gaya: kartun tebal, warna cerah, tombol bulat besar (terinspirasi game kasual, tidak meniru karakter mana pun).

## 3. Pemain dan ukuran papan
- Pemain: 2 sampai tanpa batas. Mode 1 manusia lawan komputer.
- Ukuran papan **dapat dipilih manual** di Pengaturan: 6×6, 8×8, 10×10 (berdua pun boleh pilih 8×8).
- Saran otomatis sesuai jumlah pemain: 2-4 pemain 10×10, 5-6 pemain 8×8, 7 pemain ke atas 6×6.
- Rombongan besar: **mode kelompok** (pemain dibagi tim, satu pion per tim).
- Pion maksimal 6 per tema (pemain lebih banyak memakai pion berulang dengan warna cincin berbeda).
- Nama pemain diisi sebelum permainan; pemain juga memilih pion/warna.

## 4. Mode permainan
- **Klasik**: siapa lebih dulu sampai kotak akhir.
- **By time**: waktu mundur; saat habis, posisi terjauh menang.
- **By chance**: jumlah lemparan sama untuk semua (mis. 10 kali); posisi terjauh menang.

## 5. Level papan (Pengaturan)
Untuk papan 10×10. Pada papan 8×8 dan 6×6 jumlah dikurangi sebanding (minimal 1 ular dan 1 tangga).

| Level | Ular | Tangga | Keterangan |
|---|---|---|---|
| Sangat mudah | 3 | 9 | Tangga jauh lebih banyak |
| Mudah | 4 | 7 | Lebih banyak tangga |
| Standar | 6 | 6 | Seimbang |
| Sulit | 8 | 4 | Lebih banyak ular |
| Sangat sulit | 10 | 3 | Ular mendominasi |

## 6. Pengaturan lengkap
- Tema tampilan terang / gelap.
- Backsound: on/off + **volume**. Tempat (placeholder) backsound **per tema**, bukan satu lagu.
- Efek suara: on/off + **volume**.
- Mode permainan, level papan, ukuran papan, jumlah pemain.
- Dadu (bisa pakai dadu dari tema lain). Tema dipilih di **Beranda** sejak Versi 1.2; pion dipilih di Siapkan Permainan.
- Kualitas grafis: tema Hutan Borneo memakai setelan "Best".

## 7. Suara
- Efek suara (dadu, melangkah, naik tangga, kena ular, menang) **dibuat dari kode** (ringan, bebas lisensi).
- Backsound: dicari oleh Pak Toto (open source, CC0 atau CC-BY). Kredit dicantumkan di About.

## 8. Tema (10) dan tingkat visual
| Kelompok | Tema | Tingkat |
|---|---|---|
| Netral | **Hutan Borneo** | Premium, "Best" 10/10, pion 3D + gerak ringan, ornamen Dayak |
| Cowok | Bajak Laut | 3D, 9/10 |
| Cewek | Princess | 3D, 9/10 |
| Cowok | Dinosaurus | 3D standar (±8,5/10) |
| Cewek | Unicorn | 3D standar (±8,5/10) |
| Cowok | Luar Angkasa | 2D kartun |
| Cewek | Es Krim | 2D kartun |
| Netral | Bawah Laut | 2D kartun |
| Netral | Kebun Ceria | 2D kartun |
| Netral | Negeri Salju | 2D kartun |

- Tiap tema lengkap: pion, dadu, tangga, ular, latar, bingkai. Dalam satu tema, gaya semua pion sama.
- Dadu: 1-2 per tema, ada opsi ganti dadu lintas tema.
- Efek 3D dibuat sebagai "resep" (gradasi, kilap, bayangan, alas berkilau) lalu dipakai ulang.

## 9. Tema Hutan Borneo (ikon pribadi dan promosi lokal)
- Pion: **Tingang** (ditulis "Tingang", mengikuti maskot Guru Tingang, **tanpa tulisan di dada**), **Orangutan**, **Bekantan**.
- Bingkai papan: ornamen Dayak, dominan hitam, merah, kuning, putih.
- Pion bergerak ringan saat diam (naik-turun pelan, melambai).
- Latar hutan, tangga akar kayu, ular hutan, dadu kayu.
- Sapaan kecil berbahasa Dayak Ngaju (usulan, boleh ditambah).

## 10. About
- Arti HaHe (Handipe Hejan) dan tujuan game.
- Pembuat: Toto Gutomo, lalu di bawahnya **"Guru SMA Negeri 3 Maliku"**.
- "Game dibangun atas permintaan: **Cherry 🍒**" (ikon ceri digambar sendiri, bukan emoji bawaan).
- Kredit backsound.

## 11. Footer permanen
`HaHe ©2026 | hahe.totogutomo.com`

## 12. Fitur tambahan (diterima)
- **Lanjutkan permainan**: posisi tersimpan otomatis; bisa dilanjut setelah aplikasi ditutup.
- **Layar juara**: konfeti, pion pemenang menari, urutan peringkat semua pemain.

## 13. Keputusan tambahan (19 Okt 2026, diterima)
- Pion melompat kotak demi kotak, naik tangga, meluncur di ular.
- Bisa dimainkan tanpa internet dan dipasang seperti aplikasi: tombol **Pasang Aplikasi** di Pengaturan, dalam bingkai berketerangan.

## 14. Rencana tahap
- Status: **Versi 1.2** (20 Okt 2026): perbaikan hasil uji V 1.1 (lihat bagian 17). **Tahap 1 sudah dibangun** (index.html, sw.js, manifest, icons/, audio/). **Versi 1.1** (20 Okt 2026): Update A + tema Luar Angkasa dan Es Krim (lihat bagian 16).
- **Tahap 1**: mesin game lengkap (semua mode, pengaturan, ukuran papan, level, nama pion, lawan komputer, kelompok, potret/landscape/IFP, efek suara, About, lanjutkan permainan, layar juara) + tema **Hutan Borneo** premium.
- **Tahap 2**: sembilan tema lain, 2-3 tema per sesi.

## 15. Update kecil (SELESAI di Versi 1.1)
Nomor 1 dibangun. Nomor 2 digantikan oleh pengaturan urutan manual (bagian 16).

1. **Pengaturan, aturan finis**: pilihan **Boleh melewati** atau **Harus pas (memantul)**.
   - Harus pas (memantul): lemparan lebih dari sisa kotak membuat pion mantul mundur (perilaku Tahap 1 sekarang).
   - Boleh melewati: lemparan lebih dari sisa kotak tetap dihitung sampai finis.
   - Pilihan bawaan: Harus pas (memantul), sama seperti sekarang (usulan, boleh diganti).
2. **Sebelum main, urutan pemain**: pilihan **Acak di awal** atau **Sesuai urutan data pemain**.
   - Sesuai urutan data pemain: urutan seperti diisi di layar Siapkan Permainan (perilaku Tahap 1 sekarang).
   - Acak di awal: urutan giliran diacak sekali saat permainan dimulai.
   - Pilihan bawaan: Sesuai urutan data pemain (usulan, boleh diganti).
- Bagian kode yang akan diubah: layar Siapkan Permainan (pilihan urutan), Pengaturan (pilihan aturan finis), dan logika gerak pion. Bagian lain tidak disentuh.

## 16. Keputusan hasil uji V 1.0 (20 Okt 2026)
Sudah dibangun di **Versi 1.1**:
- Pengaturan saat bermain: aturan tidak langsung berlaku; ada tombol **Simpan untuk Main Baru** dan **Terapkan & Mulai Ulang** (dengan konfirmasi; pemain tetap sama). Dadu, suara, dan tampilan tetap langsung berlaku.
- **Aturan finis**: Harus pas (memantul, bawaan) atau Boleh melewati.
- About: "Handipe Hejan, yang berarti ular tangga".
- Sapaan beranda: **"Tabe Salamat Lingu Nalatai!"** (juga di Tentang). Sapaan naik tangga tetap "Isen Mulang!".
- **Pilih pion**: ketuk pion membuka jendela Pilih Karakter + warna cincin. Karakter yang dipakai pemain lain dikunci selama jumlah pemain tidak melebihi jumlah karakter; selebihnya boleh sama (beda warna cincin).
- **Urutan giliran**: diatur manual dengan ▲▼, geser nomor, atau tombol **Acak urutan**. Lawan komputer: pilihan Kamu duluan / Komputer duluan. (Menggantikan pilihan "Acak di awal / Sesuai urutan" di bagian 15.)
- Aturan tema selain Borneo: **1 dadu**, **4 karakter asli**, **Tingang 2D** sebagai karakter ke-5 (digambar ulang mengikuti gaya tema; tanpa kacamata dan lambang dada). Pemain lebih banyak dibedakan warna cincin.
- Ganti tema otomatis mengganti dadu ke dadu tema itu (tetap bisa dipilih manual).
- Tema 2D dibangun tanpa mockup:
  - **Luar Angkasa**: Astronot, Alien, Robot, Roket, Tingang. Dadu Planet. Tangga besi bercahaya, bingkai bintang dan planet.
  - **Es Krim**: Cone Stroberi, Es Loli, Sundae Ceri, Milkshake, Tingang. Dadu Permen. Tangga permen, bingkai meses, ceri, dan hati.

Rencana berikutnya:
- Sesi berikut: Bawah Laut, Kebun Ceria, Negeri Salju (2D).
- Setelah itu: Bajak Laut, Princess, Dinosaurus, Unicorn (3D); Tingang 3D memakai versi Borneo.
- **Musim kedua**: karakter Borneo baru **Dboy = Jaya Tingang**, **Dgirl = Bunga Huma**, **Lontar = Si Lontar** (gambar acuan dari Pak Toto). Di papan memakai versi disederhanakan.

## 17. Keputusan hasil uji V 1.1 (20 Okt 2026), SELESAI di Versi 1.2

- **Tombol back Android**: kembali ke layar sebelumnya (Pengaturan/Tentang/Siapkan ke Beranda; saat main membuka Jeda; menutup jendela kecil). Di Beranda muncul **"Yakin keluar dari HaHe?"** dengan wajah haru 🥹 digambar sendiri (Tetap main / Keluar); back sekali lagi = keluar.
- **Pilih tema pindah ke Beranda** (keluar dari Pengaturan). Urutan Beranda: deretan pemain sesuai tema (bawaan Borneo atau pilihan terakhir), **Pilih Tema** [ikon], MAIN BARU, Pengaturan | Tentang.
  * Ikon tema: kotak persegi berlatar tema, karakter utama di dalamnya, kepalanya menyembul keluar kotak.
  * Tema belum jadi tampil dengan label **"Segera!"** (tidak bisa dipilih).
  * Saat Borneo aktif: siluet hitam Dboy, Dgirl, Lontar berlabel **"Season 2"** (tidak bisa dimainkan), juga di jendela Pilih Karakter.
  * Dadu tetap dipilih di Pengaturan.
- Sapaan "Tabe Salamat Lingu Nalatai!" dan "Isen Mulang!" **sudah dicek Pak Toto (benar)**. Tema Es Krim: warna sapaan digelapkan agar terbaca.
- **Tentang**: "HaHe merupakan singkatan dari kata Handipe dan Hejan yang berarti Ular dan Tangga dalam bahasa Dayak Ngaju." lalu sapaan, sisanya sama seperti 1.1.
- **Tambah pemain**: layar tidak lagi melompat; tombol tetap di tempatnya.
- **Gaya Pengaturan diganti** agar beda dari Siapkan Permainan: layar penuh, warna tenang (biru keabuan), kartu putih.
- **Tombol Simpan dan Mulai Ulang selalu tampil** di Pengaturan:
  * Dari Beranda: **Simpan** (berlaku saat Main Baru) dan **Simpan & Mulai Ulang** (langsung main dengan pemain terakhir).
  * Saat bermain: **Simpan untuk Main Baru** dan **Terapkan & Mulai Ulang**.
  * Keluar Pengaturan dengan perubahan belum disimpan: muncul konfirmasi.
- **Backsound**: tempat per tema menerima format umum (mp3, ogg, m4a, aac, wav, webm, opus, flac). Backsound ditagih setelah semua tema jadi.
- **Pasang Aplikasi** diganti nama **Pasang HaHe**. Bila jendela pemasangan tidak muncul, tampil petunjuk lengkap (termasuk syarat uji di server lokal). Uji online belum dilakukan.

## Mockup
Lihat `docs/mockup/` (papan Hutan Borneo, HP potret, versi final: pion 3D, bingkai Dayak, dadu terlempar).
