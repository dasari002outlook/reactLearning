import './TravelLanding.css'
import { useState } from 'react';

export default function TravelLanding(){
    const [items, setItems] = useState([]);
    function handleAddItem(item){
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id){
        setItems((items) => items.filter((item) => item.id !== id));
    }
    function handleToggleItem(id){
        setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
    }

    return <div className="app">
                <Logo />
                <Form onAddItems={handleAddItem} />
                <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} setItems={setItems}/>
                <Stats items={items} />
            </div>
  
}

function Logo(){
    return <h1> 🌴 FAR AWAY 💼</h1>
}
function Form({onAddItems}){

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
// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "Charger", quantity: 1, packed: true },
//   ];
function PackingList({items, onDeleteItem, setItems, onToggleItem}){
   
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if(sortBy === 'input'){sortedItems = items;
    }else if(sortBy === 'description'){
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }else if(sortBy === 'packed'){
        sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
    }

    function onDeleteItems(){
        if(window.confirm('Are you sure you want to delete all items?')){
            setItems([]);
        }
    }
    return(
     <div className="list">
    <ul>
        {
           sortedItems.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
           ))
        }        
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort By Input Order</option>
                <option value="description">Sort By Description</option>
                <option value="packed">Sort By Packed Status</option>                
            </select>
            <button onClick={() => onDeleteItems()}>Clear List</button>
        </div>
        </div>)
}

function Item({item, onDeleteItem, onToggleItem}){
    return <li>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.description}</span>
        <button onClick={()=>onDeleteItem(item.id)}>❌ </button>
    </li>
}
function Stats({items}){

    if(!items.length){
        return <p className='stats'>Start adding items to your list!!! 🚀</p>
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentPacked = Math.round((numPacked / numItems) * 100);
    return <footer className='stats'>
        <em> 
            {percentPacked === 100 ? '🎉🎉🎉 Hooray!!! You have packed all, Get Set Go!' : `  👜 You have ${numItems} items on your list and you already packed ${numPacked} (${percentPacked}%)`}
       
        </em></footer>
}