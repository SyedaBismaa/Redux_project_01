
import { useEffect } from "react";
import { asyncgetusers } from "./stores/userAction";
import { useDispatch , useSelector} from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {

  const data = useSelector((state)=> state);
  const dispatch = useDispatch();

  console.log(data);
  
  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return <div className="bg-gray-700 h-screen w-screen text-white">
   <Navbar/>
    <MainRoutes/>
  </div>

};

export default App;