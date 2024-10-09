import React from 'react'
import './FlashCards.css'
import { useState } from 'react';

const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];
function FlashCards() {
    const [selected, setSelected] = useState(1903);

    function handleClick(id) {
        setSelected(id !== selected ? id : null);
    }
  return (
    <>
      <h2>Quickref Cards</h2> 
    <div className='flashcards'>
       
        {
            questions.map((q) => (
                <div key={q.id} onClick={() => handleClick(q.id)} className={q.id === selected ? 'selected' : ''}>
                    <h3>{q.id === selected ? q.answer : q.question}</h3>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default FlashCards;