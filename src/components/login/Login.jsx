import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {register, handleSubmit, formState: {errors}} =useForm()

  const onSubmit = (data) =>{
    console.log(data)
    }
    return (
    <section>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <label className='label' >
                <span>
                Usuario
                </span>
                <input type="text" placeholder='Nombre de usuario' {...register('name',{required: 'Nombre requerido'})} />
            </label>
            {errors.name ? <span>{errors.name.message}</span> : <></>}
            <label className='label'>
                <span>
                Constraseña
                </span>
                <input type="password" placeholder='Contraseña' {...register('password',{required: 'Contraseña requerida'})}/>
            </label>
            {errors.password ? <span>{errors.password.message}</span> : <></>}
            <button type='submit'>Iniciar sesion</button>
        </form>

    </section>
  )
}

export default Login