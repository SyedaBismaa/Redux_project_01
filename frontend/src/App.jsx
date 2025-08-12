import { useEffect } from "react";
import { asynccurrentuser } from "./stores/actions/userAction";
import { useDispatch, useSelector } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";



const App = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state)=> state.userReducer);
 

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);


  return (

      <div className=" min-h-screen w-full   bg-gray-100   ">
        <Navbar/>
        <MainRoutes/>
      </div>
    
  )
};

export default App;