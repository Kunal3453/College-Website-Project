import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const isValidEmail = (value) => {
      // Basic email validation using a regular expression
      const emailRegex = /^[a-zA-Z]+$/;;
      return emailRegex.test(value);
    };
    const isValidPassword = (value) => {
      // Password validation: At least one lowercase letter, one uppercase letter, one digit, and minimum length of 8 characters
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return passwordRegex.test(value);
    };
    async function submit(e){
        e.preventDefault();
        if (!isValidEmail(email)) {
          alert("Please enter a valid UserName");
          return;
        }
        if (!isValidPassword(password)) {
          alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
          return;
        }
        try{

            await axios.post("http://localhost:8004/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <section className="mt-8">
  <div class="flex items-center justify-center ">
    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
     Form
      </h2>
      <p class="mt-2 text-center text-base text-gray-600">
        Already have an account?{" "}
        <Link to="/Login"
          className="font-medium text-black transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>
      <form action="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="name" class="text-base font-medium text-gray-900">
              {" "}
              Full Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder="Full Name"
                id="name"  
              />
            </div>
          </div>
            < div>
             <label for="email" class="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
              </label>
             <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
               
                pattern=".+@example\.com" required
              />
            </div>
           </div>
           < div>
             <label for="Phone" class="text-base font-medium text-gray-900">
              {" "}
              Phone Number{" "}
              </label>
             <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Phone No."
                id="Phone"
              />
            </div>
           </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                onChange={(e) => { setPassword(e.target.value) }}
                placeholder="Password"
                id="password"
              />
            </div>
          </div>
          <div>
            <button
              type="button" onClick={submit}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div class="mt-3 space-y-3">
        <button
          type="button"
          class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        >
          <span class="mr-2 inline-block">
            <svg
              class="h-6 w-6 text-rose-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </span>
          Sign up with Google
        </button>
        <button
          type="button"
          class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        >
          <span class="mr-2 inline-block">
            <svg
              class="h-6 w-6 text-[#2563EB]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
          </span>
          Sign up with Facebook
        </button>
      </div>
    </div>
  </div>
</section>

        // <div className="login">

        //     <h1>Signup</h1>

        //     <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        //         <input type="submit" onClick={submit} />

        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/Login">Login Page</Link>

        // </div>
    )
}

export default Login