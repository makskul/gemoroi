"use client"
import {useRef, useState, useEffect } from "react";

export default function Input (props: {title: string, type: string}) {
    const [focus, toggleFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        toggleFocus(!!inputRef.current?.value)
    },[]);

    const blurHandler = () => {
        toggleFocus(!!inputRef.current?.value)
    }

    return (
        <div className="form-field bg-white relative border-2 rounded-lg border-gray-700 pt-4 pb-2 px-2 ">
            <input
                id={ props.title.toLowerCase() }
                ref={inputRef}
                className="outline-none"
                type={ props.type }
                name={ props.title.toLowerCase() }
                onFocus={ () => toggleFocus(true) }
                onBlur={ () => blurHandler() }
            />
            <label
                htmlFor={ props.title.toLowerCase() }
                className={`absolute left-2 text-gray-400${focus ? " focused" : ''}`}
                onClick={ () => toggleFocus(true) }>
                { props.title }
            </label>
        </div>
    )
}