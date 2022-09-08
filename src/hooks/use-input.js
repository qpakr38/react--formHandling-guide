import {useReducer} from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type==='INPUT'){
     return {value: action.value , isTouched: state.isTouched};
    }
    if(action.type==='FOCUS'){
        return { isTouched: true, value: state.value};
    }
    if(action.type==='RESET'){
        return {value: '' , isTouched: false};
    }
    return inputStateReducer;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    };
    const inputFocusHandler = (event) => {
        dispatch({type: 'FOCUS'});
    };
    const reset = () => {
        dispatch({type: 'REST',isTouched: false});
    }
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputFocusHandler,
        reset
    };
};
export default useInput;