import React, { useRef } from "react";

export default function AddForm1(){
    let sum = 0;
    let count = 0;
    const number = useRef();
    const submit = e => {
        e.preventDefault();
        count = count +1;
        console.log("Counter value: " + count);
        const n = number.current.value;
        sum+=parseInt(n);
        let average = sum/count;
        console.log("Sum:" + sum);
        alert('Aktualna Suma: ' + sum +"\nŚrednia: " + average);
        number.current.value="";
    };

    return(
        <form onSubmit={submit}>
            <input ref={number} type="text" placeholder="Input number" required /><br/>
            <input type="submit" value="Send"/>
        </form>
    );
}