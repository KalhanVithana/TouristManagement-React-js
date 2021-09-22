import axios from 'axios';
import React from 'react'
import { useState } from 'react'


export default function Register() {
    const [name, setname] = useState("");
    const [email, setemail] = useState();
    const [password, setpasswrod] = useState();


    const submit = async (e) => {


        console.log("casll")


        await axios.post("http://localhost:4000/add", { name: name, email: email, password: password }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>

            <form onSubmit={submit}>
                <input type="text" value={name} onChange={(e) => {
                    setname(e.target.value)
                    console.log(name)
                }}></input>

                <input type="text" value={email} onChange={(e) => {
                    setemail(e.target.value)
                }}></input>


                <input type="text" value={password} onChange={(e) => {
                    setpasswrod(e.target.value)
                }}></input>

                <button type="submit">register</button>
            </form>


            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    )
}
