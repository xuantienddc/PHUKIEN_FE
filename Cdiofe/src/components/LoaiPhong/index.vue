<template lang="">
    <div class="row">
    <div class="col-lg">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-4"><h5>Danh Sách Loại Phòng</h5></div>

                        <div class="col-lg-8 text-end"><button class="btn btn-primary " data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" >Thêm mới</button></div>
                </div>
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm loại phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card-body ">

                                        <div class="mt-2">
                                            <label>Tên loại phòng</label>
                                            <input v-on:change="checkSlugLoaiPhong()" v-on:keyup="createSlug()" tabindex="1" v-model="create_loai_phong.ten_loai_phong"  type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Slug loại phòng</label>
                                            <input v-on:change="checkSlugLoaiPhong()" tabindex="2" v-model="create_loai_phong.slug_loai_phong"
                                                e="email" class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Đơn giá</label>
                                            <input tabindex="3" type="text" v-model="create_loai_phong.don_gia"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Loại giường</label>
                                            <input tabindex="4" v-model="create_loai_phong.loai_phong" type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Số người</label>
                                            <input tabindex="5" v-model="create_loai_phong.so_nguoi" type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Tình Trạng</label>
                                            <select tabindex="6" v-model="create_loai_phong.tinh_trang"
                                                class="form-control mt-1">
                                                <option value="1">Hoạt động</option>
                                                <option value="0">Không hoạt động</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button class="btn btn-primary" @:click="createLoaiPhong()" data-bs-dismiss="modal" >Thêm Phòng</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Loại Phòng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Slug Loại Phòng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Đơn Giá
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Loại Giường
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Số Người
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tình Trạng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <template v-for="(v, k) in list_loai_phong">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ten_loai_phong }}</td>
                                        <td class="align-middle text-nowrap">{{ v.slug_loai_phong }}</td>
                                        <td class="align-middle text-nowrap">{{ v.don_gia }}</td>
                                        <td class="align-middle text-nowrap">{{ v.loai_phong }}</td>
                                        <td class="align-middle text-nowrap">{{ v.so_nguoi }}</td>
                                        <td class="align-middle text-nowrap text-center ">
                                            <button @:click="changeTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hiển Thị</button>
                                            <button @:click="changeTrangThai(v)" v-else class="btn btn-warning">Tạm tắt</button>    
                                        </td>
                                        <td class="align-middle text-nowrap text-center d-flex justify-content-around">
                                            <button class='btn btn-primary' data-bs-toggle="modal"
                                               @:click="Object.assign(update_loai_phong ,v)" data-bs-target="#updateModalNV">Cập Nhật</button>
                                            <button class='btn btn-danger' data-bs-toggle="modal"
                                               @:click="Object.assign(delete_loai_phong ,v)" data-bs-target="#deleteModal" >Xóa</button>
                                            
                                        </td>
                                    </tr>
                                </template>
                                 <!-- updateModal -->
                                <div class="modal fade" id="updateModalNV" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mt-2">
                                                    <label>Tên loại Phòng</label>
                                                    <input tabindex="1" v-on:change="checkSlugLPUpdate()" v-on:keyup='createSlugUpdate()' v-model="update_loai_phong.ten_loai_phong" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Slug loại Phòng</label>
                                                    <input tabindex="2" v-on:change="checkSlugLPUpdate()" v-model="update_loai_phong.slug_loai_phong" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Đơn giá</label>
                                                    <input tabindex="3" v-model="update_loai_phong.don_gia" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Loại Giường</label>
                                                    <input tabindex="4" v-model="update_loai_phong.loai_phong" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Số người</label>
                                                    <input tabindex="5" v-model="update_loai_phong.so_nguoi" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Tình trạng</label>
                                                    <select class="form-control mt-1" v-model="update_loai_phong.tinh_trang">Tình trạng
                                                        <option value="1">Hiển thị</option>
                                                        <option value="0"> Tạm Tắt</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button"
                                                    v-if="is_view_update==0" @:click="update_loai_phong()" data-bs-dismiss="modal" class="btn btn-danger"  disabled >Update</button>
                                                <button type="button"
                                                   v-else @:click="updateLoaiPhong()" data-bs-dismiss="modal" class="btn btn-primary" >Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <!-- deleteModal -->
                                 <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa danh mục
                                                    này không</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div
                                                    class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                                    <div class="d-flex align-items-center">
                                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="mb-0 text-dark">Danger Alerts</h6>
                                                            <div class="text-dark">
                                                                Bạn có chắc chắn muốn xóa danh mục <b>{{ delete_loai_phong.ten_loai_phong }}</b> này
                                                                không?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button @:click="accpectDel()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    data() {
        return {
            list_loai_phong: [],
            create_loai_phong: {
                'ten_loai_phong': '',
                'slug_loai_phong': '',
                'don_gia': '',
                'loai_phong': '',
                'so_nguoi': '',
                'tinh_trang': '',
            },
            update_loai_phong: {
                'ten_loai_phong': '',
                'slug_loai_phong': '',
                'don_gia': '',
                'loai_phong': '',
                'so_nguoi': '',
                'tinh_trang': '',
            },
            delete_loai_phong: {
                'ten_loai_phong': '',
                'slug_loai_phong': '',
                'don_gia': '',
                'loai_phong': '',
                'so_nguoi': '',
                'tinh_trang':0,
            },
            is_viewLP: 0,
            is_view_update: 0,
        }
    },
    mounted() {
        this.loadLoaiPhong();
    },
    methods: {
        loadLoaiPhong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/loai-phong/data')
                .then((res) => {
                    this.list_loai_phong = res.data.data;
                });
        },
        createLoaiPhong() {
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-phong/create', this.create_loai_phong)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo')
                        this.loadLoaiPhong();
                        this.create_loai_phong = {};
                    }
                });
        },
        createSlug(){
            this.create_loai_phong.slug_loai_phong=this.toSlug(this.create_loai_phong.ten_loai_phong);
        },
        createSlugUpdate() {
            this.update_loai_phong.slug_loai_phong = this.toSlug(this.update_loai_phong.ten_loai_phong);

        },
        toSlug(str) {
            str = str.toLowerCase();
            str = str
                .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
                .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
            str = str.replace(/[đĐ]/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/-+/g, '-');
            str = str.replace(/^-+|-+$/g, '');
            return str;
        },
        updateLoaiPhong() {
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-phong/update', this.update_loai_phong)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadLoaiPhong();
                    } else {
                        toastr.error(res.data.message, 'Thông báo')
                    }
                });

        },
        accpectDel(){
            axios
                .delete('http://127.0.0.1:8000/api/admin/loai-phong/delete/' +this.delete_loai_phong.id)
                .then((res)=>{
                    if(res.data.status){
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadLoaiPhong();
                    }else{
                        toastr.error(res.data.message, 'Thông báo');
                        
                    }
                })
        },
        checkSlugLoaiPhong(){
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-phong/check-slug',this.create_loai_phong)
                .then((res)=>{
                    if(res.data.status==1){
                        this.is_viewLP=0;
                        toastr.error('Slug này đã tồn tại','Thông báo')
                    }else{
                        this.is_viewLP=1;
                        toastr.success('Slug này chưa tồn tại bạn có thể dùng','Thông báo')
                    }
                });
                this.is_viewLP==1;
        },
        checkSlugLPUpdate() {
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-phong/check-slug-update', this.update_loai_phong)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_view_update = 0;
                        toastr.error('Slug này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_view_update = 1;
                        toastr.success('Bạn có thể sử dụng slug này!!', 'Thông báo');
                    }
                });
            this.is_view_update = 1;
        },
        changeTrangThai(value){
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-phong/change-statusLP', value)
                .then((res)=>{
                    if(res.data.status){
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadLoaiPhong();
                    }else{
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
    },
}
</script>
