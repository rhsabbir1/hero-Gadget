import { getData } from "../../Utilits/Utilitis"

export const productsANdCartData = async  ()=>{ 

        const productsData = await fetch('products.json')
        const products = await productsData.json() 

        let newArra = []
        const getDataFormcart = getData()
        for(const id in getDataFormcart){
            const foundProducts = products.find(product => product.id === id)
            if(foundProducts){
                foundProducts.quantity = getDataFormcart[id]
                newArra.push(foundProducts)
            }
        }

        return newArra
}