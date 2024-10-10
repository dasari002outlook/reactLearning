import { useState } from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onClearList, onToggleItem}){
   
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if(sortBy === 'input'){sortedItems = items;
    }else if(sortBy === 'description'){
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }else if(sortBy === 'packed'){
        sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
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
            <button onClick={onClearList}>Clear List</button>
        </div>
        </div>)
}