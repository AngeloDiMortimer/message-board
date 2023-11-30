

const Messages = ({ messages }) => {
    return (
        <>
        {messages.map((item) => (
            <div key={item._id} className="px-4">
                <div className="message-header flex items-center justify-between">
                    <h1 className="mb-2 font-medium text-base md:text-xl break-all">{item.username}</h1>
                    <h1 className="text-slate-500 ml-2 text-sm md:text-lg">
                        {
                        new Date(item.added).toLocaleDateString("default", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    
                    </h1>
                </div>
                <div className="w-fit">
                    <h1 className="mb-8 bg-green-200 text-lg break-all p-4 rounded">{item.text}</h1>
                </div>
            </div>
            /* Terminar front-end */
        ))}
        </>
    )
}

export default Messages;