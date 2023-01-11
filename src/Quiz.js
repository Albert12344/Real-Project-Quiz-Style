import React from 'react'
import StyledButton from './components/Button'
import StyledInput from './components/Input'
import Styledh1 from './components/h1'
import StyledDiv from './components/div'
import ParentDiv from './components/parent'
import StyledDiv1 from './components/div1'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import useStyles from './components/mui'
import ReactDOM from "react-dom/client";
export default function Quiz() {


  const classes = useStyles();
    return (
      <ParentDiv>
        <StyledDiv1>
            <img src="logo1.png" alt="" />
        </StyledDiv1>
        <StyledDiv>
          <Styledh1>The question</Styledh1>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="First option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Second option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Third option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Forth option"></Input>
          <Button sx={{backgroundColor: "yellow", color: "#343285" }} style={{borderRadius: '15px'}} variant='contained' className={classes.btn}>Next</Button>
        </StyledDiv>
      </ParentDiv>
      
    )
} 


{/* <StyledInput type="text" placeholder="First option"/>
<StyledButton>Next</StyledButton> */}