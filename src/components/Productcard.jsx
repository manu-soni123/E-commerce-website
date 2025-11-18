import react, { useContext, useState } from "react";
import '../App.css'
import { Productcontext } from '../context/Productcontext';
import { Link } from "react-router-dom";
export default function Productcard() {
  const { filteredProducts, products, addToCart } = useContext(Productcontext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalProducts = filteredProducts.length;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    if (endIndex < totalProducts) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="fullproduct"><p>Manu</p>
        <div className="product ml-10 w-320 ">
          <button
            className='nav-button h-15 w-15 mt-35 '
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            ⬅️
          </button>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          {filteredProducts.slice(startIndex, endIndex).map((product) => (
            <div className=" product1  m-2 " key={product.id} style={{ border: "1px solid black" }}>
              <h2 className="hd">{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p className="text-center ">price:{product.price}</p>
              <p className="text-center">rating:{product.rating}</p>
              <div className="atc" >    <button onClick={() => addToCart(product)} >
                add to cart
              </button> </div>
              </div>
            ))}
          <button
            className='nav-button h-15 w-15 mt-35'
            onClick={handleNext}
            disabled={endIndex >= totalProducts}
          >
            ➡️
          </button>
        </div> </div>
    </>
  )
}



