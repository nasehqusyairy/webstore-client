import Link from "next/link";

function RegisterPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" id="auth">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <form>
                <h3>Sign Up</h3>
                <hr />
                <div id="alert" className="alert alert-danger alert-dismissible fade show d-none" role="alert">
                  Password does not match
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="verify_password">Verify Password</label>
                  <input type="password" name="verify_password" id="verify_password" className="form-control" required />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Submit</button>
                  <p className="text-center">
                    Already have an account? <Link href="/auth">Sign In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;