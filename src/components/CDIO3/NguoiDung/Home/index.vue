<template>
    <div class="row">
        <div class="col-lg-6">
            <div id="carouselExampleIndicators" class="carousel slide ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-4">
                    <div class="carousel-item active">
                        <img src="../../../../1cd.png" class="d-block w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../1cd.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../1cd.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="col-lg-6">
            <div id="carouselExampleIndicators1" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-4">
                    <div class="carousel-item active">
                        <img src="../../../../1cd.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../1cd.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../1cd.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <div class="mt-2"><a>
            <h3><b>Danh mục phụ kiện</b></h3>
        </a></div>
    <hr>
    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 mt-3 product-grid">
        <div class="col">
            <div class="card radius-10">
                <div class="card-body border border-secondary  ">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"><i
                                class="fa-solid fa-satellite-dish"></i>
                        </div>
                        <h4 class="my-1">Sales</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body border border-secondary">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><i
                                class="fa-solid fa-ticket"></i>
                        </div>
                        <h4 class="my-1">Voucher</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body border border-secondary">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-info text-info mb-3"><i
                                class="fa-solid fa-globe"></i>
                        </div>
                        <h4 class="my-1">Hàng Quốc Tế</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col ">
            <div class="card radius-10">
                <div class="card-body border border-secondary">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-success text-success mb-3"><i
                                class="fa-solid fa-warehouse"></i>
                        </div>
                        <h4 class="my-1">Xả Kho</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body border border-secondary">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-warning text-warning mb-3"><i
                                class="fa-brands fa-aws"></i>
                        </div>
                        <h4 class="my-1">Dịch Vụ</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="block-customized-product-list__title"><img src="../../../../16.png" style="width: 1270px;"
                alt="Phụ kiện điện thoại" loading="lazy" class="title__banner is-flex"></div>
    </div>
    <div class="mt-2"><a>
            <h3><b>Sản phẩm nổi bật</b></h3>
        </a></div>
    <hr>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid">
        <template v-for="(v,k) in list_san_pham">
            
            <div class="col">
 
            <div class="card" style="height: 500px; width: 300px;" >
                <img v-bind:src="v.hinh_anh" class="card-img-top img-fluid "  alt="...">
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <h6 class="card-title cursor-pointer">{{ v.ten_san_pham }}</h6>
                    <div class="clearfix">
                        <p class="mb-0 float-start"><strong>{{ v.so_luong }}</strong> Sales</p>
                        <p class="mb-0 float-end fw-bold"><span
                                class="me-2 text-decoration-line-through text-secondary">{{ v.gia_ban }}</span><span>{{ v.gia_khuyen_mai }}</span></p>
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
                            <button class="btn btn-primary  " data-bs-toggle="modal"
                                        data-bs-target="#muaModal">Mua</button>
                            <button class="btn btn-info m-2  ">Thêm Giỏ
                                        Hàng</button>
                                        
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
                                                    <button type="button" class="btn btn-primary">Xác Nhận Đặt Hàng </button>
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
</div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_san_pham: [],
        }
    },
    mounted() {
        this.loadSanPham()
    },
    methods: {
        loadSanPham(){
			axios
				.get('http://127.0.0.1:8000/api/phu-kien/data')
				.then((res) =>{
					this.list_san_pham = res.data.data
				})
		}
    },

}
</script>
<style></style>