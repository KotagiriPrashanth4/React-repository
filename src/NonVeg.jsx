import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg()
{
    const nonVegProducts=useSelector(state =>state.products.nonveg)
    const dispatch=useDispatch()
    const items=nonVegProducts.map((product,index)=><li key={index}>
                {product.name} -${product.price.toFixed(2)}
                <button  onClick={()=>dispatch(addToCart(product ))}>Add to Cart</button>
    </li>)
    return(
        <>
        <h1>This is the NonVeg page</h1>
        <ul>{items}</ul>
        </>
    )
}
export default NonVeg;