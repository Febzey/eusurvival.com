import React, { useRef, useState } from 'react';

const Accordion = ({title, content}) => {

    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('transform duration-700 ease');
    
    const contentSpace = useRef(null);

    const toggleAccordion = () => {
        setActive(!active);

        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-90')
    }


    return (
        <div className="flex flex-col bg-yellow-400 bg-opacity-60 w-3/4 px-11 rounded shadow-lg">
          <button
            className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
            onClick={toggleAccordion}
          >
            <p className="inline-block ml-auto mr-auto light text-lg font-mono">{title}</p>
            <img
              src={`/src/images/chevron-right.svg`}
              alt="Chevron icon"
              className={`${rotate} inline-block text-white`}
            />
          </button>
          <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className="overflow-hidden transition-max-height duration-700 ease-in-out"
          >
            <div className="pb-10 mr-auto ml-auto text-center font-mono text-lg">{content}</div>
          </div>
        </div>
    )

};

export default Accordion;