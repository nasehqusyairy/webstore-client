
function CardPage() {
    return(

        <main className="py-3 bg-light">
    <div className="container">
      <h1>Credit/Debit</h1>
      <hr/>
      <div className="mb-3">
        <button className="btn btn-primary">New Card</button>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Card Number</th>
                  <th>Expiry Date</th>
                  <th>CVV</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Joe Doe</td>
                  <td>1234 5678 9012 3456</td>
                  <td>12/24</td>
                  <td>123</td>
                  <td>123 Main St, New York, NY 10030</td>
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
export default CardPage;
