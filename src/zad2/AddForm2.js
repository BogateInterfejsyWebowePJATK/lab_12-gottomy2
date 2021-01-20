import React, { useState } from "react";
import { useInput } from "../hooks";

export default function AddForm2(){
    const [showTable,setShowTable] = useState(false);
    const [textInput1,resetTextInput1] = useInput("");
    const [textInput2,resetTextInput2] = useInput("");
    const [radio,resetRadioInput] = useInput();
    const [select,resetSelectInput] = useInput();
    const [checkbox, resetCheckbox] = useInput("");

    const submit = e => {
        e.preventDefault();
        setShowTable(true);
    }

    const resetForm = () => {
        resetTextInput1()
        resetTextInput2()
        resetRadioInput()
        resetSelectInput()
        resetCheckbox()
        setShowTable(false)
    }

    return(
        <>
            <form onSubmit={submit}>
                <input {...textInput1} type="txt" placeholder="Text Input 1"/><br/>
                <input {...textInput2} type="txt" placeholder="Text Input 2"/><br/>
                <select {...select}>
                    <option value="Koty" aria-checked="true">Koty</option>
                    <option value="Psy">Psy</option>
                    <option value="Papugi">Papugi</option>
                </select><br/>
                <label className="container">Check
                    <input {...checkbox} className="" type="checkbox" value="Checked" />
                    <span className="checkmark"></span>
                </label>
                <label className="radio_container">Radio
                    <input {...radio} id="radio" type="radio" value="Checked" /><br/>
                        <span className="radio_checkmark"></span>
                </label>


                <input type="submit" value="Wyślij"/>
                <button type="reset" onClick={resetForm}>Resetuj</button>
            </form>
            {
                showTable ? (
                    <table>
                        <tr>
                            <td>Text 1</td>
                            <td>{textInput1.value}</td>
                        </tr>
                        <tr>
                            <td>Text 2</td>
                            <td>{textInput2.value}</td>
                        </tr>
                        <tr>
                            <td>Select</td>
                            <td>{select.value}</td>
                        </tr>
                        <tr>
                            <td>Checkbox</td>
                            <td>{checkbox.value}</td>
                        </tr>
                        <tr>
                            <td>Radio</td>
                            <td>{radio.value}</td>
                        </tr>
                    </table>
                ) : <></>
            }
        </>
    );
}