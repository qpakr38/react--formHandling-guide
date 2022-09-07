import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const nameInputFocusHandler = (event) => {
        setEnteredNameTouched(true);
    }
    const emailInputFocusHandler = (event) => {
        setEnteredEmailTouched(true);
    }
    let formValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClasses = emailInputIsInvalid
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
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input type='email'
                       id='email'
                       onChange={emailInputChangeHandler}
                       onFocus={emailInputFocusHandler}
                       value={enteredEmail}/>
            </div>
            {emailInputIsInvalid && <p className="error-text">Please check your email.</p>}
            <div className="form-actions">
                <button disabled={!formValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
