import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="row">
                <Sidebar/>
  <div className="col-10">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Data A</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Data Barang A</p>
            <a href="#" className="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Data A</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Data Barang A</p>
            <a href="#" className="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Data A</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Data Barang A</p>
            <a href="#" className="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Data A</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Data Barang A</p>
            <a href="#" className="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Home;