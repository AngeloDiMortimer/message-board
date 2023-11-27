import Messages from "./Mesages";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/card.css";

const Card = () => {
    const [msg, setMsg] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:5000/')
        .then((res) => {
          setMsg(res.data.messages);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
        <div className="content flex my-8 flex-col relative w-1/2 bg-white">
            <div className="header bg-darkPurple flex justify-center font-light text-white text-base p-2
            rounded-t-lg">
                <h1>Created by <span className="text-lightPurple">Angelo Martínez</span></h1>
            </div>
            <h1 className="title font-medium text-3xl p-4">Mini Message Board</h1>
            <div className="chat p-2 flex flex-col overflow-y-auto">
                <Messages messages={msg}/>            
            </div>
            
            <div className="form">
                <form>
                    <input type="text" className="p-2" placeholder="Username"/>
                    <input type="text" className="p-2" placeholder="Message"/>
                    <input type="submit" />
                </form>
                
            </div>

            

        </div>
    )
}

export default Card;