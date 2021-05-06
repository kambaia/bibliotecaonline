import React, { useState, useEffect } from "react";
import { FaArrowDown } from 'react-icons/fa';
import { DropDown, Placeholder, ListView, Option } from "./styles";

const DropDownList = props => {

    const {
        placeholder,
        data,
        onSelected,
        size,
        clean
    } = props;

    const [showOptions, setShowOptions] = useState(false);
    const [optionSelected, setOptionSelected] = useState("");
    const [refDrop, setRefDrop] = useState(null);

    useEffect(() => {

        const handleClickOutside = event => {
            if (!refDrop.contains(event.target)) {
                setShowOptions(false);
            }
        }

        if (data == "") {
            setOptionSelected("");
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [refDrop, data])

    return (
        <DropDown ref={ref => { setRefDrop(ref) }} size={size}>
            <Placeholder colorSelected={optionSelected === "" ? "#888" : "#000"} onClick={() => showOptions ? setShowOptions(false) : setShowOptions(true)} size={size}>
                {optionSelected === "" ? placeholder : optionSelected}
                <FaArrowDown />
            </Placeholder>
            {
                showOptions ?
                    <ListView>
                        {
                            data == "" ?
                                null
                                : data.map((value, position) => {
                                    return (
                                        <Option onClick={() => {
                                            onSelected(value.option, value.id, position);
                                            setShowOptions(false);
                                            setOptionSelected(value.option, value.id);
                                        }} key={position} >{value.option}</Option>
                                    )
                                })
                        }
                    </ListView> : null
            }
        </DropDown>
    )
}

export default DropDownList;