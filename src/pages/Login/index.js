import { logo } from "assets";
import { React, Link } from "libraries";

export const Login = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-xl xl:px-8 xl:w-5/12">
        <div className="bg-white mt-14 rounded md:shadow-2xl p-7 sm:p-10">
          <div className="filter drop-shadow-md md:drop-shadow-xl flex items-center justify-center">
            <Link className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" to="/">
              <img alt="logo site" src={logo} width={64} /> 
            </Link>
              <span className="ml-2 md:text-lg text-sm font-bold tracking-wide text-gray-800">
                Login to VV Cryptocurreny Insight.
              </span>
          </div>

          <br className="mt-4 mb-4 border-gray-100" />
          
          <form>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                E-mail
              </label>
              <input
                placeholder="john.doe@example.org"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="password"
                className="inline-block mb-1 font-medium"
              >
                Password
              </label>
              <input
                placeholder="Password"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
              />
            </div>
            
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Login
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
