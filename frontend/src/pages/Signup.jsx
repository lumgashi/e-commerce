import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/check-out.css'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage, db} from '../firebase'
import {setDoc, doc} from 'firebase/firestore'
import {toast} from 'react-toastify'


import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password)

      const user = userCredential.user;
      console.log(user)

      const storageRef = ref(storage, `imgagestore/${Date.now()+ username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error)=> {
        toast.error(error.message)
      }, ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downladURL)=> {
          await updateProfile(user, {
            displayName: username,
            photoURL: downladURL,
          })

          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email: email,
            photoURL: downladURL
          })
        })
      })

      setLoading(false);
      toast.success('Account created successfully')
      navigate('/login')
    } catch (error) {
      setLoading(false);
      toast.error('something went wrong')
    }
  }

  return (
    <Helmet title='Signup'>
        <section>
          <Container>
            <Row>
              {
                loading? <Col className='text-center'>Loading...</Col>
                :
                <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold fs-4'>Register</h3>

                

                <Form className='auth__form' onSubmit={signup}>
                  <FormGroup className='form__group'>
                    <input type="text" placeholder='Your Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input type="password" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
                  </FormGroup>

                  <button type='submit' className="shop__btn auth__btn">Register</button>
                  <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                </Form>
              </Col>
              }
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Signup