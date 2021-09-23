import React from 'react';
import styled from 'styled-components';
import StarRating from '../../StarRating.js';

export default function Modal({ open, children, onClose }) {
  if(!open) {return null;}

  return (
    <>
      <OverlayStyle>
        <ModalStyle>
          <HStyle>Write Your Review</HStyle>

          <InputStyle>
            <LabelStyle>Overall rating</LabelStyle>
            <StarRating/>
          </InputStyle>

          <InputStyle>
            <LabelStyle>Do you recommend this product?</LabelStyle>
            <input type="radio" name='rec'/>Yes
            <input type="radio" name='rec'/>No
          </InputStyle>

          <FeatureStyle>Rate features</FeatureStyle>
            <F>
              <div>
                <RadioStyle>
                  <label>Comfort</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
                <RadioStyle>
                  <label>Quality</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
                <RadioStyle>
                  <label>Fit</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
              </div>
              <div>
                <RadioStyle>
                  <label>Size</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
                <RadioStyle>
                  <label>Length</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
                <RadioStyle>
                  <label>Width</label>
                  <br></br>
                  <StarRating/>
                </RadioStyle>
              </div>
            </F>
            <InputStyle></InputStyle>

          <ReviewStyle>Review summary</ReviewStyle>
          <BodyStyle placeholder="Example: Best purchase ever!"/>
          <br></br>

          <ReviewStyle>Review body</ReviewStyle>
          <ReviewBodyStyle placeholder="Why did you like the product or not?"/>
          <br></br>

          <ReviewStyle>Upload photos</ReviewStyle>
          <br></br>

          <ReviewStyle>What is your nickname?</ReviewStyle>
          <BodyStyle placeholder="Example: jackson11!"/>
          <br></br>

          <ReviewStyle>What is your email?</ReviewStyle>
          <BodyStyle placeholder="jackson11@email.com"/>
          <AuthStyle>For authentication reasons, you will not be emailed.</AuthStyle>


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
  background: rgba(0, 0, 0, .9);
  zIndex: 1000;
`;
var ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(120deg, hsla(175,55%,55%,0.7), hsla(235,55%,55%,0.7));
  padding: 50px;
  zIndex: 1000;
  width: 500px;
`;

var HStyle = styled.div`
  text-align: left;
  font-size: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid;
  font-weight: bold;
`;
var AuthStyle = styled.div`
  font-size: 10px;
  margin-left: 10px;
`;

var ButtonStyle = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;
var InputStyle = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  margin-left: 10px;
`;
var RadioStyle = styled.div`
  margin-left: 10px;
`;
var LabelStyle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
var ReviewStyle = styled.div`
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
`;
var FeatureStyle = styled.div`
  margin-left: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

var BodyStyle = styled.input`
  type: text;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 250px;
`;

var ReviewBodyStyle = styled.input`
  type: text;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 300px;
  height: 100px;
`;

var F = styled.div`
  display: flex;
  justify-content: space-evenly;
`;