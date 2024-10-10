import { useState } from "react";

export default function Form({onAddItems}){

    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState(1);

   

   function handleSubmit(e){
        e.preventDefault();
        if(!desc) return;
        const newItem = {id: Date.now(), description: desc, quantity, packed: false};
        setDesc('');
        setQuantity(1);
        onAddItems(newItem)
        console.log(newItem);
        alert('Form submitted: {newItem.description, newItem.quantity}');
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {/* <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option> */}
            {Array.from({length: 20}, (_, i) => <option key={i} value={i + 1}> {i + 1} </option>)}
        </select>
        <input type="text" placeholder="Add an item" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <button>Add</button>
    </form>
}