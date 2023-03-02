// 4th tutorial 1-35 min code is this comment

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCart } from "./Store/reducers/cartSlice";
import { selectLaptop } from "./Store/reducers/laptopSlice";

// import produce from "immer";
// import { useState } from "react";

// const obj = {
//   name: "amila",
//   city: "tangalle",
//   position: "web developer",
//   address: {
//     add1: "34",
//     add2: "fdfd",
//   },
// };

// // obj.language = ["html", "js"];

// // const objCopy = produce(obj, (copy) => {
// //   copy.address.add2 = "matara";
// // });

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const arrCopy = produce(arr, (copy) => {
// //   copy[2] = { name: "amila" };
// // });

// const App = () => {
//   // console.log(arr);
//   // console.log("arrCopy", arrCopy);

//   const [test,setTest]=useState({...obj})

// const clickHandler=()=>{
//   setTest(produce((copy)=>{
//     copy.address.add2='colombo'
//   }))
// }

// console.log('test',test)
//   return(
//   <div>
//     <button onClick={clickHandler}>Click me</button>
//   </div>
//   )
// };

// export default App;

// 4th tutorial 1-35 min code is this comment

const App = () => {
  const laptop = useSelector(selectLaptop);
  const cart=useSelector(selectCart);
  const dispatch =useDispatch()
  console.log(cart)
  return (
    <div>
      {laptop.map(({ price, cpu, ram, id }) => (
        <p key={id}>{price}|{cpu}|{ram}
        <button onClick={()=>dispatch(addItemToCart(id,price,cpu,ram))}>Add to Cart</button>
        </p>
      ))}
      <br/>
<h1>Cart</h1>
<hr/>
<h3>{cart.length}</h3>
<h3>Total:Rs:0</h3>
    </div>
  );
};

export default App;
