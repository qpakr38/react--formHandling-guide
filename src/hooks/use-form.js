import {useState} from "react";

const useForm = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouch, setIsTouch] = useState(false);
    const valueIsValid = validation(enteredValue);
    const hasError= (!valueIsValid && isTouch);

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    };
    const inputFocusHandler=()=>{
        setIsTouch(true);
    };

    const reset=()=>{
        setEnteredValue('');
        setIsTouch(false)
    };
    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputFocusHandler,
        reset
    }

};
export default useForm;