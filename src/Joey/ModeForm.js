import React, { useState } from 'react';
import { Form } from "../components/Form";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useFormInput} from "../components/useFormInput";

export default function ModeForm (props) {
  const name = useFormInput('', "name")
  const description = useFormInput('', "description")

  function handleSubmit (e) {
    props.add({id:`${Math.random()}`, name: name.value, description: description.value})
  }
  return (
    <Form onSubmit={handleSubmit} header="Add a Music Mode:">
      <TextInput label="Name" useFormInput={name} />
      <TextInput label="Description" useFormInput={description} />
      <SubmitButton />
    </Form>
  )
}

