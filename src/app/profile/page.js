import profileImg from '@/img/profile.jpg';

function ProfilePage() {
  return (
    <main className="py-3 bg-light">
      <div className="container">
        <h1>My Profile</h1>
        <hr />
        <form className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={profileImg.src} alt="" className="img-fluid img-thumbnail mb-3" id="img-preview" />
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">Profile Picture</label>
                  <input className="form-control" name="img" type="file" id="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md mb-3">
            <div className="card">
              <div className="card-body">
                <h3>Edit Profile</h3>
                <hr />
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" name="phone" id="phone" className="form-control" />
                </div>
                <h3>Change Password</h3>
                <hr />
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="verify_password">Verify Password</label>
                  <input type="verify_password" name="verify_password" id="verify_password" className="form-control" />
                </div>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ProfilePage;