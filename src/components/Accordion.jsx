import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen,setIsOpen] = useState(1);

   

  return (
    <div className="w-[70rem] flex flex-col gap-6">
      {data.map((el, i) => (
        <AccordionItem  
        curOpen={curOpen} 
        onOpen={setIsOpen}  
        title={el.title} 
        text={el.text} 
        num={i} 
        key={el.title}/>
      ))}
    </div>
  );
}
export default Accordion;
