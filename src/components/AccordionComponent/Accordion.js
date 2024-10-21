import './Accordion.css';
import { useState } from 'react';

  export default function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null);

    return <div>
        <h1>Accordion FAQs</h1>
        <div className="accordion">
         { data.map((d, i) => <AccordionItem key={i} curOpen={curOpen} onOpen={setCurOpen} num ={i} title={d.title} >{d.text}</AccordionItem>)}
         <AccordionItem key={'test 1'} num={22} curOpen={curOpen} onOpen={setCurOpen} title={'Test Children Props'} >
            <p>Test Children Props</p>
            <ul>
              <li>Break up UI into Components</li>
              <li>Make Components Re Usable</li>
              <li>Palce State Efficiently</li>
            </ul>
            </AccordionItem>
        </div>
    </div>;
  }

  function AccordionItem({ num,title, children, curOpen, onOpen }) {

    const isOpen = num === curOpen;
    // const [isOpen, setIsOpen] = useState(false);
    function handleToggle() {

        if (isOpen){
            onOpen(null);
        } 
        else  onOpen(num);

    }
    return(
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number"> {num < 9 ? `0${num+1}`: num+1} </p>
       <p className="text">{title}</p>
       <p className="icon">{isOpen ? '-' : '+'}</p>
       {isOpen && <div className="content-box">{children}</div>}
    </div>
    );
  }