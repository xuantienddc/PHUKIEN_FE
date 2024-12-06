<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                <div class="col mx-auto">
                    <div class="mb-4 text-center">
                        <img src="../../../assets/images/logo-img.png" width="180" alt="" />
                    </div>
                    <div class="card">

                        <div class="card-header text-center">
                            <h3>Đăng ký</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Họ và tên</label>
                                        <input tabindex="1" v-model="create_dang_ky.ho_va_ten" type="text"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Email</label>
                                        <input tabindex="2" v-model="create_dang_ky.email" type="email"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Số điện thoại</label>
                                        <input tabindex="3" v-model="create_dang_ky.so_dien_thoai" type="text"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Ngày sinh</label>
                                        <input tabindex="4" v-model="create_dang_ky.ngay_sinh" type="date"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mt-2">
                                        <label>Mật khẩu</label>
                                        <input tabindex="5" v-model="create_dang_ky.password" type="password"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mt-2">
                                        <label> Nhập lại mật khẩu</label>
                                        <input tabindex="5" v-model="create_dang_ky.re_password" type="password"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Tên doanh nghiệp</label>
                                        <input tabindex="6" v-model="create_dang_ky.ten_doanh_nghiep" type="text"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mt-2">
                                        <label>Mã số thuế</label>
                                        <input tabindex="7" v-model="create_dang_ky.ma_so_thue" type="text"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="mt-2">
                                        <label>Địa chỉ kinh doanh</label>
                                        <input tabindex="9" v-model="create_dang_ky.dia_chi_kinh_doanh" type="text"
                                            class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class=" d-grid gap-2 m-3">
                                <button class="btn btn-primary" @:click="createDangky()" type="button"><i
                                        class="fa-solid fa-user"></i>Đăng ký</button>                             
                            </div>
                            <div class="d-grid gap-2 m-3">
                                <router-link to="/dai-ly/dang-nhap"><button class="btn btn-secondary" type="button"><i
                                            class="fa-solid fa-arrow-left"></i>Quay lại đăng nhập</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            create_dang_ky: {},

        }

    },

    methods: {
        createDangky() {
            axios
                .post('http://127.0.0.1:8000/api/dai-ly/tao-tai-khoan', this.create_dang_ky)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_dang_ky = {};
                    }

                });
        },

    }
}
</script>
<style></style>