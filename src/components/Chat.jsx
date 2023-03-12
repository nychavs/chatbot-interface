"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Chat() {

    const [input, setInput] = useState({})
    const [data, setData] = useState([])
    const [idAPI, setidAPI] = useState('')

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }

    const newest_question = () =>{
        console.log('teste')
        axios.get("http://127.0.0.1:8000/question/?format=json")
        .then((response) => {
            var object = (response.data)
            var tamanho = ((object).length) + 1
            setidAPI(tamanho)
        })
        apiGet()
    }

    const apiGet = async () => {
        console.log(idAPI)
        axios.get("http://127.0.0.1:8000/question/"+ idAPI +"/?format=json")
            .then((response) => {
                setData(response.data)
            })
            .catch(error => console.log(error))
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

            setTimeout(newest_question, 5000)
            toast.success("A Avilla já esta procurando a reposta para a sua pergunta", toastOptions)
            console.log('oio')
            }

    const handleChange = (event) => {
        event.persist()
        setInput((input) => ({
            ...input,
            [event.target.name]: event.target.value,
        }))
        let newData = []
        setData(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
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
                        onClick={handleSubmit}
                    >Concluido
                    </button>
                </form>
                <p>Avilla informa: {data.avillaAnswer}</p>
                {/* <div className="w-96 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum et voluptatibus amet cum hic eos, deserunt repellat voluptatem incidunt dolorem vel qui?
            </div> */}
            </div>
            <ToastContainer />
        </>
    )
}

export default Chat;