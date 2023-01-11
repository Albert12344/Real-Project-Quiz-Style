import React from 'react'
import StyledButton from './components/Button'
import StyledInput from './components/Input'
import Styledh1 from './components/h1'
import LoginDiv from './components/LoginDiv'
import ParentDiv from './components/parent'
import QuizImage from './components/QuizImage'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import useStyles from './components/mui'
import ReactDOM from "react-dom/client";
export default function Quiz() {


  const classes = useStyles();
    return (
      <ParentDiv>
    {/* Quiz Image  */}
        <QuizImage>
            <img src="logo1.png" alt="" />
        </QuizImage>
    {/* Questions */}
        <LoginDiv>
          <Styledh1>The question</Styledh1>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="First option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Second option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Third option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Forth option"></Input>
          <Button sx={{backgroundColor: "yellow", color: "#343285" }} style={{borderRadius: '15px'}} variant='contained' className={classes.btn}>Next</Button>
        </LoginDiv>
      </ParentDiv>
      
    )
} 


{/* <StyledInput type="text" placeholder="First option"/>
<StyledButton>Next</StyledButton> */}