import './Accordion.css';
import { useState } from 'react';

  export default function Accordion({data}) {
    return <div>
        <h1>Accordion FAQs</h1>
        <div className="accordion accCunt">
         { data.map((d, i) => <AccordionItem key={i} num ={i} title={d.title} text={d.text} />)}
        </div>
    </div>;
  }

  function AccordionItem({ num,title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <div className={isOpen ? "item open" : "item"} onClick={() => setIsOpen(!isOpen)}>
      <p className="number"> {num < 9 ? `0${num+1}`: num+1} </p>
       <p className="text">{title}</p>
       <p className="icon">{isOpen ? '-' : '+'}</p>
       {isOpen && <div className="content-box">{text}</div>}
    </div>
    );
  }