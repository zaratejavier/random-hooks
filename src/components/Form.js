import React from 'react';

export function Form (props) {
function preventDefaultSubmit(e){
  e.preventDefault();
  props.onSubmit();
}
return (
<form onSubmit={preventDefaultSubmit} >
  <h2>{props.header}</h2>
    {props.children}
</form>
)

}