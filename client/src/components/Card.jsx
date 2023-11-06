import Messages from "./Mesages";
import { Form } from "formik";
import "../styles/card.css";

const Card = () => {
    return (
        <div className="content flex my-8 flex-col relative w-1/2 bg-white">
            <div className="header bg-darkPurple flex justify-center font-light text-white text-base p-2
            rounded-t-lg">
                <h1>Created by <span className="text-lightPurple">Angelo Martínez</span></h1>
            </div>
            <h1 className="title font-medium text-3xl p-4">Mini Message Board</h1>
            <div className="chat p-2 flex flex-col overflow-y-auto">
                <Messages />            
            </div>
            
            <div className="form">
                <Form>

                </Form>
            </div>

            

        </div>
        /* create user input */
    )
}

export default Card;