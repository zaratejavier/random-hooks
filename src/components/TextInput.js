import React from 'react';

export default function (props) {

  return (
    <div>
      <p>{props.label}</p>
      <input {...props.useFormInput} />
    </div>

  )

}