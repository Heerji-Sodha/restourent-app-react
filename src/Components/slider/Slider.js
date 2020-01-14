import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Logo from './../../Containers/image/saffron-2.jpg'

const CarouselPage = () => {
  return (
 
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
              
                src={Logo}
                alt="First slide"
                style={{height:'350px',marginTop:'10px',width:'1700px'}}

              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2"  >
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
                style={{height:'350px',marginTop:'10px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/indian-vegetarian-thaali-sindhi-meal-sindhi-main-course-vegetarian-meal-sweet-poppadum-114181188.jpg"
                alt="Third slide"
                style={{height:'350px',marginTop:'10px'}}

              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
   
  );
}

export default CarouselPage;