import  db from './db'
import { redirect } from 'next/navigation'

export const FetchFeacturedProducts =  async () =>{
    const products = await db.product.findMany({
        where:{
            featured : true
        }
    })

    return products

}

export const FetchAllProducts = async ({ search = '' }: { search: string }) =>{
   const products = await db.product.findMany({
    where:{
        OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { company: { contains: search, mode: 'insensitive' } },
          ],
    },
    orderBy :{
        createdAt : 'desc'
    }
   })

   return products
}


export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      redirect('/products');
    }
    return product;
  };