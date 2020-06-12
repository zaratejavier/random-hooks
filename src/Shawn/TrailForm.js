import React, { useState } from 'react';
import { Form } from "../components/Form";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useFormInput} from "../components/useFormInput";

export default function TrailForm (props) {
const name = useFormInput('', "Name")
const location = useFormInput('', "Location")
const miles = useFormInput('', "Length")
const vert = useFormInput('', "Vert")
const tech = useFormInput('', "Difficulty")

function handleSubmit (e) {
props.add({id:`${Math.random()}`, name: name.value, location: location.value, miles: miles.value, vert: vert.value, tech: tech.value})
}
  return (
 
<Form onSubmit={handleSubmit} header="Add a Trail">
<div style={styles.inputs}>
<TextInput style={styles.item} label="Name" useFormInput={name} />
<TextInput style={styles.item} label="Location" useFormInput={location} />
<TextInput style={styles.item} label="Distance" useFormInput={miles} />
<TextInput style={styles.item} label="Vertical Gain" useFormInput={vert} />
<TextInput style={styles.item} label="Technical Difficulty" useFormInput={tech} />
</div>
<div style={styles.button}>
<SubmitButton />
</div>
  </Form>
 
  )
}

const styles= {
inputs: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridColumnGap: "10px"
},

item: {
  marginRight: "20px",
},

button: {
  textAlign: "center",
}

}