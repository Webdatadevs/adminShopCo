import axios from "axios";
import { setIsLoading, setProducts } from "../slice/ProductSlice";

export default async function getProducts(dispatch){
    dispatch(setIsLoading())
    await axios.get('https://datab-3.onrender.com/products')
    .then((data) => {
        dispatch(setProducts(data.data))
        // console.log(data.data)
    })
    .catch((err) => console.log(err))
}