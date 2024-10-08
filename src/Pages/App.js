import React from 'react';
// import Register from './Registration.jsx';
// import Login from './Login.jsx';
import "./Style.css"
import Main from './Main.js';
import Nav from "./Nav"
import Footer from './footer.js';
export default function App() {
  return (
  // <Login></Login>
  // <App></App>/
  <>
  <Nav></Nav>
  <Main></Main>
  <Footer></Footer>
  </>
  )
}

// import { useState, useEffect } from "react";

// export default function Part2() {
//     const [state, setState] = useState([]);
//     const [search, searchValue] = useState("");

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com`) // Fetch 10 photos as an example
//             .then(response => response.json())
//             .then(data => {
//                 setState(data); // Set the complete data array
//             });
//     }, []);

//     return (
//         <div>
//             <div className="pix">
//                 <input
//                     type="text"
//                     placeholder="Search here for images"
//                     onChange={(e) => searchValue(e.target.value)}
//                     className="search"
//                 />
//             </div>
//             <div className="images">
//                 {state
//                     .filter((item) => item.title.includes(search)) // Implementing search functionality
//                     .map(item => {
//                         return (
//                             <img src={item.thumbnailUrl} alt="pic" key={item.id} className="img1" />
//                         );
//                     })}
//             </div>
//         </div>
//     );
// }
