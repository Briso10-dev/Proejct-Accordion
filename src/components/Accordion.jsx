import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen,setCurOpen] = useState(null);

  return (
    <div className="w-[70rem] flex flex-col gap-6">
      {data.map((el, i) => (
        <AccordionItem  
        curOpen={curOpen} 
        onOpen={setCurOpen}  
        title={el.title} 
        num={i} 
        key={el.title}
        >
         {el.text} 
        </AccordionItem>
      ))}
      <AccordionItem  
        curOpen={curOpen} 
        onOpen={setCurOpen}  
        title="Test 1" 
        num={26} 
        key="Test 01"
        >
         <p>Allows React developers to:</p>
         <ul>
          <li>Breaks up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
          </ul> 
        </AccordionItem>
    </div>
  );
}
export default Accordion;
