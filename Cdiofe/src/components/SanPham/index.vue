<template>
    <div class="col-lg-12">
        <div class="card border-top border-0 border-4 border-danger shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card-body ">
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-8 text-end"> <button class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">Thêm sản
                            phẩm</button></div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mt-2">
                                    <label>Tên sản phẩm</label>
                                    <input tabindex="1" v-on:change="checkSlug()" v-on:keyup="createSlug()"
                                        v-model="create_san_pham.ten_san_pham" type="text" class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Slug sản phẩm</label>
                                    <input v-on:change="checkSlug()" v-model="create_san_pham.slug_san_pham" type="text"
                                        class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Hình ảnh</label>
                                    <input tabindex="2" v-model="create_san_pham.hinh_anh" type="text" class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Giá bán</label>
                                    <input tabindex="3" v-model="create_san_pham.gia_ban" type="number"
                                        class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Gía khuyến mãi</label>
                                    <input tabindex="4" v-model="create_san_pham.gia_khuyen_mai" type="text"
                                        class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Mô tả</label>
                                    <input tabindex="5" v-model="create_san_pham.mo_ta" type="text" class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>ID danh mục</label>
                                    <input tabindex="6" v-model="create_san_pham.id_danh_muc" type="number"
                                        class="form-control">
                                </div>
                                <div class="mt-2">
                                    <label>Tình Trạng</label>
                                    <select tabindex="7" v-model="create_san_pham.tinh_trang" class="form-control mt-1">
                                        <option value="1">Hoạt động</option>
                                        <option value="0">Không hoạt động</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <div class="mt-2 text-end">
                                    <button v-if="is_viewSP == 1" @:click="createSanPham()" class="btn btn-success"
                                        data-bs-dismiss="modal">Thêm sản phẩm</button>
                                    <button v-else class="btn btn-danger" data-bs-dismiss="modal" disabled>Thêm sản
                                        phẩm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 product-grid ">
        <template v-for="(v, k) in list_san_pham">
            <div class="col-lg">
                <div class="card ">
                    <img v-bind:src="v.hinh_anh" class="card-img-top  " alt="...">
                    <div class="card-body">
                        <h7 class="card-title cursor-pointer">{{ v.ten_san_pham }}</h7><br>
                        <div class="clearfix">
                            <p class="mb-0 float-end fw-bold"><span
                                    class="me-2 text-decoration-line-through text-secondary">{{ v.gia_ban }}đ</span><span>{{
                                        v.gia_khuyen_mai }}đ</span>
                            </p>
                        </div>
                        <div class="d-flex align-items-center mt-0 fs-6">
                            <p class="mb-0 ms-auto">{{ v.mo_ta }}</p>
                        </div>
                        <p class="mb-0 float-start"><strong>{{ v.slug_san_pham }}</strong></p>
                    </div>
                    <div class="card-body">
                        <div class="text-nowrap text-center d-flex justify-content-around">
                            <button @:click="Object.assign(update_san_pham, v); is_viewSP_update = 1" class="btn btn-primary"
                                data-bs-toggle="modal" data-bs-target="#updateModal">Cập nhật</button>
                            <button @:click='Object.assign(delete_san_pham, v)' class="btn btn-danger"
                                data-bs-toggle="modal" data-bs-target="#deleteModalSP">Xóa</button>
                        </div>
                    </div>
                </div>

            </div>
        </template>
        <!-- Modal Delete -->
        <div class="modal fade" id="deleteModalSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa danh mục
                            này không</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0 text-dark">Danger Alerts</h6>
                                    <div class="text-dark">
                                        Bạn có chắc chắn muốn xóa danh mục <b>{{ delete_san_pham.ten_san_pham }}</b> này
                                        không?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @:click="delSanPham()" type="button" data-bs-dismiss="modal"
                            class="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal UPDATE -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật danh mục
                            này không</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mt-2">
                            <label>Tên sản phẩm</label>
                            <input tabindex="1" v-on:change="checkSlugUpdate()" v-on:keyup="createSlugUpdate()"
                                v-model="update_san_pham.ten_san_pham" type="text" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Slug sản phẩm</label>
                            <input  v-on:change="checkSlugUpdate()" v-model="update_san_pham.slug_san_pham" type="text"
                                class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Hình ảnh</label>
                            <input tabindex="2" v-model="update_san_pham.hinh_anh" type="text" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Giá bán</label>
                            <input  tabindex="3" v-model="update_san_pham.gia_ban" type="number" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Gía khuyến mãi</label>
                            <input tabindex="4" v-model="update_san_pham.gia_khuyen_mai" type="text" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Mô tả</label>
                            <input tabindex="5" v-model="update_san_pham.mo_ta" type="text" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>ID danh mục</label>
                            <input tabindex="6" v-model="update_san_pham.id_danh_muc" type="number" class="form-control">
                        </div>
                        <div class="mt-2">
                            <label>Tình Trạng</label>
                            <select tabindex="7" v-model="update_san_pham.tinh_trang" class="form-control mt-1">
                                <option value="1">Hoạt động</option>
                                <option value="0">Không hoạt động</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-if="is_viewSP_update == 0" @:click="update_san_pham()" type="button" data-bs-dismiss="modal"
                            class="btn btn-danger" disabled>Update</button>
                        <button v-else @:click="accpectUpdateSP()" type="button" data-bs-dismiss="modal"
                            class="btn btn-info">Update</button>
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
            list_san_pham: [],
            create_san_pham: {
                'ten_san_pham': '',
                'slug_san_pham': '',
                'hinh_anh': '',
                'gia_ban': '',
                'gia_khuyen_mai': '',
                'mo_ta': '',
                'id_danh_muc': '',
                'tinh_trang': '',
            },
            delete_san_pham: {
                'ten_san_pham': '',
                'slug_san_pham': '',
                'hinh_anh': '',
                'gia_ban': '',
                'gia_khuyen_mai': '',
                'mo_ta': '',
                'id_danh_muc': '',
                'tinh_trang': '',
            },
            is_viewSP: 0,
            is_viewSP_update: 0,
            update_san_pham: {
                'ten_san_pham': '',
                'slug_san_pham': '',
                'hinh_anh': '',
                'gia_ban': '',
                'gia_khuyen_mai': '',
                'mo_ta': '',
                'id_danh_muc': '',
                'tinh_trang': '',
            },
        }
    },
    mounted() {
        this.loadSanPham();
    },
    methods: {
        loadSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/admin/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                });
        },
        createSanPham() {
            console.log('Lod ở trên');
            console.log(this.create_san_pham);
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/create', this.create_san_pham)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo')
                        this.loadSanPham();
                        this.create_san_pham = {};
                    }
                });
        },
        createSlug() {
            this.create_san_pham.slug_san_pham = this.toSlug(this.create_san_pham.ten_san_pham);

        },
        createSlugUpdate() {
            this.update_san_pham.slug_san_pham = this.toSlug(this.update_san_pham.ten_san_pham);

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
        checkSlug() {
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/check-slug', this.create_san_pham)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_viewSP = 0;
                        toastr.error('Slug này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_viewSP = 1;
                        toastr.success('Bạn có thể sử dụng slug này!!', 'Thông báo');
                    }

                });
            this.is_viewSP = 1;
        },
        checkSlugUpdate() {
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/check-slug-update', this.update_san_pham)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.is_viewSP_update = 0;
                        toastr.error('Slug này đã tồn tại!', 'Thông báo');
                    } else {
                        this.is_viewSP_update = 1;
                        toastr.success('Bạn có thể sử dụng slug này!!', 'Thông báo');
                    }
                });
            this.is_viewSP_update = 1;
        },
        delSanPham() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/san-pham/delete/' + this.delete_san_pham.id)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadSanPham();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
        accpectUpdateSP() {
            axios
                .put('http://127.0.0.1:8000/api/admin/san-pham/update', this.update_san_pham)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadSanPham();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
    },

}

</script>
<style></style>