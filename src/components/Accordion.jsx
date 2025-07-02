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
         {el.text} </AccordionItem>
      ))}
    </div>
  );
}
export default Accordion;
