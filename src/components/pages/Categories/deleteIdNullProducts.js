import axios from "axios"

export default async function deleteProductsIdNull(){
    let data = await axios.get('https://datab-3.onrender.com/products')
    for(let iterator of data.data){
        if(!iterator.categoryId){
            await axios.delete(`https://datab-3.onrender.com/products/${iterator.id}`)
        }
    }
}