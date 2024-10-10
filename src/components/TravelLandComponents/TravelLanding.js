import './TravelLanding.css'
import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats  from './Stats';


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

    function handleClearList(){
            if(window.confirm('Are you sure you want to delete all items?')){
                setItems([]);
            }
    }
    return <div className="app">
                <Logo />
                <Form onAddItems={handleAddItem} />
                <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
                <Stats items={items} />
            </div>
  
}



