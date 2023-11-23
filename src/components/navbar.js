import Link from "next/link";
import logo from "@/img/logo.jpg";
import Image from "next/image";
import Swal from "sweetalert2";

function Navbar() {

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of the system!",
      icon: 'warning',
      confirmButtonColor: '#82C3C5',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if (window) {
          window.location.href = '/auth/'
        }
      }
    })
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/"><Image src={logo} alt="" height="30"
            className="rounded-circle" /> Weboender Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/cart">Cart</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  John Doe
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/profile">My Profile</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" href="/cards">Credit/Debit</Link></li>
                  <li><Link className="dropdown-item" href="/addresses">Shipping Addresses</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><button onClick={handleLogout} className="dropdown-item">Sign Out</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;