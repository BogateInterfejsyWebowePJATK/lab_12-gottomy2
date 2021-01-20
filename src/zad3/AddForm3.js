import React, { useState } from "react";
import { useInput } from "../hooks"


export default function AddForm3(userCredentials){
    const [email, resetEmail] = useInput("");
    const [password, resetPassword] = useInput("");
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const submit = e => {
        e.preventDefault();
        if(regex.test(email.value)){
            console.log(userCredentials["pass"])
            console.log(userCredentials["mail"])
            console.log(password.value)
            console.log(email.value)
            if (userCredentials["pass"] !== password.value || userCredentials["mail"] !== email.value) {
                alert("Incorrect Credentials!")
                resetPassword()
                resetEmail()
            } else {
                alert("Successfully logged in")
            }
        }
        else{
            alert("Please Provide email with correct regex")
            resetEmail();
        }
    }
    return(
        <>
            <h2>Login Form</h2>

            <form onSubmit={submit}>
                <label htmlFor="uname"><b>Username</b></label>
                <input {...email} type="text" placeholder="Enter Email"required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input {...password} type="password" placeholder="Enter Password" required/>

                <input type="submit" value="Wyślij"/>

            </form>
        </>
    );
}