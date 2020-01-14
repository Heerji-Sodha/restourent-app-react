import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


class Addproduct extends React.Component {
    render() {

        return (

            <div>
                <Paper style={{ width: '800px', margin: '0 auto',borderRadius:'30px' }}>
                    <h1 style={{ textAlign: 'center', marginTop: "20px",color:'red' }}>Add Catagery</h1>
                    <TextField
                        id="outlined-Add Catagery-input"
                        label="Add Catagery"
                        type="PricAdd Catagerye"
                        name="Add Catagery"
                        autoComplete="Add Catagery"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '700px', marginLeft: '50px' }}
                    />

                   
                    <button style={{ marginLeft: '50px', width: '700px', padding: '13px', marginTop: '10px',cursor:'pointer'}}>ADD CATAGERY</button>
                    <br />
                    <button style={{ marginLeft: '50px', width: '700px', padding: '13px', marginTop: '10px',cursor:'pointer'  }} onClick={()=>(window.location.href='/dashbord')}>CANCEL</button>
                    <br />
                    <br />
                    <br />

                </Paper>
            </div>



        )


    }
}





export default Addproduct;
