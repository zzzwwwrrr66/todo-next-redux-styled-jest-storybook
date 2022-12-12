import styled from "styled-components";

export const Title = styled.h2`
  color: tomato;
  font-size: 36px;
  text-align: center;
`

export const TodoWrap = styled.ul`
  max-width: 800px;
  margin: 0;
  padding: 10px;
`
export const TodoList = styled.li`
  display: flex;
  align-items: center;
  p { 
    margin: 0 10px 0 0;
  }
  button {
    margin: 0 2px 0;
  }
`

export const TaskWrap = styled.div`
padding: 10px;
  h3 {
    font-size: 30px;
    font-weight: bold;
  }
  p {
    margin: 5px 0;
  }
`