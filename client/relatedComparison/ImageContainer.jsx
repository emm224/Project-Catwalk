import React, {useState, useEffect}from 'react'
import styled from 'styled-components';

const ImageContainer = ({children, show}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }

    return (
        <div>
          <CarouselContainer>
            <CarouselWrapper>
            {
            currentIndex > 0 && show &&
            <button onClick={prev} className="left-arrow twoArrow">
                &lt;
            </button>
            }
                <CarouselContentWrapper>
                    <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </CarouselContent>
                </CarouselContentWrapper>
                {
                currentIndex < (length - 1) && show &&
                <button onClick={next} className="right-arrow twoArrow">
                  &gt;
                </button>
                }
            </CarouselWrapper>
          </CarouselContainer>
        </div>
    )
}

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height:260px;
`
const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`
const CarouselContent = styled.div`
  width:100%;
  height:100%;
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display:none;
  }
`

export default ImageContainer