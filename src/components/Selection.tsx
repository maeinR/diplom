import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Selection = () => {
  return (
    <SelectionBlockStyle id="selection">
      <div className="container">
        <div className="content">
          <h2>Мы подберем идеальную пару для вас</h2>
          <p className="content-p" >Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
          <form action="">
            <hr />
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="question"
            >
            <SwiperSlide>
              <h3>Какой тип кроссовок рассматриваете?</h3>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Какой размер вам подойдет?</h3>
            </SwiperSlide>
            <SwiperSlide>
              <h3>Уточните какие-либо моменты</h3>
            </SwiperSlide>
            </Swiper>
            <hr />
            <div className="status">
              <p>0 из 3</p>
              <button className="btn3">Следующий шаг</button>
            </div>
          </form>
        </div>
      </div>
    </SelectionBlockStyle>
  );
}
const SelectionBlockStyle = styled.header`

  .container {
    margin: 60px auto;
    background-color: rgba(255, 244, 238, 1);
  }
  .content{
    max-width: 980px;
    margin: 0 auto;
    padding: 40px 0;
  }

  .content-p { padding-top: 20px; }

  p {
  color: rgb( 128, 128, 128 );
  }

  hr { margin: 10px 0 20px; }

  .question {
    height: 350px;
  }

  .status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

`
export default Selection;