import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Mycart from "./mycart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kidz from "./pages/kidz";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>  } />
       <Route path="home" element={<Home/>}></Route>
        <Route path="men" element={<Men/>}></Route>
         <Route path="women" element={<Women/>}></Route>
          <Route path="kidz" element={<Kidz/>}></Route>
           <Route path="mycart" element={<Mycart/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};
export default App;
