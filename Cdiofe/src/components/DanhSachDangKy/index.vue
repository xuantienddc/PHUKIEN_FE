<template >
    <div class="row">
        <div class="col-lg">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Họ và Tên
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Email
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Số điện thoại
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Ngày sinh
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Doanh Nghiệp
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Mã số thuế
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Địa chỉ Kinh Doanh
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <template v-for="(v, k) in list_dang_ky">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ho_va_ten }}</td>
                                        <td class="align-middle text-nowrap">{{ v.email }}</td>
                                        <td class="align-middle text-nowrap">{{ v.so_dien_thoai }}</td>
                                        <td class="align-middle text-nowrap">{{ v.ngay_sinh }}</td>
                                        <td class="align-middle text-nowrap">{{ v.ten_doanh_nghiep }}</td>
                                        <td class="align-middle text-nowrap">{{ v.ma_so_thue }}</td>
                                        <td class="align-middle text-nowrap">{{ v.dia_chi_kinh_doanh }}</td>
                                        <td class="align-middle text-nowrap text-center d-flex justify-content-around">
                                            <button @:click="Object.assign(update_dang_ky, v); is_view_update = 1" class='btn btn-primary' data-bs-toggle="modal"
                                                data-bs-target="#updateModalTaiKhoan">Cập Nhật</button>
                                            <button @:click="Object.assign(delete_dang_ky, v)" class='btn btn-danger' data-bs-toggle="modal"
                                                data-bs-target="#delTaiKhoan">Xóa</button>

                                        </td>
                                    </tr>
                                </template>
                                <!-- Modal Update -->
                                <div class="modal fade" id="updateModalTaiKhoan" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Họ và tên</label>
                                                            <input tabindex="1" v-model="update_dang_ky.ho_va_ten"
                                                                type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Email</label>
                                                            <input tabindex="2" v-on:keyup="checkEmailDKUpdate()" v-model="update_dang_ky.email" type="email"
                                                                class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Số điện thoại</label>
                                                            <input tabindex="3" v-model="update_dang_ky.so_dien_thoai"
                                                                type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Ngày sinh</label>
                                                            <input tabindex="4" v-model="update_dang_ky.ngay_sinh"
                                                                type="date" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="mt-2">
                                                            <label>Mật khẩu</label>
                                                            <input tabindex="5" v-model="update_dang_ky.password"
                                                                type="password" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Tên doanh nghiệp</label>
                                                            <input tabindex="6" v-model="update_dang_ky.ten_doanh_nghiep"
                                                                type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mt-2">
                                                            <label>Mã số thuế</label>
                                                            <input tabindex="7" v-model="update_dang_ky.ma_so_thue"
                                                                type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="mt-2">
                                                            <label>Loại hình doanh nghiệp</label>
                                                            <select class="form-control" name="" id="">
                                                                <option value="1">Cá nhân</option>
                                                                <option value="">Công ty</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="mt-2">
                                                            <label>Địa chỉ kinh doanh</label>
                                                            <input tabindex="9" v-model="update_dang_ky.dia_chi_kinh_doanh"
                                                                type="text" class="form-control">
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button v-if="is_view_update == 0" @:click="update_dang_ky()"
                                                        type="button" data-bs-dismiss="modal" class="btn btn-danger"
                                                        disabled>Update</button>
                                                    <button v-else @:click="accpectUpdate()" type="button"
                                                        data-bs-dismiss="modal" class="btn btn-info">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="delTaiKhoan" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa nhận xóa tài khoản
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
                                                                Bạn có chắc chắn muốn xóa <b>{{ delete_dang_ky.ho_va_ten
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
            list_dang_ky: [],
            create_dang_ky: {
                'ho_va_ten': '',
                'email': '',
                'so_dien_thoai': '',
                'ngay_sinh': '',
                'password': '',
                'ten_doanh_nghiep': '',
                'ma_so_thue': '',
                'dia_chi_kinh_doanh': '',
            },
            update_dang_ky: {
                'ho_va_ten': '',
                'email': '',
                'so_dien_thoai': '',
                'ngay_sinh': '',
                'password': '',
                'ten_doanh_nghiep': '',
                'ma_so_thue': '',
                'dia_chi_kinh_doanh': '',
            },
            delete_dang_ky: {
                'ho_va_ten': '',
                'email': '',
                'so_dien_thoai': '',
                'ngay_sinh': '',
                'password': '',
                'ten_doanh_nghiep': '',
                'ma_so_thue': '',
                'dia_chi_kinh_doanh': '',
            },
            is_view: 0,
            is_view_update: 0,
        }
    },
    mounted() {
        this.loadDangKy();
    },
    methods: {
        loadDangKy() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tai-khoan/data')
                .then((res) => {
                    this.list_dang_ky = res.data.data;
                });
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
        checkEmailDKUpdate() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tai-khoan/check-email-update', this.update_dang_ky)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_view_update = 0;
                        toastr.error('Email này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_view_update = 1;
                        toastr.success('Bạn có thể sử dụng Email này!!', 'Thông báo');
                    }

                });
            this.is_view_update = 1;
        },
        accpectUpdate() {
            axios
                .put('http://127.0.0.1:8000/api/admin/tai-khoan/update', this.update_dang_ky)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadDangKy();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
        delNhanVien() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/tai-khoan/delete/' + this.delete_dang_ky.id)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadDangKy();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
    }
}
</script>
<style lang="">
    
</style>