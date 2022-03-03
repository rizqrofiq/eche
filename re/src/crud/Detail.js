import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import API from "../Services";

const Detail = () => {
  const [user_id, setuser_id] = useState(0);
  const [menu_id, setmenu_id] = useState(0);
  const [jumlah, setjumlah] = useState(0);

  const [isUpdate, setisUpdate] = useState(false);
  const [data, setData] = useState([]);
  const [id, setid] = useState(0);
  const [datauser, setDatauser] = useState([]);
  const [datamenu, setDatamenu] = useState([]);

  useEffect(() => {
    getData();
    getDatauser();
    getDatamenu();
  }, []);

  async function getData() {
    API.getPesanan().then((res) => {
      //   console.log(res.data);
      setData(res.data);

      console.log(res.data);
    });
  }

  async function getDatauser() {
    API.getUser().then((res) => {
      setDatauser(res.data);
    });
  }

  async function getDatamenu() {
    API.getMenu().then((res) => {
      setDatamenu(res.data);
    });
  }

  const getUser = (id) => {
    const data = datauser.find((item) => item.id === id);
    return data.nama;
  };

  async function del(id) {
    if (window.confirm("yakin ingin hapus ?")) {
      API.deletePesanan(id).then((res) => {
        alert("Terhapus");
        // getData();
        const datas = data.filter((item) => item.id != id);
        setData(datas);
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />
        <div className="mx-5 col-md-9">
          <div className="table-responsive">
            <table className="table table-hover mt-2">
              <thead>
                <tr>
                  <td>No</td>
                  <td>Kasir</td>
                  <td>No Meja</td>
                  <td>Total</td>
                  <td>Opsi</td>
                </tr>
              </thead>
              {data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.user_id}</td>
                    <td>{item.nomeja}</td>
                    <td>{item.total}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => del(item.id)}
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
  );
};

export default Detail;
