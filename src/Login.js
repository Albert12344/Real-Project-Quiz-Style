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
import StyledDiv2 from './components/littlediv'
import ParentDiv1 from './components/parentdiv1'
import ParentDiv2 from './components/parentdiv2'
import StyledDiv3 from './components/littlediv1'
import StyledDiv4 from './components/littlediv2'
import StyledDiv5 from './components/littlediv3'
import ParentDiv3 from './components/parentdiv3'
import Image from './components/image'
import ParentDiv4 from './components/parentdiv4'
import StyledDiv6 from './components/littlediv4'



export default function Login() {


  const classes = useStyles();
    return (
      <ParentDiv>
        <StyledDiv1>
            <img src="logo1.png" alt="" />
        </StyledDiv1>
        <StyledDiv>
          <Styledh1>Login</Styledh1>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="First option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Second option"></Input>
          <Button sx={{backgroundColor: "yellow", color: "#343285" }} style={{borderRadius: '15px'}} variant='contained' className={classes.btn}>Submit</Button>
          <ParentDiv1>
            <StyledDiv2 />
            <Styledh1>OR</Styledh1>
            <StyledDiv2 />
          </ParentDiv1>
          <ParentDiv2>
            <ParentDiv3>
              <Image src="https://img.freepik.com/free-icon/search_318-265146.jpg?w=360"></Image>
              <StyledDiv5></StyledDiv5>
              <StyledDiv3>Connect with Google</StyledDiv3>
            </ParentDiv3>
            <ParentDiv4>
              <Image src='facebook.png'></Image>
              <StyledDiv6></StyledDiv6> 
              <StyledDiv4>Connect with Facebook</StyledDiv4>
            </ParentDiv4>
          </ParentDiv2>  
        </StyledDiv>
      </ParentDiv>
      
    )
} 