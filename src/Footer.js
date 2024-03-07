import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  

const Footer = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "black" }}>

        <Row>
          <Col className="p-2">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", color: "white" }}>
                <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>BE THE FIRST TO KNOW</h1>
                <p style={{ fontSize: "16px", marginBottom: "20px" }}>Sign up for updates from metta muse</p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <input type="email" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "260px", marginLeft: "70px" }} placeholder="Enter your e-mail...." />
                  <button style={{ backgroundColor: "black", color: "gold", padding: "5px 10px", margin: "4px 3px 0px 70px ", border: "1px solid white", borderRadius: "5px" }}>SUBSCRIBE</button></div>
              </div></div></Col>
          <Col className=" p-2" style={{ color: "white" }}>
            <h5>CONTACT US</h5>
            <div>+44 221 133 5360</div>
            <div>customercare@mettamuse.com</div>
            <h5>CURRENCY</h5>
            <div style={{ display: "flex" }}>
              <img src="https://cdn0.iconfinder.com/data/icons/customicondesign-state-png/64/Hawaii-Flag.png" height="50px" />
              <h6 style={{ margin: "12px" }}> ◆ USD</h6></div>
          </Col>
        </Row>

        <hr style={{ color: "white" }} />
        
        <Row>

          <Col className=" p-2" style={{ color: "white" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", marginRight: "12px" }}>mettä muse</h2>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ alignItems: "center", marginBottom: "10px" }}>
                  <div style={{ marginLeft: "10px" }}>About Us</div>
                  <div style={{ marginLeft: "10px" }}>Stories</div>
                  <div style={{ marginLeft: "10px" }}>Artisans</div>
                  <div style={{ marginLeft: "10px" }}>Boutiques</div>
                  <div style={{ marginLeft: "10px" }}>Contact Us</div>
                  <div style={{ marginLeft: "10px" }}>EU Compliances Docs</div>


                </div>
                </div>
            </div>
          </Col>

          <Col className="p-2" style={{ color: "white" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ alignItems: "center", marginBottom: "10px" }}>
                <h5 style={{ marginLeft: "10px" }}>QUICK LINKS</h5>
                <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
                <div style={{ marginLeft: "10px" }}>Join/Login as a Seller</div>
                <div style={{ marginLeft: "10px" }}>Payment & Pricing</div>
                <div style={{ marginLeft: "10px" }}>Return & Refunds</div>
                <div style={{ marginLeft: "10px" }}>FAQS</div>
                <div style={{ marginLeft: "10px" }}>Privacy Policy</div>
                <div style={{ marginLeft: "10px" }}>Terms & Conditions</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>

              </div>

            </div>
          </Col>

          <Col className="p-2" style={{ color: "white" }} md={6}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ alignItems: "center", marginBottom: "10px" }}>
                <h5 style={{ marginLeft: "10px" }}>FOLLOW US</h5>
                <img style={{ margin: "3px" }} src="https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-64.png" height="50px" width="45px" />
                <img src="https://cdn3.iconfinder.com/data/icons/peelicons-glyph/512/linkedin__social__media_icons-64.png" height="55px" width="45px" />
                <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
                <div>mettä muse ACCEPTS</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>

                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYpbqFRKHT8Yg2Yp6XJYpGxpwUU4cpwHbMg&usqp=CAU" width="50px" height="37px" />

                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlukM7r2EtxcB8tVyY8f2tnOK9-m6Lz9cv9Q&usqp=CAU" width="50px" height="37px" />
                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC" width="50px" height="37px" />
                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU-ghB_bdEXOz-LmBad5xXcxwXKrjrRnQ4w&usqp=CAU" width="50px" height="37px" />
                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzt-tIHWinbMGxtUoSTSNpMx7kfhjA4XCAEA&usqp=CAU" width="50px" height="37px" />
                  <img style={{ borderRadius: "5px", border: "1px solid white", margin: "3px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvRbAg5dn4NCysuH6F5T4KLOe7QiOnSe9A&usqp=CAU" width="50px" height="37px" /></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>

              </div>

            </div>

          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Footer

//  import React from 'react'
// import{Col,Row,Container}from 'react-bootstrap'

// const Footer = () => {
//   return (
//     <div>
//             <Container fluid style={{backgroundColor:"black"}}> 

// <Row>  
//   <Col className="p-2">
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center",color:"white" }}>
// <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" ,color:"white"}}>
//   <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>BE THE FIRST TO KNOW</h1>
//   <p style={{ fontSize: "16px", marginBottom: "20px" }}>Sign up for updates from metta muse</p>
//   <div style={{display:"flex",flexWrap:"wrap"}}>
//   <input type="email" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "260px",marginLeft:"70px" }} placeholder="Enter your e-mail...." />
//   <button style={{backgroundColor:"black",color:"gold",padding:"5px 10px",margin:"4px 3px 0px 70px ",border:"1px solid white",borderRadius:"5px"}}>SUBSCRIBE</button></div>
// </div></div></Col>   
//   <Col className=" p-2" style={{color:"white"}}>
//     <h5>CONTACT US</h5>
//     <div>+44 221 133 5360</div>
//     <div>customercare@mettamuse.com</div>
//     <h5>CURRENCY</h5>
//     <div style={{display:"flex"}}>
//     <img src="https://cdn0.iconfinder.com/data/icons/customicondesign-state-png/64/Hawaii-Flag.png" height="50px"/>
//     <h6 style={{margin:"12px"}}> ◆ USD</h6></div>
//     </Col>
// </Row>  
// <hr style={{color:"white"}}/>
// <Row>  
//   <Col className=" p-2" style={{color:"white"}}>
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//   <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px",marginRight: "12px"  }}>mettä muse</h2>
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//     <div style={{ alignItems: "center", marginBottom: "10px" }}>
//       <div style={{ marginLeft: "10px" }}>About Us</div>
//       <div style={{ marginLeft: "10px" }}>Stories</div>
//       <div style={{ marginLeft: "10px" }}>Artisans</div>
//       <div style={{ marginLeft: "10px" }}>Boutiques</div>
//       <div style={{ marginLeft: "10px" }}>Contact Us</div>
//       <div style={{ marginLeft: "10px" }}>EU Compliances Docs</div>
    
    
//   </div></div>
//   </div>
//     </Col>  
//   <Col className="p-2"style={{color:"white"}}>
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//     <div style={{ alignItems: "center", marginBottom: "10px" }}>
//       <h5 style={{ marginLeft: "10px" }}>QUICK LINKS</h5>
//       <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
//       <div style={{ marginLeft: "10px" }}>Join/Login as a Seller</div>
//       <div style={{ marginLeft: "10px" }}>Payment & Pricing</div>
//       <div style={{ marginLeft: "10px" }}>Return & Refunds</div>
//       <div style={{ marginLeft: "10px" }}>FAQS</div>
//       <div style={{ marginLeft: "10px" }}>Privacy Policy</div>
//       <div style={{ marginLeft: "10px" }}>Terms & Conditions</div>
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      
//     </div>
    
// </div>
//     </Col>  
//   <Col className="p-2" style={{color:"white"}} md={6}>
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//     <div style={{ alignItems: "center", marginBottom: "10px" }}>
//       <h5 style={{ marginLeft: "10px" }}>FOLLOW US</h5>
//       <img style={{margin:"3px"}} src="https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-64.png" height="50px" width="45px"/>
//       <img src="https://cdn3.iconfinder.com/data/icons/peelicons-glyph/512/linkedin__social__media_icons-64.png"height="55px" width="45px"/>
//       <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
//       <div>mettä muse ACCEPTS</div>
//       <div style={{display:"flex",flexWrap:"wrap"}}>

//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYpbqFRKHT8Yg2Yp6XJYpGxpwUU4cpwHbMg&usqp=CAU" width="50px" height="37px"/>
    
//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlukM7r2EtxcB8tVyY8f2tnOK9-m6Lz9cv9Q&usqp=CAU" width="50px" height="37px"/>
//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}}   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC" width="50px" height="37px"/>
//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU-ghB_bdEXOz-LmBad5xXcxwXKrjrRnQ4w&usqp=CAU" width="50px" height="37px"/>
//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzt-tIHWinbMGxtUoSTSNpMx7kfhjA4XCAEA&usqp=CAU"width="50px" height="37px"/>
//       <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvRbAg5dn4NCysuH6F5T4KLOe7QiOnSe9A&usqp=CAU" width="50px" height="37px"/></div>
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      
//     </div>
    
// </div>

//     </Col>  
// </Row>  
// </Container>
//     </div>
//   )
// }

// export default Footer


// import React from 'react';

// import { Container, Row, Col } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <Container fluid style={{backgroundColor:"black"}}> 

//   <Row>  
//     <Col className="p-2">
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center",color:"white" }}>
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" ,color:"white"}}>
//     <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>BE THE FIRST TO KNOW</h1>
//     <p style={{ fontSize: "16px", marginBottom: "20px" }}>Sign up for updates from metta muse</p>
//     <div style={{display:"flex",flexWrap:"wrap"}}>
//     <input type="email" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "260px",marginLeft:"70px" }} placeholder="Enter your e-mail...." />
//     <button style={{backgroundColor:"black",color:"gold",padding:"5px 10px",margin:"4px 3px 0px 70px ",border:"1px solid white",borderRadius:"5px"}}>SUBSCRIBE</button></div>
//   </div></div></Col>   
//     <Col className=" p-2" style={{color:"white"}}>
//       <h5>CONTACT US</h5>
//       <div>+44 221 133 5360</div>
//       <div>customercare@mettamuse.com</div>
//       <h5>CURRENCY</h5>
//       <div style={{display:"flex"}}>
//       <img src="https://cdn0.iconfinder.com/data/icons/customicondesign-state-png/64/Hawaii-Flag.png" height="50px"/>
//       <h6 style={{margin:"12px"}}> ◆ USD</h6></div>
//       </Col>
//   </Row>  
//   <hr style={{color:"white"}}/>
//   <Row>  
//     <Col className=" p-2" style={{color:"white"}}>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//     <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px",marginRight: "12px"  }}>mettä muse</h2>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//       <div style={{ alignItems: "center", marginBottom: "10px" }}>
//         <div style={{ marginLeft: "10px" }}>About Us</div>
//         <div style={{ marginLeft: "10px" }}>Stories</div>
//         <div style={{ marginLeft: "10px" }}>Artisans</div>
//         <div style={{ marginLeft: "10px" }}>Boutiques</div>
//         <div style={{ marginLeft: "10px" }}>Contact Us</div>
//         <div style={{ marginLeft: "10px" }}>EU Compliances Docs</div>
      
      
//     </div></div>
//     </div>
//       </Col>  
//     <Col className="p-2"style={{color:"white"}}>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//       <div style={{ alignItems: "center", marginBottom: "10px" }}>
//         <h5 style={{ marginLeft: "10px" }}>QUICK LINKS</h5>
//         <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
//         <div style={{ marginLeft: "10px" }}>Join/Login as a Seller</div>
//         <div style={{ marginLeft: "10px" }}>Payment & Pricing</div>
//         <div style={{ marginLeft: "10px" }}>Return & Refunds</div>
//         <div style={{ marginLeft: "10px" }}>FAQS</div>
//         <div style={{ marginLeft: "10px" }}>Privacy Policy</div>
//         <div style={{ marginLeft: "10px" }}>Terms & Conditions</div>
//       </div>
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        
//       </div>
      
// </div>
//       </Col>  
//     <Col className="p-2" style={{color:"white"}} md={6}>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
//       <div style={{ alignItems: "center", marginBottom: "10px" }}>
//         <h5 style={{ marginLeft: "10px" }}>FOLLOW US</h5>
//         <img style={{margin:"3px"}} src="https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-64.png" height="50px" width="45px"/>
//         <img src="https://cdn3.iconfinder.com/data/icons/peelicons-glyph/512/linkedin__social__media_icons-64.png"height="55px" width="45px"/>
//         <div style={{ marginLeft: "10px" }}>Orders & Shipping</div>
//         <div>mettä muse ACCEPTS</div>
//         <div style={{display:"flex",flexWrap:"wrap"}}>

//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYpbqFRKHT8Yg2Yp6XJYpGxpwUU4cpwHbMg&usqp=CAU" width="50px" height="37px"/>
      
//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlukM7r2EtxcB8tVyY8f2tnOK9-m6Lz9cv9Q&usqp=CAU" width="50px" height="37px"/>
//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}}   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC" width="50px" height="37px"/>
//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU-ghB_bdEXOz-LmBad5xXcxwXKrjrRnQ4w&usqp=CAU" width="50px" height="37px"/>
//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzt-tIHWinbMGxtUoSTSNpMx7kfhjA4XCAEA&usqp=CAU"width="50px" height="37px"/>
//         <img style={{borderRadius:"5px",border:"1px solid white",margin:"3px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRvRbAg5dn4NCysuH6F5T4KLOe7QiOnSe9A&usqp=CAU" width="50px" height="37px"/></div>
//       </div>
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        
//       </div>
      
// </div>

//       </Col>  
//   </Row>  
// </Container>  



//   )
// }

// export default Footer