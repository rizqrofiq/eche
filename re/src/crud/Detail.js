import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import API from "../Services";

const Detail = () => {
    const[user_id,setuser_id]=useState(0);
    const[menu_id,setmenu_id]=useState(0);
    const[jumlah,setjumlah]=useState(0);
    
    const[isUpdate,setisUpdate]=useState(false);
    const[data,setData]=useState([]);
    const[id,setid]=useState(0);
    const[datauser,setDatauser]=useState([]);
    const[datamenu,setDatamenu]=useState([]);

    useEffect(()=>{
        getData();
        getDatauser();
        getDatamenu();
    },[]);

    async function getData(){
        API.getDetail().then((res)=>{
            console.log(res.data);
            setData(res.data);
        });
    }

    async function getDatauser(){
        API.getUser().then((res)=>{
            console.log(res.data);
            setDatauser(res.data);
        });
    }

    async function getDatamenu(){
        API.getMenu().then((res)=>{
            console.log(res.data);
            setDatamenu(res.data);
        });
    }

    function simpan(){
        if(!isUpdate){
            const formData = new FormData();
            formData.append("user_id",user_id);

            formData.append("menu_id",menu_id);
            formData.append("jumlah",jumlah);

            API.postDetail(formData).then((res)=>{
                alert("berhasil disimpan");
                getData();
                setuser_id(0);
    
                setmenu_id(0);
                setjumlah(0);
    
            });
        }else{
            const formData = new FormData();
            formData.append("user_id",user_id);

            formData.append("menu_id",menu_id);
            formData.append("jumlah",jumlah);

            API.updateDetail(formData,id).then((res)=>{
                alert("berhasil disimpan");
                getData();
                setuser_id(0);
    
                setmenu_id(0);
                setjumlah(0);
    
            });
        }
    }

    async function up(data){
        setuser_id(data.user_id);
        setmenu_id(data.menu_id);
        setjumlah(data.jumlah);
        setid(data.id);
        setisUpdate(true);
    }

    async function del(id){
        if(window.confirm("yakin ingin hapus ?")){
            API.deleteDetail(id).then((res)=>{
                alert("Terhapus");
                getData();
            });
        }else{
            getData();
        }
    }
    return(
        <div>
            <Navbar/>
            <div className="row">
            <Sidebar/>
           
            <div className="col-10">
                <div className="row p-3">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title"><b>Form Pesanan</b></h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                    <label htmlFor="user_id"></label>
                                       <select name="user_id" id="user" className="form-control" required value={user_id} onChange={(e)=>setuser_id(e.target.value)}>
                                           <option>Name</option>
                                          {datauser.map((item)=>(
                                              <option key={item.id.toString()} value={item.id}>
                                                  {item.nama}
                                              </option>
                                          ))}
                                       </select>
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="menu_id"></label>
                                       <select name="menu_id" id="menu" className="form-control" required value={menu_id} onChange={(e)=>setmenu_id(e.target.value)}>
                                           <option>Menus</option>
                                          {datamenu.map((item)=>(
                                              <option key={item.id.toString()} value={item.id}>
                                                  {item.nama}
                                              </option>
                                          ))}
                                       </select>
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jumlah"> </label>
                                        <input type="number" className="form-control" name="jumlah" placeholder="input jumlah" required value={jumlah} onChange={(e)=>setjumlah(e.target.value)}></input>
                                   
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary" onClick={simpan}>Simpan</button>
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
                                            <td>Menu</td>
                                            <td>Jumlah</td>
                                            <td>Option</td>
                                            <td>Option</td>
                                        </tr>
                                    </thead>
                                {data.map((item)=>(
                                    <tbody key={item.id.toString()}>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.user.nama}</td>
                                            <td>{item.menu.nama}</td>
                                            <td>{item.jumlah}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>del(item.id)}>hapus</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-success" onClick={()=>up(item)}>edit</button>
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
    )
}
export default Detail;