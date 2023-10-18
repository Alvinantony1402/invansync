import React from 'react'
import bgimga from '../images/cover.jpg'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function About() {
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
        <Description>
        Introducing our Book Inventory App, where customers can effortlessly discover and purchase their favorite books while receiving digital receipts for their transactions. Our platform utilizes React.js for a responsive front-end, Node.js for a robust back-end, and Axios for efficient API integration, ensuring a seamless and user-centric book-buying experience. Join us on this journey to transform book shopping into an enjoyable, hassle-free process.
        </Description>
        </Content>
        </Container>

    </div>
  )
}

const Description = styled.p`
color: hsla(0, 0%, 95.3%,1);
font-size: 19px;
margin: 0 0 15px;
line-height: 1.8;

`;

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
background-image: url(${bgimga});
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
export default About