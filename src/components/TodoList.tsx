import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../modal";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div
      className="container"
      style={todos.length > 0 ? { display: "block" } : { display: "none" }}
    >
      <div className="row">
        <Droppable droppableId="TodosList">
          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos_heading">Active Tasks</span>
              {todos.map((todo, index) => (
                <SingleTodo
                  key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="TodosRemoves">
          {(provided, snapshot) => (
            <div
              className={`todos remove ${
                snapshot.isDraggingOver ? "dragactive" : ""
              } `}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos_heading"> Completed Tasks</span>
              {completedTodos.map((todo, index) => (
                <SingleTodo
                  key={todo.id}
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TodoList;
