import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import logo from "../../assets/ExpeleeLogoLight.png"
function AuditReport() {
  return (
    <>
    {/* <div style={{}}> */}

    {/* <div style={{textAlign:"center",background:"#4f067f"}} >
        <span style={{textAlign:"center"}}>
            <img src={logo} width="30%" />
        </span>
    </div> */}
    <Paper 
 style={{background:"#4f067f"}}
    >
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} >

            </Grid>
            <Grid style={{textAlign:"center"}} item xs={12} md={4} >
            <img src={logo} width="30%" />

            </Grid>
            <Grid item xs={12} md={4} >

            </Grid>

        </Grid>
    </Paper>

    {/* </div> */}
    </>
  )
}

export default AuditReport