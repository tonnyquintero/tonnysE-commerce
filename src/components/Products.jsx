import React, { useContext } from 'react'
import Product from '../components/Product'
import AppContext from '../context/AppContext'
import '../styles/components/Products.css'

// const Products1 = ({ products }) => {
//   return (
//     <div className='products'>
//         <div className="Products-items">
//             {
                           //OOOOJO Aqui!!!! cuando es .map va entre parentesis no llaves!!!
//                 products.map(product => { <== Asi no!!!!
//                     <Product key={product.id} product={product} />
//                 })
//             }
//         </div>
//     </div>
//   )
// }



const Products = () => {

  const {state, addToCart} = useContext(AppContext)
  const { products } = state

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}



export default Products