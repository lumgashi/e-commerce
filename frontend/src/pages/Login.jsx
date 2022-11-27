import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/check-out.css'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth,storage, db} from '../firebase'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const signin = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email,password)
      const user = userCredential.user

      setLoading(false);
      toast.success('success logged in')
      navigate('/home');
    } catch (error) {
      setLoading(false);
      toast.error('something went wrong')
    }
  }

  return (
    <Helmet title='Login'>
        <section>
          <Container>
            <Row>
              {
                loading ? <Col lg='12' className='text-center'><h5>Loading...</h5></Col>
                :
                <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold fs-4'>Login</h3>

                <Form className='auth__form' onSubmit={signin}>
                  <FormGroup className='form__group'>
                    <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input type="password" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </FormGroup>

                  <button type='submit' className="shop__btn auth__btn">Login</button>
                  <p>Dont have an account? <Link to='/signup'>Create one</Link></p>
                </Form>
              </Col>
              }
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Login