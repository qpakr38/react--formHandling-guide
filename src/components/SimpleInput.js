import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(()=>{
        if( enteredNameTouched&&enteredNameIsValid){
            console.log('Name Input is valid');
        }
    },[enteredNameTouched,enteredNameIsValid]);

    const nameInputBlurHandler = (event)=>{
        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
        setEnteredNameTouched(true)
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        console.log(enteredName)
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue)
        //DOM객체를 리액트가아닌 직접제어하는 것은 리액트에서 위험할 수 있다. 값을 가져오는 정도로 사용은 괜찮지만 변경하는것은 위험하다.
        //enteredValue.current.value='';
        setEnteredName('');
    };
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef}
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       onBlur={nameInputBlurHandler}
                       value={enteredName}/>
            </div>
            {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
