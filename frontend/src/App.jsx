
import { useEffect } from "react";
import { asynccurrentuser } from "./stores/actions/userAction";
import { useDispatch } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);

  return (
  <div className="bg-gray-700 h-screen w-screen text-white">
   <Navbar/>
    <MainRoutes/>
  </div>
  )

};

export default App;