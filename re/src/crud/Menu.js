import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import API from "../Services";

const Menu = () => {
    const[nama,setnama]=useState("");
    const[harga,setharga]=useState(0);
    const[stok,setstok]=useState(0);
   
    const[isUpdate,setisUpdate]=useState(false);
    const[data,setData]=useState([]);
    const[id,setid]=useState(0);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        API.getMenu().then((res)=>{
            setData(res.data);
        });
    }

    function simpan(){
        if(!isUpdate){
            const formData = new FormData();
            formData.append("nama",nama);
            formData.append("harga",harga);
            formData.append("stok",stok);
           
            API.postMenu(formData).then((res)=>{
                alert("berhasil disimpan");
                getData();
                setnama("");
                setharga(0);
                setstok(0);
               
            });
        }else{
            const formData = new FormData();
            formData.append("nama",nama);
            formData.append("harga",harga);
            formData.append("stok",stok);
          
            API.updateMenu(formData,id).then((res)=>{
                alert("berhasil diupdate");
                getData();
                setnama("");
                setharga(0);
                setstok(0);
               
            });
        }
    }

    async function up(data){
        setnama(data.nama);
        setharga(data.harga);
        setstok(data.stok);
      
        setid(data.id);
        setisUpdate(true);
    }

    async function del(id){
        if(window.confirm("yakin ingin hapus ?")){
            API.deleteMenu(id).then((res)=>{
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
                                <h4 className="card-title"><b>Form Menu</b></h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="nama"> </label>
                                        <input type="text" className="form-control" name="nama" placeholder="input nama" required value={nama} onChange={(e)=>setnama(e.target.value)}></input>
                                   
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga"> </label>
                                        <input type="number" className="form-control" name="harga" placeholder="input harga" required value={harga} onChange={(e)=>setharga(e.target.value)}></input>
                                   
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stok"></label>
                                        <input type="number" className="form-control" name="stok" placeholder="input stok" required value={stok} onChange={(e)=>setstok(e.target.value)}></input>
                                    
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
                                            <td>Nama</td>
                                            <td>Harga</td>
                                            <td>Stok</td>
                                            <td>Option</td>
                                            <td>Option</td>
                                        </tr>
                                    </thead>
                                {data.map((item)=>(
                                    <tbody key={item.id.toString()}>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.nama}</td>
                                            <td>{item.harga}</td>
                                            <td>{item.stok}</td>
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
export default Menu;