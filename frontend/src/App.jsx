
import { useEffect } from "react";
import { asynccurrentuser } from "./stores/actions/userAction";
import { useDispatch, useSelector } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { asyncloadproduct } from "./stores/actions/productAction";


const App = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state)=> state.userReducer);
  const {products} = useSelector((state)=> state.productsReducer);


  useEffect(() => {
    !users && dispatch(asynccurrentuser());
    // dispatch(asyncloadproduct());


  }, [users]);

    useEffect(() => {
    products.length==0 && dispatch(asyncloadproduct());
    // dispatch(asyncloadproduct());

  }, [products]);

  return (
  <div className="bg-gray-700 min-h-screen  w-screen text-white">
   <Navbar/>
    <MainRoutes/>
  </div>
  )

};

export default App;