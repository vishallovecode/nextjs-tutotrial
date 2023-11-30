import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const ProductDetail = ()=>{

    const  searchParams = useSearchParams();
    const router = useRouter();

    console.log(router.query , 'query')

   searchParams.forEach((item , key)=>{
        console.log(key , item)

  
   })
    return(
        <h2>This is the product details pages {router.query.categoryId}</h2>
    )
}


export default ProductDetail;

'product/:id'