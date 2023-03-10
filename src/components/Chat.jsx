"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function Chat() {

    const [input, setInput] = useState({})
    const [data, setData] = useState([])

    const newest_question = () =>{
        all_questions = axios.get("http://127.0.0.1:5000/question/?format=json")
        all_questions = (all_questions.json())
        newest = 0
         
        for (var i = 0; i< all_questions.length; i++){
            if (i > newest){
                newest = i
            }
        }
        newest_answer = all_questions[newest]['avillaAnswer']
        apiAnswerid = newest
        setence = newest_answer
    }

    const apiGet = async () => {
        axios.get("http://127.0.0.1:5000/question/" + apiAnswerid + "?format=json")
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
            setData(response.json())
    }

    const apiPost = async () => {
        await axios.post("http://127.0.0.1:8000/question/?format=json", {
            userQuestion: input.text,
            avillaAnswer: ""
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
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
    
    useEffect(()=>{
        apiGet();
      }, [])

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
                <p>your question: {data.avillaAnswer}</p>
                {/* <div className="w-96 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum et voluptatibus amet cum hic eos, deserunt repellat voluptatem incidunt dolorem vel qui?
            </div> */}
            </div>

        </>
    )
}

export default Chat;