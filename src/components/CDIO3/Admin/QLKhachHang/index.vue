<template>
    <div class="row">
        <div class="col-12">
            <div class="card  shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách khách hàng</h5>
                        </div>
                        
                    </div>
                </div>
                
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="text-center align-middle">
                                    <th>#Mã khách hàng</th>
                                    <th>Họ Tên Khách Hàng</th>
                                    <th>Địa chỉ</th>
                                    <th>Email</th>
                                    <th>Giới tính</th>
                                    <th>Tình trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><th class="align-middle text-nowrap text-center">1</th>
                                <td class="align-middle text-nowrap">Nguyễn Văn A</td>
                                <td class="align-middle text-nowrap">32 Xuân Diệu</td>
                                <td class="align-middle text-nowrap">nguyenxuantien@gmail.com</td>
                                <td class="align-middle text-nowrap">Nam</td>
                                    <td class="align-middle text-nowrap text-center">
                                            <button  class="btn btn-success m-2">Đang hoạt động</button>
                                            <button  class="btn btn-warning">Tạm Tắt</button>
                                    </td></tr>
                                
                                    <tr><th class="align-middle text-nowrap text-center">2</th>
                                <td class="align-middle text-nowrap">Nguyễn Văn B</td>
                                <td class="align-middle text-nowrap">32 Xuân Diệu</td>
                                <td class="align-middle text-nowrap">nguyenxuantien123@gmail.com</td>
                                <td class="align-middle text-nowrap">Nam</td>
                                    <td class="align-middle text-nowrap text-center">
                                            <button  class="btn btn-success m-2">Đang hoạt động</button>
                                            <button  class="btn btn-warning">Tạm Tắt</button>
                                    </td></tr>
                                
                                
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
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
    
        }
    }
    </script>
    <style>
        
    </style>