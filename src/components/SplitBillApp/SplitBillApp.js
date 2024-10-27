import './SplitBill.css';
import { useState } from 'react';

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  

export default function SplitBillApp() {
    const [showAddFriend, setShowAddFriend] = useState(false); //setShowAddFriend, 
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

   function handleShowAddFriend () {
        setShowAddFriend(!showAddFriend)
    }

    function handleAddFriend(newFriend) {
        setFriends((friends) => [...friends, newFriend]);
        setShowAddFriend(false);
    }

    function handleSelectFriend(friend) {
        setSelectedFriend(curFriend => curFriend?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends(friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend)); 
        setSelectedFriend(null);
    }
    // setSelectedFriend(null);
    return (
        <>
        <SplitBill />
        <div className="app">
          
            <div className="sidebar">
            
               
                <ListFriends friends={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />
                
                {showAddFriend &&  <FormAddFriend onAddFriend={handleAddFriend}/>}
                <Button onClick={handleShowAddFriend}> {showAddFriend ? "Close" : "Add Friend"}</Button>
            </div>
            {selectedFriend &&  <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
        </div>
        </>
    );
}

function SplitBill() {
    return (
        <div>
           <h1> Split Bill</h1>
        </div>
    );
}

function ListFriends({ friends, onSelectFriend, selectedFriend }) {
    

    return <ul>
        {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} />
        ))}
    </ul>
}

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID();
        if (!name || !imageUrl) return;
        const newFriend = { id, name, imageUrl: `${imageUrl}?=${id}`, balance: 0 };
        onAddFriend(newFriend);
        setName('');
        setImageUrl("https://i.pravatar.cc/48");
    }
    return <form onSubmit={handleSubmit} className='form-add-friend'>
        <label for="friend-name">🧑‍🤝‍🧑Friend Name:</label>
        <input type="text" id="friend-name" value={name} onChange={(e) => setName(e.target.value)} />
        <label for="image-url">🖼️Image Url:</label>
        <input type="text" id="image-url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <Button>Add</Button>
    </form>
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
    const isSelected =  selectedFriend?.id === friend.id;
    return <>
        <li className={isSelected ? 'selected' : ''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p>}
        {friend.balance > 0 && <p className='green'>{friend.name} owes you ${friend.balance}</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
       <Button onClick={() => onSelectFriend(friend)}>{isSelected ? "Close" : "Select"}</Button> 
        </li>
        
        </>
}

function Button({children, onClick}) {
    return <button className='button' onClick={onClick}>{children}</button>
    
}

function FormSplitBill({selectedFriend, onSplitBill}) {
    const [billValue, setBillValue] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const friendsExpense = billValue ? billValue - yourExpense : "";
    const [whoIsPaying, setWhoIsPaying] = useState("you");
   
    function handleSubmit(e) {
        e.preventDefault();
        if(!billValue || !yourExpense ) return;
        onSplitBill( whoIsPaying === "you" ? billValue - yourExpense : yourExpense - billValue);
    }


    return <form action="" className='form-split-bill'>
        <h2>Split Bill with {selectedFriend.name}</h2>
        <label htmlFor="bill-value">💰Bill Amount:</label>
        <input type="text" id="bill-value" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} />
        <label htmlFor="your-expense">💵Your Expense:</label>
        <input type="text" id="your-expense" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? yourExpense : Number(e.target.value))} />
        <label htmlFor="friend-expense">💳{selectedFriend.name}'s Expense:</label>
        <input type="text" id="friend-expense" value={friendsExpense} disabled />
        <label >🤑 Who is paying the Bill?</label>
        <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="you">You</option>
            <option value="friend">Friend</option>
        </select>
        <Button onClick={handleSubmit}>Split</Button>
    </form>
}