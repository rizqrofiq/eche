import Delete from "./Delete";
import Post from "./Post";
import Put from "./Put";
import Get from "./Get";

const postUser = (data) => Post("users", data);
const getUser = () => Get("users");
const deleteUser = (id) => Delete(`users/${id}`);
const updateUser = (data, id) => Put(`users/${id}`, data);
const login = (data) => Post("users", data);

const postMenu = (data) => Post("menus", data);
const getMenu = () => Get("menus");
const deleteMenu = (id) => Delete(`menus/${id}`);
const updateMenu = (data, id) => Put(`menus/${id}`, data);

const postPesanan = (data) => Post("pesanans", data);
const getPesanan = () => Get("pesanans");
const deletePesanan = (id) => Delete(`pesanans/${id}`);
const updatePesanan = (data, id) => Put(`pesanans/${id}`, data);

const postDetail = (data) => Post("details", data);
const getDetail = () => Get("details");
const deleteDetail = (id) => Delete(`details/${id}`);
const updateDetail = (data, id) => Put(`details/${id}`, data);

const API = {
  getDetail,
  deleteDetail,
  postDetail,
  updateDetail,

  getPesanan,
  deletePesanan,
  postPesanan,
  updatePesanan,

  getUser,
  deleteUser,
  postUser,
  updateUser,
  login,

  getMenu,
  deleteMenu,
  postMenu,
  updateMenu,
};
export default API;
