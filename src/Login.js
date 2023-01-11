import React from 'react'
import Styledh1 from './components/h1'
import LoginDiv from './components/LoginDiv'
import ParentDiv from './components/parent'
import QuizImage from './components/QuizImage'
import {Button,Input} from '@mui/material';
import useStyles from './components/mui'
import Line from './components/Line'
import ForLine from './components/ForLine'
import Social from './components/Social'
import ConnectGoogle from './components/ConnectGoogle'
import ConnectFacebook from './components/ConnectFacebook'
import GoogleLine from './components/GoogleLine'
import Google from './components/Google'
import Image from './components/image'
import Facebook from './components/Facebook'
import FacebookLine from './components/FacebookLine'



export default function Login() {


  const classes = useStyles();
    return (
      <ParentDiv>
      
      {/* Quiz Image */}
        <QuizImage>
            <img src="logo1.png" alt="" />
        </QuizImage>
      
      {/* Login */}
        <LoginDiv>
          <Styledh1>Login</Styledh1>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="First option"></Input>
          <Input sx={{backgroundColor: "white" }} className={classes.input} placeholder="Second option"></Input>
          <Button sx={{backgroundColor: "yellow", color: "#343285" }} style={{borderRadius: '15px'}} variant='contained' className={classes.btn}>Submit</Button>
      
      {/* Or */}
          <ForLine>
            <Line />
            <Styledh1>OR</Styledh1>
            <Line />
          </ForLine>

      {/* Social */}
          <Social>

        {/* Connect with Google */}
            <Google>
              <Image src="https://img.freepik.com/free-icon/search_318-265146.jpg?w=360"></Image>
              <GoogleLine></GoogleLine>
              <ConnectGoogle>Connect with Google</ConnectGoogle>
            </Google>

        {/* Connect with Facebook */}
            <Facebook>
              <Image src='facebook.png'></Image>
              <FacebookLine></FacebookLine> 
              <ConnectFacebook>Connect with Facebook</ConnectFacebook>
            </Facebook>
          </Social>  
        </LoginDiv>
      </ParentDiv>
      
    )
} 