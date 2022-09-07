import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputFocusHandler: nameFocusHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !=='');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputFocusHandler: emailFocusHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    let formValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text'
                       id='name'
                       onChange={nameChangeHandler}
                       onFocus={nameFocusHandler}
                       value={enteredName}/>
            </div>
            {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input type='email'
                       id='email'
                       onChange={emailChangeHandler}
                       onFocus={emailFocusHandler}
                       value={enteredEmail}/>
            </div>
            {emailInputHasError && <p className="error-text">Please check your email.</p>}
            <div className="form-actions">
                <button disabled={!formValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
