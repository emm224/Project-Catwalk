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
    // console.log(pos)
    // set top and left position using cursor position
    // divide by 2 because thats position of cursor plus half of length/ height of the lens
    var lens = document.getElementById('lens')


    let positionLeft = pos.x - (lens.offsetWidth / 2);
    let positionTop = pos.y - (lens.offsetHeight / 2);

    lens.style.left = positionLeft + 'px';
    lens.style.right = positionTop + 'px';
    lens.style.backgroundSize = (event.target.width * ratio) + 'px ' + (event.target.height * ratio) + 'px'
    lens.style.backgroundPosition = '-' + (pos.x * ratio) + 'px -' + (pos.y * ratio) + 'px '

  }

  const getCursor = (event) => {
    // let e = event;
    var image = event.target

    console.log('this is target height', event.target.height)
    //
    let bounds = image.getBoundingClientRect()
    console.log('this is image bounds', bounds)

    // console.log('event', event)
    // console.log('bound', bounds)

    // event tells us position of the mouse on the browser
    // bounds tells us the bounds to the actual image
    console.log('this is event.pagey', event.pageY)
    console.log('this is bounds top', bounds.top)
    let x = event.pageX - bounds.left;
    let y = event.pageY - bounds.top;
    console.log('this is x', x, 'this is y', y)
    return { 'x': x, 'y': y }
  }

  return (
    <div id='lightbox' className='defaultview-modal' >
      <div id='img-container' >
        <Lens id='lens' imageUrl={props.photos[props.imageIndex].url} >
        </Lens>
        <Image
          imageUrl={props.photos[props.imageIndex].url}
          imageIndex={props.imageIndex}
          onImageClick={props.zoomOut}
          // nextImage={props.nextImage}
          // prevImage={props.prevImage}
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
        <IconIndicator
          photos={props.photos}
          selectedIndex={props.imageIndex}
          clickIcon={props.clickIcon}
        >
        </IconIndicator>
    </div>
  )
}

var Lens = styled.div`
  background-image: url('${props => props.imageUrl}');
  z-index: 500000000
`

const ArrowLeft = styled.div`
  display: ${props => props.show ? 'inline-block' : 'none'};
`;


const ArrowRight = styled.div`
  display: ${props => props.show ? 'inline-block' : 'none'};
`;

export default ExpandedCarousel;

