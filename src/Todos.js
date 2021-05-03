import React from 'react';

const Todos = (props) => {
    return (
        <div className={"todo-list"}>
                {
                    props.todos.map((todo, index) => (
                        <Todo todo={todo} key={index} index={index} markComplete={props.markComplete} editTitle={props.editTitle}/>
                    ))
                }
        </div>
    );
};

const Todo = (props) =>(
    <div className="todo">
        <p style={{textDecoration : props.todo.isCompleted ? "line-through" : ""}}>
            <input type={"checkbox"} onChange={() => props.markComplete(props.index)} name={"completed"} id={props.todo.id}/>{' '}
            {props.todo.text}
        </p>
    </div>
);

export default Todos;
