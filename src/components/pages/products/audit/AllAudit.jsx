import { Paper, Typography,Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

import styles from "./allaudit.module.css"
import AllAuditCard from './AllAuditCard'

import { Usekey } from '../../../customComponents/keyboard/KeyboardIntraction'
import { UseDocumentTitle } from '../../../customComponents/useTitle/UseDocumentTitle'
import { useEffect } from 'react'
import axios from 'axios'
function AllAudit() {
     //dynamic title show



 UseDocumentTitle("Expelee-All Audit");
const[data,setData]=useState([])
const getData=()=>{
    axios
        .get("http://localhost:5000/audit/")
        .then((res) => setData(res.data.auditData));
  }
 useEffect(()=>{
    getData()
 },[])
    // const auditData=[
    //     {title:"Fomo Lab",description:"Fomo Lab, the leading intellectual property specialist guides Web2 / traditional brands as they pursue their NFT & Metaverse activations to become part of the Web3 revolution. Fomo Lab are bringing an entire DeFi product ecosystem to the market which will be powered with the $FOMO token.",image:fomolab},
    //     {title:"Qroniswap",description:"Qroniswap is a DeFi protocol and ecosystem covering cross-chain crypto trading and swapping, NFT ticketings, and fiat on-ramp payments. Qroniswap’s robust ecosystem is such that allows for deep liquidity and seamless crypto transactions, all spiced up with incentivized earning models.",image:qroniswap},
    //     {title:"Bloc Vault",description:"The BlocVault ecosystem is a suite of modules that will bring together all you need to trade and access your tokens online. Our products can be accessed online here or in your hand through the BlocVault App on the go. Our advanced architecture will set the bar for ecosystems of the future.",image:blocvault},
        


    // ]
    const [input,setInput] =useState("")
    // const [data,setData] =useState(auditData)
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSearch=()=>{
        // setData([...data,input])
        const filterData = data.filter((el) =>
        el.title.split(" ").join(" ").toLowerCase().includes(input.toLowerCase())
      );
      setData(filterData)
    }
 const  handleReset=()=>{
setInput("")
getData()
    }
    Usekey("Enter", handleSearch);
    Usekey("NumpadEnter", handleSearch);
  return (
    <>
    <Paper className={styles.mainPaper}>
        <Typography  className={styles.textGradient} sx={{fontSize:"2em",textAllign:"center",width:"30%",margin:"auto"}}>
        Smart Contract Auditing Report
        </Typography>

        <Grid sx={{width:"80%",margin:"auto"}} container spacing={2}>

<Grid item xs={12} md={12}>
    <Paper className={styles.allauditCardBackground} sx={{padding:"2em",color:"white"}}>
<div style={{background:"white",padding:"1.2em",width:"20%",borderRadius:"15px",marginBottom:"2em",marginLeft:"3em"}}>

<TextField fullWidth variant='outlined' label="Search By Contract Name" onChange={handleChange} name="contractName" value={input}/>
</div>
    <Button onClick={handleSearch} sx={{padding:"1em",marginLeft:"5em"}}variant='contained'>Search</Button>
    <Button onClick={handleReset} sx={{padding:"1em",marginLeft:"5em"}}variant='contained'>Reset/Get All Audit</Button>
    
    </Paper>
</Grid>
{data?.map((el)=>(

<Grid  item xs={12} key={el.title} md={4}>
    <div  className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
   
    >

<AllAuditCard title={el.title} image={el.image} description={el.description}/>
    </div>
</Grid>
))}


        </Grid>
    </Paper>
    </>
  )
}

export default AllAudit