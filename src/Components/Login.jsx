// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Login() {
    return (

        <div className='container py-5' style={{ width: '30rem', }} >
            <div className='bg-primary shadow-lg flex-column py-5 rounded-4  d-flex align-items-center justify-content-center'>
                <h2 className='text-center  mx-5'>Login</h2>
                <div className='my-3 d-flex flex-column'>
                    <input className='my-2  px-4 py-2 rounded border border-0' type="email" name='email' id='email' />
                    <input className='my-2 px-4 py-2 rounded border border-0' type="password" name='password' id='password' />
                </div>
                <button className='btn btn-danger '>Login</button>
            </div>
        </div>
    )
}
