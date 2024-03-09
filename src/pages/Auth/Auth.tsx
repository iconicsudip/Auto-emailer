import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

export default function Auth() {
    const [type, setType] = useState<'login' | 'register'>('login')
    return (
        <div>
            {type === 'login' ? <Login setType={setType} /> : <Register setType={setType} />}

        </div>
    )
}
