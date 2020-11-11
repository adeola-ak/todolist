import React from "react";

const Todo = (props) => {
	const todoText = props.text;
	const todo = props.todo;
	const id = props.id;
	console.log("this is from TDL", todo);
	const setTodo = props.setTodo;
	const todoItem = props.todoItem;

	const deleteHandler = () => {
		console.log("This is a todo item", todo);
		console.log(todo);

		setTodo(todo.filter((ele) => ele.id !== todoItem.id));
	};

	const completeHandler = () => {
		setTodo(
			todo.map((item) => {
				if (item.id === todoItem.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<div>
			<li
				key={id}
				className={`todo-${
					todoItem.completed ? "complete" : "incomplete"
				}`}
			>
				{todoText}
			</li>
			<button onClick={completeHandler}>add</button>
			<button onClick={deleteHandler}>delete</button>
		</div>
	);
};

export default Todo;
