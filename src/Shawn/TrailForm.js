import React, { useState } from 'react';
import { Form } from "../components/Form";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useFormInput} from "../components/useFormInput";

export default function TrailForm (props) {
const name = useFormInput('', "name")
const location = useFormInput('', "location")

function handleSubmit (e) {
props.add({id:`${Math.random()}`, name: name.value, location: location.value})
}
  return (
<Form onSubmit={handleSubmit} header="Add a Trail">
<TextInput label="name" useFormInput={name} />
<TextInput label="location" useFormInput={location} />
{/* <TextInput label="vert" />
<TextInput label="miles" />
<TextInput label="tech" /> */}
<SubmitButton />
  </Form>

  )
}

