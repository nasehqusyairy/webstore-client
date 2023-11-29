function AddressPage(){
    return(
 <main className="py-3 bg-light">
    <div className="container">
      <h1>Shipping Addresses</h1>
      <hr>
      </hr>
      <div className="mb-3">
        <button className="btn btn-primary">New Address</button>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Place Name</th>
                  <th>PO. Box Number</th>
                  <th>Street Name</th>
                  <th>City</th>
                  <th>Province</th>
                  <th>Post Code</th>
                  <th>Country</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>PP. Madinatul Auliya' Al-Ma'mun</td>
                  <td>-</td>
                  <td>Jl. Raya Candi VB</td>
                  <td>Malang City</td>
                  <td>East Java</td>
                  <td>65149</td>
                  <td>Indonesia</td>
                  <td>
                    <button className="btn btn-sm btn-warning mb-3">Edit</button>
                    <button className="btn btn-sm btn-danger mb-3">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mabna Al-Ghazali, UIN Maulana Malik Ibrahim Malang</td>
                  <td>50</td>
                  <td>Jl. Gajayana</td>
                  <td>Malang City</td>
                  <td>East Java</td>
                  <td>65144</td>
                  <td>Indonesia</td>
                  <td>
                    <button className="btn btn-sm btn-warning mb-3">Edit</button>
                    <button className="btn btn-sm btn-danger mb-3">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
  </main>
    );
}
export default AddressPage;