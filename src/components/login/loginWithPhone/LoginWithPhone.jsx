import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { GiStrawberry } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const LoginWithPhone = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
       navigate('/insertcode')
    }
  return (
    <div className='p-4'>
        <section className='formphone'>
        <form onSubmit={handleSubmit(onSubmit)}  className=' p-5 flex flex-col gap-5 text-center' >
            <GiStrawberry className='drop-shadow-2xl text-shadow text-blue-400 text-5xl self-center'/>
            <label htmlFor="" className='flex flex-col gap-3'>
            <span>Ingrese un número de telefono</span>
            <input {...register('number', {required: 'El número es requerido', pattern: {value: /^[0-9]{10}$/, message: 'El número debe tener 10 digitos'},
            })} className='border-2 border-blue-200 p-2 rounded-md' type="text" placeholder='número de télefono' />
            </label>
            {errors.number ? <span className='bg-red-200 p-2 text-white'>{errors.number.message}</span> : <></>}
            <button type='submit' className='bg-blue-300 p-3 rounded-md'>Enviar sms</button>
        </form>
        <div id='recaptch-container'></div>
        
        </section>
    </div>
  )
}

export default LoginWithPhone