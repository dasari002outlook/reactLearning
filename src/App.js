
import Dates from "./components/DateComponent/Dates";
import TravelLanding from "./components/TravelLandComponents/TravelLanding";
import FlashCards from "./components/FlashCardComponents/FlashCards";
import Accordion from "./components/AccordionComponent/Accordion";
import Day from "./components/ResuableComponents/Day";
import Time from "./components/ResuableComponents/Time";
import Calci from "./components/ResuableComponents/Calci";
import FetchTodo from "./components/ResuableComponents/FetchTodo";
import TodoList from "./components/ResuableComponents/TodoList";
import Steps from "./components/StepsComponent/Steps";


const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOp) => !isOp)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Dates />

      <TravelLanding />
      <FlashCards />
      <Accordion data={faqs} />
      <div>
        <Day />
        <Time />
      </div>
      <div>
        <Calci />
      </div>
      {/* <div>
        <FetchTodo />
      </div> */}
      <div>
        <TodoList />
      </div>
    </>
  );
}
export default function App(){

   return(
    <>
    <Steps/>
    <Dates  />
    <TravelLanding />
    <FlashCards />
    <Accordion data={faqs}/>
    </>
   );    
    
}



