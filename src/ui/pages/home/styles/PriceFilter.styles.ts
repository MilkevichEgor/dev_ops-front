import styled from 'styled-components';

const PriceFilterWrapper = styled.div`
  width: 413px;
  height: 151px;
  background: #F0F4EF;
  border-radius: 16px;
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 1;

  .slider {
  position: relative;
  width: 379px;
}

.slider__track,
.slider__range,
.slider__left-value,
.slider__right-value {
  position: absolute;
  margin: 50px 17px 0 17px;
}

.slider__track,
.slider__range {
  background: #D6D8E7;
  border-radius: 40px;
  height: 12px;
  
}

.slider__track {
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
}

.slider__range {
  background-color: #BFCC94;;
  z-index: 2;
}

.slider__left-value,
.slider__right-value {
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.75px;
  color: #344966;
  margin: 15px;
}

.slider__left-value {
  bottom: -115px;
}

.slider__right-value {
  right: -32px;
  bottom: -115px;
}

.thumb,
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.thumb {
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 379px;
  outline: none;
  margin: 54px 17px;
  border-color: #BFCC94;
}

.thumb--zindex-3 {
  z-index: 3;
}

.thumb--zindex-4 {
  z-index: 4;
}

.thumb--zindex-5 {
  z-index: 5;
}

.thumb::-webkit-slider-thumb {
  background-color: #f1f5f7;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ced4da;
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-top: 4px;
  pointer-events: all;
  position: relative;
}

.arrow-up {
    width: 33px;
    height: 20px;
    position: absolute;
    top: -14px;
    left: 11px;
  }

  @media (max-width: 1310px) {
    width: 290px;
    
    .thumb {
      width: 270px;
    }

    .slider {
      width: 260px;
    }
  }

  @media (max-width: 833px) {
    width: 100%;
    z-index: 1;
  }

`;

export default PriceFilterWrapper;
