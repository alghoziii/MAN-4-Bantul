import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import VisiMisiView from '@/views/profile/VisiMisiView.vue'
import Sejarah from '@/views/profile/Sejarah.vue'
import Struktur_Organisasi from '@/views/profile/Struktur_Organisasi.vue'
// import DirektoriGuru from '@/views/guru/DirektoriGuru.vue'
// import GuruView from '@/views/GuruView.vue'
// import DirektoriGuruDetail from '@/views/guru/DirektoriGuruDetail.vue'
// import Kalender from '@/views/guru/Kalender.vue'
// import SiswaView from '@/views/SiswaView.vue'
// import DirektoriSiswa from '@/views/siswa/DirektoriSiswa.vue'
// import DirektoriSiswaDetail from '@/views/siswa/DirektoriSiswaDetail.vue'
// import Informasi from '@/views/Informasi.vue'
// import KontakSekolah from '@/views/informasi/KontakSekolah.vue'
// import Agenda from '@/views/informasi/Agenda.vue'
// import Berita from '@/views/informasi/Berita.vue'
// import Galeri from '@/views/Galeri.vue'
// import GaleriVideo from '@/views/galleri/GaleriVideo.vue'
// import GaleriFoto from '@/views/galleri/GaleriFoto.vue'
// import GaleriVideoDetail from '@/views/galleri/GaleriVideoDetail.vue'
// import GaleriFotoDetail from '@/views/galleri/GaleriFotoDetail.vue'
// import BeritaDetail from '@/views/informasi/BeritaDetail.vue'
// import Ekstrakulikuler from '@/views/siswa/Ekstrakulikuler.vue'
// import Osis from '@/views/siswa/Osis.vue'
// import DirektoriAlumni from '@/views/siswa/DirektoriAlumni.vue'
// import DirektoriAlumniDetail from '@/views/siswa/DirektoriAlumniDetail.vue'
// import Prestasi from '@/views/informasi/Prestasi.vue'
// import Artikel from '@/views/informasi/Artikel.vue'
import Tujuan from '@/views/profile/Tujuan.vue'
import WargaMadrasah from '@/views/profile/WargaMadrasah.vue'
import TargetStrategi from '@/views/profile/TargetStrategi.vue'
import Berita from '@/views/berita/Berita.vue'
import BeritaDetail from '@/views/berita/BeritaDetail.vue'
import Prestasi from '@/views/profile/Prestasi.vue'
import PrestasiDetail from '@/views/profile/PrestasiDetail.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/profil',
                name: 'profile',
                component: ProfileView,
                children: [
                    {
                        path: "sejarah",
                        name: "sejarah",
                        component: Sejarah
                    },
                    {
                        path: 'visi-misi',
                        name: 'visi-misi',
                        component: VisiMisiView
                    },
                    {
                        path: "tujuan",
                        name: "tujuan",
                        component: Tujuan
                    },
                    {
                        path: "target-strategi",
                        name: "target-strategi",
                        component: TargetStrategi
                    },
                    {
                        path: "struktur_Organisasi",
                        name: "struktur_Organisasi",
                        component: Struktur_Organisasi
                    },
                    {
                        path: "warga_madrasah",
                        name: "warga_madrasah",
                        component: WargaMadrasah
                    },
                    {
                        path: "prestasi",
                        name: "prestasi",
                        component: Prestasi
                    },
                    {
                        path: '/prestasi/:index',
                        name: 'prestasi_detail',
                        component: PrestasiDetail,
                        props: true,
                    },

                ]
            },
            {
                path: 'berita',
                name: 'berita',
                component: Berita,
            },
            {
                path: '/berita/:index',
                name: 'berita_detail',
                component: BeritaDetail,
                props: true,
            },
            // {
            //     path: '/guru',
            //     name: 'guru',
            //     component: GuruView,
            //     children: [
            //         {
            //             path: 'direktori_guru',
            //             name: 'direktori_guru',
            //             component: DirektoriGuru
            //         },
            //         {
            //             path: 'direktori_guru_detail/:id',
            //             name: 'direktori_guru_detail',
            //             component: DirektoriGuruDetail,
            //             props: true,

            //         },
            //         {
            //             path: 'kalender',
            //             name: 'kalender',
            //             component: Kalender,
            //         },

            //     ]
            // },
            // {
            //     path: '/siswa',
            //     name: 'siswa',
            //     component: SiswaView,
            //     children: [
            //         {
            //             path: 'direktori_siswa',
            //             name: 'direktori_siswa',
            //             component: DirektoriSiswa
            //         },
            //         {
            //             path: 'direktori_siswa_detail/:id',
            //             name: 'direktori_siswa_detail',
            //             component: DirektoriSiswaDetail,
            //             props: true,
            //         },
            //         {
            //             path: 'ekstrakulikuler',
            //             name: 'ekstrakulikuler',
            //             component: Ekstrakulikuler
            //         },
            //         {
            //             path: 'osis',
            //             name: 'osis',
            //             component: Osis
            //         },
            //         {
            //             path: 'direktori_alumni',
            //             name: 'direktori_alumni',
            //             component: DirektoriAlumni
            //         },
            //         {
            //             path: 'direktori_siswa_alumni_detail/:id',
            //             name: 'direktori_siswa_alumni_detail',
            //             component: DirektoriAlumniDetail,
            //             props: true,
            //         },
            //     ]
            // },
            // {
            //     path: '/informasi',
            //     name: 'informasi',
            //     component: Informasi,
            //     children: [
            //         {
            //             path: 'kontak_sekolah',
            //             name: 'kontak_sekolah',
            //             component: KontakSekolah,
            //         },
            //         {
            //             path: 'agenda',
            //             name: 'agenda',
            //             component: Agenda,
            //         },
            //         {
            //             path: 'berita',
            //             name: 'berita',
            //             component: Berita,
            //         },
            //         {
            //             path: '/berita/:index',
            //             name: 'berita_detail',
            //             component: BeritaDetail,
            //             props: true,
            //         },
            //         {
            //             path: 'artikel',
            //             name: 'artikel',
            //             component: Artikel,
            //         },
            //         {
            //             path: "prestasi",
            //             name: "prestasi",
            //             component: Prestasi
            //         },

            //     ]
            // },
            // {
            //     path: '/galeri',
            //     name: 'galeri',
            //     component: Galeri,
            //     children: [
            //         {
            //             path: 'galeri_video',
            //             name: 'galeri_video',
            //             component: GaleriVideo
            //         },
            //         {
            //             path: 'video_detail/:id',
            //             name: 'video_detail',
            //             component: GaleriVideoDetail
            //         },
            //         {
            //             path: 'galeri_foto',
            //             name: 'galeri_foto',
            //             component: GaleriFoto,
            //         },
            //         {
            //             path: 'galeri_foto_detail/:id',
            //             name: 'galeri_foto_detail',
            //             component: GaleriFotoDetail,
            //         },
            //     ]
            // },




        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // selalu scroll ke atas saat navigasi
        return { top: 0 }
    }
})

export default router