import axios from "axios";
import { setCategories, setIsLoadingCategories } from "../slice/CategoriesSlice";

export default async function getCategories(dispatch){
    dispatch(setIsLoadingCategories())
    await axios.get("https://datab-3.onrender.com/categories")
    .then((data) => {
        dispatch(setCategories(data.data))
        // console.log(data.data)
    })
    .catch((err) => console.log(err))
}