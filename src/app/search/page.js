function SearchPage() {
  return (
    <main className="py-3 bg-light">

      <section>
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <form className="input-group">
                <select name="category" id="category" className="form-select" defaultValue={1}>
                  <option value="1">Gadgets</option>
                  <option value="2">Books</option>
                  <option value="3">Foods</option>
                  <option value="4">Outfits</option>
                </select>
                <input type="search" name="search" id="search" className="form-control" placeholder="Search here..." />
                <button className="btn btn-primary">Search</button>
              </form>
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
  );
}

export default SearchPage;