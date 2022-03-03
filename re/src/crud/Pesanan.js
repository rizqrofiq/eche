import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import API from "../Services";

const Pesanan = () => {
  const [user_id, setuser_id] = useState(0);
  const [nomeja, setnomeja] = useState(0);
  const [jumlah, setjumlah] = useState(0);
  const [total, settotal] = useState(0);
  const [isUpdate, setisUpdate] = useState(false);
  const [data, setData] = useState([]);
  const [id, setid] = useState(0);
  const [datauser, setDatauser] = useState([]);
  const [datamenu, setDatamenu] = useState([]);

  const [listPesanan, setListPesanan] = useState([]);
  const [menu, setMenu] = useState(-1);
  const [quantity, setQuantity] = useState(-1);

  useEffect(() => {
    getData();
    getDatauser();
    getDatamenu();
  }, []);

  async function getData() {
    API.getPesanan().then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  }

  async function getDatauser() {
    API.getUser().then((res) => {
      //   console.log(res.data);
      setDatauser(res.data);
    });
  }

  async function getDatamenu() {
    API.getMenu().then((res) => {
      //   console.log(res.data);
      setDatamenu(res.data);
    });
  }

  const getTotal = () => {
    let Total = 0;
    listPesanan.map((item) => {
      Total += item.subtotal;
    });

    return Total;
  };

  const AddDetailMenu = (e) => {
    e.preventDefault();

    const men = datamenu.find((m) => m.id == parseInt(menu));
    // console.log(men);
    setListPesanan([
      ...listPesanan,
      {
        id: parseInt(menu),
        name: men.nama,
        quantity: parseInt(quantity),
        subtotal: men.harga * quantity,
      },
    ]);
  };

  console.log(listPesanan);

  function simpan() {
    // const formData = new FormData();
    // formData.append("user_id", user_id);
    // formData.append("nomeja", nomeja);
    // //   formData.append("menu_id", menu_id);
    // formData.append("menu", listPesanan);
    // formData.append("total", getTotal());

    const data = {
      user_id: user_id,
      nomeja: nomeja,
      menu: listPesanan,
      total: getTotal(),
    };

    console.log(data);

    API.postPesanan(data).then((res) => {
      alert("berhasil disimpan");
      getData();
      setuser_id(0);
      setnomeja(0);
      // setmenu_id(0);
      setjumlah(0);
      settotal(0);
    });
  }

  async function up(data) {
    setuser_id(data.user_id);
    setnomeja(data.nomeja);
    // setmenu_id(data.menu_id);
    setjumlah(data.jumlah);
    settotal(data.total);
    setid(data.id);
    setisUpdate(true);
  }

  async function deleteItem(id) {
    if (window.confirm("yakin ingin hapus ?")) {
      const data = listPesanan.filter((item) => {
        return item.id != id;
      });

      setListPesanan(data);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />

        <div className="col-10">
          <div className="row p-3">
            <div className="col-md-4">
              <div className="card my-3">
                <div className="card-header">
                  <h4 className="card-title">Menu</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="menu_id"></label>
                    <select
                      name="menu_id"
                      id="menu"
                      className="form-control"
                      required
                      onChange={(e) => setMenu(e.target.value)}
                    >
                      <option>Menus</option>
                      {datamenu.map((item) => (
                        <option key={item.id.toString()} value={item.id}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="jumlah"> </label>
                    <input
                      type="number"
                      className="form-control"
                      name="jumlah"
                      placeholder="input jumlah"
                      required
                      onChange={(e) => setQuantity(e.target.value)}
                    ></input>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={AddDetailMenu}
                  >
                    Tambahkan menu
                  </button>
                  {/* {menu.map((m) => (
                    <h2>{m}</h2>
                  ))} */}
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                    <b>Form Pesanan</b>
                  </h4>
                </div>
                <div className="card-body align-left">
                  <div className="form-group">
                    <label htmlFor="user_id"></label>
                    <select
                      name="user_id"
                      id="user"
                      className="form-control"
                      required
                      value={user_id}
                      onChange={(e) => setuser_id(e.target.value)}
                    >
                      <option>Name</option>
                      {datauser.map((item) => (
                        <option key={item.id.toString()} value={item.id}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nomeja">No. Meja</label>
                    <input
                      type="number"
                      className="form-control"
                      name="nomeja"
                      placeholder="input nomeja"
                      required
                      value={nomeja}
                      onChange={(e) => setnomeja(e.target.value)}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="total"> </label>
                    <input
                      type="text"
                      className="form-control"
                      name="total"
                      placeholder="input total"
                      required
                      value={`Rp. ${getTotal()}`}
                      disabled
                    ></input>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" onClick={simpan}>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="table-responsive">
                  <table className="table table-hover mt-2">
                    <thead>
                      <tr>
                        <td>Id</td>
                        <td>Kasir</td>
                        <td>Jumlah yang dipesan</td>
                        <td>Subtotal</td>
                        <td>Opsi</td>
                      </tr>
                    </thead>
                    {listPesanan.map((item) => (
                      <tbody key={item.id}>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <id>{item.quantity}</id>
                          <td>{item.subtotal}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteItem(item.id)}
                            >
                              hapus
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pesanan;
