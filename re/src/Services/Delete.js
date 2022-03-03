import axios from "axios";
import { rootPath } from "./config";

const Delete = (path) => {
    const promise = new Promise((resolve,reject)=>{
        axios.delete(`${rootPath}/${path}`).then(
            (res)=>{
                resolve(res.data);
            },
            (err)=>{
                reject(err);
            }
        );
    });
    return promise;
}
export default Delete;