import { createStore } from 'vuex'

export default createStore({
    state: {
        Navbar: {
            profileMenu: [
                { id: 2, title: "Sejarah", route: "/profil/sejarah" },
                { id: 1, title: "Visi Misi", route: "/profil/visi-misi" },
                { id: 1, title: "Tujuan", route: "/profil/tujuan" },
                { id: 3, title: "Target & Strategi", route: "/profil/target-strategi" },
                { id: 4, title: "Struktur Organisasi", route: "/profil/struktur_organisasi" },
                { id: 4, title: "Warga Madrasah", route: "/profil/warga-madrasah" },


            ],
            zonaMenu: [
                { id: 1, title: "Aktivitas Zona Integritas", route: "/zona/zona-integritas" },
                { id: 2, title: "Evidence Zona Integritas", route: "/zona/evidencezona" },
                { id: 3, title: "5 Nilai Budaya Kerja", route: "/zona/budaya-kerja" },
            ],
            layananMenu: [
                { id: 1, title: "PTSP Online", route: "/layanan/layanan-ptsp" },
                { id: 2, title: "Maklumat Standar Layanan", route: "/layanan/standar-layanan" },
            ],
            galeriMenu: [
                { id: 1, title: "Foto Peristiwa", route: "/galeri/peristiwa" },
                { id: 2, title: "Video", route: "/galeri/video" },
            ],

        },

        slides: [
            { image: "/background/bg1.png" },
            { image: "/background/bg2.png" },
            { image: "/background/bg3.png" },
            { image: "/background/bg4.png" },

        ],

        sambutan: {
            content: `<p style="text-align: justify; margin-bottom: 16px;">
            Assalamu’alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi sekolah kami. Website ini kami hadirkan sebagai media informasi dan komunikasi antara sekolah, siswa, orang tua, dan masyarakat. Melalui platform ini, kami ingin memperkenalkan berbagai program, kegiatan, dan prestasi sekolah dalam upaya menciptakan generasi yang cerdas, berkarakter, dan berdaya saing. 
            </p>
            
            <p style="text-align: justify; margin-bottom: 16px;">
            Kami berharap website ini dapat memberikan manfaat dan menjadi jembatan untuk terus membangun sinergi demi kemajuan pendidikan. Terima kasih atas dukungan dan kepercayaannya. Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>`,
        },

        layanan: [
            {
                title: "Konsultasi",
                description:
                    "Menyediakan layanan konsultasi untuk siswa terkait permasalahan sekolah, perilaku, dan bimbingan belajar.",
                icon: "fas fa-headset",
                link: "/layanan/konsultasi",
            },
            {
                title: "PPDB",
                description:
                    "Informasi dan panduan mengenai proses pendaftaran siswa baru ke sekolah.",
                icon: "fas fa-graduation-cap",
                link: "/layanan/ppdb",
            },
            {
                title: "Survey Layanan Publik",
                description:
                    "Media untuk mengukur tingkat kepuasan masyarakat terhadap layanan yang diberikan oleh sekolah atau instansi terkait.",
                icon: "fas fa-book-open-reader",
                link: "/layanan/survey",
            },
        ],
        berita: [
            {
                title: "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                description: "Bantul (MAN 4 Bantul) – MAN 4 Bantul Yogyakarta (Manembayo) mengadakan kegiatan Rihlah Tarbawiyah bagi siswa kelas 10. Tujuannya adalah agar siswa dapat berwisata sambil belajar. Melalui rapat antara panitia Rihlah",
                date: "08/16/2022",
                icon: "/berita/berita.png",
                content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba Bapak Ibu diadakan untuk memeriahkan hari kemerdekaan RI ke-77 di SMAN 1 Kedungreja.
                      Kegiatan ini meliputi lomba makan krupuk dan pertandingan voli antar guru dan staf sekolah.
                      Suasana sangat meriah dengan partisipasi dan semangat dari semua peserta.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Selasa, 16 Agustus 2022, para guru dan staf mengenakan seragam olahraga merah dan hitam, dengan semangat tinggi mengikuti setiap rangkaian kegiatan. Terlihat tawa dan sorakan memenuhi halaman sekolah saat peserta berusaha keras menghabiskan krupuk yang tergantung dan bertanding voli dengan semangat sportif. Kegiatan ini menjadi momen kebersamaan yang mempererat tali silaturahmi antar civitas sekolah sekaligus memperingati Hari Kemerdekaan Republik Indonesia dengan penuh sukacita.
                    </p>
                     
                     <p style="text-align: justify">
                    Panitia lomba pun memberikan hadiah simbolis berupa bingkisan kecil kepada para pemenang sebagai bentuk penghargaan. Momen ini ditutup dengan sesi foto bersama yang diiringi senyum puas dari seluruh peserta. Harapannya, kegiatan semacam ini dapat terus dilaksanakan setiap tahunnya sebagai bagian dari tradisi sekolah dalam memperingati hari-hari besar nasional.
                    </p>
                   
                    
                  `,
            },
            {
                title: "WORKSHOP PENDAMPINGAN IMPLEMENTASI PENILAIAN MADRASAH DAN PENERAPAN KURIKULUM MERDEKA",
                description: "Jelang Pembagian Raport, MAN 4 Bantul Gelar Rapat Koordinasi Matangkan Strategi Akhir Semester   Bantul (MAN 4 Bantul) — Dalam upaya memastikan kelancaran agenda",
                date: "08/16/2022",
                icon: "/berita/berita1.png",
                content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba pakaian daur ulang di SMAN 1 Kedungreja diselenggarakan sebagai bagian dari kampanye kesadaran lingkungan dan peningkatan kreativitas siswa. Kegiatan ini bertujuan untuk menanamkan nilai kepedulian terhadap sampah dan pentingnya pemanfaatan kembali barang bekas menjadi sesuatu yang bernilai guna. Para siswa diajak untuk berpikir kritis dan inovatif dalam mengubah limbah menjadi karya seni dalam bentuk busana.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Sebelum hari pelaksanaan, siswa diberi waktu untuk merancang dan membuat pakaian dari berbagai bahan bekas seperti plastik, kertas koran, kardus, hingga kantong kresek. Proses ini melibatkan kerja sama tim antar kelas serta bimbingan dari guru pendamping. Seluruh rancangan dikerjakan dengan penuh antusiasme dan ide-ide unik yang mencerminkan karakter serta pesan moral dari tiap kelompok.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Pada hari lomba, para peserta tampil percaya diri dalam parade busana daur ulang yang diselenggarakan di lapangan sekolah. Tiap siswa berjalan di "catwalk" sederhana yang telah disiapkan, sambil memperagakan pakaian hasil kreasi mereka. Sorak sorai dari siswa lainnya turut memeriahkan acara, menciptakan suasana kompetitif namun tetap menyenangkan. Dewan juri menilai dari aspek kreativitas, ketepatan tema, dan presentasi.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Melalui kegiatan ini, siswa tidak hanya belajar tentang pentingnya menjaga lingkungan, tetapi juga tentang nilai kerja keras, kolaborasi, dan keberanian tampil di depan umum. Harapannya, lomba ini dapat menjadi inspirasi bagi siswa untuk terus peduli terhadap isu lingkungan sekaligus mengasah kemampuan berpikir kreatif dalam menghadapi tantangan global masa depan.
                    </p>
                  `,
            },
            {
                title: "Pemandangan Roket Long March 5B Cina yang Jatuh Liar ke Bumi",
                description: "TEMPO.CO, Jakarta - Potongan besar roket bekas pakai milik Cina yang jatuh kembali ke Bumi pada Sabtu malam lalu memberi pemandangan memukau (kalau tidak mengerikan) saat menembus atmosfer. Bagian inti dari Roket Long March 5B",
                date: "08/16/2022",
                icon: "/berita/berita1.png",
                content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba pakaian daur ulang di SMAN 1 Kedungreja diselenggarakan sebagai bagian dari kampanye kesadaran lingkungan dan peningkatan kreativitas siswa. Kegiatan ini bertujuan untuk menanamkan nilai kepedulian terhadap sampah dan pentingnya pemanfaatan kembali barang bekas menjadi sesuatu yang bernilai guna. Para siswa diajak untuk berpikir kritis dan inovatif dalam mengubah limbah menjadi karya seni dalam bentuk busana.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Sebelum hari pelaksanaan, siswa diberi waktu untuk merancang dan membuat pakaian dari berbagai bahan bekas seperti plastik, kertas koran, kardus, hingga kantong kresek. Proses ini melibatkan kerja sama tim antar kelas serta bimbingan dari guru pendamping. Seluruh rancangan dikerjakan dengan penuh antusiasme dan ide-ide unik yang mencerminkan karakter serta pesan moral dari tiap kelompok.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Pada hari lomba, para peserta tampil percaya diri dalam parade busana daur ulang yang diselenggarakan di lapangan sekolah. Tiap siswa berjalan di "catwalk" sederhana yang telah disiapkan, sambil memperagakan pakaian hasil kreasi mereka. Sorak sorai dari siswa lainnya turut memeriahkan acara, menciptakan suasana kompetitif namun tetap menyenangkan. Dewan juri menilai dari aspek kreativitas, ketepatan tema, dan presentasi.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Melalui kegiatan ini, siswa tidak hanya belajar tentang pentingnya menjaga lingkungan, tetapi juga tentang nilai kerja keras, kolaborasi, dan keberanian tampil di depan umum. Harapannya, lomba ini dapat menjadi inspirasi bagi siswa untuk terus peduli terhadap isu lingkungan sekaligus mengasah kemampuan berpikir kreatif dalam menghadapi tantangan global masa depan.
                    </p>
                  `,
            },
            {
                title: "Pemandangan Roket Long March 5B Cina yang Jatuh Liar ke Bumi",
                description: "TEMPO.CO, Jakarta - Potongan besar roket bekas pakai milik Cina yang jatuh kembali ke Bumi pada Sabtu malam lalu memberi pemandangan memukau (kalau tidak mengerikan) saat menembus atmosfer. Bagian inti dari Roket Long March 5B",
                date: "08/16/2022",
                icon: "/berita/berita1.png",
                content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba pakaian daur ulang di SMAN 1 Kedungreja diselenggarakan sebagai bagian dari kampanye kesadaran lingkungan dan peningkatan kreativitas siswa. Kegiatan ini bertujuan untuk menanamkan nilai kepedulian terhadap sampah dan pentingnya pemanfaatan kembali barang bekas menjadi sesuatu yang bernilai guna. Para siswa diajak untuk berpikir kritis dan inovatif dalam mengubah limbah menjadi karya seni dalam bentuk busana.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Sebelum hari pelaksanaan, siswa diberi waktu untuk merancang dan membuat pakaian dari berbagai bahan bekas seperti plastik, kertas koran, kardus, hingga kantong kresek. Proses ini melibatkan kerja sama tim antar kelas serta bimbingan dari guru pendamping. Seluruh rancangan dikerjakan dengan penuh antusiasme dan ide-ide unik yang mencerminkan karakter serta pesan moral dari tiap kelompok.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Pada hari lomba, para peserta tampil percaya diri dalam parade busana daur ulang yang diselenggarakan di lapangan sekolah. Tiap siswa berjalan di "catwalk" sederhana yang telah disiapkan, sambil memperagakan pakaian hasil kreasi mereka. Sorak sorai dari siswa lainnya turut memeriahkan acara, menciptakan suasana kompetitif namun tetap menyenangkan. Dewan juri menilai dari aspek kreativitas, ketepatan tema, dan presentasi.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Melalui kegiatan ini, siswa tidak hanya belajar tentang pentingnya menjaga lingkungan, tetapi juga tentang nilai kerja keras, kolaborasi, dan keberanian tampil di depan umum. Harapannya, lomba ini dapat menjadi inspirasi bagi siswa untuk terus peduli terhadap isu lingkungan sekaligus mengasah kemampuan berpikir kreatif dalam menghadapi tantangan global masa depan.
                    </p>
                  `,
            },

        ],

        prestasi: [
            {
                title:
                    "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                image: "/prestasi/prestasi.png",
                description: "Keterangan Gambar : Prestasi Gemilang! Tim BRC MAN 4 Bantul Sabet Juara 3 Pekan Ilmiah Nasional",
                date: "08/16/2022",
                content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Bantul (MAN 4 Bantul) – Dalam ajang bergengsi Pekan Ilmiah Nasional (PILNAS) 2024, Tim BRC MAN 4 Bantul berhasil mengharumkan nama Madrasah. Dengan ide-ide inovatif tim ini berhasil meraih juara 3 tingkat nasional pada kategori umum, Selasa, (10/09/2024) yang diselenggarakan oleh forum PENA.
                        Prestasi ini merupakan buah dari kerja keras dan dedikasi tinggi seluruh anggota tim. Mereka telah melalui proses yang panjang dan melelahkan, namun semangat mereka tidak pernah padam. Bimbingan intensif dari guru pembimbing juga menjadi faktor penting dalam keberhasilan ini.

                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                   Kepala MAN 4 Bantul, Mucharom mengungkapkan rasa syukur dan bangganya atas prestasi yang diraih oleh Tim BRC. “Prestasi ini membuktikan bahwa siswa-siswi MAN 4 Bantul memiliki potensi yang sangat besar. Kami berharap prestasi ini dapat memotivasi siswa lainnya untuk terus berinovasi dan berkarya,” ujarnya.
                    Tim BRC yang beranggotakan Devia Amire, Indry Puspitasari, Karima Fahama, dan Nissaul Zahro mengaku bersyukur dan bangga atas torehan hasil dalam ajang PILNAS. Salah satu Tim BRC Devia Amire mengatakan bahwa, awalnya tidak yakin akan memperoleh kejuaraan ini, karena waktu yang terbatas dalam take video, namun dengan usaha tim akhirnya bisa terselesaikan,” kata Devia

                    </p>
                     <p style="text-align: justify">
                    Selanjutnya Devia mengungkapkan rasa terima kasih kepada semua pihak yang telah mendukung mereka. “Prestasi ini adalah kemenangan bersama. Kami berharap dapat menginspirasi siswa lainnya untuk terus berkontribusi bagi kemajuan MAN 4 Bantul,” ungkapnya.
                    Dalam kesempatan yang sama Muhammad Iqna selaku pembimbing sangat bangga atas torehan prestasi yang telah diraih oleh Tim BRC MAN 4 Bantul, semoga dapat menjadi inspirasi siswa lainnya.  (iqn/ica)
                    </p>
                   
                    
                  `,
            },

            {
                title:
                    "Prestasi Gemilang, MAN 4 Bantul Pimpin Daftar Lulusan SNBP Terbanyak Tingkat Madrasah di Bantul",
                image: "/prestasi/prestasi1.png",

            },
            {
                title:
                    "Latihan Keras Berbuah Manis, Fawzia Raih Juara 3 Kejurda Wushu DIY",
                image: "/prestasi/prestasi2.png",

            },
            {
                title:
                    "Latihan Keras Berbuah Manis, Fawzia Raih Juara 3 Kejurda Wushu DIY",
                image: "/prestasi/prestasi2.png",

            },
        ],

        sejarah: {
            sejarahDeskripsi: `
    Madrasah Aliyah Negeri (MAN) 4 Bantul berawal dari Pendidikan Guru Agama Latihan (PGAL) yang didirikan pada Oktober 1969 oleh Fakultas Tarbiyah IAIN Sunan Kalijaga Yogyakarta, berdasarkan SK Dekan No. 4/D/T/1969. Lembaga ini lahir dari Simposium Sekolah Latihan pada Mei 1968 yang membahas dasar, tujuan, dan organisasi pendidikan guru agama. Menyesuaikan kebijakan Departemen Agama untuk mengalihkan PGA swasta ke madrasah formal, maka pada tahun 1978 PGAL diubah menjadi Madrasah Tsanawiyah dan Madrasah Aliyah melalui piagam resmi dari Kanwil Departemen Agama DIY.

    Pada tahun 1983, berdasarkan SK Menteri Agama RI No. 115 Tahun 1982 dan No. 23 Tahun 1983, keduanya berubah status menjadi negeri dan diberi nama Madrasah Tsanawiyah Negeri dan Madrasah Aliyah Negeri Laboratorium Fakultas Tarbiyah IAIN Sunan Kalijaga Yogyakarta. Perkembangannya ditandai dengan peningkatan jumlah kelas, sarana prasarana, dan prestasi siswa baik di bidang akademik maupun non-akademik. Banyak siswa yang diterima di berbagai perguruan tinggi negeri dan swasta, serta aktif dalam kegiatan seperti Pramuka, PMR, KIR, seni, olahraga, dan lomba-lomba lainnya.

    Memasuki tahun 1990-an, madrasah mulai fokus pada pembinaan mutu akademik dan manajemen internal. Dengan jumlah siswa 2000-an, jumlah alumni terus meningkat hingga tahun 2005 dilakukan langkah strategis untuk mengelola institusi menjadi lebih modern dan berdaya saing.
  `

        },

        galeriCarousel: [
            {
                image: "/gallery/upacara.jpg",
                caption: "Upacara Bendera"
            },
            {
                image: "/gallery/pramuka.jpg",
                caption: "Kegiatan Pramuka"
            },
            {
                image: "/gallery/paskibra.jpg",
                caption: "Paskibra HUT RI"
            },
            {
                image: "/gallery/lomba.jpg",
                caption: "Lomba HUT RI"
            },
        ],
        staff: [
            {
                id: 1,
                name: "Mas Anis",
                role: "Kepala Sekolah",
                photo: "/guru/guru1.jpeg",
            },
            {
                id: 2,
                name: "Ibu Susi",
                role: "Wakil Kepala Sekolah",
                photo: "/guru/guru2.jpeg",
            },
            {
                id: 3,
                name: "Pak Budi",
                role: "Guru Matematika",
                photo: "/guru/guru3.jpg",
            },
            {
                id: 4,
                name: "Bu Rina",
                role: "Guru Bahasa Inggris",
                photo: "/guru/guru4.jpeg",
            },
        ],

        profileContent: {
            visiMisi: {
                title1: "Visi Kami",
                title2: "Misi Kami",
                image: "/logo.png",
                visi: `
                    <strong> “Prestasi Unggul Bermartabat“</strong>
                `,
                misi: [
                    "Menumbuhkan sikap percaya diri, santun, dan agamis",
                    "Meningkatkan kegiatan belajar mengajar yang efektif",
                    "Meningkatkan kualitas kegiatan ekstrakurikuler.",
                    "Meningkatkan sarana prasarana yang memadahi",

                ]
            },
            sejarah: {
                title: "Sejarah Singkat",
                image: "/bg.png",
                description:
                    `
                  <p style="text-align: justify; margin-bottom: 19px;">
                    SMA Negeri 1 Kedungreja berdiri Tahun 1996 yang merupakan filial SMA Negeri 1 Sidareja<br>
                    yang bertempat di SD Tambaksari 01 sambil menunggu pembangunan Gedung Baru. <br>
                    Pada tahun 1997 Gedung sudah selesai dan pindah menempati Gedung baru.
                    </p>`,


                kepalaSekolah: [
                    { name: "Drs. Tuslam", nip: "2025", foto: "/guru/guru8.jpg" },
                    { name: "Drs. Alip Suwarno", nip: "2020", foto: "/guru/guru6.jpg" },
                    { name: "Drs. Rachman Widodo", nip: "2015", foto: "/guru/guru5.jpg" },
                    { name: "Drs. Alip Suwarno", nip: "2010", foto: "/guru/guru4.jpeg" },

                ],

            },

            kepala_sekolah: {
                NUPTK: "4734747648200002",
                NO_KTP: "3301010204690003",
                NAMA: "AKHMAD BASIR",
                GELAR_DEPAN: "Drs.",
                GELAR_BLKNG: "",
                TEMPAT_LAHIR: "CILACAP",
                TGL_LAHIR: "2 APRIL 1969",
                JENIS_KELAMIN: "LAKI-LAKI",
                RT_RUMAH: "RT 1",
                RW_RUMAH: "RW 3",
                DESA_KELURAHAN_RUMAH: "Tambaksari",
                KECAMATAN_RUMAH: "Kedungreja",
                KABUPATEN_KOTA_RUMAH: "KABUPATEN CILACAP",
                PROVINSI_RUMAH: "PROVINSI JAWA TENGAH",
                KODE_POS_RUMAH: "53263",
                AGAMA: "ISLAM",
                STATUS_KAWIN: "KAWIN",
                NO_HP_PRIBADI: "+62 813-2809-4979",
                EMAIL_PRIBADI: "",
                NAMA_IBU_KANDUNG: "",
                PENDIDIKAN_TERAKHIR: "",
                TGL_LULUS_PENDIDIKAN_TERAKHIR: "",
                JURUSAN_PENDIDIKAN_TERAKHIR: "",
                LEMBAGA_PENDIDIKAN_TERAKHIR: "",
                TGL_LULUS_PENDIDIKAN_S1_DIV: "",
                JURUSAN_PENDIDIKAN_S1_DIV: "",
            },

            programKerja: {
                title: "Program Kerja",
                content:
                    "Pada Tahun Pelajaran 2015/2016, SMA Negeri 1 Kedungreja menetapkan tujuan sekolah untuk 4 (empat) tahun ke depan, yaitu:",
                list: [
                    "Memberi arahan dan landasan kerja semua personal sekolah.",
                    "Memberi dorongan kepada semua warga sekolah untuk pelaksanaan kerja yang lebih baik dalam rangka peningkatan profesionalisme.",
                    "Menunjang Kurikulum Tingkat satuan Poendidikan (KTSP) untuk mencapai tujuan pendidikan nasional, khususnya tujuan SMA.",
                    "Menetapkan kegiatan – kegiatan yang paling relevan dengan tujuan yang ditetapkan.",
                    "Menjadi tolak ukur keberhasilan pelaksanaan program.",
                ],
                image: "/logo.png",
            },

            saranaPrasaranaItem: [
                {
                    title: "Ruang Kelas",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/ruangkelas.png",

                },

                {
                    title: "Laboratorium Kimia",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 1 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/laboratorium.png",

                },
                {
                    title: "Laboratorium Bahasa",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 1 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/bahasa.png",

                },
                {
                    title: "Laboratorium Komputer",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 1 </p>
                        <p>laboratorium komputer, yang digunakan untuk .</p>
                        <p>kegiatan belajar mengajar</p>`,
                    image: "/saradanprana/komputerlab.png",

                },
                {
                    title: "Ruang Perpustakaan",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 1 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/perpus.png",

                },
                {
                    title: "Ruang Guru",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 1 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/ruangguru.png",

                },
                {
                    title: "Ruang Kepala Sekolah",
                    description: `
                        <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                        <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                        <p>belajar mengajar</p>`,
                    image: "/saradanprana/ruangkepala.png",

                },
            ],
            saranaPrasaranaContent: {
                sarana_prasarana: {
                    NPSN: "20300733",
                    Status: "Negeri",
                    "Bentuk Pendidikan": "SMA",
                    "Status Kepemilikan": "Pemerintah Daerah",
                    "SK Pendirian Sekolah": "13a/0/1998",
                    "Tanggal SK Pendirian": "1998-01-29",
                    "SK Izin Operasional": "13a/O/1998",
                    "Tanggal SK Izin Operasional": "1998-01-29",
                    "Kebutuhan Khusus Dilayani": "K - Kesulitan Belajar",
                    "Nama Bank": "BRI",
                    "Cabang KCP/Unit": "6790 Unit Tambaksari Majenang",
                    "Rekening Atas Nama": "SMA NEGERI 1 KEDUNGREJA",
                    "Luas Tanah Milik": "15420",
                    "Luas Tanah Bukan Milik": "0",
                    "Status BOS": "Bersedia Menerima",
                    "Waktu Penyelenggaraan": "Pagi",
                    "Sertifikasi ISO": "Belum Bersertifikat",
                    "Sumber Listrik": "PLN",
                    "Daya Listrik": "9000",
                    "Akses Internet": "Ada",
                    "Internet Service Provider": "Telkom",
                },
                data_ptk_pd: [
                    { uraian: "Guru", laki_laki: 22, perempuan: 13, total: 35 },
                    { uraian: "Jumlah PTK (Guru & Pegawai)", laki_laki: 3, perempuan: 2, total: 5 },
                    { uraian: "Pegawai", laki_laki: 25, perempuan: 15, total: 40 },
                    { uraian: "Peserta Didik", laki_laki: 157, perempuan: 450, total: 607 },
                ],
                data_sarpras: [
                    { uraian: "Jumlah", ruang_kelas: 19, ruang_lab: 6, ruang_perpus: 1, total: 26 },
                ],
                data_rombel: [
                    {
                        uraian: "Jumlah",
                        kelas_10: { laki_laki: 68, perempuan: 153, total: 221 },
                        kelas_11: { laki_laki: 39, perempuan: 144, total: 183 },
                        kelas_12: { laki_laki: 50, perempuan: 153, total: 203 },
                    },
                ],
                daftar_ruang: [
                    { no: 1, nama: "Ruang Teori/Kelas", jumlah: 20, luas: 936 },
                    { no: 2, nama: "Laboratorium IPA", jumlah: 1, luas: 120 },
                    { no: 3, nama: "Laboratorium Kimia", jumlah: 1, luas: 120 },
                    { no: 4, nama: "Laboratorium Fisika", jumlah: "", luas: "" },
                    { no: 5, nama: "Laboratorium Biologi", jumlah: "", luas: "" },
                    { no: 6, nama: "Laboratorium Bahasa", jumlah: 1, luas: 60 },
                    { no: 7, nama: "Laboratorium IPS", jumlah: "", luas: "" },
                    { no: 8, nama: "Laboratorium Komputer", jumlah: 1, luas: 60 },
                    { no: 9, nama: "Laboratorium Multimedia", jumlah: "", luas: "" },
                    { no: 10, nama: "Ruang Perpustakaan", jumlah: 1, luas: 120 },
                    { no: 11, nama: "Ruang Keterampilan", jumlah: "", luas: "" },
                    { no: 12, nama: "Ruang Serba Guna", jumlah: "", luas: "" },
                    { no: 13, nama: "Ruang UKS", jumlah: 1, luas: 9 },
                    { no: 14, nama: "Ruang Praktik Kerja", jumlah: "", luas: "" },
                    { no: 15, nama: "Bengkel", jumlah: "", luas: "" },
                    { no: 16, nama: "Ruang Diesel", jumlah: "", luas: "" },
                    { no: 17, nama: "Ruang Pameran", jumlah: "", luas: "" },
                    { no: 18, nama: "Ruang Gambar", jumlah: "", luas: "" },
                    { no: 19, nama: "Koperasi/Toko", jumlah: 1, luas: 8 },
                    { no: 20, nama: "Ruang BP/BK", jumlah: 1, luas: 8 },
                    { no: 21, nama: "Ruang Kepala Sekolah", jumlah: 1, luas: 26 },
                    { no: 22, nama: "Ruang Guru", jumlah: 1, luas: 64 },
                    { no: 23, nama: "Ruang TU", jumlah: 1, luas: 36 },
                    { no: 24, nama: "Ruang OSIS", jumlah: 1, luas: 8 },
                    { no: 25, nama: "Kamar Mandi/WC Guru", jumlah: 1, luas: 8 },
                    { no: 26, nama: "Kamar Mandi/WC Siswa", jumlah: 8, luas: 24 },
                    { no: 27, nama: "Gudang", jumlah: 2, luas: 94 },
                    { no: 28, nama: "Ruang Ibadah", jumlah: 1, luas: 72 },
                    { no: 29, nama: "Rumah Dinas Kepala Sekolah", jumlah: "", luas: "" },
                    { no: 30, nama: "Rumah Dinas Guru", jumlah: "", luas: "" },
                    { no: 31, nama: "Ruang Penjaga Sekolah", jumlah: "", luas: "" },
                    { no: 32, nama: "Sanggar MGMP", jumlah: "", luas: "" },
                    { no: 33, nama: "Sanggar PKG", jumlah: "", luas: "" },
                    { no: 34, nama: "Asrama Siswa", jumlah: "", luas: "" },
                    { no: 35, nama: "Unit Produksi", jumlah: "", luas: "" },
                    { no: 36, nama: "Ruang Multimedia", jumlah: "", luas: "" },
                    { no: 37, nama: "Ruang Pusat Belajar Guru/Olahraga", jumlah: "", luas: "" },
                ],
            },
        },
        guruContent: {
            direktoriGuru: [
                {
                    id: "1",
                    category: "Guru",
                    name: "Drs. AHMAD BASIR",
                    details: "19690402 199802 1 001",
                    image: "/guru/KepalaSekolah.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Pembina Tingkat I / IV.b",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "2",
                    category: "Guru",
                    name: "SUMIRAH, S.P., M.Pd.",
                    details: "19710802 200801 2 012",
                    image: "/guru/Bendahara.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Bendahara Gaji",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "3",
                    category: "Guru",
                    name: "SUPARMIN, S.Pd.",
                    details: "19670407 199702 2 001",
                    image: "/guru/BK.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Guru BK",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "4",
                    category: "Guru",
                    name: "TAOFIK YULIANTO, S.Pd.",
                    details: "19680914",
                    image: "/guru/PBB.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Pembina PBB",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "5",
                    category: "Guru",
                    name: "TASIMAN, S.Pd., M.Pd.",
                    details: "19771229 200701 1 001",
                    image: "/guru/perpustakaan.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Kepala Perpustakaan",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "6",
                    category: "Guru",
                    name: "	WARISNO, S.Pd.",
                    details: "19781219 200401 1 002",
                    image: "/guru/pkn.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Guru PPKN",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "7",
                    category: "Guru",
                    name: "DEDI IDAYANTO, S.Kom.",
                    details: "19781219 200401 1 002",
                    image: "/guru/tik.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Guru TIK",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "8",
                    category: "Guru",
                    name: "	Drs. MIFTAHUL MUNIR",
                    details: "19781219 200401 1 002",
                    image: "/guru/pai.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Wali Kelas Guru PAI",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "9",
                    category: "TU",
                    name: "ELINA MEI TRIHARYANI, S.P.",
                    details: "19781219 200401 1 002",
                    image: "/guru/kepalaTu.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Kepala TU",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "10",
                    category: "TU",
                    name: "Asminah",
                    details: "19781219 200401 1 002",
                    image: "/guru/bendaharaops.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Bendahara Operasional",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "11",
                    category: "TU",
                    name: "EKO SAPUTRA",
                    details: "19781219 200401 1 002",
                    image: "/guru/satpam.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Satpam",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "12",
                    category: "TU",
                    name: "	SUTRISNO",
                    details: "19781219 200401 1 002",
                    image: "/guru/teknisi.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Teknisi Dan Mekanik Sekolah",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "13",
                    category: "TU",
                    name: "NASIKHUN",
                    details: "19781219 200401 1 002",
                    image: "/guru/cleaning service.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Cleaning Service",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "14",
                    category: "TU",
                    name: "WAHYU SUKMAJATI, S.Pd.",
                    details: "19781219 200401 1 002",
                    image: "/guru/arsip.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Arsip Persuratan",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "15",
                    category: "TU",
                    name: "	SIGIT SETIADI",
                    details: "19781219 200401 1 002",
                    image: "/guru/kesiswaan.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "Tenaga Adm.Kesiswaan",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },
                {
                    id: "16",
                    category: "TU",
                    name: "BASIRUN, S.IP.",
                    details: "19781219 200401 1 002",
                    image: "/guru/keuangan.jpg",
                    nuptk: "4734747642800002",
                    gender: "Laki-laki",
                    birthPlace: "Cilacap",
                    birthDate: "04-02-1969",
                    jabatan: "	Perpustakaan, Ops Keuangan",
                    address: "Desa Tambaksari Kec. Kedungreja",
                },

            ],
            kalender: {
                title: "Kalender Akademik",

            },
        },

        direktoriSiswa: [
            {
                id: "1",
                category: "IPA",
                name: "	DANI AGUNG HERDIANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa1.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "2",
                category: "IPA",
                name: "ALFIN NUR ROHIM",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa2.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "3",
                category: "IPA",
                name: "DEA NABILA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa3.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "4",
                category: "IPA",
                name: "HEGI KRISNA SUGARA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa4.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "5",
                category: "IPA",
                name: "SADAM ARDIANSYAH",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa5.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "6",
                category: "IPA",
                name: "ADIMAS PRADANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa6.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "7",
                category: "IPA",
                name: "	DANI AGUNG HERDIANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa7.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "8",
                category: "IPA",
                name: "PUTRI NURUL HAYATI",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa8.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "9",
                category: "IPS",
                name: "DINDA NURUL FADILAH",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa9.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "11 IPS 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "10",
                category: "IPS",
                name: " AGUNG HERDIANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa10.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 IPS 3",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "11",
                category: "IPS",
                name: "HELENA NURUL FADILAH",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa11.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 IPS 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "12",
                category: "IPS",
                name: "	AURELIA  FADLAH",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa12.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "12 IPS 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "13",
                category: "IPS",
                name: "JULIANA ",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa14.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "11 IPS 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "14",
                category: "IPS",
                name: "MIRANDA NURUL ",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa8.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 IPS 2",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "15",
                category: "IPS",
                name: "FAIZ MARZUKI",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa4.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 IPS 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "16",
                category: "IPS",
                name: "	HERDIAN",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa6.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 IPS 2",
                address: "Desa Tambaksari Kec. Kedungreja",
            },

        ],
        direktoriSiswaAlumni: [
            {
                id: "1",
                category: "IPA",
                name: "	DANI AGUNG HERDIANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa1.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "2",
                category: "IPA",
                name: "ALFIN NUR ROHIM",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa2.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "3",
                category: "IPA",
                name: "DEA NABILA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa3.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "4",
                category: "IPA",
                name: "HEGI KRISNA SUGARA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa4.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "5",
                category: "IPA",
                name: "SADAM ARDIANSYAH",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa5.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "6",
                category: "IPA",
                name: "ADIMAS PRADANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa6.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "7",
                category: "IPA",
                name: "	DANI AGUNG HERDIANA",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa7.jpg",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "8",
                category: "IPA",
                name: "PUTRI NURUL HAYATI",
                nis: "19690402 199802 1 001",
                image: "/siswa/siswa8.jpg",
                gender: "Perempuan",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                agama: "Islam",
                kelas: "10 MIPA 1",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
        ],


        ekstrakurikuler: [
            {
                nama: "Pramuka",
                jadwal: "Jumat 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "PMR",
                jadwal: "Kamis 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Rohis",
                jadwal: "Selasa 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Repala",
                jadwal: "Senin 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Futsal",
                jadwal: "Rabu 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Volly",
                jadwal: "Senin 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Badminton",
                jadwal: "Kamis 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
            {
                nama: "Taekwondo",
                jadwal: "Rabu 15:00 - 17:00",
                kontak: "Ari Wibowo, S.Pd",
                telepon: "08123456789",
            },
        ],


        Informasi: {
            agenda: [
                {
                    date: '2025-06-12',
                    events: [
                        "Pentas Seni dan Lomba futsal kelas 12 A & B Pukul 11 Siang (siswa berkumpul di AULA)",
                        "Rapat Osis bersama pak Hidayat kurniawan"
                    ]
                },
                {
                    date: '2025-07-21',
                    events: [
                        "Lomba menyanyi untuk kelas 11 A & B Pukul 11 siang (siswa berkumpul di ruang musik)",
                        "Rapat Guru dan yayasan"
                    ]
                },
                {
                    date: '2025-07-22',
                    events: [
                        "Sekolah bersih diadakan kerja bakti siswa pukul 12 siang (seluruh siswa mengikuti)",
                        "Workshop dan penyuluhan mengenai HIV AIDS dari dinas kesehatan"
                    ]
                },
                {
                    date: '2025-07-23',
                    events: [
                        "Pembagian makan siang gratis dari dinas pendidikan"
                    ]
                },
                {
                    date: '2025-07-24',
                    events: [
                        "Pembagian makan siang gratis dari dinas pendidikan"
                    ]
                },
                {
                    date: '2025-06-09',
                    events: [
                        "Pentas Seni dan Lomba Futsal kelas 12 A & B Pukul 11 Siang (siswa berkumpul di AULA)",
                        "Rapat Osis bersama pak Hidayat kurniawan"
                    ]
                }
            ],



        },

        videos: [
            {
                id: 1,
                title: "Selamat Hari Guru 2017 SMANKER Jaya",
                date: "07-03-2025",
                thumbnail: "/video4.png",
                videoUrl: "https://www.youtube.com/watch?v=OaNdJqPCegA&t=1s",
            },
            {
                id: 2,
                title: "Upacara Peringatan Hari Guru",
                date: "07-03-2025",
                thumbnail: "/video1.png",
                videoUrl: "https://www.youtube.com/embed/jFvncZ6YKGs",
            },
            {
                id: 3,
                title: "Sarpras SMAN 1 Kedungreja ",
                date: "07-03-2025",
                thumbnail: "/video2.png",
                videoUrl: "https://youtu.be/kcIL1iR1FL4",
            },
            {
                id: 4,
                title: "Profil SMAN 1 KEDUNGREJA",
                date: "07-03-2025",
                thumbnail: "/video3.png",
                videoUrl: "https://youtu.be/M3My0S9h__U",
            },

        ],
        albums: [
            {
                id: 1,
                date: "08/16/2022",
                title: "Galeri 2022",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 2,
                date: "08/16/2022",
                title: "Twibbon",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 3,
                date: "08/16/2022",
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 4,
                date: "08/16/2022",
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 8,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg", "/news1.png", "/news2.jpg", "/news3.jpg"],
            },

        ]

    },



    getters: {
        getNavbarMenus: (state) => state.Navbar,
        getLayanan: (state) => state.layanan,
        getBerita: (state) => state.berita,
        getArtikel: (state) => state.artikel,
        getPrestasi: (state) => state.prestasi,
        getSejarahDeskripsi: (state) => state.sejarah.sejarahDeskripsi,
        getGaleriCarousel: (state) => state.galeriCarousel,
        getSlides: (state) => state.slides,
        getProfileContent: (state) => state.profileContent,
        getKalenderAkademik: (state) => state.guruContent.kalender,
        getDirektoriGuru: (state) => state.guruContent.direktoriGuru,
        getGuruById: (state) => (id) => {
            return state.guruContent.direktoriGuru.find((guru) => guru.id === id);
        },
        getAlbums: (state) => state.albums,
        getAlbumById: (state) => (id) => state.albums.find((album) => album.id === id),
        getVideos: (state) => state.videos,
        getVideoById: (state) => (id) => state.videos.find((video) => video.id === id),

        getAgenda: (state) => state.Informasi.agenda,

        getInformasiSekolah: (state) => state.Informasi,
        getSiswaById: (state) => (id) => {
            return state.direktoriSiswa.find((siswa) => siswa.id === id);
        },
        getDirektoriSiswa: (state) => state.direktoriSiswa,

        getSiswaAlumniById: (state) => (id) => {
            return state.direktoriSiswaAlumni.find((siswa) => siswa.id === id);
        },
        getDirektoriSiswaAlumni: (state) => state.direktoriSiswaAlumni,
        getSambutan: state => state.sambutan,
        getEkstrakurikuler: state => state.ekstrakurikuler,


    },
});
