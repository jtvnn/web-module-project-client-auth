import React from 'react';


function Login() {


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
                id='username'
                name='username'
                value={formValues.username}
                onChange={handleChanges}
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                value={formValues.password}
                onChange={handleChanges}
            />
            <button>Login</button>
        </form>
    )
}

export default Login;