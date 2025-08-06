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
import ZonaView from '@/views/ZonaView.vue'
import Integritas from '@/views/zona/Integritas.vue'
import IntegritasDetail from '@/views/zona/IntegritasDetail.vue'
import Evidencezona from '@/views/zona/Evidencezona.vue'
import BudayaKerja from '@/views/zona/BudayaKerja.vue'
import Standarlayanan from '@/views/layanan/Standarlayanan.vue'
import GaleriView from '@/views/GaleriView.vue'
import FotoPeristiwa from '@/views/galleri/FotoPeristiwa.vue'
import FotoPeristiwaDetail from '@/views/galleri/FotoPeristiwaDetail.vue'
import VideoDetail from '@/views/galleri/VideoDetail.vue'
import Video from '@/views/galleri/Video.vue'

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
                        path: "warga-madrasah",
                        name: "warga-madrasah",
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
            {
                path: '/zona',
                name: 'zona',
                component: ZonaView,
                children: [
                    {
                        path: "integritas",
                        name: "integritas",
                        component: Integritas
                    },
                    {
                        path: "integritas:index",
                        name: "integritas_detail",
                        component: IntegritasDetail
                    },
                    {
                        path: "evidencezona",
                        name: "evidencezona",
                        component: Evidencezona
                    },
                    {
                        path: "budaya-kerja",
                        name: "budaya-kerja",
                        component: BudayaKerja
                    },
                ]
            },
            {
                path: 'layanan',
                name: 'layanan',
                component: Standarlayanan,
            },
            {
                path: '/galeri',
                name: 'galeri',
                component: GaleriView,
                children: [
                    {
                        path: 'foto_peristiwa',
                        name: 'foto_peristiwa',
                        component: FotoPeristiwa,
                    },
                    {
                        path: 'foto_peristiwa_detail/:id',
                        name: 'foto_peristiwa_detail',
                        component: FotoPeristiwaDetail,
                    },
                    {
                        path: 'video',
                        name: 'video',
                        component: Video
                    },
                    {
                        path: 'video_detail/:id',
                        name: 'video_detail',
                        component: VideoDetail
                    },
                ]
            },


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