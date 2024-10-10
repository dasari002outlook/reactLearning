import { useState } from "react";

export default function Dates(){

   
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset(){
      setCount(0);
      setStep(1);
    }
    return (
        <div style={{backgroundColor: '#7950f2', margin: '10px, auto', padding: '10px', textAlign: 'center', color: '#fff'}}>

          <div>
            <input type="range" min={0} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} />
            {/* <button style={{padding: '10px', margin: '10px'}} onClick={() => setStep((c) => c - 1)}>Go Down</button> */}
            <span style={{padding: '10px', margin: '10px'}}>Step: {step}</span>
            {/* <button style={{padding: '10px', margin: '10px'}} onClick={() => setStep((c) => c + 1)}>Go Up</button> */}
          </div>
    
          <div>
            <button style={{padding: '10px', margin: '10px'}} onClick={() => setCount((c) => c - step)}>-</button>
            <span style={{padding: '10px', margin: '10px'}}><input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} min="0"></input></span>
            <button style={{padding: '10px', margin: '10px'}} onClick={() => setCount((c) => c + step)}>+</button>
          </div>
    
          <p>
            <span style={{padding: '10px', margin: '10px', fontSize: '20px', fontWeight: 'bold'}}>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span style={{padding: '10px', margin: '10px', fontSize: '20px', fontWeight: 'bold'}}>{date.toDateString()}</span>
          </p>
          {
              count !== 0 || step !== 1 ? 
              <div>
              <button onClick={handleReset}>RESET</button>
              </div> : null
          }
         
        </div>
      );
}