import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const history = useNavigate();

    useEffect(()=>{
        localStorage.clear();
        history("/");
        window.location.reload();
    })
    return(
        <div>
        </div>
    )
}
export default Logout;