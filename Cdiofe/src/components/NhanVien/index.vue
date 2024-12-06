<template >
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-danger shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-4">
                            <h5>Danh Sách Danh Mục</h5>
                        </div>
                        <div class="col-lg-8 text-end"><button class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Thêm nhân
                                viên</button></div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm nhân viên mới hả</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card-body">
                                        <div class="mt-2">
                                            <label>Họ và tên</label>
                                            <input tabindex="1" v-model="create_nhan_vien.ho_va_ten" type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Email</label>
                                            <input tabindex="2" v-on:change="checkEmailNV()"
                                                v-model="create_nhan_vien.email" type="email" class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Password</label>
                                            <input tabindex="3" v-model="create_nhan_vien.password" type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Số Điện Thoại</label>
                                            <input tabindex="4" v-model="create_nhan_vien.so_dien_thoai" type="number"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Địa chỉ</label>
                                            <input tabindex="5" v-model="create_nhan_vien.dia_chi" type="text"
                                                class="form-control">
                                        </div>
                                        <div class="mt-2">
                                            <label>Tình Trạng</label>
                                            <select tabindex="6" v-model="create_nhan_vien.tinh_trang"
                                                class="form-control mt-1">
                                                <option value="1">Hoạt động</option>
                                                <option value="0">Không hoạt động</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button v-if="is_viewNV == 1" @:click="createNhanVien()" class="btn btn-primary"
                                        data-bs-dismiss="modal">Thêm nhân viên</button>
                                    <button v-else class="btn btn-danger" data-bs-dismiss="modal" disabled>Thêm nhân
                                        viên</button>
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
                                        Họ Và Tên
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Email
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Số Điện Thoại
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Địa Chỉ
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
                                <template v-for="(v, k) in list_nhan_vien">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ho_va_ten }}</td>
                                        <td class="align-middle text-nowrap">{{ v.email }}</td>
                                        <td class="align-middle text-nowrap">{{ v.so_dien_thoai }}</td>
                                        <td class="align-middle text-nowrap">{{ v.dia_chi }}</td>
                                        <td class="align-middle text-nowrap text-center ">
                                            <button @:click="changeTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success ">Hoạt Động</button>
                                            <button @:click="changeTrangThai(v)" v-else class="btn btn-danger">Không Hoạt Động</button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center d-flex justify-content-around ">
                                            <button @:click="Object.assign(update_nhan_vien, v); is_view_updateNV = 1"
                                                class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#updateModalNV">Cập Nhật</button>
                                            <button @:click="Object.assign(delete_nhan_vien, v)" class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#delNhanVienx">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                                <!-- Modal delete -->
                                <div class="modal fade" id="delNhanVienx" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa nhận xóa nhân viên
                                                    này</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body ">
                                                <div
                                                    class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                                    <div class="d-flex align-items-center">
                                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="mb-0 text-dark">Danger Alerts</h6>
                                                            <div class="text-dark">
                                                                Bạn có chắc chắn muốn xóa <b>{{ delete_nhan_vien.ho_va_ten
                                                                }}</b> này
                                                                không?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button @:click="delNhanVien()" type="button" class="btn btn-primary"
                                                    data-bs-dismiss="modal">Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal Update -->
                                <div class="modal fade" id="updateModalNV" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật nhân viên
                                                    này không</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mt-2">
                                                    <label>Họ và tên</label>
                                                    <input tabindex="1" v-model="update_nhan_vien.ho_va_ten" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Email</label>
                                                    <input tabindex="2" 
                                                    v-on:keyup="checkEmailNVUpdate()" v-model="update_nhan_vien.email" type="email" class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Password</label>
                                                    <input tabindex="3" v-model="update_nhan_vien.password" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Số Điện Thoại</label>
                                                    <input tabindex="4" v-model="update_nhan_vien.so_dien_thoai"
                                                        type="number" class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Địa chỉ</label>
                                                    <input tabindex="5" v-model="update_nhan_vien.dia_chi" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Tình Trạng</label>
                                                    <select tabindex="6" v-model="update_nhan_vien.tinh_trang"
                                                        class="form-control mt-1">
                                                        <option value="1">Hoạt động</option>
                                                        <option value="0">Không hoạt động</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-if="is_view_updateNV == 0" @:click="update_nhan_vien()" type="button"
                                                    data-bs-dismiss="modal" class="btn btn-danger" disabled>Update</button>
                                                <button v-else @:click="accpectUpdate()" type="button"
                                                    data-bs-dismiss="modal" class="btn btn-info">Update</button>
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
import axios from 'axios'
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    data() {
        return {
            list_nhan_vien: [],
            create_nhan_vien: {
                'ho_va_ten': '',
                'email': '',
                'password': '',
                'so_dien_thoai': '',
                'dia_chi': '',
                'tinh_trang': '',
            },
            delete_nhan_vien: {
                'ho_va_ten': '',
                'email': '',
                'password': '',
                'so_dien_thoai': '',
                'dia_chi': '',
                'tinh_trang': '',
            },
            update_nhan_vien: {
                'ho_va_ten': '',
                'email': '',
                'password': '',
                'so_dien_thoai': '',
                'dia_chi': '',
                'tinh_trang': '',
            },
            is_view_updateNV: 0,
            is_viewNV: 0,
        }
    },
    mounted() {
        this.loadNhanVien();
    },
    methods: {
        loadNhanVien() {
            axios
                .get('http://127.0.0.1:8000/api/admin/nhan-vien/data')
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                });


        },
        createNhanVien() {
            console.log('Lod ở trên');
            console.log(this.create_nhan_vien);
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/create', this.create_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo')
                        this.loadNhanVien();
                        this.create_nhan_vien = {};
                    }
                });
        },
        checkEmailNV() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/check-email', this.create_nhan_vien)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_viewNV = 0;
                        toastr.error('Email này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_viewNV = 1;
                        toastr.success('Bạn có thể sử dụng Email này!!', 'Thông báo');
                    }

                });
            this.is_viewNV = 1;
        },
        checkEmailNVUpdate() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/check-email-update', this.update_nhan_vien)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_view_updateNV = 0;
                        toastr.error('Email này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_view_updateNV = 1;
                        toastr.success('Bạn có thể sử dụng Email này!!', 'Thông báo');
                    }

                });
            this.is_view_updateNV = 1;
        },
        delNhanVien() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/nhan-vien/delete/' + this.delete_nhan_vien.id)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadNhanVien();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
        accpectUpdate() {
            axios
                .put('http://127.0.0.1:8000/api/admin/nhan-vien/update', this.update_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadNhanVien();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
        changeTrangThai(value){
            axios
                .put('http://127.0.0.1:8000/api/admin/nhan-vien/change-statusNV', value)
                .then((res)=>{
                    if(res.data.status){
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadNhanVien();
                    }else{
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },

    },
}
</script>
<style ></style>