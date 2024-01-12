
const Login = () => {
    return (
<body>
<div className="wrapper">
    <form action="">
        <h1>Login</h1>
       <div className="input-box">
        <input type="text" placeholder="Username"required />
        
        </div>

        <div className="input-box">
            <input type="password" placeholder="Password"required />
           </div>

        <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me</label>
        <a href="#">Forgot Password?</a>
   </div>

<button type="submit" className="btn">Login</button>

       <div className="register-link">
        <p>Don&#39;t have an account? <a 
            href="#">Register</a> </p>
       
    </div>

    </form>
    </div>
</body>
);
};
export default Login