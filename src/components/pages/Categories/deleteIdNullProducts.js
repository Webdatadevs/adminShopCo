import axios from "axios"

export default async function deleteProductsIdNull(){
    let data = await axios.get('http://localhost:3000/products')
    for(let iterator of data.data){
        if(!iterator.categoryId){
            await axios.delete(`http://localhost:3000/products/${iterator.id}`)
        }
    }
}