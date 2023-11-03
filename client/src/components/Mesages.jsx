import { placeholder } from "./placeholder";

const Messages = () => {
    return (
        <>
        {placeholder.map((item) => (
            <div key={item.id} className="px-4">
                <h1 className="mb-2 font-medium text-xl">{item.name}</h1>
                <h1 className="mb-8 bg-green-200 text-lg w-fit p-4 rounded">{item.text}</h1>
            </div>
        ))}
        </>
    )
}

export default Messages;