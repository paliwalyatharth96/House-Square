import {useState} from 'react'
import { toast } from 'react-toastify'
import {Link , useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visiblityIcon from '../assets/svg/visibilityIcon.svg'
import{getAuth,
  createUserWithEmailAndPassword , 
  updateProfile}
from 'firebase/auth'

import { setDoc,doc,serverTimestamp } from 'firebase/firestore'

import {db} from '../Firebase.config'

function SignUp() {

  const[showPassword , setShowPassword]= useState(false)
  const[formData , setformData]=useState(
    {
      name:'',
      email:'',
      password: ''
    }
  )
  const {name, email , password}= formData

  const navigate = useNavigate()
  const onchange= (e) => {
    setformData(( prevState )=> ({ ...prevState,
    [e.target.id]:e.target.value,
    }))
  }

  const onSubmit = async(e)=>
  {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword
      (auth, email, password)
      const user = userCredential.user

      updateProfile(auth.currentUser,{
        displayName: name 
      })
      navigate('/')


      const fromDataCopy = {...formData}
      delete fromDataCopy.password
      fromDataCopy.timestamp= serverTimestamp()

      await setDoc(doc(db ,'users',user.uid), fromDataCopy)

    
    
    } catch (error) {
      toast.error('Something Went Wrong with Registration ')
    }
  }
 

    return (
      <>
        <div className="pageContainer">
          <header>
             <p className="pageHeader">Welcome!</p>
          </header>
            <form onSubmit= {onSubmit} >
            <input type="text" className="nameInput"  placeholder="Name" id="name" value={name}
                    onChange={onchange}/>



              <input type="email" className="emailInput"  placeholder="Email" id="email" value={email}
                    onChange={onchange}/>
              
              <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onchange}
            />

            <img onSubmit={onSubmit}
              src={visiblityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>  
                   <Link to='/forgot-password' className='forgotPasswordLink'>
                   Forgot Password
                   </Link>
                   <div className="signUpBar">
                     <p className="signUpText">Sign UP</p>
                     <button className='signUpButton'>
                       <ArrowRightIcon fill="#ffffff" width='34px' height='34px'/>
                       </button> 
                       </div>         
            </form>

            <Link to='/sign-in' className="registerLink" >
            sign In Instead
            </Link>
            
        </div>
      </>
    );
  }
  
  export default SignUp;