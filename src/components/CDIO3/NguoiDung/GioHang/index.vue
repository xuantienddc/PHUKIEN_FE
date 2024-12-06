<template >
    <div class="row">
        
            <div class="col-lg-7">
            <div class="card">
                <div class="card-header">
                    <h3>Tên Sản Phẩm Có Trong Giỏ Hàng</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered ">
                        <thead>
                            <tr>
                                <th colspan="7">
                                    <div class="row">
                                        <div class="col">
                                            <input style="height: 20px; width: 20px;" type="checkbox"> CHỌN TẤT CẢ
                                        </div>
                                        <div class="col text-end">
                                            <button class="btn btn-dark "><i class="fa-solid fa-trash"
                                                    style="height: 20px; width: 20px;"></i>XÓA</button>


                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr>

                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Đơn Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Tiền</th>
                                <th>Tình Trạng</th>
                            </tr>
                        </thead>
                        <template v-for="(v,k) in list_gio_hang">
                        <tbody>
                            <tr>
                                <td><input style="height: 20px; width: 20px;" type="checkbox"></td>
                                <td>{{ v.ten_san_pham }}</td>
                                <td>{{ v.don_gia }}</td>
                                <td>{{ v.so_luong }}</td>
                                <td>{{ v.tong_tien }}</td>
                                <td>
                                    <button v-if="v.tinh_trang == 1" class="btn btn-info m-2  ">Sản Phẩm Còn</button>
                                    <button v-else class="btn btn-danger  ">Sản Phẩm Hết~</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-dark m-2  "><i class="fa-solid fa-trash"></i></button>
                                    <button class="btn btn-primary "><i class="fa-solid fa-share"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                    </table>

                </div>
            </div>

        </div>
      
        <div class="col-lg-5">
            <div class="card">
                <div class="card-header">
                    <label for="">Địa Chỉ</label><br>
                    <i class="fa-solid fa-location-dot mt-2"></i><div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                        Nhập Thông Tin
                                                        Nhận Hàng</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <label for="">Họ
                                                                Và
                                                                Tên</label>
                                                            <input type="text" class="form-control "
                                                                placeholder="Họ Và Tên">
                                                        </div>
                                                        <div class="col">
                                                            <label for="">Số
                                                                điện
                                                                thoại</label>
                                                            <input type="text" class="form-control "
                                                                placeholder="Số Điện Thoại">
                                                        </div>
                                                    </div>
                                                    <div class="mt-2"><label for="">Địa
                                                            Chỉ</label>
                                                        <input type="text" class="form-control " placeholder="Địa Chỉ">
                                                    </div>
                                                    <div class="mt-2"><label for="">Địa
                                                            điểm cụ
                                                            thể</label>
                                                        <textarea class="form-control" id="inputProductDescription" rows="3"
                                                            placeholder="địa điểm cụ thể"></textarea>
                                                    </div>
                                                </div>
                </div>
                <div class="card-body">
                    <h4>THÔNG TIN ĐƠN HÀNG</h4>
                    <div class="row">
                        <div class="col">
                           <b> Tin Nhắn:<br>
                            Tổng Tiền:<br>
                            <i class="fa-solid fa-ticket m-1   "></i>Voucher:<br>
                            <i class="fa-regular fa-money-bill-1 m-1 "></i>Phương Thức Thanh Toán:</b>

                        </div>
                        <div class="col">
                            <input type="text" class="form-control " placeholder="Lưu ý cho người bán" >
                            <b style="color: red;" >81.000đ</b><br>
                            Chọn hoặc nhập mã<br>
                            <select class="form-control" name="Thanh Toán Khi Nhận Hàng" id="">
                                <option value="1">Thanh Toán Trước Qua Thẻ </option>
                                <option value="2">Thanh Toán Khi Nhận Hàng</option>
                            </select>


                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col">
                            <h5 class="mt-1">Tổng Thanh Toán <b style="color: red;">: xxxxđ</b></h5>
                        </div>
                        <div class="col">
                            <button class="btn btn-primary  form-control ">Đặt Hàng    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_gio_hang:[],
        }
    },
    mounted() {
        this.loadGioHang()
    },
    methods: {
        loadGioHang(){
            axios
				.get('http://127.0.0.1:8000/api/gio-hang/data')
				.then((res) =>{
					this.list_gio_hang = res.data.data
				});
		}
    }
}
</script>
<style ></style>