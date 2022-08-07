import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Login = () => {
 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const handleSubmit = (e) => {
        e.preventDefualt()
    }

    const handleInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type='submit'>Register</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login