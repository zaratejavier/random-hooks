import React, { useState } from 'react';
import { Form } from "../components/Form";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useFormInput} from "../components/useFormInput";

export default function RecipeForm(props){
  const name = useFormInput ('', "name")
  const ingridients = useFormInput('', "ingridients")
  const time = useFormInput('', "time")

  function handleSubmit (e) {
    props.add({id: `${Math.random()}`, name: name.value, ingridients: ingridients.value, time: time.value})
    
  }

  return(
    <Form onSubmit={handleSubmit} header="Add new recipe">
      <TextInput label="name" useFormInput={name}/>
      <TextInput label="ingridients" useFormInput={ingridients}/>
      <TextInput label="time" useFormInput={time}/>
      <SubmitButton/>
    </Form>
  )
}