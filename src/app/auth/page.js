import Link from "next/link";

function LoginPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" id="auth">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <form>
                <h3>Sign In<i class="bi bi-airplane"></i></h3>
                <hr />
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                  You have successfully registered
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="form-control" />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Submit</button>
                  <p className="text-center">
                    Don't have an account yet? <Link href="/auth/register">Sign Up</Link>
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

export default LoginPage;