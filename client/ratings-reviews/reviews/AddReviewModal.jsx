import React from 'react';
import styled from 'styled-components';
import OldStarRating from './OldStarRating.js';

export default function Modal({ open, children, onClose }) {
  if(!open) {return null;}

  return (
    <>
      <OverlayStyle>
        <ModalStyle>
          <HStyle>Write Your Review</HStyle>

          <InputStyle>
            <LabelStyle>Overall rating</LabelStyle>
            <OldStarRating />
          </InputStyle>

          <InputStyle>
            <LabelStyle>Do you recommend this product?</LabelStyle>
            <input type="radio" name='rec'/>Yes
            <input type="radio" name='rec'/>No
          </InputStyle>

          <FeatureStyle>Rate features</FeatureStyle>
            <RFeats>

              <RadioStyle>
                <FRadio>Comfort</FRadio>
                <G>
                <input type="radio" name='comfort'/><Text>Uncomfortable</Text>
                </G>
                <G>
                <input type="radio" name='comfort'/><Text>Slightly uncomfortable</Text>
                </G>
                <G>
                <input type="radio" name='comfort'/><Text>What I expected</Text>
                </G>
                <G>
                <input type="radio" name='comfort'/><Text>Comfortable</Text>
                </G>
                <G>
                <input type="radio" name='comfort'/><Text>Perfect</Text>
                </G>
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Quality</FRadio>
                <G>
                <input type="radio" name='quality'/><Text>Poor</Text>
                </G>
                <G>
                <input type="radio" name='quality'/><Text>Below average</Text>
                </G>
                <G>
                <input type="radio" name='quality'/><Text>Average</Text>
                </G>
                <G>
                <input type="radio" name='quality'/><Text>Above average</Text>
                </G>
                <G>
                <input type="radio" name='quality'/><Text>Perfect</Text>
                </G>

                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Fit</FRadio>
                <G>
                <input type="radio" name='fit'/><Text>Runs tight</Text>
                </G>
                <G>
                <input type="radio" name='fit'/><Text>Runs slightly tight</Text>
                </G>
                <G>
                <input type="radio" name='fit'/><Text>Perfect</Text>
                </G>
                <G>
                <input type="radio" name='fit'/><Text>Runs slightly long</Text>
                </G>
                <G>
                <input type="radio" name='fit'/><Text>Runs long</Text>
                </G>
                <LabelStyle></LabelStyle>
              </RadioStyle>
            </RFeats>
            <RFeats>
              <RadioStyle>
                <FRadio>Size</FRadio>
                <G>
                <input type="radio" name='size'/><Text>A size too small</Text>
                </G>
                <G>
                <input type="radio" name='size'/><Text>½ a size too small</Text>
                </G>
                <G>
                <input type="radio" name='size'/><Text>Perfect</Text>
                </G>
                <G>
                <input type="radio" name='size'/><Text>½ a size too big</Text>
                </G>
                <G>
                <input type="radio" name='size'/><Text>A size too big</Text>
                </G>
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Length</FRadio>
                <G>
                <input type="radio" name='length'/><Text>Runs short</Text>
                </G>
                <G>
                <input type="radio" name='length'/><Text>Runs slightly short</Text>
                </G>
                <G>
                <input type="radio" name='length'/><Text>Perfect</Text>
                </G>
                <G>
                <input type="radio" name='length'/><Text>Runs slightly long</Text>
                </G>
                <G>
                <input type="radio" name='length'/><Text>Runs long</Text>
                </G>
                <LabelStyle></LabelStyle>
              </RadioStyle>
              <RadioStyle>
                <FRadio>Width</FRadio>
                <G>
                <input type="radio" name='width'/><Text>Too narrow</Text>
                </G>
                <G>
                <input type="radio" name='width'/><Text>Slightly narrow</Text>
                </G>
                <G>
                <input type="radio" name='width'/><Text>Perfect</Text>
                </G>
                <G>
                <input type="radio" name='width'/><Text>Slightly wide</Text>
                </G>
                <G>
                <input type="radio" name='width'/><Text>Too wide</Text>
                </G>
                <LabelStyle></LabelStyle>
              </RadioStyle>
            </RFeats>
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
  width: 250px;
  height: 50px;
  resize: none;
`;

var F = styled.div`
  margin-right: 10px;
`;
var FRadio = styled.div`
  border-bottom: 1px solid black;
  font-size: 15px;
`;
var G = styled.div`
  display: flex;
`;
var RFeats = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

var Button = styled.button`
  margin-left: 10px;
  margin-bottom: 5px;
`;
var BB = styled.button`
  margin-left: 10px;
`;

var Table = styled.table`
  font-size: 8px;
`;
var Text = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;
