import React from 'react'
import { data } from "../data/data";

export default function Skills() {
    return (
        <>
            <div className="skills">
                
                {data.skills.map((val, index) => (
                    <>
                        {val.name} <br />
                        {val.percentage} <br />
                    </>
                ))}
            </div>
        </>


    )
}




