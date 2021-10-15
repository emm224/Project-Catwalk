import React from 'react';
import Image from '../Image.jsx';
import IconIndicator from './IconIndicator.jsx';
import styled from 'styled-components'

const ExpandedCarousel = (props) => {
  if (!props.photos) {
    return ''
  }

  const showLeftArrow = props.imageIndex > 0;

  const showRightArrow = props.imageIndex < (props.photos.length - 1);

  const moveLens = (event) => {
    // get position of cursor
    let pos = getCursor(event);

    let ratio = 3;

    var lens = document.getElementById('lens')
    var image = document.getElementById('img-container').children[1]


    let positionLeft = pos.x - (lens.offsetWidth / 2);
    let positionTop = pos.y - (lens.offsetHeight / 2);

    if (positionLeft < 0) {
      positionLeft = 0
    }
    if (positionTop < 0) {
      positionTop = 0
    }

    if (positionLeft > image.width - lens.offsetWidth) {
      positionLeft = image.width - lens.offsetWidth
    }
    if (positionTop > image.height - lens.offsetHeight) {
      positionTop = image.height - lens.offsetHeight
    }



    lens.style.left = positionLeft + 'px';
    lens.style.top = positionTop + 'px';
    lens.style.backgroundSize = (event.target.width * ratio) + 'px ' + (event.target.height * ratio) + 'px'
    lens.style.backgroundPosition = '-' + (pos.x * ratio) + 'px -' + (pos.y * ratio) + 'px '

  }

  const getCursor = (event) => {
    // let e = event;
    var image = document.getElementById('img-container')

    let bounds = image.getBoundingClientRect()


    let x = event.pageX - bounds.left;
    let y = event.pageY - bounds.top;
    // console.log('this is x', x, 'this is y', y)
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { 'x': x, 'y': y }
  }

  // onMouseMove={moveLens}

  return (
    <div id='lightbox' className='defaultview-modal' >
      {console.log(showLeftArrow)}
      <div id='img-container' >
        <Lens id='lens' imageUrl={props.photos[props.imageIndex].url} onMouseMove={moveLens} onClick={props.zoomOut}>
        </Lens>
        <Image
          imageUrl={props.photos[props.imageIndex].url}
          imageIndex={props.imageIndex}
          onImageClick={props.zoomOut}
          onMouseMove={moveLens}
        >
        </Image>
      </div>
      <ArrowLeft
        id='nav-left'
        className='fas fa-angle-left'
        show={showLeftArrow}
        onClick={props.prevImage}>
      </ArrowLeft>
      <ArrowRight
        id='nav-right'
        className='fas fa-angle-right'
        show={showRightArrow}
        onClick={props.nextImage}>
      </ArrowRight>
      <div className='icon-frame'>
      <IconIndicator
          photos={props.photos}
          selectedIndex={props.imageIndex}
          clickIcon={props.clickIcon}
        >
      </IconIndicator>
      </div>
    </div>
  )
}

var Lens = styled.div`
  background-image: url('${props => props.imageUrl}');
`

const ArrowLeft = styled.button`
  visibility: ${props => props.show ? `inline-block` : `hidden`};
`;


const ArrowRight = styled.button`
  visibility: ${props => props.show ? 'inline-block' : 'hidden'};
`;

export default ExpandedCarousel;

