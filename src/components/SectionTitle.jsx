import React from 'react';
import { SlArrowDownCircle } from "react-icons/sl";


const SectionTitle = ({title,color}) => {
    return (
        <div className={`flex items-center my-10 ${color}`}>
            <div><SlArrowDownCircle className='rounded-full text-4xl'/></div>
            <h1 className='border py-1 px-2  rounded-full'>{title}</h1>
        </div>
    );
};

export default SectionTitle;