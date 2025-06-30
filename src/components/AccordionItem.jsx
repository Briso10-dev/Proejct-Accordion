
function AccordionItem({num,title,text}){
    return (
         <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] p-5 pr-12 cursor-pointer border-t-[4px] border-b-[4px] transition-all grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center">
             <p className="text-2xl font-medium"> {num} </p>
             <p className="text-2xl font-medium"> {title} </p>
             <p className="text-2xl font-medium"> - </p>
             <p className="text-2xl font-medium"> {text} </p>
             
         </div>
    )

}

export default AccordionItem;