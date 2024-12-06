<template >
    <div class="card">
       <div class="card-header">
        <h3>Danh Mục Sản Phẩm</h3>
       </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered  ">
                    <thead>
                        <th>#</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình Anh</th>
                        <th>Mô Tả</th>
                        <th>Số Lượng Nhập</th>
                        <th>Giá Bán</th>
                        <th>Giá Khuyến Mãi</th>
                        <th>Tình Trạng</th>
                        <th>Action</th>
                        
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>tai nghe</td>
                        <td><img class="img-fluid " style="height: 100px; width: 100px;"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEW_7QP3lU9IJ40jncBkmICrgpNDxPQYHnw&usqp=CAU"
                                alt=""></td>
                        <td>bền</td>
                        <td>100</td>
                        <td>1200</td>
                        <td>1000</td>
                        <td>Còn Hàng </td>
                        <td class="mt-2">
                            <button class="btn btn-danger m-2 " data-bs-toggle="modal"
                                data-bs-target="#deleteModal">Xóa</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#updataModal">
                                Cập Nhật
                            </button>
                        </td>
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
                                        <button type="button" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                    <tbody>
                        <td>1</td>
                        <td>tai nghe</td>
                        <td><img class="img-fluid " style="height: 100px; width: 100px;"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEW_7QP3lU9IJ40jncBkmICrgpNDxPQYHnw&usqp=CAU"
                                alt=""></td>
                        <td>bền</td>
                        <td>100</td>
                        <td>1200</td>
                        <td>1000</td>
                        <td>Còn Hàng </td>
                        <td class="mt-2">
                            <button class="btn btn-danger m-2" data-bs-toggle="modal"
                                data-bs-target="#deleteModal">Xóa</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#updataModal">
                                Cập Nhật
                            </button>
                        </td>
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
                                        <button type="button" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                    <tbody>
                        <td>1</td>
                        <td>tai nghe</td>
                        <td><img class="img-fluid " style="height: 100px; width: 100px;"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEW_7QP3lU9IJ40jncBkmICrgpNDxPQYHnw&usqp=CAU"
                                alt=""></td>
                        <td>bền</td>
                        <td>100</td>
                        <td>1200</td>
                        <td>1000</td>
                        <td>Còn Hàng </td>
                        <td class="mt-2">
                            <button class="btn btn-danger m-2" data-bs-toggle="modal"
                                data-bs-target="#deleteModal">Xóa</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#updataModal">
                                Cập Nhật
                            </button>
                        </td>
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
                                        <button type="button" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody> <tbody>
                        <td>1</td>
                        <td>tai nghe</td>
                        <td><img class="img-fluid " style="height: 100px; width: 100px;"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEW_7QP3lU9IJ40jncBkmICrgpNDxPQYHnw&usqp=CAU"
                                alt=""></td>
                        <td>bền</td>
                        <td>100</td>
                        <td>1200</td>
                        <td>1000</td>
                        <td>Còn Hàng </td>
                        <td class="mt-2">
                            <button class="btn btn-danger m-2" data-bs-toggle="modal"
                                data-bs-target="#deleteModal">Xóa</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#updataModal">
                                Cập Nhật
                            </button>
                        </td>
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
                                        <button type="button" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>

                </table>
            </div>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style ></style>