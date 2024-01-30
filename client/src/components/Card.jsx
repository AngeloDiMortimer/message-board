import Messages from "./Mesages";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/card.css";
import Form from "./Form";

const Card = () => {
    const [msg, setMsg] = useState([]);
    useEffect(() => {
      axios
        .get(import.meta.env.VITE_SV_URL)
        .then((res) => {
          setMsg(res.data.messages);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [msg]);

    return (
        <div className="content flex md:my-8 flex-col relative md:w-1/2 bg-white">
            <div className="header bg-darkPurple flex justify-center font-light text-white text-base p-2
            rounded-t-lg">
                <h1>Created by <span className="text-lightPurple">Angelo Martínez</span></h1>
            </div>
            <h1 className="title font-medium text-3xl p-4">Mini Message Board</h1>
            <div className="chat p-2 flex flex-col overflow-y-auto">
                <Messages messages={msg}/>            
            </div>

            <Form />
        </div>
    )
}

export default Card;