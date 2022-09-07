import {useEffect, useState} from "react";

const BasicForm = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [firstNameIsTouch, setFirstNameIsTouch] = useState(false);
    const [enteredLastName, setEnteredLastName] = useState('');
    const [lastNameIsTouch, setLastNameIsTouch] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsTouch, setEmailIsTouch] = useState(false);
    useEffect(()=>{
        console.log("firstNameIsValid : "+firstNameIsValid);
        console.log("firstNameIsTouch : "+firstNameIsTouch);
        console.log("lastNameIsValid : "+lastNameIsValid);
        console.log("lastNameIsTouch : "+lastNameIsTouch);
        console.log("emailIsValid : "+emailIsValid);
        console.log("emailIsTouch : "+emailIsTouch);
    })
    const firstNameInputChange = (event) => {
        setEnteredFirstName(event.target.value);
    };
    const lastNameInputChange = (event) => {
        setEnteredLastName(event.target.value);
    };
    const emailInputChange = (event) => {
        setEnteredEmail(event.target.value);
    };

    const firstNameInputFocus = () => {
        setFirstNameIsTouch(true);
    };
    const lastNameInputFocus = () => {
        setLastNameIsTouch(true);
    };
    const emailInputFocus = () => {
        setEmailIsTouch(true);
    };

    let firstNameIsValid = false;
    if (enteredFirstName.trim() !== '') {
        firstNameIsValid = true;
    }
    let lastNameIsValid = false;
    if (enteredLastName.trim() !== '') {
        lastNameIsValid = true;
    }
    let emailIsValid = false;
    if (enteredEmail.trim().includes('@')) {
        emailIsValid = true;
    }

    const firstNameInputClasses = (!firstNameIsValid && firstNameIsTouch) ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = (!lastNameIsValid && lastNameIsTouch) ? 'form-control invalid' : 'form-control';
    const emailInputClasses = (!emailIsValid && emailIsTouch) ? 'form-control invalid' : 'form-control';

    const formIsValid = firstNameIsValid &&lastNameIsValid && emailIsValid;

    const formSubmissionHandler=(event)=>{
        event.preventDefault();
        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredEmail('');
        setFirstNameIsTouch(false);
        setLastNameIsTouch(false);
        setEmailIsTouch(false);
    };
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        onChange={firstNameInputChange}
                        onFocus={firstNameInputFocus}
                        value={enteredFirstName}
                        type='text' id='firstName'
                    />
                    {(!firstNameIsValid && firstNameIsTouch) ?
                        <p className="error-text">Name must not be empty.</p> : ' '}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        onChange={lastNameInputChange}
                        onFocus={lastNameInputFocus}
                        value={enteredLastName}
                        type='text'
                        id='lastName'
                    />
                    {(!lastNameIsValid && lastNameIsTouch) ?
                        <p className="error-text">Name must not be empty.</p> : ' '}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input onChange={emailInputChange}
                       onFocus={emailInputFocus}
                       value={enteredEmail}
                       type='text'
                       id='email'/>
                {(!emailIsValid && emailIsTouch) ? <p className="error-text">Please check your email.</p> : ' '}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
