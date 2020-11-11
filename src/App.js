import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [todo, setTodo] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	//only runs once when app starts
	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todo, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(
					todo.filter((item) => item.completed === true)
				);
				break;
			case "uncompleted":
				setFilteredTodos(
					todo.filter((item) => item.completed === false)
				);
				break;
			default:
				setFilteredTodos(todo);
				break;
		}
	};

	const saveLocalTodos = () => {
		localStorage.setItem("todo", JSON.stringify(todo));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todo") === null) {
			localStorage.setItem("todo", JSON.stringify([]));
		} else {
			let localTodo = JSON.parse(localStorage.getItem("todo"));
			setTodo(localTodo);
		}
	};

	return (
		<>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todo={todo}
				setTodo={setTodo}
				setStatus={setStatus}
			/>
			<TodoList
				todo={todo}
				setTodo={setTodo}
				filteredTodos={filteredTodos}
			/>
		</>
	);
};

export default App;
