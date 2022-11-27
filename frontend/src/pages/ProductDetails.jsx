import React,{useState, useRef} from 'react'
import '../styles/product-details.css'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import CommonSection from '../components/UI/CommonSection'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slice/cartSlice'
import {toast, ToastContainer} from 'react-toastify'




const ProductDetails = () => {

  const {id} = useParams();
  const product = products.find(p => p.id === id);
  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg  = useRef('');
  const dispatch = useDispatch();

  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product

  const relatedProduct = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price
    }))

    toast.success('Product added successfully.')
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />


      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt={productName} />
            </Col>

            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span onClick={()=> setRating(1)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setRating(2)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setRating(3)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setRating(4)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setRating(5)}><i class="ri-star-half-s-line"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span> ratings)</p>
                </div>
                
                  <span className='product__price'>{price}</span>
                  <p className='mt-3'>{shortDesc}</p>

                  <motion.button onClick={addToCart}  whileTap={{scale: 1.1}} className="shop__btn ">Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active__tab': ''}`} onClick={()=> setTab('desc')} >Description</h6>
                <h6 className={`${tab === 'rev' ? 'active__tab': ''}`} onClick={()=> setTab('rev')} >Reviews ({reviews.length})</h6>
              </div>


            {
                tab === 'desc' ? <div className="tab__content mt-5">{description}</div>
                :
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews.map((item, index)=> (
                          <li key={index} className='mb-4'>
                            <h6>Jhon Doe</h6>
                            <span>{item.rating} ( rating) </span>
                            <p>{item.text}</p>
                          </li>
                          
                        ))
                      }
                    </ul>

                    <div className="review__form">
                      <h4>Leave your exprience</h4>
                        <form action="" onClick={submitHandler}>
                          <div className="form__group">
                            <input type="text" placeholder='Your name' ref={reviewUser} />
                          </div>

                          <div className="form__group d-flex align-items-center gap-5">
                            <span>1 <i class="ri-star-s-fill"></i></span>
                            <span>2 <i class="ri-star-s-fill"></i></span>
                            <span>3 <i class="ri-star-s-fill"></i></span>
                            <span>4 <i class="ri-star-s-fill"></i></span>
                            <span>5 <i class="ri-star-s-fill"></i></span>
                          </div>

                          <div className="form__group">
                            <textarea rows={4} type="text" placeholder='Review Message' ref={reviewMsg} />
                          </div>

                          <motion.button whileTap={{ scale: 1.1 }} type='submit' 
                          className="shop__btn" 
                          
                          >
                            SEND
                            </motion.button>
                        </form>
                    </div>
                  </div>
                </div>
            }
            </Col>

            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails