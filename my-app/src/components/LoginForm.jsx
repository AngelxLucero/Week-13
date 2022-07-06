import React from 'react'

function LoginForm() {
  return (
    <form className='box'>
      <div className='form-inner'>
        <h2>Login</h2>
        {/* Error! */}
        <div className='form-group'> 
        <lable htmlFor="name">Name:   </lable>
        <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <lable htmlFor='email'> Email:   </lable>
          <input type="email" name='email' id='email' />
        </div>
        <div className='form-group'>
          <lable htmlFor='password'>Password:  </lable>
          <input type='password' name='password' id='password' />
        </div>
          <input type="submit" value="Login" />
      </div>
    </form>
  )
}

export default LoginForm