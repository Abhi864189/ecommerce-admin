import React, { useEffect } from 'react'
import { Layout, Card, } from 'antd'
import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../redux/hooks';
import { loginAdmin } from '../../redux/reducers/authSlice';
import { RootState } from '../../redux/store';
import { isExpired } from 'react-jwt';

const Login: React.FC = () => {
  const [cred, setCred] = useState({ email: '', password: '' });
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = () => {
    console.log(cred, 'cred');
    dispatch(loginAdmin(cred))
    // navigate('/dash-board')
  }

  useEffect(() => {
    if (token.length > 0) {
      if (!isExpired(token)) {
        navigate('/dash-board')
      }
    }
  }, [token])
  return (
    <Layout className='main-layout lg:flex-row'>
      <div className='sub-container flex justify-center items-center bg-[#68f76847]'>
        <Card className="login-container py-8 px-6 bg-white w-[80%]" bordered={false}>
          <h1 className='text-center font-serif text-2xl text-[#228B22] mb-4'>Login</h1>
          <div className="form-container">
            <div className="form-item">
              <label className='form-level' htmlFor='email'>Email</label>
              <input placeholder='Enter Email' name='email' className='form-input' type='text' onChange={(e: any) => setCred({ ...cred, email: e.target.value })} />
            </div>
            <div className="form-item">
              <label className='form-level' htmlFor='password'>Password</label>
              <input placeholder='Enter Email' name='password' className='form-input' type='password' onChange={(e: any) => setCred({ ...cred, password: e.target.value })} />
            </div>
            <button className='login-button' type='button' onClick={handleLogin}>Login</button>
          </div>
        </Card>
      </div>
      <div className='sub-container hidden lg:block' />
    </Layout>
  )
}

export default Login;
