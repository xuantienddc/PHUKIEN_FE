import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraDaiLy from "./kiemTraDaiLy";
import kiemTranNhanVien from "./kiemTranNhanVien";
const routes = [
    {
        path : '/admin/danh-sach-san-pham',
        component: ()=>import('../components/DanhSachSanPham/index.vue'),
    },
    //ĐạiLý
    {
        path : '/dai-ly/san-pham',
        component: ()=>import('../components/DaiLy/SanPham/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
            
    },
    {
        path : '/dai-ly/nhap-kho',
        component: ()=>import('../components/DaiLy/NhapKho/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/dang-ky',
        component: ()=>import('../components/DaiLy/DangKy/index.vue'),
        meta: {layout : 'auth'}
    },

    {
        path : '/dai-ly/danh-sach-dai-ly',
        component: ()=>import('../components/DaiLy/DanhSachDaiLy/index.vue'),
    },
    {
        path : '/dai-ly/dang-nhap',
        component: ()=>import('../components/DaiLy/DangNhap/index.vue'),
        meta: {layout : 'auth'}
    },
    //Nhân Viên
    {
        path : '/nhan-vien/nhan-vien',
        component: ()=>import('../components/LogNhanVien/NhanVien/index.vue'),
        meta: {layout : 'nv'},
        beforeEnter: kiemTranNhanVien
            
    },
    {
        path : '/nhan-vien/dang-ky',
        component: ()=>import('../components/LogNhanVien/DangKy/index.vue'),
        meta: {layout : 'auth'}
    },
    {
        path : '/nhan-vien/dang-nhap',
        component: ()=>import('../components/LogNhanVien/DangNhap/index.vue'),
        meta: {layout : 'auth'}
    },
    
    ////

    {
        path : '/',
        component: ()=>import('../components/CDIO3/Home/index.vue'),
    },
    {
        path : '/cdio/danh-muc',
        component: ()=>import('../components/CDIO3/DanhMuc/index.vue'),
    },
    {
        path : '/cdio/sale',
        component: ()=>import('../components/CDIO3/Sale/index.vue'),
    },
   
    
    
   
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router