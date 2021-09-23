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
            <G>
            <F>
              <RadioStyle>
                <FRadio>Comfort</FRadio>
                <input type="radio" name='comfort'/>1
                <input type="radio" name='comfort'/>2
                <input type="radio" name='comfort'/>3
                <input type="radio" name='comfort'/>4
                <input type="radio" name='comfort'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Quality</FRadio>
                <input type="radio" name='quality'/>1
                <input type="radio" name='quality'/>2
                <input type="radio" name='quality'/>3
                <input type="radio" name='quality'/>4
                <input type="radio" name='quality'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Fit</FRadio>
                <input type="radio" name='fit'/>1
                <input type="radio" name='fit'/>2
                <input type="radio" name='fit'/>3
                <input type="radio" name='fit'/>4
                <input type="radio" name='fit'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
            </F>
            <F>
              <RadioStyle>
                <FRadio>Size</FRadio>
                <input type="radio" name='size'/>1
                <input type="radio" name='size'/>2
                <input type="radio" name='size'/>3
                <input type="radio" name='size'/>4
                <input type="radio" name='size'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Length</FRadio>
                <input type="radio" name='length'/>1
                <input type="radio" name='length'/>2
                <input type="radio" name='length'/>3
                <input type="radio" name='length'/>4
                <input type="radio" name='length'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Width</FRadio>
                <input type="radio" name='width'/>1
                <input type="radio" name='width'/>2
                <input type="radio" name='width'/>3
                <input type="radio" name='width'/>4
                <input type="radio" name='width'/>5
                <LabelStyle></LabelStyle>
              </RadioStyle>
            </F>

              <div>Chart Placeholder</div>

            </G>
            <InputStyle></InputStyle>

          <ReviewStyle>Review summary (60 character max)</ReviewStyle>
          <BodyStyle maxlength="60" placeholder="Example: Best purchase ever!"/>
          <InputStyle></InputStyle>

          <ReviewStyle>Review body (1000 character max)</ReviewStyle>
          <ReviewBodyStyle placeholder="Why did you like the product or not?"/>
          <InputStyle></InputStyle>

          <ReviewStyle>Upload photos (5 picture max)</ReviewStyle>
          <Button>+</Button>
          <InputStyle></InputStyle>

          <ReviewStyle>What is your nickname? (60 character max)</ReviewStyle>
          <BodyStyle placeholder="Example: jackson11!"/>
          <InputStyle></InputStyle>

          <ReviewStyle>What is your email? (60 character max)</ReviewStyle>
          <BodyStyle placeholder="jackson11@email.com"/>
          <AuthStyle>For authentication reasons, you will not be emailed.</AuthStyle>
          <InputStyle></InputStyle>


          <ButtonStyle>
            <BB>submit</BB>
            <BB onClick={onClose}>cancel</BB>
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
  width: 600px;
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
  margin-left: 12px;
  margin-top: -5px;
  margin-bottom: 5px;
`;

var ButtonStyle = styled.div`
  display: flex;
  justify-content: right;
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
  margin-left: 10px;
  width: 250px;
  margin-bottom: 5px;
  maxlength: 60;
`;

var ReviewBodyStyle = styled.textarea`
  type: text;
  margin-left: 10px;
  width: 400px;
  height: 100px;
  resize: none;
`;

var F = styled.div`
  margin-right: 10px;
`;
var FRadio = styled.div`
  border-bottom: 1px solid black;
`;
var G = styled.div`
  display: flex;
`;
var Button = styled.button`
  margin-left: 10px;
  margin-bottom: 5px;
`;
var BB = styled.button`
  margin-left: 10px;
`;