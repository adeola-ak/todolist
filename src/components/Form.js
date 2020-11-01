import React from "react";

const Form = (props) => {
	const inputText = props.inputText;
	const setInputText = props.setInputText;
	const todo = props.todo;
	const setTodo = props.setTodo;

	const inputTextHandler = (e) => {
		//this will console log the event -> and the inpt from said event
		console.log(e.target.value);
		//this is the function that changes the input text, give this function a name
		console.log(props.setInputText);

		// change the inputText to whatever the value of the form is
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodo([
			...todo,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	return (
		<form>
			<input value={inputText} onChange={inputTextHandler} type="text" />
			<button onClick={submitTodoHandler} type="submit">
				submit
			</button>
			<div>
				<select>
					<option value="all">all</option>
					<option value="completed">completed</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
