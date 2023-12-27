import styled from "styled-components"


export const Button = styled.button`
 border: none;
 min-width: 220px;
 height: 44px;
 padding: 10px 18px;
 background: black;
 border-radius: 5px;
 color: white;
 font-size: 16px;
 border: 1px solid black transparent ;
  transition: 0.2s ease-in;
 &:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.2s background ease-in;
 }

`
