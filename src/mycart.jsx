
import { useSelector,useDispatch } from "react-redux";
const Mycart=()=>{
    const cartData=useSelector(state=>state.Mycart.cart)
    const dispatch=useDispatch();
    return(
        <>
        </>
    )
};
export default Mycart;