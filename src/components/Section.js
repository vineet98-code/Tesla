import React from 'react'
import styled from "styled-components";

function section( {title, description, leftBtnText, rightBtnText,backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { leftBtnText }
                    </LeftButton>
                    { rightBtnText && // if the right button is doesn't exist then don't show here
                        <RightButton>
                            { rightBtnText}
                        </RightButton>
                    }        
                </ButtonGroup>
            <DownArrow src= "/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default section

const Wrap = styled.div`
    width: 100vw;
    height: 120vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }

`
const LeftButton = styled.button`
    background-color: rgba(23, 26, 30, 0.8);
    height: 35px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
font-size: 12px;
color: black;
`
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
   overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`
const Buttons = styled.div`
  
`