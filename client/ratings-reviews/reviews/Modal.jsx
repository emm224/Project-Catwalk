import React from 'react';
import styled from 'styled-components';

export default function Modal({ open, children, onClose }) {
  if(!open) {return null;}

  return (
    <>
      <OverlayStyle>
        <ModalStyle>
          <header>Write Your Review</header>

          <InputStyle>
            <label for="rating">Overall rating:</label>
            <input id="rating" type="number" max="5" min="1"/>
          </InputStyle>

          <InputStyle>
            <label for='y/n'>Do you recommend this product?:</label>
            <input id='y/n' type="radio"/>Yes
            <input id='y/n' type="radio"/>No
          </InputStyle>

          <u>Characteristics</u>
            <RadioStyle>
              <label for='size'>Size: </label>
              <input id='size' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>
            <RadioStyle>
              <label for='w'>Width: </label>
              <input id='w' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>
            <RadioStyle>
              <label for='comf'>Comfort: </label>
              <input id='comf' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>
            <RadioStyle>
              <label for='qual'>Quality: </label>
              <input id='qual' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>
            <RadioStyle>
              <label for='len'>Length: </label>
              <input id='len' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>
            <RadioStyle>
              <label for='fit'>Fit: </label>
              <input id='fit' type='radio'/>1
              <input type='radio'/>2
              <input type='radio'/>3
              <input type='radio'/>4
              <input type='radio'/>5
            </RadioStyle>

          <InputStyle>
            Review summary: <input type="text" placeholder="Example: Best purchase ever!"/>
          </InputStyle>

          <InputStyle>
            Review body: <input type="text" placeholder="Why did you like the product or not?"/>
          </InputStyle>

          <InputStyle>
            upload photos
          </InputStyle>

          <InputStyle>
            What is your nickanme: <input type="text" placeholder="Example: jackson11!"/>
          </InputStyle>

          <InputStyle>
            Your email: <input type="text" placeholder="jackson11@email.com"/>
          </InputStyle>
            For authentication reasons, you will not be emailed.


          <ButtonStyle>
            <button>submit</button>
            <button onClick={onClose}>cancel</button>
          </ButtonStyle>

        </ModalStyle>
      </OverlayStyle>
    </>
  )
};

var OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  zIndex: 1000;
`;
var ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: gainsboro;
  padding: 50px;
  zIndex: 1000;
  width: 500px;
`;
var ButtonStyle = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;
var InputStyle = styled.div`
  display: flex;
`;
var RadioStyle = styled.div`
  margin-left: 10px;
`;
