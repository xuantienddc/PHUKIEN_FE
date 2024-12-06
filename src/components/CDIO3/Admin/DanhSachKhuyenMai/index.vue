<template >
<div class="card">
    <div class="card-header">
        <h3>XEM KHUYẾN MÃI</h3>
    </div>
    <div class="card-body">
        <table class="table table-bordered ">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã Khuyến Mãi</th>
                    <th>Tên Khuyến Mãi</th>
                    <th>Ngày Bắt Đầu</th>
                    <th>Ngày Kết Thúc</th>
                    <th>Trang Thái</th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <template v-for="(v,k) in list_makm">
                <tbody>
                <tr>
                    <td>{{ k+1 }}</td>
                    <td>{{ v.ma_khuyen_mai }}</td>
                    <td>{{ v.ten_khuyen_mai }}</td>
                    <td>{{ v.ngay_bat_dau }}</td>
                    <td>{{ v.ngay_ket_thuc }}</td>
                    <td>
                        <button v-if="v.tinh_trang == 1" class="btn btn-info  m-2">Còn Hạn Sử Dụng</button>
                        <button v-else class="btn btn-danger">Hết Hạn Sử Dụng</button>
                    </td>
                    <td>
                        <button class="btn btn-primary m-2" data-bs-toggle="modal"
                                data-bs-target="#updataModal">Cập Nhật</button>
                        <button class="btn btn-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteModal" >Xóa</button>
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
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_makm:[],
        }
    },
    mounted() {
        this.loadKhuyenMai()
    },
    methods: {
        loadKhuyenMai(){
            axios
				.get('http://127.0.0.1:8000/api/ma-khuyen-mai/data')
				.then((res) =>{
					this.list_makm = res.data.data
				});
		}
    }
}
</script>
<style ></style>