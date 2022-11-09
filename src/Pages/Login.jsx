
import { Link } from 'react-router-dom'



const Login = () => {
    return ( 
        <div className='flex justify-center items-center mt-[200px] mx-auto bordered-gray-200'>
            <div className="flex flex-col justify-center items-start mx-auto gap-4">
                <h1 className="font-semibold text-4xl mb-3">Login</h1>
                <input type="text" className="form-input px-4 py-3 rounded-md w-[400px]" placeholder="Email"/>
                <input type="password" className="form-input px-4 py-3 rounded-md w-[400px]" placeholder="Password"/>
                <div>
                    <input type="checkbox" className="rounded-md mr-3" />
                    <span>Keep me signed in</span>
                </div>
                <button type="submit" className="btn btn-dark w-full">Login</button>
                <span>Don't have an account yet? <Link className='font-bold text-white underline' to='/register'>Here</Link></span>
            </div>
        </div>
     );
}
 
export default Login;