import { Fragment } from 'react'
import logo from '../assets/img/login1.gif';
import loginImage from '../assets/img/login.jpg';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-screen">
        <div className="px-12 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" >
              <img src={loginImage} className="w-full" />
            </div>

            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"  >
              <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                  <div>
                    <img
                      className="mx-auto w-auto"
                      src={logo} style={{ height: `20rem` }}
                      alt="dress me up"
                    />
                  </div>
                  <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          email
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button onClick={() => navigate('/home')}
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
                        </span>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}