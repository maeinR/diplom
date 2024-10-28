import styled from "styled-components";

const Contacts = () => {
  return (
    <ContactsBlockStyle id="contacts">
      <div className="container">
        <div>
          <h2>Контакты</h2>
          <address>
            <span>Главный офис
              <button className="tooltip">?</button>
              <div className="tooltip_modal">
                <p>Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж</p>
              </div>
            </span>
            <a className="number" href="tel:+78007898989">+7 800 789 89 89</a>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <span>отдел продаж</span>
            <a className="number" href="tel:+78007898989">+7 800 789 89 89</a>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          </address>
          <a className="vk" href="https://vk.com">
            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.4861C0 10.3986 9.84974 0.599854 22 0.599854C34.1503 0.599854 44 10.3986 44 22.4861C44 34.5735 34.1503 44.3723 22 44.3723C9.84974 44.3723 0 34.5735 0 22.4861Z" fill="#0E5A4C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1508 29.6689C23.1508 29.6689 23.5743 29.6229 23.7912 29.3954C23.9898 29.1869 23.9829 28.7935 23.9829 28.7935C23.9829 28.7935 23.9565 26.9565 24.8299 26.6853C25.6908 26.4185 26.796 28.4618 27.9691 29.2474C28.8551 29.8415 29.5277 29.7115 29.5277 29.7115L32.6622 29.6689C32.6622 29.6689 34.3012 29.5702 33.5242 28.3116C33.4599 28.2085 33.0708 27.3802 31.1942 25.6788C29.2281 23.8978 29.4921 24.1859 31.8588 21.1048C33.3004 19.2286 33.8766 18.0831 33.6964 17.5933C33.5253 17.1248 32.4648 17.2492 32.4648 17.2492L28.9366 17.2705C28.9366 17.2705 28.6749 17.2358 28.481 17.349C28.2916 17.4599 28.1688 17.7188 28.1688 17.7188C28.1688 17.7188 27.611 19.1703 26.8661 20.4054C25.2948 23.0102 24.667 23.148 24.4099 22.9866C23.8119 22.6089 23.9611 21.4713 23.9611 20.6632C23.9611 18.138 24.3536 17.0856 23.1978 16.8132C22.8145 16.7224 22.5321 16.663 21.5508 16.653C20.2917 16.6406 19.2266 16.6574 18.6229 16.9455C18.2212 17.1371 17.9113 17.5653 18.1007 17.5899C18.3336 17.6202 18.8616 17.7289 19.1417 18.101C19.5032 18.5819 19.4906 19.6601 19.4906 19.6601C19.4906 19.6601 19.6983 22.6324 19.0051 23.0012C18.5299 23.2545 17.878 22.7378 16.4766 20.374C15.7592 19.1636 15.2175 17.8253 15.2175 17.8253C15.2175 17.8253 15.113 17.5754 14.926 17.4409C14.6999 17.2784 14.3842 17.2279 14.3842 17.2279L11.0316 17.2492C11.0316 17.2492 10.5278 17.2627 10.343 17.4767C10.1788 17.6662 10.3303 18.0596 10.3303 18.0596C10.3303 18.0596 12.9553 24.057 15.9279 27.0798C18.6539 29.8504 21.7482 29.6689 21.7482 29.6689H23.1508Z" fill="white"/>
            </svg>
          </a>
          <a className="instagram" href="https://instagram.com">
            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_47_762" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="45">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.4861C0 10.3986 9.84974 0.599854 22 0.599854C34.1503 0.599854 44 10.3986 44 22.4861C44 34.5735 34.1503 44.3723 22 44.3723C9.84974 44.3723 0 34.5735 0 22.4861Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_47_762)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.4861C0 10.3986 9.84974 0.599854 22 0.599854C34.1503 0.599854 44 10.3986 44 22.4861C44 34.5735 34.1503 44.3723 22 44.3723C9.84974 44.3723 0 34.5735 0 22.4861Z" fill="#0E5A4C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.001 10.8134C18.8144 10.8134 18.4145 10.8272 17.1629 10.8839C15.9138 10.9408 15.0612 11.1375 14.3151 11.4262C13.5434 11.7243 12.8888 12.1231 12.2366 12.7722C11.5839 13.421 11.183 14.0722 10.8824 14.8397C10.5915 15.5822 10.3935 16.4306 10.3372 17.6728C10.2813 18.9179 10.2666 19.316 10.2666 22.4861C10.2666 25.6562 10.2808 26.0529 10.3375 27.298C10.3949 28.5406 10.5927 29.3889 10.8826 30.1311C11.1825 30.8988 11.5834 31.55 12.2359 32.1988C12.8878 32.8481 13.5424 33.2479 14.3137 33.5461C15.0602 33.8347 15.9131 34.0315 17.162 34.0884C18.4135 34.145 18.8132 34.1589 21.9996 34.1589C25.1864 34.1589 25.5851 34.145 26.8367 34.0884C28.0858 34.0315 28.9394 33.8347 29.686 33.5461C30.4574 33.2479 31.1111 32.8481 31.763 32.1988C32.4157 31.55 32.8166 30.8988 33.1173 30.1313C33.4057 29.3889 33.6037 28.5404 33.6624 27.2982C33.7186 26.0531 33.7333 25.6562 33.7333 22.4861C33.7333 19.316 33.7186 18.9181 33.6624 17.673C33.6037 16.4304 33.4057 15.5822 33.1173 14.84C32.8166 14.0722 32.4157 13.421 31.763 12.7722C31.1104 12.1229 30.4577 11.7241 29.6852 11.4262C28.9372 11.1375 28.0841 10.9408 26.835 10.8839C25.5834 10.8272 25.185 10.8134 21.9974 10.8134H22.001ZM20.9486 12.9172C21.261 12.9167 21.6096 12.9172 22.0012 12.9172C25.134 12.9172 25.5053 12.9284 26.7425 12.9843C27.8865 13.0363 28.5074 13.2265 28.921 13.3863C29.4686 13.5978 29.8589 13.8508 30.2694 14.2593C30.68 14.6678 30.9343 15.0569 31.1474 15.6017C31.308 16.0126 31.4994 16.6303 31.5515 17.7684C31.6077 18.9989 31.6199 19.3686 31.6199 22.4837C31.6199 25.5989 31.6077 25.9685 31.5515 27.199C31.4992 28.3371 31.308 28.9548 31.1474 29.3658C30.9347 29.9105 30.68 30.2984 30.2694 30.7067C29.8587 31.1153 29.4688 31.3682 28.921 31.5797C28.5079 31.7402 27.8865 31.9299 26.7425 31.982C25.5056 32.0379 25.134 32.05 22.0012 32.05C18.8681 32.05 18.4968 32.0379 17.2599 31.982C16.1159 31.9294 15.495 31.7393 15.0811 31.5795C14.5336 31.3679 14.1425 31.115 13.7318 30.7065C13.3211 30.2979 13.0669 29.9098 12.8537 29.3648C12.6931 28.9538 12.5017 28.3362 12.4497 27.1981C12.3934 25.9676 12.3822 25.5979 12.3822 22.4808C12.3822 19.3637 12.3934 18.996 12.4497 17.7655C12.502 16.6274 12.6931 16.0097 12.8537 15.5983C13.0664 15.0535 13.3211 14.6644 13.7318 14.2559C14.1425 13.8473 14.5336 13.5944 15.0811 13.3824C15.4947 13.2219 16.1159 13.0322 17.2599 12.9799C18.3423 12.9313 18.7618 12.9167 20.9486 12.9143V12.9172ZM28.2643 14.8551C27.487 14.8551 26.8563 15.4818 26.8563 16.2553C26.8563 17.0287 27.487 17.6561 28.2643 17.6561C29.0417 17.6561 29.6724 17.0287 29.6724 16.2553C29.6724 15.482 29.0417 14.8546 28.2643 14.8546V14.8551ZM22.0011 16.4919C18.6734 16.4919 15.9755 19.1759 15.9755 22.4864C15.9755 25.7968 18.6734 28.4796 22.0011 28.4796C25.3287 28.4796 28.0257 25.7968 28.0257 22.4864C28.0257 19.1759 25.3285 16.4919 22.0008 16.4919H22.0011ZM22.0012 18.5954C24.1612 18.5954 25.9124 20.3374 25.9124 22.4864C25.9124 24.6351 24.1612 26.3773 22.0012 26.3773C19.8411 26.3773 18.0901 24.6351 18.0901 22.4864C18.0901 20.3374 19.8411 18.5954 22.0012 18.5954Z" fill="white"/>
              </g>
            </svg>
          </a>
        </div>
        <iframe className="map" src="https://yandex.ru/map-widget/v1/-/CDdXjXK-" ></iframe>
      </div>
    </ContactsBlockStyle>
  );
}
const ContactsBlockStyle = styled.section`
  contain: content;
  background-color: var(--contact);

  .container{
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }

  span {
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 40px 0 5px;
    text-decoration: none;
    font-style: normal;
    color: rgba(178, 181, 187, 1);
  }

  .tooltip {
    margin-left: 15px;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 0px groove;
    border-radius: 16px;
    box-shadow: 0px 5px 15px -4px #919191;
  }
  .tooltip:hover ~ .tooltip_modal { visibility: visible; }
  .tooltip_modal {
    position: absolute;
    width: 360px;
    top: -35px;
    left: 125px;
    background-color: white;
    z-index: 1;
    visibility: hidden;
    padding: 4px 10px;
    border: 0px groove;
    border-radius: 8px;
    box-shadow: 0px 5px 15px -4px #919191;

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-transform: none;
      color: var(--text);
    }

  }


  .number {
    display: block;
    padding: 10px 0 20px;
    text-decoration: none;
    font-style: normal;
    color: var(--gray);

    font-weight: 400;
    font-size: 30px;
    line-height: 42px;
  }

  .vk {
    position: relative;
    top: 30px;
  }
  .instagram {
    position: relative;
    top: 30px;
    left: 70px;
  }

  .map {
    position: relative;
    width: 680px;
    height: 497px;
    border: 0;
  }

  @media (max-width: 820px) {
    .container{ flex-direction: column; }
    .map { 
    padding-top: 20px;
    width: auto; 
    }
    .tooltip_modal { left: -50px;}
  }
`
export default Contacts;