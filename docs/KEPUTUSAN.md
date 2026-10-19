# HaHe: Keputusan Desain (final per 19 Okt 2026)

HaHe = singkatan dari **Handipe Hejan**, ular tangga dalam bahasa Dayak Ngaju.
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
- Pilih tema, dadu (bisa pakai dadu dari tema lain), pion.
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
- Status: **Tahap 1 sudah dibangun** (index.html, sw.js, manifest, icons/, audio/).
- **Tahap 1**: mesin game lengkap (semua mode, pengaturan, ukuran papan, level, nama pion, lawan komputer, kelompok, potret/landscape/IFP, efek suara, About, lanjutkan permainan, layar juara) + tema **Hutan Borneo** premium.
- **Tahap 2**: sembilan tema lain, 2-3 tema per sesi.

## 15. Daftar update berikutnya (disetujui, kode belum diubah)
Menunggu perintah "Update Kode".

1. **Pengaturan, aturan finis**: pilihan **Boleh melewati** atau **Harus pas (memantul)**.
   - Harus pas (memantul): lemparan lebih dari sisa kotak membuat pion mantul mundur (perilaku Tahap 1 sekarang).
   - Boleh melewati: lemparan lebih dari sisa kotak tetap dihitung sampai finis.
   - Pilihan bawaan: Harus pas (memantul), sama seperti sekarang (usulan, boleh diganti).
2. **Sebelum main, urutan pemain**: pilihan **Acak di awal** atau **Sesuai urutan data pemain**.
   - Sesuai urutan data pemain: urutan seperti diisi di layar Siapkan Permainan (perilaku Tahap 1 sekarang).
   - Acak di awal: urutan giliran diacak sekali saat permainan dimulai.
   - Pilihan bawaan: Sesuai urutan data pemain (usulan, boleh diganti).
- Bagian kode yang akan diubah: layar Siapkan Permainan (pilihan urutan), Pengaturan (pilihan aturan finis), dan logika gerak pion. Bagian lain tidak disentuh.

## Mockup
Lihat `docs/mockup/` (papan Hutan Borneo, HP potret, versi final: pion 3D, bingkai Dayak, dadu terlempar).
