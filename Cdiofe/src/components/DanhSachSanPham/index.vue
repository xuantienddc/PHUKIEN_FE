<template >
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-danger shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header ">
                    <div class="row">
                        <div class="col-lg-4">
                            <h3>Danh sách sản phẩm</h3>
                        </div>
                        <div class="col-8 text-end"> <button class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Thêm sản
                                phẩm</button></div>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm sản phẩm</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mt-2">
                                        <label>Tên sản phẩm</label>
                                        <input tabindex="1" v-model="create_ds_san_pham.ten_san_pham" type="text"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>Hình ảnh</label>
                                        <input tabindex="2" v-model="create_ds_san_pham.hinh_anh" type="text"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>Giá bán</label>
                                        <input tabindex="3" v-model="create_ds_san_pham.gia_ban" type="number"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>Gía khuyến mãi</label>
                                        <input tabindex="4" v-model="create_ds_san_pham.gia_khuyen_mai" type="text"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>Mô tả</label>
                                        <input tabindex="5" v-model="create_ds_san_pham.mo_ta" type="text"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>ID danh mục</label>
                                        <input tabindex="6" v-model="create_ds_san_pham.id_danh_muc" type="number"
                                            class="form-control">
                                    </div>
                                    <div class="mt-2">
                                        <label>Tình Trạng</label>
                                        <select tabindex="7" v-model="create_ds_san_pham.tinh_trang"
                                            class="form-control mt-1">
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
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên sản phẩm
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Hình ảnh
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Mô tả
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Số Lượng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Giá bán
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Giá khuyến mãi
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
                                <template v-for="(v, k) in list_ds_san_pham">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ten_san_pham }}</td>
                                        <td class="align-middle text-nowrap"><img v-bind:src="v.hinh_anh"
                                                style="width: 50px; height: 50px;" alt=""></td>
                                        <td class="align-middle text-nowrap">{{ v.gia_ban }}</td>
                                        <td class="align-middle text-nowrap">{{ v.gia_khuyen_mai }}</td>
                                        <td class="align-middle text-nowrap">{{ v.mo_ta }}</td>
                                        <td class="align-middle text-nowrap">{{ v.id_danh_muc }}</td>
                                        <td class="align-middle text-nowrap text-center ">
                                            <button  @:click="changeTrangThai(v)"  v-if="v.tinh_trang == 1" class="btn btn-success ">Hoạt Động</button>
                                            <button @:click="changeTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center d-flex justify-content-around ">
                                            <button @:click="Object.assign(update_ds_san_pham, v); is_viewSP_update = 1"
                                                class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập Nhật</button>
                                            <button @:click='Object.assign(delete_ds_san_pham, v)' class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#deleteModalSP">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                                <!-- Modal Delete -->
                                <div class="modal fade" id="deleteModalSP" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                                                                Bạn có chắc chắn muốn xóa danh mục <b>{{
                                                                    delete_ds_san_pham.ten_san_pham }}</b> này
                                                                không?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button @:click="delSanPham()" type="button" data-bs-dismiss="modal"
                                                    class="btn btn-danger">Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal UPDATE -->
                                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật danh mục
                                                    này không</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mt-2">
                                                    <label>Tên sản phẩm</label>
                                                    <input tabindex="1" 
                                                        v-model="update_ds_san_pham.ten_san_pham" type="text"
                                                        class="form-control">
                                                </div>
                                                
                                                <div class="mt-2">
                                                    <label>Hình ảnh</label>
                                                    <input tabindex="2" v-model="update_ds_san_pham.hinh_anh" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Giá bán</label>
                                                    <input tabindex="3" v-model="update_ds_san_pham.gia_ban" type="number"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Gía khuyến mãi</label>
                                                    <input tabindex="4" v-model="update_ds_san_pham.gia_khuyen_mai" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Mô tả</label>
                                                    <input tabindex="5" v-model="update_ds_san_pham.mo_ta" type="text"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>ID danh mục</label>
                                                    <input tabindex="6" v-model="update_ds_san_pham.id_danh_muc" type="number"
                                                        class="form-control">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Tình Trạng</label>
                                                    <select tabindex="7" v-model="update_ds_san_pham.tinh_trang"
                                                        class="form-control mt-1">
                                                        <option value="1">Hoạt động</option>
                                                        <option value="0">Không hoạt động</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-if="is_viewSP_update == 0" @:click="update_ds_san_pham()"
                                                    type="button" data-bs-dismiss="modal" class="btn btn-danger"
                                                    disabled>Update</button>
                                                <button v-else @:click="accpectUpdateSP()" type="button"
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
import axios from 'axios';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    data() {
        return {
            list_ds_san_pham: [],
            create_ds_san_pham: {
                'ten_san_pham': '',
                'hinh_anh': '',
                'gia_ban': '',
                'gia_khuyen_mai': '',
                'mo_ta': '',
                'id_danh_muc': '',
                'tinh_trang': '',
            },
            is_viewSP: 1,
            is_viewSP_update: 1,
            delete_ds_san_pham: {
                'ten_san_pham': '',
                'hinh_anh': '',
                'gia_ban': '',
                'gia_khuyen_mai': '',
                'mo_ta': '',
                'id_danh_muc': '',
                'tinh_trang': '',
            },
            update_ds_san_pham: {
                'ten_san_pham': '',
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
                .get('http://127.0.0.1:8000/api/admin/danh-sach-san-pham/data')
                .then((res) => {
                    this.list_ds_san_pham = res.data.data;
                });
        },
        createSanPham() {
            axios
                .post('http://127.0.0.1:8000/api/admin/danh-sach-san-pham/create', this.create_ds_san_pham)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo')
                        this.loadSanPham();
                        this.create_ds_san_pham = {};
                    }
                });
        },
        delSanPham() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/danh-sach-san-pham/delete/' + this.delete_ds_san_pham.id)
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
                .put('http://127.0.0.1:8000/api/admin/danh-sach-san-pham/update', this.update_ds_san_pham)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadSanPham();
                    } else {
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
        changeTrangThai(value){
            axios
                .put('http://127.0.0.1:8000/api/admin/danh-sach-san-pham/change-statusSP', value)
                .then((res)=>{
                    if(res.data.status){
                        toastr.success(res.data.message, 'Thông báo');
                        this.loadSanPham();
                    }else{
                        toastr.error(res.data.message, 'Thông báo');
                    }
                });
        },
    },

}
</script>
<style ></style>