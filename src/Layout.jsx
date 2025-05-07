import Footer from "./components/footer";
import Header from "./components/header";
import Topnav from "./components/topnav";
import { Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Header/>
        <Topnav/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}
export default Layout;