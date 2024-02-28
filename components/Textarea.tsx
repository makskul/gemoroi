"use client"
import {useRef, useState, useEffect } from "react";

export default function Input (props: {title: string, id: string}) {
    const [focus, toggleFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        toggleFocus(!!inputRef.current?.value);
    },[]);

    const blurHandler = () => {
        toggleFocus(!!inputRef.current?.value);
    }

    const clickHandler = () => {
        toggleFocus(true);
        inputRef.current?.focus();
    }

    return (
        <div className="form-field textarea bg-white relative border-2 rounded-lg border-gray-700 pt-4 pb-2 px-2 ">
            <textarea
                ref={inputRef}
                name={props.id}
                rows={10}
                className='outline-none w-full'
                onFocus={() => toggleFocus(true)}
                onBlur={() => blurHandler()}
            />

            <label
                htmlFor={props.id}
                className={`absolute left-2 text-gray-400${focus ? " focused" : ''}`}
                onClick={() => clickHandler()}>
                {props.title}
            </label>
        </div>
    )
}