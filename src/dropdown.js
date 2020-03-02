import React, {useState} from "react";

const useDropdown = (label,defaultState,options) => {
    const [state, updateState] = useState (defaultState)
    const  id = `use-dropDown-${label.replace(" ","").toLowerCase()}`;
    const Dropdown = ()=> {
        return (
            <label htmlFor = {id}>
                {label}
                <select
                id = {id}
                value = {state}
                onChange = {(e) => updateState(e.target.value)}
                disabled = {!options.length}
                >
                    <option />
                    {options.map((option)=> {
                        return (
                            <option key = {option} value = {option}>
                            {option}
                        </option>
                    

                        );
                    })}

                </select>
            </label>
        );
        
    };
    return [state,Dropdown,updateState]
}
export default useDropdown;