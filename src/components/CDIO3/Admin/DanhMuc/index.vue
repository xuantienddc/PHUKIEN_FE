<template >
    <div class="card">
       <div class="card-header">
        <h3>Danh Mục Sản Phẩm</h3>
       </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered  ">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình Anh</th>
                        <th>Mô Tả</th>
                        <th>Số Lượng Nhập</th>
                        <th>Giá Bán</th>
                        <th>Giá Khuyến Mãi</th>
                        <th>Tình Trạng</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <template v-for="(v,k) in list_danh_muc">
                        <tbody>
                            <tr>  
                        <td>{{ k+1 }}</td>
                        <td>{{ v.ten_san_pham }}</td>
                        <td><img class="img-fluid " style="height: 100px; width: 100px;"
                                v-bind:src="v.hinh_anh"
                                alt=""></td>
                        <td>{{ v.mo_ta }}</td>
                        <td>{{ v.so_luong_nhap }}</td>
                        <td>{{ v.gia_ban }}</td>
                        <td>{{ v.gia_khuyen_mai }}</td>
                        <td>{{ v.tinh_trang }} </td>
                        <td class="mt-2">
                            <button class="btn btn-danger m-2 " data-bs-toggle="modal"
                                data-bs-target="#deleteModal">Xóa</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#updataModal">
                                Cập Nhật
                            </button>
                        </td>
                    </tr>
                        <div class="modal fade" id="updataModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label for="">Tên Sản Phẩm</label>
                                        <input type="text" class="form-control " placeholder="">


                                        <label for="">Hình Anh</label>
                                        <input type="text" class="form-control " placeholder="">
                                        <label for="">Mô Tả</label>
                                        <input type="text" class="form-control " placeholder="">
                                        <label for="">Số Lượng Nhập</label>
                                        <input type="text" class="form-control " placeholder="">
                                        <label for="">Gía Bán</label>
                                        <input type="text" class="form-control " placeholder="">
                                        <label for="">Gía Khuyến Mãi</label>
                                        <input type="text" class="form-control " placeholder="">
                                        <label for="">Tình Trạng</label>
                                        <input type="text" class="form-control " placeholder="">


                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h2>LƯU Ý!</h2>
                                        Bạn có chắc chắn muốn xóa không??
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:Click="accpectDel()" type="button" class="btn btn-primary">Xác Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                    </template>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
axios
export default {
data() {
    return {
        list_danh_muc: [],
        delete_danh_muc: {},
    }
},
mounted() {
    this.loadDanhMuc()
},
methods: {
    loadDanhMuc(){
			axios
				.get('http://127.0.0.1:8000/api/danh-muc/data')
				.then((res) =>{
					this.list_danh_muc = res.data.data
				})

    },
    accpectDel() {
            baseRequest
                .delete('http://127.0.0.1:8000/api/danh-muc/delete/' + this.delete_danh_muc.id)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDanhMuc();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },

},

}
</script>
<style ></style>