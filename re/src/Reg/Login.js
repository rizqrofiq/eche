import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services";

const Login = () => {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const history = useNavigate();

    // useEffect(()=>{
    //     if(localStorage.getItem('user-login')){
    //         const userInfo = JSON.parse(localStorage.getItem('user-login'))
    //         console.log(user-info)
    //         if(userInfo.role=='admin'){
    //             history.push('/menu')
    //         }else if(userInfo.role=='kasir'){
    //             history.push('/pesanan')
    //         }else if(userInfo.role=='manager'){
    //             history.push('dashboard')
    //         }
    //     }
    // },[])


    function simpan(){
        const formData = new FormData();
        formData.append("email",email);
        formData.append("password", password);
        API.login(formData).then((res)=>{
            if(res.data.data.role=="kasir"){
                localStorage.setItem("user-login", JSON.stringify(res.data.data));
                history("/kasir");
            }else if (res.data.data.role=="admin"){
                localStorage.setItem("user-login", JSON.stringify(res.data.data));
                history("/admin");
            }else if(res.data.data.role=="manager", JSON.stringify(res.data.data));
            history("/manager");
        })
    }

    return(
        <div>

                    <div className="mx-auto col-4 mt-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title"><b>Form Login</b></h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="email"> </label>
                                        <input type="text" className="form-control" name="email" placeholder="input email" required value={email} onChange={(e)=>setemail(e.target.value)}></input>
                                   
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"></label>
                                        <input type="password" className="form-control" name="password" placeholder="input password" required value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary" onClick={simpan}>Simpan</button>
                            </div>
                        </div>
                    </div>
                    </div>
    )
}
export default Login;