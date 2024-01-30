import React, { useState } from 'react';
import axios from 'axios';
import EmojiPicker from 'emoji-picker-react';
import { RiSendPlaneFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Form = () => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    
    const sendMessage = (e) => {
        e.preventDefault();
        const data = {
          username,
          text,
        };
        axios
          .post(import.meta.env.VITE_SV_URL, data)
          .then(() => {
            
            console.log("message has been sent sucessfully")
            setUsername("");
            setText("");
          })
          .catch((error) => {
            alert('Please input the username or the message');
            console.log(error);
          });
    }
  return (
    <div className="form p-4">
        <form className='flex justify-between' onSubmit={sendMessage}> 
            <div className='flex flex-col w-full'>
                <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2" 
                placeholder="Username"
                required/>

                <input type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 w-full" 
                placeholder="Message"
                required/> 
            </div>
            

            <button type='submit' className='p-2'>
            <IconContext.Provider value={{ size: 26 }}>
                <div>
                    <RiSendPlaneFill />
                </div>
            </IconContext.Provider>
                
            </button>
            
        </form>
                
    </div>
  )
}

export default Form