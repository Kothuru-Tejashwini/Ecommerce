// import React from "react";
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { search: "", searchResults: [] };
//   }
//   fetchImages = () => {
//     fetch(
//       `https://pixabay.com/api/?key=46193765-9b4e405df685d88e9b0aa6bbb&q=${this.state.search}&image_type=photo&pretty=true`
//     )
//       .then((response) => response.json())
//       .then((data) => this.setState({ searchResults: data.hits }))
//       .catch((error) => console.error("Error fetching data:", error));
//   };
//   handleInputChange = (e) => {
//     this.setState({ search: e.target.value }, this.fetchImages);
//   };
//   render() {
//     return (
//       <>
//         <input
//           placeholder="Search..."
//           onChange={this.handleInputChange}
//           value={this.state.search}
//         />
//         <div>
//           {this.state.searchResults.map((x, index) => {
//             return <img key={index} src={x.webformatURL} alt="search result" />;
//           })}
//         </div>
//       </> 
//     );
//   }
// }
// export default Main

// import React from "react";
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { product: null };
//   }
//   fetchProduct = () => {
//     fetch("https://fakestoreapi.com/products/1")
//       .then((response) => response.json())
//       .then((data) => this.setState({ product: data }))
//       .catch((error) => console.error("Error fetching data:", error));
//   };
//   componentDidMount() {
//     this.fetchProduct();
//   }
//   render() {
//     const { product } = this.state;

//     return (
//       <>
//         <h1>Product Details</h1>
//         {product ? (
//           <div>
//             <h3>{product.title}</h3>
//             <img src={product.image} alt={product.title} style={{ width: '200px' }} />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Category: {product.category}</p>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </>
//     );
//   }
// }
// export default Main;
import React from "react";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error("Error fetching data:", error));
  };
  componentDidMount() {
    this.fetchProducts();
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <h1>Our Products</h1>
        <input 
          placeholder="Search......."
          onChange={this.handleInputChange}
          value={this.state.search}  style={{height:"40px",width:"60%", borderRadius:"20px", marginLeft:"310px",
          fontSize:"15px", textAlign:"center"}}
        />
        {products.length > 0 ? (
          <div className="products-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} className="product-image" />
                <p>{product.description.substring(0, 100)}...</p>
                <h3>Price: ${product.price}</h3>
                <h5>Category: {product.category}</h5>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </>
    );
  }
}
export default Main;

