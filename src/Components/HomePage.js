import React from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../images/cover.jpg'; 
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const HomePage = (props) => {
  const navigate = useNavigate();

  return (
    
    <div>
    
    

      

      <Container>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              InvnSync
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active text-white font-weight-bold"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pos"
                    className="nav-link text-white font-weight-bold"
                  >
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/About"
                    className="nav-link text-white font-weight-bold"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-white font-weight-bold"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <Content><BGimg/> 
            <CTA> 
          
            <Signup onClick={() => navigate("pos")}> GET IT ALL THERE </Signup>
            
            <Description>“Bookshops are dreams built of wood and paper. They are time travel and escape and knowledge and power. They are, simply put, the best of places.” - Jen Campbell</Description>
            
            </CTA>
            
            
            </Content>
        </Container>
       
        
    </div>
  );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;


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

const BGimg = styled.div`
background-image: url(${bgimg});
z-index :-1;
height: 115%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
top:0;
left:0;
right:0;
position: absolute;
opacity : 0.6;


`;

const CTA = styled.div`
margin-left : auto;
margin-right: auto;
display: flex;
flex-direction: column;
margin-top : 0;
margin-bottom: 50px;
text-align: center;
align-items: center;
justify-content: center;
max-width: 650px;
max-height: 650px;
flex-wrap: wrap;
position: absolute;
object-fit: contain;
`;


const Signup = styled.a`
font-weight: bold;
color: white;
background-color: #0066CC;
margin-botton: 12px;
width: 100%;
letter-spacing: 2px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 6px;
 &:hover{
    background-color: #0483ee;
}
text-decoration: none;

`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%,1);
font-size: 19px;
margin: 0 0 15px;
line-height: 1.8;

`;



export default HomePage;
