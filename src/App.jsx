import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Mycart from "./mycart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kidz from "./pages/kidz";
import Search from "./pages/search";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>  } />
       <Route path="home" element={<Home/>}/>
        <Route path="men" element={<Men/>}/>
         <Route path="women" element={<Women/>}/>
          <Route path="kidz" element={<Kidz/>}/>
           <Route path="mycart" element={<Mycart/>}/>
           <Route path="search" element={<Search/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};
export default App;
