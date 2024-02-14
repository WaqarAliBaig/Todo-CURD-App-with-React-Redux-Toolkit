import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { addTodo, deleteTodo, removeAll } from "../Actions";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>Add Your List Here</h1>

          <div className="addTask">
            <input
              type="text"
              placeholder=" Add Items... "
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Items"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="all-todos">
            <div className="single-todo">
              <div className="todo-text">
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Items"
                  onClick={() => dispatch(deleteTodo(inputData), setInputData(""))}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
