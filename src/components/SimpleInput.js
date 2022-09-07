import {useEffect,useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !=='';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputFocusHandler = (event)=>{
        setEnteredNameTouched(true);
    }
    useEffect(()=>{
        if(enteredNameIsValid){
            setFormValid(true);
        }else{
            setFormValid(false);
        }
    },[enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if(!enteredNameIsValid){
            return;
        }

        setEnteredName('');
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       onFocus={nameInputFocusHandler}
                       value={enteredName}/>
            </div>
            {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            <div className="form-actions">
                <button disabled={!formValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
