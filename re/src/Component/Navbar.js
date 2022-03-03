import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"><img src="./ukk asset/asset/1.png" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <ul className="navbar-wrapper">
        <Link to={"/logout"} className="nav-link text-white"><i class="fas fa-sign-out-alt"></i> Sign Out</Link>
    </ul>
  </div>
</nav>

        </div>
    )
}
export default Navbar;