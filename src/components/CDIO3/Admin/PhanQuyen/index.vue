<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            Danh Sách Quyền
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="text-center text-nowrap align-middle">
                                            <th>#</th>
                                            <th>Tên Quyền</th>
                                            <th>Thêm quyền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Bán hàng</td>
                                            <td class="align-middle text-nowrap text-center">
                                            <button  class="btn btn-success m-2"><i class="fa-solid fa-share ms-2"></i></button>
                                           
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        Danh Sách Chức Năng
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="text-center text-nowrap align-middle">
                                            <th>#</th>
                                            <th>Mã Quyền</th>
                                            <th>Tên Quyền</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>001</td>
                                            <td>Bán hàng</td>
                                            <td class="align-middle text-nowrap text-center">
                                            <button  class="btn btn-success m-2">Đang hoạt động</button>
                                            <button  class="btn btn-warning">Tạm Tắt</button>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
</template>
<script>

export default {
    data() {
        return {

        }

    }
}
</script>
<style></style>