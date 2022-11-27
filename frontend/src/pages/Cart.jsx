import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {cartActions } from '../redux/slice/cartSlice'
import {useSelector, useDispatch} from 'react-redux'

import tdImg from '../assets/images/arm-chair-01.jpg'


const Cart = () => {


  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)





  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? <h2 className='text-center fs-4'>No Items added to the Cart</h2>
                :
                <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems.map((item,index)=> (
                      <Tr item={item}/>
                    ))
                  }
                </tbody>
              </table>
              }
              
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                  <span className='fs-4 fw-bold '>${totalAmount.totalPrice}</span>
                </h6>
      
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
                <button className='shop__btn fw-bold mb-3 w-100'><Link to='/shop'>Continue Shopping</Link></button>
                <button className='shop__btn fw-bold w-100'><Link to='/checkout'>Check Out</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item}) => {

  const dispatch = useDispatch();


  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr key={item.productName}>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i 
          whileTap={{ scale: 1.1 }} 
          onClick={deleteProduct}
          class="ri-delete-bin-2-line">
        </motion.i></td>
    </tr>
  )
}

export default Cart