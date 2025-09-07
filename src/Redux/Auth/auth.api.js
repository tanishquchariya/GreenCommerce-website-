import axios from "axios";
export const getAuth= async(UserData)=>{

    try {
        let res = await axios.post(`https://onestoredata.onrender.com/login`,UserData)
      
        return res.data;
    } catch (error) {
        return error;
    }
}