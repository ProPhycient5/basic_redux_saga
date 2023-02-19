import { addToCart, removeToCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import {useSelector} from "react-redux"

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data from main", data);
  const product = {
    name: "Redmi pro",
    color: "red",
    price: "20000",
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>AddToCart</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          RemoveFromCart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>EmptyCart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Get Product List</button>
      </div>
    </div>
  );
}

export default Main;
