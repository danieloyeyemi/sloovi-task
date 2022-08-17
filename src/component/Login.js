import "../assets/styles/login.module.css"
import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const navigate =useNavigate();
function login(userDetails){
   const url ='https://stage.api.sloovi.com/login';
   axios.post(url,userDetails).then((res)=>{
       if(res.data.status){
            localStorage.token = res.data.results.token
            localStorage.company= res.data.results.company_id
            localStorage.user= res.data.results.user_id
            navigate("/task")
        }
    })
}
  return (
    <>
        <section class="section">
        <div class="col-4 mx-auto shadow-sm mt-4">
            <div class="form">
                <h2 className="text-center">Login</h2>
                    <div class="inputBx">
                    <input type="text" className="form-control mb-2" onChange={(e)=>setemail(e.target.value)} value={email} placeholder="email" name="" id=""/>
                    </div>
                    <div class="inputBx">
                    <input type="password" className="form-control mb-2" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="Password"name="" id=""/>
                    </div>
                    <div class="inputBx">
                        <input className="btn btn-success" type="submit" onClick={()=>login({email,password})} value="Login"/>
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}
