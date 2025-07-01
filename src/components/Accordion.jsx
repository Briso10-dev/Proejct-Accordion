import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="w-[70rem] flex flex-col gap-6">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title}/>
      ))}
    </div>
  );
}
export default Accordion;
