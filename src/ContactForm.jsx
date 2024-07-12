import React from 'react'
import TextField from '@mui/material/TextField';


function ContactForm() {
  return (
    <form method='POST'>
    <div>

        <TextField id="standard-basic" label="Standard" variant="standard" /></div>
    <div>  <TextField id="standard-basic" label="Standard" variant="standard" /> </div>
    <div>       <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="standard"
    />   </div>
    <div> <button>Submit</button> </div>
</form>
  )
}

export default ContactForm