import productImg from '@/img/product.jpg';

function CartPage() {
  return (
    <main className="py-3 bg-light">

      <div className="container">
        <h1>My Cart</h1>
        <hr />
        <div className="row">

          <div className="col-12 col-md-8 mb-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 col-lg-3 mb-3 m-md-0">
                    <img src={productImg.src} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <h3 className="m-0">Product Name</h3>
                    <p>Rp. <del>3.000.000</del> 1.500.000</p>
                    <p>Stock : 10</p>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
                      <input type="number" className="form-control text-center" />
                      <button className="btn btn-primary" type="button"><i className="bi bi-plus"></i></button>
                    </div>
                    <span>Total: Rp. 7.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 col-lg-3 mb-3 m-md-0">
                    <img src={productImg.src} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <h3 className="m-0">Product Name</h3>
                    <p>Rp. 50.000</p>
                    <p>Stock : 50</p>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
                      <input type="number" className="form-control text-center" />
                      <button className="btn btn-primary" type="button"><i className="bi bi-plus"></i></button>
                    </div>
                    <span>Total: Rp. 150.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 col-lg-3 mb-3 m-md-0">
                    <img src={productImg.src} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <h3 className="m-0">Product Name</h3>
                    <p>Rp. 100.000</p>
                    <p>Stock : 25</p>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
                      <input type="number" className="form-control text-center" />
                      <button className="btn btn-primary" type="button"><i className="bi bi-plus"></i></button>
                    </div>
                    <span>Total: Rp. 400.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 col-lg-3 mb-3 m-md-0">
                    <img src={productImg.src} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <h3 className="m-0">Product Name</h3>
                    <p>Rp. 1.000</p>
                    <p>Stock : 3</p>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
                      <input type="number" className="form-control text-center" />
                      <button className="btn btn-primary" type="button" disabled><i className="bi bi-plus"></i></button>
                    </div>
                    <span>Total: Rp. 3.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 col-lg-3 mb-3 m-md-0">
                    <img src={productImg.src} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <h3 className="m-0">Product Name</h3>
                    <p>Rp. 500</p>
                    <p>Stock : 2</p>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
                      <input type="number" className="form-control text-center" />
                      <button className="btn btn-primary" type="button" disabled><i className="bi bi-plus"></i></button>
                    </div>
                    <span>Total: Rp. 1.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md mb-3">
            <div className="card mb-3">
              <div className="card-body">
                <h3>Shipping</h3>
                <hr />
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <select className="form-select" name="address" id="address">
                    <option value="1">PP. Madinatul Auliya' Al-Ma'mun</option>
                    <option value="2">Mabna Al-Ghazali, UIN Maulana Malik Ibrahim Malang</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="option">Shipping Option</label>
                  <select className="form-select" name="option" id="option">
                    <option value="1">Regular - Rp. 161.000</option>
                    <option value="2">Cargo - Rp. 36.000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="payment">Payment Method</label>
                  <select className="form-select" name="payment" id="payment">
                    <option value="1">COD</option>
                    <option value="2">Cedit/Debit</option>
                  </select>
                </div>

              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>Overview</h3>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price ( 17 items )
                    <span className="badge bg-primary">Rp. 15.554.000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Discount
                    <span className="badge bg-primary">- Rp. 7.500.000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Shipping Cost
                    <span className="badge bg-primary">Rp. 161.000</span>
                  </li>
                </ul>
                <hr />
                <p className="m-0">Grand Total :</p>
                <h3 className="text-primary">Rp. 8.215.000</h3>
                <hr />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default CartPage;