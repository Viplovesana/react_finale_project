
import logo from "../images/h&m.jpg"


 const Footer=()=>{
    return(
        <>
       <img src={logo} width={120} height={100} className='logo'/>
      
        <div className="footer">

<div>
    <h5 className="head">Shop</h5><br />

    <h5 className="light">LADIES</h5>
    <h5 className="light">MENS</h5>
    <h5 className="light">KIDS</h5>
    <h5 className="light">HOME</h5>
    <h5 className="light">MAGAZINE</h5>
</div>
<div>
    <h5 className="head">Corporate Info</h5><br />

    <h5 className="light">CAREER AT H&M</h5>
    <h5 className="light">ABOUT H&M</h5>
    <h5 className="light">SUSTAINABILITY h&M GROUP</h5>
    <h5 className="light">PRESS</h5>
    <h5 className="light">INVESTOR RELATIONS</h5>
    <h5 className="light">CORPORATE GOVERNANCE</h5>
</div>
<div>
    <h5 className="head">Help</h5><br />

    <h5 className="light">CUSTOMER SERVICE</h5>
    <h5 className="light">MY H&M</h5>
    <h5 className="light">FIND A STORE</h5>
    <h5 className="light">LEGAL & PRIVACY</h5>
    <h5 className="light">CONTACT</h5>
    <h5 className="light">SECURE SHIPPING</h5>
    <h5 className="light">COOKIE NOTIC</h5>
    <h5 className="light">COOKIE SETTINGS</h5>
</div>
<div>
        <h5>
        Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!

        </h5>
        <br /><br />
       <h5 className="btn"><a href="">READ MORE</a></h5>
</div>

    </div>
        </>
    )
 };
 export default Footer;