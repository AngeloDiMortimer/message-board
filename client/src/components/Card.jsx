import Messages from "./Mesages";

const Card = () => {
    return (
        <div className="content flex mt-8 flex-col relative w-1/2 h-fit bg-white">
            <div className="header bg-darkPurple flex justify-center font-light text-white text-base p-2
            rounded-t-lg">
                <h1>Created by <span className="text-lightPurple">Angelo Martínez</span></h1>
            </div>
            <div className="chat">
                <h1 className="title font-medium text-3xl p-4">Mini Message Board</h1>
            </div>

            <Messages />

        </div>
    )
}

export default Card;