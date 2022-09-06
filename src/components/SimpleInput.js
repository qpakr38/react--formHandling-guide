import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredName)
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue)
        //DOM객체를 리액트가아닌 직접제어하는 것은 리액트에서 위험할 수 있다. 값을 가져오는 정도로 사용은 괜찮지만 변경하는것은 위험하다.
        //enteredValue.current.value='';
        setEnteredName('');
    };
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef}
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       value={enteredName}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
