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
                { id: 1, title: "Aktivitas Zona Integritas", route: "/zona/integritas" },
                { id: 2, title: "Evidence Zona Integritas", route: "/zona/evidencezona" },
                { id: 3, title: "5 Nilai Budaya Kerja", route: "/zona/budaya-kerja" },
            ],
            layananMenu: [
                { id: 1, title: "PTSP Online", route: "https://ptsponline.man4bantul.sch.id/" },
                { id: 2, title: "Maklumat Standar Layanan", route: "/layanan" },
            ],
            galeriMenu: [
                { id: 1, title: "Foto Peristiwa", route: "/galeri/foto_peristiwa" },
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
                link: "https://wa.wizard.id/",
            },
            {
                title: "PPDB",
                description:
                    "Informasi dan panduan mengenai proses pendaftaran siswa baru ke sekolah.",
                icon: "fas fa-graduation-cap",
                link: "http://ppdb.man4bantul.sch.id/",
            },
            {
                title: "Survey Layanan Publik",
                description:
                    "Media untuk mengukur tingkat kepuasan masyarakat terhadap layanan yang diberikan oleh sekolah atau instansi terkait.",
                icon: "fas fa-book-open-reader",
                link: "https://skm.man4bantul.sch.id/",
            },
        ],
        berita: [
            {
                title: "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                description: "Bantul (MAN 4 Bantul) – MAN 4 Bantul Yogyakarta (Manembayo) mengadakan kegiatan Rihlah Tarbawiyah bagi siswa kelas 10. Tujuannya adalah agar siswa dapat berwisata sambil belajar. Melalui rapat antara panitia Rihlah",
                date: "08/16/2025",
                icon: "/berita/berita.png",
                category: "media",
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
                date: "08/16/2025",
                icon: "/berita/berita1.png",
                category: "kemenag",
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
                title: "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                description: "Bantul (MAN 4 Bantul) – MAN 4 Bantul Yogyakarta (Manembayo) mengadakan kegiatan Rihlah Tarbawiyah bagi siswa kelas 10. Tujuannya adalah agar siswa dapat berwisata sambil belajar. Melalui rapat antara panitia Rihlah",
                date: "08/16/2025",
                icon: "/berita/berita.png",
                category: "media",
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
                title: "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                description: "Bantul (MAN 4 Bantul) – MAN 4 Bantul Yogyakarta (Manembayo) mengadakan kegiatan Rihlah Tarbawiyah bagi siswa kelas 10. Tujuannya adalah agar siswa dapat berwisata sambil belajar. Melalui rapat antara panitia Rihlah",
                date: "08/16/2022",
                icon: "/berita/berita.png",
                category: "daerah",
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
                category: "daerah",
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
                category: "islam",
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

        profileContent: {
            prestasi: [
                {
                    title:
                        "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                    image: "/prestasi/prestasi1.jpeg",
                    description: "Keterangan Gambar : Prestasi Gemilang! Tim BRC MAN 4 Bantul Sabet Juara 3 Pekan Ilmiah Nasional",
                    date: "08/16/2025",
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
                        "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                    image: "/prestasi/prestasi2.jpeg",
                    description: "Keterangan Gambar : Prestasi Gemilang! Tim BRC MAN 4 Bantul Sabet Juara 3 Pekan Ilmiah Nasional",
                    date: "08/16/2025",
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
                        "MAN 4 Bantul Syaratkan Siswanya Membuat Proposal Penelitian Saat Mengikuti Rihlah Tarbawiyah",
                    image: "/prestasi/prestasi3.jpeg",
                    description: "Keterangan Gambar : Prestasi Gemilang! Tim BRC MAN 4 Bantul Sabet Juara 3 Pekan Ilmiah Nasional",
                    date: "08/16/2025",
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
                        "Prestasi Membanggakan, Dua Tim BRC MAN 4 Bantul Raih Juara LKIRN UNTIDAR 2024",
                    image: "/prestasi/prestasi4.jpeg",
                    description: "Keterangan Gambar : Prestasi Gemilang! Tim BRC MAN 4 Bantul Sabet Juara 3 Pekan Ilmiah Nasional",
                    date: "08/16/2025",
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
                        "Tim Pencak Silat MANEMBAYO Torehkan Prestasi Kejurnas Sukoharjo 2024",
                    image: "/prestasi/prestasi5.jpeg",
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
                        "Prestasi Membanggakan, Siswa MAN 4 Bantul Raih Kejuaraan OBA Nasional 2024",
                    image: "/prestasi/prestasi6.jpeg",
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
                        "MAN 4 Bantul Torehkan Prestasi di Kejurda PERPANI DIY 2023",
                    image: "/prestasi/prestasi7.jpeg",
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
            ],
            sejarah: {
                sejarahDeskripsi: `
                Madrasah Aliyah Negeri (MAN) 4 Bantul berawal dari Pendidikan Guru Agama Latihan (PGAL) yang didirikan pada Oktober 1969 oleh Fakultas Tarbiyah IAIN Sunan Kalijaga Yogyakarta, berdasarkan SK Dekan No. 4/D/T/1969. Lembaga ini lahir dari Simposium Sekolah Latihan pada Mei 1968 yang membahas dasar, tujuan, dan organisasi pendidikan guru agama. Menyesuaikan kebijakan Departemen Agama untuk mengalihkan PGA swasta ke madrasah formal, maka pada tahun 1978 PGAL diubah menjadi Madrasah Tsanawiyah dan Madrasah Aliyah melalui piagam resmi dari Kanwil Departemen Agama DIY.

                Pada tahun 1983, berdasarkan SK Menteri Agama RI No. 115 Tahun 1982 dan No. 23 Tahun 1983, keduanya berubah status menjadi negeri dan diberi nama Madrasah Tsanawiyah Negeri dan Madrasah Aliyah Negeri Laboratorium Fakultas Tarbiyah IAIN Sunan Kalijaga Yogyakarta. Perkembangannya ditandai dengan peningkatan jumlah kelas, sarana prasarana, dan prestasi siswa baik di bidang akademik maupun non-akademik. Banyak siswa yang diterima di berbagai perguruan tinggi negeri dan swasta, serta aktif dalam kegiatan seperti Pramuka, PMR, KIR, seni, olahraga, dan lomba-lomba lainnya.

                Memasuki tahun 1990-an, madrasah mulai fokus pada pembinaan mutu akademik dan manajemen internal. Dengan jumlah siswa 2000-an, jumlah alumni terus meningkat hingga tahun 2005 dilakukan langkah strategis untuk mengelola institusi menjadi lebih modern dan berdaya saing.
            `
            },
            visiMisi: {
                title1: "Visi Madrasah",
                visi: `
            <p class="mb-4 text-justify">
                Visi adalah wawasan yang menjadi sumber arahan bagi madrasah dan digunakan untuk memandu perumusan misi madrasah. 
                Dengan kata lain, visi adalah pandangan jauh ke depan ke mana madrasah akan dibawa. 
                Visi adalah gambaran masa depan yang diinginkan oleh madrasah agar madrasah yang bersangkutan dapat menjamin kelangsungan hidup dan perkembangannya.
            </p>

            <p class="mb-4 text-justify font-medium">Indikator Visi dapat diuraikan sebagai berikut:</p>

            <div class="grid grid-cols-2 md:grid-cols-2 gap-8">
                <ol class="list-decimal list-inside space-y-2 text-gray-800">
                <li>
                    Islami
                    <ul class="list-disc list-inside ml-5">
                    <li>Islami tutur kata</li>
                    <li>Islami pakaian</li>
                    <li>Islami dalam perilaku</li>
                    <li>Islami dalam pergaulan</li>
                    </ul>
                </li>
                <li >
                    Inovatif
                    <ul class="list-disc list-inside ml-4">
                    <li>Inovasi pengembangan SDM</li>
                    <li>Inovasi dalam pembelajaran</li>
                    <li>Inovasi dalam pelayanan peserta didik</li>
                    <li>Inovasi dalam pengembangan prestasi riset</li>
                    <li>Inovasi dalam prestasi non akademik</li>
                    </ul>
                </li>
                </ol>

                <ol start="3" class="list-decimal list-inside space-y-4 text-gray-800">
                <li>
                    Moderat
                    <ul class="list-disc list-inside ml-5">
                    <li>Moderasi dalam komitmen kebangsaan</li>
                    <li>Anti kekerasan</li>
                    <li>Toleransi dalam pergaulan</li>
                    <li>Akomodatif terhadap budaya lokal</li>
                    </ul>
                </li>
                <li>
                    Berwawasan Global
                    <ul class="list-disc list-inside ml-5">
                    <li>Mampu menggunakan sains-teknologi dengan bijak</li>
                    <li>Menciptakan lulusan yang bermanfaat bagi masyarakat</li>
                    <li>Mengembangkan budaya dan wawasan global</li>
        
                    </ul>
                </li>
                </ol>
            </div>
            `,
                title2: "Misi Madrasah",
                misi: [
                    "Sebagai pijakan dalam merumuskan tujuan",
                    "Sebagai tindakan nyata untuk mewujudkan visi",
                    "Merupakan bentuk komitmen dari pihak-pihak yang berkepentingan",
                    "Sebagai alat untuk mengarahkan perumusan strategi dan pelaksanaan"
                ],
            },
            tujuan: {
                title: "Tujuan Madrasah",
                tujuanUmum: `
                            Menghasilkan manusia yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, 
                            yang berbudi luhur, berkepribadian, mandiri, tangguh, cerdas, kreatif, terampil, 
                            berdisiplin, beretos kerja, profesional, bertanggung jawab, produktif, sehat jasmani dan rohani, 
                            memiliki semangat kebangsaan, cinta tanah air, kesetiakawanan sosial, 
                            kesadaran akan sejarah bangsa dan sikap menghargai pahlawan serta berorientasi masa depan.
                        `,
                tujuanKhusus: {
                    akademis: [
                        "Meningkatkan keimanan, ketakwaan, ibadah, muamalah dan akhlakul karimah",
                        "Mengembangkan proses pembelajaran berbasis saintifik.",
                        "Mewujudkan iklim belajar yang kondusif.",
                        "Meningkatkan perolehan nilai hasil belajar tiap semester.",
                        "Meningkatkan nilai Ujian Madrasah dan Assesmen Ketuntasan Minimal.",
                        "Meningkatkan persentase siswa yang diterima di PTN dan PTS Unggul.",
                        "Menjadikan madrasah yang berprestasi di bidang riset, robotic, KSN dan KSM di tingkat nasional.",
                        "Meningkatkan kompetensi guru melalui MGMP, Workshop dan berbagai pelatihan."
                    ],
                    nonAkademis: [
                        "Menumbuhkan nilai–nilai Islami (Ikhlas, Solid, Loyal, Amanah, Manfaat dan Inspiratif).",
                        "Meningkatkan kemampuan menghafal al-Quran dengan target menambahkan hafalan minimal 1 juz (juz 2) dan mempertahankan bagi yang telah memiliki hafalan.",
                        "Meningkatkan rasa kesetiakawanan sosial dan kebangsaan.",
                        "Membina dan meningkatkan kejujuran, kedisiplinan, ketertiban serta budi pekerti.",
                        "Meningkatkan prestasi kegiatan ekstrakurikuler.",
                        "Meningkatkan kepedulian terhadap lingkungan hidup.",
                        "Mewujudkan peserta didik yang kompeten dalam bidang riset yaitu penelitian ilmiah."
                    ]
                }
            },
            targetStrategi: {
                target: {
                    'Bidang Akademik': [
                        'Bidang KSM mendapatkan 1 medali tingkat Nasional',
                        'Bidang KSM mendapatkan 1 medali tingkat Propinsi',
                        'Bidang OPSI dan MYRES mendapatkan 1 medali tingkat Nasional',
                        'Bidang LKTl mendapatkan 2 medali tingkat Internasional'
                    ],
                    'Bidang Non Akademik': [
                        'Lomba MTQ mendapatkan 1 medali tingkat Nasional',
                        'Lomba Bela diri mendapatkan 5 medali tingkat Nasional',
                        'Lomba Seni mendapatkan 2 medali tingkat Nasional'
                    ],
                    'Pembelajaran': [
                        '95% guru mengintegrasikan imtaq, iptek, dan budaya Indonesia dalam perencanaan, proses, dan evaluasi pembelajaran',
                        '95% guru mengintegrasikan budaya literasi, cinta dan peduli terhadap lingkungan dalam perencanaan, proses, dan evaluasi pembelajaran',
                        '95% guru menggunakan pendekatan scientific, dengan model-model pembelajaran inkuiri, model pembelajaran berbasis masalah, model pembelajaran berbasis proyek, dan model pembelajaran berbasis penemuan'
                    ],
                    'Sumber Daya Manusia': [
                        'Seluruh warga madrasah mematuhi tata tertib dan peraturan yang berlaku',
                        'Karakter seluruh warga berakhlak mulia dan berbudaya Indonesia yang diaktualisasikan dalam perilaku sehari-hari',
                        '95 % guru dan karyawan mengetahui tupoksinya'
                    ],
                    'Kelembagaan': [
                        'Menjadi sekolah Ramah Anak',
                        'Meraih peringkat tertinggi SNMPTKIN'
                    ]
                },
                strategi: [
                    'Branding madrasah istimewa, prestasi sebagai tradisi diimplementasikan dengan mempersiapkan dan memperbanyak keikutsertaan lomba baik akademik maupun non akademik untuk siswa, guru dan pegawai;',
                    'Mengembangkan komunitas riset siswa dan guru;',
                    'Memperbanyak kegiatan keagamaan dan pembangunan masjid madrasah;',
                    'Penambahan jam, pengayaan, intensif/Bimbingan Belajar dan pengembangan kompetensi pada mata pelajaran yang terkait dengan Asesmen Ketuntasan Minimal dan Ujian Masuk Perguruan Tinggi;',
                    'Intensifikasi Program Remedial dan Pengayaan;',
                    'Latihan Dasar Metodologi Ilmiah dan Penyusunan Karya Tulis Siswa;',
                    'Studi integratif dan field trip (studi lapangan) dengan waktu khusus;',
                    'Menyelenggarakan Kegiatan Ekstrakurikuler OSN/KSM, KIR, Jurnalistik, Musik, Pramuka, PMR, Pencak Silat, home industry, qiro’ah dan hadroh;',
                    'Meningkatkan kompetensi dan profesionalisme pendidik dan tenaga kependidikan;',
                    'Meningkatkan prosentase alumni yang diterima di Perguruan Tinggi;',
                    'Menyelenggarakan workshop untuk bapak/ibu guru dan karyawan;',
                    'Menjalin/menyelenggarakan MGMP tingkat madrasah/kabupaten/propinsi;',
                    'Mengikutsertakan bapak/ibu guru dan karyawan dalam pendidikan dan pelatihan;',
                    'Bekerjasama dengan beberapa pondok pesantren/panti asuhan;',
                    'Mengintegrasikan nilai-nilai wirausaha dalam mata pelajaran Prakarya dan Kewirausahaan;',
                    'Memasukkan muatan lokal KIR dalam struktur kurikulum;',
                    'Memasukkan muatan mufrodat dan conversation dalam interaksi pembelajaran;',
                    'Menyelenggarakan pembelajaran integratif;',
                    'Meningkatkan layanan bimbingan dan konseling;',
                    'Menyelenggarakan kegiatan Achievement Motivation Training (AMT);',
                    'Menyelenggarakan mujahadah dan do’a bersama;',
                    'Meningkatkan kegiatan keagamaan Islami pada awal pelajaran dan lagu nasional, madrasah disetiap akhir pembelajaran;',
                    'Meningkatkan sholat dhuha berjamaah;',
                    'Membiasakan sholat dhuha, tadarus dan asmaul husna;',
                    'Membiasakan siswa untuk bersalaman dengan bapak/ibu guru;',
                    'Meningkatkan program tahfidz dan baca tulis qur’an (BTQ);',
                    'Mengembangkan program pengembangan bakat dan minat peserta didik;',
                    'Meningkatkan pelaksanaan kebersihan kelas dan lingkungan madrasah;',
                    'Meningkatkan program penghijauan;',
                    'Mengadakan layanan pengaduan warga madrasah;',
                    'Meningkatkan program silaturahmi warga madrasah;',
                    'Meningkatkan komunikasi antara madrasah dengan orang tua/wali;',
                    'Meningkatkan kegiatan rapat orang tua/wali siswa;',
                    'Meningkatkan peran komite madrasah;',
                    'Meningkatkan program publikasi dan dokumentasi kegiatan;',
                    'Meningkatkan sistem informasi manajemen madrasah;',
                    'Menjalin kerjasama dengan lembaga/instansi terkait;',
                    'Meningkatkan kegiatan penelitian dan pengembangan;',
                    'Meningkatkan kualitas pelayanan publik;',
                    'Mengembangkan budaya mutu madrasah;',
                    'Meningkatkan kesadaran hukum bagi warga madrasah;',
                    'Meningkatkan keaktifan siswa dalam mengikuti kegiatan pembelajaran;',
                    'Mengembangkan program pembelajaran berbasis teknologi informasi;',
                    'Mengembangkan budaya literasi;',
                    'Mengembangkan budaya akademik;',
                    'Meningkatkan penggunaan media pembelajaran yang interaktif;',
                    'Mengembangkan program pembelajaran berbasis proyek;',
                    'Meningkatkan program pembelajaran kolaboratif;',
                    'Mengembangkan program pembelajaran berbasis masalah;',
                    'Meningkatkan program pembelajaran berbasis penemuan;',
                    'Meningkatkan program pembelajaran berbasis portofolio;',
                    'Meningkatkan program pembelajaran berbasis kompetensi;',
                    'Meningkatkan program pembelajaran berbasis karakter;',
                    'Meningkatkan program pembelajaran berbasis HOTS (Higher Order Thinking Skills).'
                ]
            },
            wargaMadrasah: {
                guru: [
                    { nama: "MUCHAROM, S.Ag, M.Si", gender: "Laki-Laki", jabatan: "Kepala MAN 4 Bantul" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    { nama: "Dra. Hj. MARDIASTUTI", gender: "Perempuan", jabatan: "Guru Fisika" },
                    // ... isi semua data guru kamu
                ],
                siswa: [
                    { nama: "Ahmad Fauzan", gender: "Laki-Laki", kelas: "XII MIPA 1" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    { nama: "Siti Nurhaliza", gender: "Perempuan", kelas: "XI IPS 2" },
                    // ... isi data siswa kamu
                ],
                unduhan: [
                    {
                        nama: "Pengumuman Kelulusan Siswa Kelas XII MAN 4 Bantul tahun ajaran 2024/2025",
                        jumlah: 356,
                        file: "/file/kelulusan-2025.pdf",
                    },
                    {
                        nama: "Pengumuman Kelulusan Siswa Kelas XII MAN 4 Bantul tahun ajaran 2023/2024",
                        jumlah: 357,
                        file: "/file/kelulusan-2024.pdf",
                    },
                    {
                        nama: "Pengumuman Kelulusan Siswa Kelas XII MAN 4 Bantul tahun ajaran 2022/2023",
                        jumlah: 0,
                        file: "/file/kelulusan-2023.pdf",
                    },
                    {
                        nama: "STANDAR LAYANAN MAN 4 BANTUL",
                        jumlah: 351,
                        file: "/file/standar-layanan.pdf",
                    },
                    {
                        nama: "ALUR LAYANAN INFORMASI PUBLIK",
                        jumlah: 271,
                        file: "/file/alur-informasi-publik.pdf",
                    },
                ],
            },
        },

        zonaContent: {
            zonaIntegritas: [
                {
                    title:
                        "MAN 4 Bantul Tuntaskan Pengambilan Ijazah yang Tertunda",
                    image: "/zona/zonaIntegritas1.jpg",
                    description: "Bantul (MAN 4 Bantul) – MAN 4 Bantul Yogyakarta (Manembayo) baru saja menerima tamu yang merupakan alumninya, Sabtu (24/09/2022). Kunjungan kali ini berkaitan dengan serah terima ijazah yang tertunda atas nama Dyah Ayu",
                    date: "08/16/2025",
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
                        "Kabid Dikmad Kanwil Kemenag DIY Lakukan Monev Pembangunan Gedung SBSN MAN 4 Bantul",
                    image: "/zona/zonaIntegritas2.png",
                    description: "Bantul (MAN 4 Bantul) – Pembangunan Gedung Ruang Kelas Baru (RKB) MAN 4 Bantul dan Program Surat Berharga Syariah Negara SBSN sudah masuk minggu ke empat bulan Juli 2021. Dalam hal ini Muntolib, S.Ag., M.S.I Kepala Bidang",
                    date: "08/16/2025",
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
                        "Raih WBBM tahun 2022, Kemenag Bantul Serius Tingkatkan Kualitas Layanan Publik",
                    image: "/zona/zonaIntegritas3.png",
                    description: "Bantul (Kankemenag) – Kepala Kantor Kementerian Agama Kabupaten Bantul H. Aidi Johansyah, S. Ag., MM., didampingi Kepala Sub Bagian Tata Usaha H. Mukotip, S. Ag., M.Pd. I memberikan pembinaan mengenai Peningkatan",
                    date: "08/16/2025",
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
                        "Kendaraan MAN 4 Bantul Sudah terdaftar di MyPertamina",
                    image: "/zona/zonaIntegritas4.jpg",
                    description: "Bantul (MAN 4 Bantul) – Pemerintah menghimbau masyarakat pemilik kendaraan roda empat yang ingin menggunakan bahan bakar bersubsidi seperti pertalite dan solar haru mendaftarkan diri di aplikasi MyPertamina. Nantinya bagi ",
                    date: "08/16/2025",
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
                        "STUDI TIRU PENGURUS OSIS MA MADANIA BANTUL KE OSIS IBNU SINA MAN 4 BANTUL",
                    image: "/zona/zonaIntegritas5.png",
                    description: "Bantul (MA Madania Bantul) – Dalam rangka meningkatkan kompetensi berorganisasi serta menjalin ukhuwah sesama siswa, Pengurus OSIS MA Madania Bantul melaksanakan kegiatan Studi Tiru Pengurus OSIS MA Madania Bantu",
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
                        "Kamad dan KaTU MAN 4 Bantul Ikuti Sosialisasi SKP di Kemenag Bantul",
                    image: "/zona/zonaIntegritas6.jpg",
                    description: "Bantul (MAN 4 Bantul) – Kantor Kementerian Agama Kabupaten Bantul menyelenggarakan Penyusunan Sasaran Kinerja Pegawai (SKP) dan Sosialisasi SKP Tahun 2022 di Aula Kantor, Rabu (12/10). Acara diikuti oleh Kepala Madrasah",
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
            ],

            evidenceZona: [
                {
                    area: "AREA I : MANAJEMEN PERUBAHAN",
                    image: "/zona/area1.jpg",
                    description:
                        "Tim Kerja, Rencana Pembangunan Zona Integritas, Pemantauan dan Evaluasi Pembangunan WBK/WBBM, Perubahan pola pikir dan budaya kerja",
                    link: "#", // ganti dengan link dokumen jika ada
                },
                {
                    area: "AREA II : PENATAAN TATALAKSANA",
                    image: "/zona/area2.jpg",
                    description:
                        "Prosedur operasional tetap (SOP) kegiatan utama, E-Office, Keterbukaan Informasi Publik",
                    link: "#",
                },
                {
                    area: "AREA III : PENATAAN SISTEM MANAJEMEN SDM",
                    image: "/zona/area3.jpg",
                    description:
                        "Perencanaan kebutuhan pegawai sesuai dengan kebutuhan organisasi, Pola Mutasi Internal, Pengembangan pegawai berbasis kompetensi",
                    link: "#",
                },
                {
                    area: "AREA IV : PENGUATAN AKUNTABILITAS",
                    image: "/zona/area4.jpg",
                    description:
                        "Keterlibatan pimpinan, Pengelolaan Akuntabilitas Kinerja",
                    link: "#",
                },
                {
                    area: "AREA V : PENGUATAN PENGAWASAN",
                    image: "/zona/area5.jpg",
                    description:
                        "Pengendalian Gratifikasi, Penerapan SPIP, Pengaduan Masyarakat, Whistle-Blowing System, Penanganan Benturan Kepentingan",
                    link: "#",
                },
                {
                    area: "AREA VI : PENINGKATAN KUALITAS PELAYANAN PUBLIK",
                    image: "/zona/area6.jpg",
                    description:
                        "Standar Pelayanan, Budaya Pelayanan Prima, Penilaian Kepuasan terhadap pelayanan",
                    link: "#",
                },
            ],
            budayaKerja: {
                title: "5 Nilai Budaya Kerja",
                subtitle: "5 NILAI BUDAYA KERJA KEMENTERIAN AGAMA REPUBLIK INDONESIA",
                image: "/zona/budayakerja.jpg", // simpan gambar sesuai path ini
                description: `Lahirnya 5 Budaya Kerja Kementerian Agama RI, untuk menjawab keinginannya yang ingin mengembalikan citra dan kepercayaan baik Kementerian Agama dimata publik dengan dibuktikan dengan kinerja yang baik. Maka upaya pelayanan kepada publik berbasis akuntabilitas dan transparansi harus didukung oleh pelayanan yang ikhlas dari seluruh pegawainya.
                Berikut Penjabaran 5 Nilai Budaya Kerja Kementerian Agama`,
                values: [
                    {
                        title: "INTEGRITAS",
                        desc: "Keselarasan Antara Hati, Pikiran, Perkataan Dan Perbuatan Yang Baik Dan Benar",
                    },
                    {
                        title: "PROFESIONALITAS",
                        desc: "Bekerja Secara Disiplin, Kompeten Dan Tepat Waktu Dengan Hasil Terbaik",
                    },
                    {
                        title: "INOVASI",
                        desc: "Menyempurnakan Yang Sudah Ada Dan Mengkreasi Hal Baru Yang Lebih Baik",
                    },
                    {
                        title: "TANGGUNG JAWAB",
                        desc: "Bekerja Secara Tuntas Dan Konsekuen",
                    },
                    {
                        title: "KETELADANAN",
                        desc: "Menjadi Contoh Yang Baik Bagi Orang Lain",
                    },
                ],
            },
        },

        layananContent: {
            maklumat: {
                title: "Maklumat Standar Layanan",
                quote: `"Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan pendidikan sesuai dengan standar pelayanan yang telah ditetapkan, dan apabila tidak menepati janji ini kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."`,
                author: "Kepala Madrasah",
                signature: "MUCHAROM, S.Ag, M.Si",
            }
        },


        galeriContent: {
            FotoPeristiwa: [
                {
                    id: 1,
                    date: "08/16/2025",
                    title: "Upacara HUT ke -78 RI Madrasah",
                    photoCount: 3,
                    photos: ["/galeri/galeri1.jpg", "/galeri/galeri2.jpg", "/galeri/galeri3.jpg"],
                },
                {
                    id: 2,
                    date: "08/16/2024",
                    title: "Perkenalan Tamu Ambalan 2023",
                    photoCount: 3,
                    photos: ["/galeri/galeri2.jpg", "/galeri/galeri1.jpg", "/galeri/galeri3.jpg"],
                },
                {
                    id: 3,
                    date: "08/16/2023",
                    title: "Lomba Perkemahan Penegak Pramuka 2023",
                    photoCount: 3,
                    photos: ["/galeri/galeri3.jpg", "/galeri/galeri2.jpg", "/galeri/galeri1.jpg"],
                },
                {
                    id: 4,
                    date: "08/16/2023",
                    title: "Wisata Ilimiah Kelas XI Pacitan Jawa Timur",
                    photoCount: 8,
                    photos: ["/galeri/galeri4.jpg", "/galeri/galeri1.jpg", "/galeri/galeri3.jpg"],
                },
                {
                    id: 5,
                    date: "08/16/2023",
                    title: "Milad Man 4 Bantul Ke-54",
                    photoCount: 8,
                    photos: ["/galeri/galeri5.jpg", "/galeri/galeri1.jpg", "/galeri/galeri3.jpg"],
                },
                {
                    id: 6,
                    date: "08/16/2023",
                    title: "Classmeeting Siswa Semester Ganjil Tahun Ajaran 2022/2023",
                    photoCount: 8,
                    photos: ["/galeri/galeri6.jpg", "/galeri/galeri1.jpg", "/galeri/galeri3.jpg"],
                },
            ],
            videos: [
                {
                    id: 1,
                    title: "WISUDA PURNA SISWA",
                    date: "07-03-2024",
                    thumbnail: ["/galeri/video1.jpeg",],
                    videoUrl: ["https://www.youtube.com/live/UfZ68eJ692k?si=mxmDmCivVd5IDZpM", "https://www.youtube.com/live/psO3yrrz1rY?si=X7sQJB3T73lsHv5x"],
                },
                {
                    id: 2,
                    title: "Video Edukasi Kepada Siswa",
                    date: "07-03-2023",
                    thumbnail: ["/galeri/video2.jpeg",],
                    videoUrl: "https://www.youtube.com/embed/jFvncZ6YKGs",
                },
                {
                    id: 3,
                    title: "Profil MAN 4 Bantul",
                    date: "07-03-2025",
                    thumbnail: ["/galeri/video3.jpg",],
                    videoUrl: "https://youtu.be/kcIL1iR1FL4",
                },


            ],
        },
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
        getZonaContent: (state) => state.zonaContent,
        getLayananContent: (state) => state.layananContent,
        getGaleriContent: (state) => state.galeriContent,
        getFotoPeristiwaById: (state) => (id) => state.galeriContent.FotoPeristiwa.find((album) => album.id === id),
        getVideoById: (state) => (id) => state.galeriContent.videos.find((video) => video.id === id),
        getSambutan: state => state.sambutan,


    },
});
