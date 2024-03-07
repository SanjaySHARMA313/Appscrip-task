import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Link} from 'react-router-dom'

const Head = () => {
  const [liked, setLiked] = useState({});
//   const [isChecked, setIsChecked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [show, setShow]=useState(false);
  const [changetext,setChangetext]=useState(true);
  const [gender,setGender]=useState('');
//   const [knowitems,setKnowitems]=useState(null);
  const hideagain=()=>{
    setShow(false);
    setChangetext(true);
  }
  const See=()=>{
    setShow(true);
    setChangetext(false);
  }

  const toggleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id] || false,
    }));
  };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
    //   .then(() => setKnowitems([])) // Initialize knowitems as an empty array
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>{gender}</div>
      <Container fluid>
        <Row>
          <Col className="p-1"></Col>
          <Col className="p-2" md={7}>
            <div
              style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                fontWeight: "bold",
                margin: "3px 20px",
              }}
            >
              <div>SHOP</div>
              <div>SKILLS</div>
              <div>STORIES</div>
              <div>ABOUT</div>
              <div>CONTACT US</div>
            </div>
          </Col>
          <Col className="p-1"></Col>
        </Row>
        <hr />
      <center style={{ fontSize: "25px", fontWeight: "bold" }}>
        DISCOVER OUR PRODUCTS
      </center>
      <center>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </center>
      <hr />
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div>{products.length} ITEMS</div>
       {changetext? <div onClick={See}> SHOW FILTER</div>:<div onClick={hideagain}> HIDE FILTER</div>}
        <select style={{border:"1px solid white",width:"160px",fontWeight:"bold"}}>
          <option>RECOMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>

      </div>
      <hr/>
  
      <Row>  {show?
    <Col className=" p-2" lg={2}> 
      
    <div style={{display:"flex",margin:"4px",padding:"4px"}}>
      <input type="checkbox"/>
      <div>CUSTOMIZABLE</div></div>
      
      <div onClick={toggleOptions} style={{ cursor: 'pointer' }}>
        IDEAL FOR ↓
      </div>
      {showOptions && (
        <div>
          <label>
            <input type="checkbox" onchange={(e)=>setGender(e.target.value)} />
            Male
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Female
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Boys & Girls
          </label>
        </div>
      )}
      <hr style={{width:"30%"}}/>
      <h5>OCCASION</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Marriage</option>
        <option>Party</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>WORK</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Office</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>FABRIC</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Nylon</option>
        <option>Cotton</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>SEGMENT</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Higher</option>
        <option>Lower</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>SUITABLE FOR</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Sleep</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>RAW MATERIALS</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
      </select>
      <hr style={{width:"30%"}}/>
      <h5>OCCASION</h5>
      <select style={{width:"140px"}}>
        <option>All</option>
        <option>Solid</option>
        <option>Checked</option>
      </select>
      <hr style={{width:"30%"}}/>
  
    
      </Col>:<div></div> }
    <Col className=" p-1"  >
    <div className="product-list-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
             {products.map((product) => (
              <div key={product.id} style={{ margin: "10px" }}>
                 <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "250px",
                      height: "200px",
                      objectFit: "cover",
                      border: "1px solid black",
                    }}
                  />
                  <div>{product.title.length > 25 ? `${product.title.slice(0, 25)}...` : product.title}</div>
                  
                </Link> 
                <div style={{display:"flex"}}>
                  <div>Sign in or Create an account</div>
                <div onClick={() => toggleLike(product.id)} style={{ cursor: "pointer", marginTop: "10px" }}>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={liked[product.id]? "red" : "none"}
      stroke={liked[product.id] ? "red" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: "5px" }}
    >
      <path d="M3 3c0 6.627 5.373 12 12 12s12-5.373 12-12S21.627 3 15 3c-1.556 0-3.045.305-4.415.855M7.243 12.729l-.263-.318C5.566 10.914 5 9.537 5 8c0-2.761 2.239-5 5-5s5 2.239 5 5c0 1.538-.566 2.914-1.98 3.682l-.263.318M3 3h0" />
    </svg>
                  
                </div></div>
              </div>
            ))} 
          </div>

 
      </Col>  
     
  </Row>   
</Container> 
  
         

    </div>
  );
};

export default Head;


