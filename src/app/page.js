import promo1 from '@/img/promo1.png'
import promo2 from '@/img/promo2.png'
import promo3 from '@/img/promo3.png'
import promo4 from '@/img/promo4.png'

export default function Home() {
  return (
    <main className="pb-3 bg-light">

      <section className="bg-secondary mb-3">
        <div className="container">
          <div className="row align-items-center py-3 rounded">
            <div className="col-12 col-md-8 mb-3">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={promo1.src} className="d-block w-100 rounded" alt="..." />

                  </div>
                  <div className="carousel-item">
                    <img src={promo2.src} className="d-block w-100 rounded" alt="..." />

                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col 12 col-md-4 border-start">
              <img src={promo3.src} alt="" className="img-fluid rounded mb-3" />
              <img src={promo4.src} alt="" className="img-fluid rounded mb-3" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row flex-nowrap overflow-auto mb-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-primary border-primary">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col border-end">
                      <h3>Gadget</h3>
                      <a href="#">See more</a>
                    </div>
                    <div className="col-4 text-center">
                      <h1 className="bi bi-tv"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-primary border-primary">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col border-end">
                      <h3>Books</h3>
                      <a href="#">See more</a>
                    </div>
                    <div className="col-4 text-center">
                      <h1 className="bi bi-book"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-primary border-primary">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col border-end">
                      <h3>Foods</h3>
                      <a href="#">See more</a>
                    </div>
                    <div className="col-4 text-center">
                      <h1 className="bi bi-cup"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-primary border-primary">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col border-end">
                      <h3>Outfits</h3>
                      <a href="#">See more</a>
                    </div>
                    <div className="col-4 text-center">
                      <h1 className="bi bi-suitcase"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>
                    <span className="badge text-bg-primary">50% Off</span>
                  </h5>
                  <p className="card-text">Rp. <del>3.000.000</del> 1.500.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>
                    <span className="badge text-bg-primary">50% Off</span>
                  </h5>
                  <p className="card-text">Rp. <del>3.000.000</del> 1.500.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>
                    <span className="badge text-bg-primary">50% Off</span>
                  </h5>
                  <p className="card-text">Rp. <del>3.000.000</del> 1.500.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/500" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>

                  </h5>
                  <p className="card-text">Rp. 3.000.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/250" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>

                  </h5>
                  <p className="card-text">Rp. 3.000.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/350" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>

                  </h5>
                  <p className="card-text">Rp. 3.000.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/450" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>

                  </h5>
                  <p className="card-text">Rp. 3.000.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img src="https://picsum.photos/600" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="d-flex justify-content-between">
                    <span className="card-title m-0">Product Name</span>

                  </h5>
                  <p className="card-text">Rp. 3.000.000</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
