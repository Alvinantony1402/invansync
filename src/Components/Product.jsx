import React from 'react'
import bgimge from '../images/Cover_page.jpg'; 
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product ({children})  {
  return (
    <div>
             <Content>


             <BGimge/>
             <ToastContainer/>

             {children}

             

            
             </Content>
             





    </div>
  )
}

const Container = styled.section`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;


`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
flex-direction: column;
height: 100%;
min-height: 100vh;
align-items: center;
justify-content: center;
padding: 80px 40px;
display: flex;
box-sizing: border-box;
`;

const BGimge = styled.div`
background-image: url(${bgimge});
z-index :-1;
height: 115%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
top:0;
left:0;
right:0;
position: absolute;
opacity : 0.3;


`;



export default Product