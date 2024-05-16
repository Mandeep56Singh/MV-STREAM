import axios, { Axios, AxiosResponse } from "axios";

const BASE_URL:string ="https://api.themoviedb.org/3";
const TMDB_TOKEN: string | undefined = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers:{Authorization:string} = {
  Authorization: "bearer " + TMDB_TOKEN,
};
const fetchDataFromApi = async (url:string,params:any) : Promise<any> => {
  
    try {
        const {data}:AxiosResponse<any> = await axios.get(BASE_URL + url , {
            headers,
            params,
        });
        return data 
    } catch(err:any) {
        console.log(err);
        return err;
    }

}