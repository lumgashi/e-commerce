import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/login.css'
import {useSelector} from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);

  return <Helmet title='Checkout'>
    <CommonSection title='Checkout' />
    <Container>
    <Row>
      <Col lg='8' >
        <h6 className='mb-4 fw-bold'>Billing Information</h6>
        <Form className='billing__form'>
          <FormGroup className='form__group'>
            <input type="text" placeholder='Your Name' />
          </FormGroup>

          <FormGroup className='form__group'>
            <input type="email" placeholder='Your Email' />
          </FormGroup>

          <FormGroup className='form__group'>
            <input type="number" placeholder='Your Phone Number' />
          </FormGroup>

          <FormGroup className='form__group'>
            <input type="text" placeholder='City' />
          </FormGroup>

          <FormGroup className='form__group'>
            <input type="text" placeholder='Postal Code' />
          </FormGroup>

          <FormGroup className='form__group'>
            <input type="text" placeholder='Country' />
          </FormGroup>

        </Form>
      </Col>
      <Col lg='4'>
        <div className="checkout__cart mt-5">
          <h6>Total Qty : <span>{totalQty}px</span></h6>
          <h6>Subtotal Qty : <span>${totalAmount.totalPrice}</span></h6>
          <h6>Shipping : <span>$</span></h6>
          <h6>Free Shipping : <span>$0</span></h6>
          <h6>Total Cost : <span>${totalAmount.totalPrice}</span></h6>
        </div>

        <button className="shop__btn auth__btn w-100 mt-2">Place an order</button>
      </Col>
    </Row>
    </Container>
  </Helmet>
}

export default Checkout