import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
       <div className="col-md-2 text-start min-vh-100 bg-dark">
  <ul className="navbar-item active sidebar-divider my- py-2">
    <br/>
    <Link to={"/dashboard"} className="nav-link text-white">
      <i className="fas fa-fw fa-tachometer-alt" />
      <span>Dashboard</span>
    </Link>
    <br/>
    <Link to={"/user"} className="nav-link text-white">
      <i className="fas fa-fw fa-user-alt" />
      <span>User</span>
    </Link>
    <br/>
    <Link to={"/menu"} className="nav-link text-white">
      <i className="fas fa-fw fa-table" />
      <span>Menu</span>
    </Link>
    <br/>
    <Link to={"/pesanan"} className="nav-link text-white">
      <i className="fas fa-fw fa-bell" />
      <span>Pesanan</span>
    </Link>
    <br/>
    <Link to={"/detail"} className="nav-link text-white">
      <i className="fas fa-fw fa-book" />
      <span>Detail Pesanan</span>
    </Link>
  </ul>
</div>

    )
}
export default Sidebar;