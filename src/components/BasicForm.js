import useForm from "../hooks/use-form";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler :firstNameInputChange,
        inputFocusHandler : firstNameInputFocus,
        reset : firstNameInputRest
    }=useForm(value=>value.trim()!=='');
    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler :lastNameInputChange,
        inputFocusHandler : lastNameInputFocus,
        reset : lastNameInputRest
    }=useForm(value=>value.trim()!=='');
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler :emailInputChange,
        inputFocusHandler : emailInputFocus,
        reset : emailInputRest
    } =useForm(value => value.includes('@'));
    const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

    const formIsValid = firstNameIsValid &&lastNameIsValid && emailIsValid;

    const formSubmissionHandler=(event)=>{
        event.preventDefault();
        firstNameInputRest();
        lastNameInputRest();
        emailInputRest();
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
                    { firstNameHasError ?
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
                    { lastNameHasError ?
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
                {emailHasError ? <p className="error-text">Please check your email.</p> : ' '}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
