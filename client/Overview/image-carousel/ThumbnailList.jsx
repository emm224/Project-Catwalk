import React from 'react';
import styled from 'styled-components';
import ThumbnailIcon from './ThumbnailIcon.jsx'

class ThumbnailList extends React.Component {
  constructor(props) {
    super(props);
    // thumbnailList state should keep track of the 7 thumbnails displayed
    this.state = {
      startIndex: 0,
      endIndex: 6
    }
    this.thumbnailsToDisplay = this.thumbnailsToDisplay.bind(this);
    this.scrollThumbnailUp = this.scrollThumbnailUp.bind(this);
    this.scrollThumbnailDown = this.scrollThumbnailDown.bind(this);
  }

  thumbnailsToDisplay() {
    const { startIndex, endIndex } = this.state;
    const { photos } = this.props;
    const arrayToDisplay = [];
    for (var i = startIndex; i <= endIndex && i < photos.length; i++) {
      arrayToDisplay.push(photos[i])
    }
    return arrayToDisplay
  }

  scrollThumbnailUp() {
    const { startIndex, endIndex } = this.state;
    // this.props.scrollThumbnailUp()
    const thumbnailPhotoArray = this.props.photos;
    if (endIndex <= thumbnailPhotoArray.length - 1) {
      this.setState({
        startIndex: startIndex + 1,
        endIndex: endIndex + 1
      })
    }
  }

  scrollThumbnailDown() {
    const { startIndex, endIndex } = this.state;
    // this.props.scrollThumbnailUp()
    const thumbnailPhotoArray = this.props.photos;
    if (startIndex > 0) {
      this.setState({
        startIndex: startIndex - 1,
        endIndex: endIndex - 1
      })
    }
  }

  render() {
    return (
      <ThumbnailFrame className="thumbnail-frame" >
        < ArrowUp
          onClick={this.scrollThumbnailDown} >
          ▲
        </ArrowUp>
        {
          this.thumbnailsToDisplay().map((thumbnailIcon, index) => {
            return (
              <ThumbnailIcon
                selectedPhotoUrl={this.props.photos[this.props.imageIndex].url}
                thumbnailId={thumbnailIcon.url}
                imageIndex={this.props.imageIndex}
                thumbnailUrl={thumbnailIcon.thumbnail_url}
                key={thumbnailIcon.thumbnail_url}
                thumbnailClick={this.props.clickThumbnail}
              />
            )
          })
        }
        <ArrowDown
          onClick={this.scrollThumbnailUp}>
          ▼
        </ArrowDown>
      </ThumbnailFrame >
    )
  }
}

const ThumbnailFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 90px
`;

const ArrowUp = styled.button`
  margin-left: 30px;
  z-index: 10;
  cursor: pointer;
  font-size: 1rem;
  top: 0px;
`;


const ArrowDown = styled.button`
  margin-left: 30px;
  z-index: 10;
  cursor: pointer;
  font-size: 1rem;
  bottom: 0px;
`;

export default ThumbnailList;