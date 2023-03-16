import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUserAsync } from '../../redux/actions/loginActions'

const Login = () => {
    const {register, handleSubmit, formState: {errors}} =useForm()
    const dispatch = useDispatch()
    const { error, loading, isLogged } = useSelector((state) => state.login)
    const navigate = useNavigate()
  
    useEffect(() => {
      if (isLogged) {
        navigate('/')
      }
    }, [isLogged])

  const onSubmit = (data) =>{
    dispatch(loginUserAsync(data))
    }
    return (
    <section className='p-5'>
        <form className='form flex flex-col gap-5 items-center' onSubmit={handleSubmit(onSubmit)}>
            <label className='flex flex-col gap-3 ' >
                <span>
                Email
                </span>
                <input className={`border-2 p-2 rounded-md ${errors.email ? 'border-red-300' : ''}`}type="text" placeholder='Email' {...register('email',{required: 'Email requerido'})} />
            </label>
            {errors.email ? <span className='text-red-500'>{errors.email.message}</span> : <></>}
            <label  className='flex flex-col gap-3 '>
                <span>
                Contraseña
                </span>
                <input className={`border-2 p-2 rounded-md ${errors.password ? 'border-red-300' : ''}`} type="password" placeholder='Contraseña' {...register('password',{required: 'Contraseña requerida'})}/>
            </label>
            {errors.password ? <span className='text-red-500'>{errors.password.message}</span> : <></>}
            <button disabled={loading} className='bg-blue-300 p-3 rounded-md' type='submit'>Iniciar sesion</button>
        </form>
        {error.status ? <span className=' bg-red-300 p-2  m-5 text-white'>{error.message}</span> : <></>}
        <h3>¿No tienes un usuario? Puedes <Link to='/register' className='text-blue-500'>Crear uno</Link></h3>
    </section>
  )
}

export default Login