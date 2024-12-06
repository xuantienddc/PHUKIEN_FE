<template >
<div class="card">
 <div class="card-header">
  <h3>ĐƠN MUA</h3>
 </div>
 <div class="card-body">
  <table class="table table-bordered ">
    <thead>
      <tr>
        <th>#</th>
        <th>Chờ Xác Nhận</th>
        <th>Chờ Lấy Hàng</th>
        <th>Chờ Giao Hàng</th>
        <th>Đã Giao</th>
        <th>Đã Hủy</th>
        <th>Trả Hàng</th>
      </tr>
    </thead>
   <template v-for="(v,k) in list_don_hang">
    <tbody>
      <tr>
        <td>{{ k+1 }}</td>
        <td>
          <button v-if="v.cho_xac_nhan == 1" class="btn btn-info "> Đã Xác Nhận</button>
          <button v-else class="btn btn-danger ">Chưa Xác Nhận </button>
        </td>
        <td>
          <button v-if="v.cho_lay_hang == 1" class="btn btn-info ">Đang Chờ lấy Hàng</button>
          <button v-else class="btn btn-danger ">Hàng Chưa Có</button>
        </td>
        <td>
          <button v-if="v.cho_giao_hang == 1" class="btn btn-info "> Giao Hàng Trong Hôm nay</button>
          <button v-else class="btn btn-danger ">Dự Kiến Hôm Sau</button>
        </td>
        <td>{{ v.da_giao }}</td>
        <td>{{ v.da_huy }}</td>
        <td>{{ v.tra_hang }}</td>
      </tr>
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
            list_don_hang:[],
        }
    },
    mounted() {
        this.loadDonHang()
    },
    methods: {
        loadDonHang(){
            axios
				.get('http://127.0.0.1:8000/api/don-hang/data')
				.then((res) =>{
					this.list_don_hang = res.data.data
				});
		}
    }
}
</script>
<style ></style>