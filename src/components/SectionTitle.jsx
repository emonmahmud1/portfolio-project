import React from 'react';
import { SlArrowDownCircle } from "react-icons/sl";


const SectionTitle = ({color}) => {
    return (
        <div className={`flex items-center my-10 ${color}`}>
            <div><SlArrowDownCircle className='rounded-full text-4xl'/></div>
            <h1 className='border py-1 px-2  rounded-full'>Why choose me</h1>
        </div>
    );
};

export default SectionTitle;