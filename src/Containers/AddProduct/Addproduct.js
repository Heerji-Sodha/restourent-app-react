import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


class Addproduct extends React.Component {
    render() {

        return (

            <div>
                <Paper style={{ width: '800px', margin: '0 auto',borderRadius:'30px' }}>
                    <h1 style={{ textAlign: 'center', marginTop: "20px",color:'red' }}>Add Product</h1>
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

                    <TextField
                        id="outlined-Item-Name-input"
                        label="Item-Name"
                        type="Item-Name"
                        name="Item-Name"
                        autoComplete="Item-Name"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '700px', marginLeft: '50px' }}

                    />
                    <br />
                    <TextField
                        id="outlined-Price-input"
                        label="Price"
                        type="Price"
                        name="Price"
                        autoComplete="Price"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '700px', marginLeft: '50px' }}
                    />
                    <br />
                    <input type='file' style={{ marginLeft: '50px' }} />
                    <span style={{ marginLeft: '150px', }}
                    >Delivery Type:
    <input type='checkbox' style={{ marginLeft: '50px' }} for='f' />
                        Free<input type='checkbox' value='Free' for='r' style={{ marginLeft: '50px' }} />
                        Rate
    </span>

                    <br />

                    <button style={{ marginLeft: '50px', width: '700px', padding: '13px', marginTop: '10px',cursor:'pointer',}}>ADD FOOD ITEM</button>
                    <br />
                    <button style={{ marginLeft: '50px', width: '700px', padding: '13px', marginTop: '10px',cursor:'pointer' }} onClick={()=>(window.location.href='/dashbord')} >CANCEL</button>
                    <br />
                    <br />
                    <br />

                </Paper>
            </div>



        )


    }
}





export default Addproduct;
