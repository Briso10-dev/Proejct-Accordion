
function AccordionItem({ num, title, curOpen, onOpen, children }) {
const isOpen = num === curOpen

    function handleToggle(){
        onOpen(isOpen ? null : num);
    }

  return (
    <div onClick={handleToggle}
        className={`shadow-[0_0_30px_rgba(0,0,0,0.1)] p-5 pr-12 cursor-pointer border-t-[4px] border-b-[4px] transition-all grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center ${
        isOpen ? "border-t-[#087f5b] text-[#087f5b]" : "border-t-white border-b-white"
        }`}>
      {/* Number */}
      <p className="text-3xl font-medium text-[#ced4da]">{num < 9 ? `0${num +1}` : num + 1} </p>

      {/* Title */}
      <p className="text-3xl font-medium">{title}</p>

      {/* Icon */}
      <p className="text-2xl font-medium"> {isOpen ? "-" : "+"} </p>

      {/* Text spans from col-start 2 to end (i.e., 2 → 4) */}
      {isOpen && <p className="col-span-2 col-start-2 text-[1.4rem] leading-relaxed text-[#868e96] pb-4">{children}</p>}
    </div>
  );
}

export default AccordionItem