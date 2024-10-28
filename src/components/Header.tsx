import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FC } from "react";

interface NavItem {
  title: string;
  id: string;
}

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsBasketOpen: () => void;
}

export const navList: NavItem[] = [
  { title: "Каталог", id: "catalog" },
  { title: "О нас", id: "about" },
  { title: "Подбор товара", id: "selection" },
  { title: "Наша команда", id: "team" },
  { title: "FAQ", id: "FAQ" },
  { title: "Контакты", id: "contacts" },
];

const Header: FC<IProps> = ({ setIsOpen, setIsBasketOpen }) => {
  const basketLength = useSelector<RootState, number>(
    (state) => state.basket.data.length
  );
  return (
    <HeaderStyle onClick={() => setIsOpen()}>
      <div className="container">
        <nav>
          <span className="logo">SneakMax</span>
          <ul className="list">
            {navList.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
            <li>
              <button className="cart" onClick={() => setIsBasketOpen()}>
                Корзина <img src="../../images/icons/basket.svg" alt="корзина" />
                <span className="counter">{basketLength}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 20px 0 0;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  color: white;
  z-index: 1;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
    
  .list{
    display: flex;
    gap: 60px;
    align-items: flex-end
  }

  a{
  color: white;
  text-decoration: none;
  font-size: 14px;
  }
 
  button {
  font-size: 14px;
  color: white;
  background: 0;
  }
  .counter {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: var(--accent);
    border: 0px groove;
    border-radius: 16px;
  }

  @media (max-width: 820px) {
   .logo{ display: none; }
   nav { justify-content: center; }
   .list{ gap: 10px; }
     contain: content
  }
`;

export default Header;
