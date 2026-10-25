# HaHe

**HaHe** = singkatan dari kata *Handipe* dan *Hejan*, yang berarti Ular dan Tangga dalam bahasa Dayak Ngaju.
Game santai untuk bermain bersama keluarga, teman, sahabat, pasangan, dan siapa pun.

Main di: **hahe.totogutomo.com**

## Fitur (Versi 2.4)
- Ular tangga untuk 1 sampai beberapa pemain; 1 pemain berarti melawan komputer (karakter komputer acak dan bisa diganti).
- Tujuh tema (Hutan Borneo punya 5 karakter aktif: Ksatria Talawang terkunci sampai 2 kali main dan MPA terkunci sampai 1 kali main sampai selesai; Hutan Borneo juga berkabut asap, dengan tombol "Padamkan Karhutla"): Hutan Borneo, Luar Angkasa, Es Krim, Negeri Salju, Kebun Ceria, Bawah Laut, Negeri Dongeng (pilih tema di Beranda; tema yang sudah jadi di kiri, yang belum di kanan dengan label "Season 2": Bajak Laut dan Dinosaurus). Negeri Dongeng punya Putri Mawar dan dua siluet Princess Season 2, dan **terkunci**: terbuka setelah Hutan Borneo dimainkan sampai selesai 5 kali.
- **Mode Edukasi**: kotak **[?]** muncul acak (Sedikit 15%, Sedang 25%, Banyak 40%), berisi soal Mengeja, Menghitung (tambah, kurang, kali, bagi; satuan sampai ribuan), Tebak Kata (Indonesia/English), dan Tantangan aktivitas. Jawaban benar berarti lempar dadu lagi. Tidak aktif saat melawan komputer.
- **Album Karakter** (ikon di kanan atas Beranda): semua karakter per tema tampil; fakta singkat terbaca setelah karakter terbuka, tab **Dadu** memuat semua dadu beserta keterangannya. Karakter urutan ke-3 dan ke-4 tiap tema (kecuali Hutan Borneo) terkunci (redup + gembok, juga di Beranda) dan terbuka setelah 5 dan 10 kali main sampai selesai; ketuk karakter di Beranda untuk melihatnya di Album. Progres bisa disimpan dan dimuat lewat berkas.
- **Pilih dadu** di Siapkan Permainan (gambar dadu bisa digeser). **Dadu Ajaib** khusus Negeri Dongeng: tiap lemparan 25% bonus langkah (+1 sampai +3), 20% lemparan ekstra.
- Efek suara dan backsound langsung terdengar saat volume digeser atau dinyalakan.
- **Mode Cepat** (menu pertama di Siapkan Permainan): pilih jumlah pemain dan centang Mode Edukasi; papan 8x8, Klasik, tema acak.
- Nama pemain bawaan P1, P2, dan seterusnya; bisa diganti di Pengaturan saat bermain.
- Layar penuh otomatis saat bermain; tombol Layar Penuh ada di Beranda.
- Bisa dipasang di HP/IFP (tombol "Pasang HaHe" di Beranda) dan dimainkan tanpa internet. Setelah dipasang, HaHe langsung layar penuh dari ikon (tanpa tombol).

## Isi repo
- `index.html`: game lengkap (satu berkas).
- `sw.js`, `manifest.webmanifest`, `icons/`: pasang aplikasi dan main tanpa internet.
- `audio/`: tempat backsound per tema (lihat `audio/README.md`).
- `docs/KEPUTUSAN.md`: keputusan desain final.
- `docs/SERAH-TERIMA.md`: prompt serah terima untuk sesi berikutnya.
- `docs/mockup/`: mockup papan tema Hutan Borneo (HP potret).
- `docs/uji/hahe-album-semua-karakter.json`: berkas uji, muat lewat Album > Muat progres untuk membuka semua tema, karakter, dan dadu.

## Status dan rencana
- Versi 2.4 terkirim; perlu diuji di HP dan IFP (ikon dan pemasangan diuji ulang di hahe.totogutomo.com setelah deploy).
- Berikutnya: tema 3D Bajak Laut dan Dinosaurus (Season 2), lalu Musim kedua Borneo.
- Backsound per tema menyusul setelah semua tema jadi (kredit ditulis di Tentang).

HaHe ©2026 | hahe.totogutomo.com
