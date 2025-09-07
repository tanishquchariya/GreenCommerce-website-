import { async } from "@firebase/util";
import axios from "axios";

export const adminDataAPI = async () => {
  try {
    let res = await axios("https://onestoredata.onrender.com/products");

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postAdminDataAPi = async (payload) => {
  try {
    let res = await axios.post("https://onestoredata.onrender.com/products", payload);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAdminAPi = async (id) => {
  try {
    let res = await axios.delete(`https://onestoredata.onrender.com//products/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const categoryAdmin = async (par) => {
  try {
    let res = await axios(`https://onestoredata.onrender.com//products?category=${par}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateAdminData = async (id, title, price) => {
  try {
    let res = await axios(`https://onestoredata.onrender.com//${id}`, { title, price });
  } catch (err) {
    console.log(err);
  }
};
