import Link from "next/link";
import logo from "@/img/logo.jpg";
import Image from "next/image";
import { useRootState } from "@/context/RootStateContext";
import LogOutModal, { LogoutButton } from "./logOutModal";

function Navbar() {

  const { globalState, setGlobalState } = useRootState();

  const refreshData = () => {
    const newState = { ...globalState };
    newState['products'] = undefined;
    newState['categories'] = undefined;
    newState['sponsors'] = undefined;
    newState['shippings'] = undefined;
    if (newState.user) {
      newState.user['orders'] = undefined;
      newState.user['cards'] = undefined;
      newState.user['addresses'] = undefined;
    }
    setGlobalState(newState)
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

              {globalState.user !== undefined ||
                <li className="nav-item">
                  <Link className="nav-link" href="/auth">Sign In</Link>
                </li>}

              {globalState.user !== undefined &&
                <li className="nav-item">
                  <Link className="nav-link" href="/cart">Cart</Link>
                </li>}

              {globalState.user !== undefined &&
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    {globalState.user?.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" href="/myorders">My Orders</Link></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><Link className="dropdown-item" href="/cards">Credit/Debit Cards</Link></li>
                    <li><Link className="dropdown-item" href="/addresses">Shipping Addresses</Link></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><LogoutButton className="dropdown-item"></LogoutButton></li>
                  </ul>
                </li>}
              <li className="nav-item">
                <button type="button" onClick={refreshData} className="btn btn-primary">Refresh</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LogOutModal />
    </header>
  );
}

export default Navbar;