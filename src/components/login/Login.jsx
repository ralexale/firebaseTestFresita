import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {register, handleSubmit, formState: {errors}} =useForm()

  const onSubmit = (data) =>{
    console.log(data)
    }
    return (
    <section className='p-5'>
        <form className='form flex flex-col gap-5 items-center' onSubmit={handleSubmit(onSubmit)}>
            <label className='flex flex-col gap-3 ' >
                <span>
                Usuario
                </span>
                <input className='border-2 p-2 rounded-md' type="text" placeholder='Nombre de usuario' {...register('name',{required: 'Nombre requerido'})} />
            </label>
            {errors.name ? <span className='text-red-500'>{errors.name.message}</span> : <></>}
            <label  className='flex flex-col gap-3 '>
                <span>
                Constraseña
                </span>
                <input className='border-2 p-2 rounded-md' type="password" placeholder='Contraseña' {...register('password',{required: 'Contraseña requerida'})}/>
            </label>
            {errors.password ? <span className='text-red-500'>{errors.password.message}</span> : <></>}
            <button className='bg-blue-300 p-3 rounded-md' type='submit'>Iniciar sesion</button>
        </form>

    </section>
  )
}

export default Login