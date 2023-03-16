import React from 'react'

const InsertCode = () => {
  return (
    <div>
        <form action="">
                        <label htmlFor="" className='flex gap-3'>
                        <span>Ingrese el código de verificación</span>
                        <input className='border-2 border-blue-200 p-2 rounded-md' type="text" placeholder='código sms' />
                        </label>
                        <button className='bg-blue-300 p-3 rounded-md'>Verificar código</button>
        </form>
    </div>
  )
}

export default InsertCode