import React from "react";
import { useAppSelector, useAppDispatch } from '../../_store/hooks';
import {addTodo, deleteTodo, updateTodo} from "../../_store/todoSlice";

import { Title, TodoList, TodoWrap, TaskWrap } from "./style";

interface Props {
  id: number;
  content: string;
}

const TodoLists:React.FC<Props> = ({id, content}) => {
  const dispatch = useAppDispatch();
  const [isUpate, setIsUpdate] = React.useState(false);
  const [updateContent, setUpdateContent] = React.useState({id, content});

  
  React.useEffect(()=>{
    setUpdateContent({id, content});
  },[id, content])
  const onUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateContent({id, content: e.target.value});
  }

  const isUpdate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(!isUpate) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
      setUpdateContent({id, content});
    }
  }

  const onUpdateContent = (e: React.FormEvent) => {
    e.preventDefault();
    if(content.trim().length > 0 && content !== updateContent.content) {
      console.log("update content wooram", updateContent);
      dispatch(updateTodo(updateContent));
      setIsUpdate(false);
    }
  }
  
  const deleteContent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(e.target instanceof Element) {
      if(String(id)) {
        const isDelete = confirm("are you sure delete?");
        if(isDelete) {
          try {
            isDelete && dispatch(deleteTodo(String(id)));
          } catch(err) {
            console.error(err);
          }
        }else {
          return;
        }
      }
    }
  }


  return <TodoList key={id}>
  {
    isUpate ? (
      <form onSubmit={onUpdateContent}>
        <input 
          type="text" 
          value={updateContent.content} 
          onChange={onUpdateChange} 
        /> 
        <button type="submit" >OK</button>
        <button onClick={isUpdate} >close</button>
      </form>
    ) : (
      <> 
      <p>{content}</p>
      <button onClick={deleteContent} >delete</button>
      <button data-id={id} onClick={isUpdate} >update</button>
      </> 
    )
  }
</TodoList>
}

export default TodoLists;