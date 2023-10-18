import React,{useEffect, useState, useRef} from 'react'
import Product from './Product'
import axios from "axios"
import { toast } from 'react-toastify';
import { ComponentToPrint } from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Pos() {

    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const cartSectionRef = useRef();

    const toastOptions = {
      autoClose: 400,
      pauseOnHover: true,
    }
    
    const scrollToCart = () => {
        if (cartSectionRef.current) {
          cartSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const fetchProducts = async() => {

        setIsLoading(true);
        const result = await axios.get('products')
        setProducts(await result.data);
        setIsLoading(false);
    }

    const addProductToCart = async(products) =>{
        // check if the adding product exist
        let findProductInCart = await cart.find(i=>{
          return i.id === products.id
        });
    
        if(findProductInCart){
          let newCart = [];
          let newItem;
    
          cart.forEach(cartItem => {
            if(cartItem.id === products.id){
              newItem = {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalAmount: cartItem.price * (cartItem.quantity + 1)
              }
              newCart.push(newItem);
            }else{
              newCart.push(cartItem);
            }
          });
    
          setCart(newCart);
          toast(`Added ${newItem.name} to cart`,toastOptions)
    
        }else{
          let addingProduct = {
            ...products,
            'quantity': 1,
            'totalAmount': products.price,
            
        } ;setCart ([...cart, addingProduct]);
        toast(`Added ${products.name} to cart`, toastOptions)

    }
}

const removeProduct = async(products) =>{
    const newCart =cart.filter(cartItem => cartItem.id !== products.id);
    setCart(newCart);
  }

  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  }


    useEffect(() => {
        fetchProducts();
    },[]);

    useEffect(() => {
        console.log(products);
    },[products]);

    useEffect(() => {
        let newTotalAmount = 0;
        cart.forEach(icart => {
          newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
        })
        setTotalAmount(newTotalAmount);
      },[cart])
    

  return (
    
    <Product>
        <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
       
  <div class="container-fluid ">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <button className='btn btn-outline-primary' onClick={scrollToCart}>
        <FontAwesomeIcon icon={faShoppingCart}/>
      </button>

    </form>
  </div>
</nav>
        </div>
        <div className='row-lg-4'>
            <div className='col-lg-8'>
            {isloading ? 'Loading' :   <div className='row'>
                    {products.map((products, key) =>
                    
                    <div key={key} className='col-lg-12'>
                    <div className=' border rounded my-4 p-4' onClick={()=> addProductToCart(products)}>
                      <div className='row'>
                        <div className='col-lg-3'>
                          <img src={products.image} className="img-fluid" alt={products.name} />
                        </div>
                        <div className='col-lg-9'>
                          <p style={{ fontWeight: 'bold' }}className="text-gray-600">{products.name}</p>
                          <p className="font-bold text-red-600">Author: {products.author}</p>
                         <p className='text-red-600'>Description: {products.description}</p>
                          <p className="text-red-600">Price: Rs {products.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    )}
                
            </div>}
        </div>
       <div className='col-lg-4 rounded my-4 p-4 bg-transparent' ref={cartSectionRef}></div>
        <div style={{display: "none"}}>
                <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={componentRef}/>
              </div>
              <div className='table-responsive bg-dark bg-transparent' >
                <table className='table table-responsive table-dark table-hover'>
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Total</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    { cart ? cart.map((cartProduct, key) => <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>
                      <td>
                      <button className='btn btn-danger btn-sm' onClick={() => removeProduct(cartProduct)}>Remove</button>
                      </td>

                    </tr>)

                    : 'No Item in Cart'}
                  </tbody>
                </table>
                <h2 className='px-2 text-white'>Total Amount: Rs{totalAmount}</h2>
              </div>

              <div className='mt-3'>
                { totalAmount !== 0 ? <div>
                  <button className='btn btn-primary' onClick={handlePrint}>
                    Pay Now
                  </button>

                </div> : 'Please add a product to the cart'

                }
              </div>


        </div>
    </Product>


   
  )
}

export default Pos;