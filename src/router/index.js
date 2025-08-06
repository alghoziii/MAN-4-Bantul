import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import VisiMisiView from '@/views/profile/VisiMisiView.vue'
import Sejarah from '@/views/profile/Sejarah.vue'
import Struktur_Organisasi from '@/views/profile/Struktur_Organisasi.vue'
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
import LokasiView from '@/views/lokasi/LokasiView.vue'

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
                path: 'lokasi',
                name: 'lokasi',
                component: LokasiView,
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
    routes
})

export default router