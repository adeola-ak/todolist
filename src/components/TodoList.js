import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
	const todo = props.todo;
	console.log("this is from TDL", todo);
	const setTodo = props.setTodo;
	const filteredTodos = props.filteredTodos;
	return (
		<div>
			<ul>
				{filteredTodos.map((todoItem) => (
					<Todo
						text={todoItem.text}
						key={todoItem.id}
						todo={todo}
						setTodo={setTodo}
						todoItem={todoItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
