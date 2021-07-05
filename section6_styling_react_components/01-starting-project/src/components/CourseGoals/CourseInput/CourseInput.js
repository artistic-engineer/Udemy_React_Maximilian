import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!IsValid ? 'invalid' : ''}`}>
        {/* <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} /> */}

        {/* inline style
        <label style={{ color: !IsValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ 
            borderColor: !IsValid ? "red" : "#ccc",
            background: !IsValid ? "salmon" : "transparent" 
          }} 
          type="text"
          onChange={goalInputChangeHandler}
        /> */}

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />

      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
