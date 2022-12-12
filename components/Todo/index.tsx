import React, {useEffect} from "react";


import { useAppSelector, useAppDispatch } from '../../_store/hooks';
import {addTodo, deleteTodo} from "../../_store/todoSlice";

import { Title, TodoList, TodoWrap, TaskWrap } from "./style";
import TodoLists from "./TodoLists";


const TodoComponent = () => {
  const {value} = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();
  const [content, setContent] = React.useState("");
  const [isAdd, setIsAdd] = React.useState(false);

  

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }
  

  const addContent = (e: React.FormEvent) => {
    e.preventDefault();
    if(content.trim().length > 0) {
      dispatch(addTodo(content));
      setContent("");
    }
  }

  const deleteContent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(e.target instanceof Element) {
      const itemId = e.target.getAttribute("data-id") || null;
      if(itemId) {
        const isDelete = confirm("are you sure delete?");
        if(isDelete) {
          try {
            isDelete && dispatch(deleteTodo(itemId));
          } catch(err) {
            console.error(err);
          }
        }else {
          return;
        }
      }
    }
  }

  

  return <>
    <Title>Todo app</Title>

    <TaskWrap>
      <h3>task</h3>
      <p>make update = section of STORE [o]</p>
      <p>make component with form, todoList</p>
      <p>jest and storybook</p>
    </TaskWrap>

    <div>
      <form onSubmit={addContent}>
        <input type="text"  value={content} onChange={onchange}/>
        <button onClick={addContent}>addContent</button>
    </form>
    {
      value.length === 0 && <p>there's no item</p>
    }
    {
      value.length > 0 && 
      <TodoWrap>
      {
        value?.map(v=>{
          return (
          <>
          <TodoLists id={v.id} content={v.content} ></TodoLists>
          </>
          )
        })
      }
      </TodoWrap>
    }
    </div>
  </>
}

export default TodoComponent;