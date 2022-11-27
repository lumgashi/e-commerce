import React from 'react'
import './footer.css'

import { Container,Row,Col, ListGroup,ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className="logo">
              <div>
                <h1  className='text-white'>Buyer</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ipsum atque consequatur reiciendis cum ratione soluta, assumenda minus cupiditate amet, blanditiis totam sit dicta vitae impedit recusandae consequuntur, molestias fugiat. 
              </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-2-line"></i></span>
                  <p>000, Unknown Street, UK</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+00 0000 000 00</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-add-line"></i></span>
                  <p>example@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12' >
            <p className="footer__copyright text-center">Copyright 2011 - {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer