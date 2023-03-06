"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function Chat() {

    //     const cors = require('cors');
    //     const corsOptions ={
    //     origin:'http://localhost:5000', 
    //     credentials:true,            //access-control-allow-credentials:true
    //     optionSuccessStatus:200
    // }
    //     app.use(cors(corsOptions));

    const [input, setInput] = useState({})

    const apiGet = async () => {
        axios.get("http://127.0.0.1:5000/question/1/?format=json", {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'X-Custom-Header': 'XMLHttpRequest',
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    const apiPost = async () => {


        
        await axios.post("http://127.0.0.1:5000/question/?format=json", {
            text: input.text
            
        })
        
            .then(response => {
                console.log(response)
                console.log('caiu aki bom')
            })
            .catch(error => console.log(error),console.log('caiu aki mau'))
    }

    const handleChange = (event) => {
        event.persist()
        setInput((input) => ({
            ...input,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handle submit')
        console.log(input)
        apiPost()
    }

    return (
        <>
            <div className="items-center justify-center">
                <div className="text-xl text-gray-500 mb-8">
                    Sua pergunta:
                </div>
                <form onSubmit={handleSubmit} id='form'>
                    <input
                        type='text'
                        id='question-text'
                        name='text'
                        placeholder='your question'
                        onChange={handleChange}
                    ></input>
                    <button
                        id='btn'
                        onClick={handleChange}
                    >Concluido
                    </button>
                </form>
                {/* <div className="w-96 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum et voluptatibus amet cum hic eos, deserunt repellat voluptatem incidunt dolorem vel qui?
            </div> */}
            </div>

        </>
    )
}

export default Chat;