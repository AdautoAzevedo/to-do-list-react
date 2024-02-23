import React from 'react'

const AuthForm = ({user, setUser, handleSubmit}) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    
    return (
        <form>
            <label htmlFor='login'> User: </label>
            <input 
                type='text'
                name='login'
                value={user.login}
                onChange={handleChange}    
            />
            <label htmlFor='password'> Password: </label>
            <input 
                type='password'
                name='password'
                value={user.password}
                onChange={handleChange}    
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default AuthForm