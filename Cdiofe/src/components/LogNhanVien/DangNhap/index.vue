<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                <div class="col mx-auto">
                    <div class="mb-4 text-center">
                        <img src="../../../assets/images/logo.png" width="180" alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-3 rounded">
                                <div class="text-center">
                                    <h3 class="">ĐĂNG NHẬP NHÂN VIÊN</h3>
                                    <p>Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
                                    </p>
                                </div>
                                <div class="d-grid">
                                    <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                            class="d-flex justify-content-center align-items-center">
                                            <img class="me-2" src="../../../assets/images/icons/search.svg" width="16"
                                                alt="Image Description">
                                            <span>Sign in with Google</span>
                                        </span>
                                    </a> <a href="javascript:;" class="btn btn-facebook"><i class="bx bxl-facebook"></i>Sign
                                        in with Facebook</a>
                                </div>
                                <div class="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <div class="row lg-3">
                                        <div class="col-12">
                                            <label for="inputEmailAddress" class="form-label">Nhập tài khoản (email)</label>
                                            <input v-model="tai_khoan.email" type="email" class="form-control"
                                                id="inputEmailAddress" placeholder="Email Address">
                                        </div>
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Nhập mật khẩu</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="tai_khoan.password" type="password"
                                                    class="form-control border-end-0" id="inputChoosePassword"
                                                    placeholder="Enter Password">
                                                <a href="javascript:;" class="input-group-text bg-transparent"><i
                                                        class='bx bx-hide'></i></a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                                    checked>
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 text-end"> <a href="authentication-forgot-password.html">Quên
                                                mật khẩu ?</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button @:click="dangNhap()" type="button" class="btn btn-primary"><i
                                                        class="bx bxs-lock-open"></i>Đăng nhập</button>
                                            </div>
                                        </div>
                                        <router-link to="/nhan-vien/dang-ky">
                                            <div class="col-12">

                                                <div class="d-grid">
                                                    <button type="button" class="btn btn-danger"><i
                                                            class="fa-solid fa-arrow-left"></i>Đăng ký</button>

                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
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
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    data() {
        return {
            tai_khoan: {}
        }
    },
    methods: {
        dangNhap() {
            axios
                .post('http://127.0.0.1:8000/api/nhan-vien/dang-nhap', this.tai_khoan)
                .then((res) => {
                    if (res.data.status == 1) {
                        toastr.success(res.data.message, 'Thông báo');
                        localStorage.setItem('chia_khoa_16', res.data.chia_khoa);
                    } else if (res.data.status == 0) {
                        toastr.error(res.data.message, 'Thông báo');
                    } else {
                        toastr.warning(res.data.message, 'Thông báo');
                    }
                });
        },

    },
}
</script>
<style></style>