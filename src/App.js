import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [todo, setTodo] = useState([]);
	return (
		<>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todo={todo}
				setTodo={setTodo}
			/>
			<TodoList todo={todo} setTodo={setTodo} />
		</>
	);
};

export default App;
