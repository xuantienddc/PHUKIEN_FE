<template>
    <div class="col-lg-10">
        <button class="btn btn-info m-2  ">Thêm Giỏ
            Hàng</button>
        <button class="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#muaModal">Mua</button>
        <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Nhập Thông Tin
                            Nhận Hàng</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <label for="">Họ
                                    Và
                                    Tên</label>
                                <input type="text" class="form-control " placeholder="Họ Và Tên">
                            </div>
                            <div class="col">
                                <label for="">Số
                                    điện
                                    thoại</label>
                                <input type="text" class="form-control " placeholder="Số Điện Thoại">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <h2>Danh Sách Sale</h2>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBE_gQUl_QoS3w54R4wBvCpyS-5rLG_sxXag&usqp=CAU"
                            class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">Cục Sạc Dự Phòng SoNy Pin trâu đến
                                1000</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                                </p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-2">

                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                    <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                                    <div class="modal fade" id="muaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
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
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>