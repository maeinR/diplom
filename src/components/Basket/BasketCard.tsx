import { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delBasket, ISneakers } from "../../slices/basketSlice";
import { AppDispatch } from "../../store";


interface IProps {
  isPage?: boolean;
  item: ISneakers;
}

const BasketCard: FC<IProps> = ({ isPage, item }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <BasketCardStyle $isPage={isPage}>
      <picture>
        <img src={item.imgUrl} alt={item.title} />
      </picture>
      <div className="product">
        <h3 className="title">{item.title}</h3>
        <p className="price">{item.price} ₽</p>
      </div>
      <button onClick={() => dispatch(delBasket(item.id))}>
        <img src="./icons/trash.svg" alt="trash" />
      </button>
    </BasketCardStyle>
  );
};

const BasketCardStyle = styled.li<{ $isPage: boolean | undefined }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  width: 100%;

  padding: ${(props) => (props.$isPage ? "5px 0" : "15px 0")};
  ${(props) => props.$isPage && "padding: 15px 0;"}

  &:hover { background: rgba(236, 236, 236, 1); }

  picture {
    width: 100px;
    height: ${(props) => (props.$isPage ? "45px" : "100px")};
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .product {}

  .title {
    color: rgb(77, 77, 77);
    font-size: 14px;
    line-height: 20px;
    width: 268px;
    height: 40px;
  }

  .price {
    padding-top: 20px;
    color: rgb(77, 77, 77);
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    background: white;

    &:hover {
    background: var(--contact);
    }
  }
`;

export default BasketCard;
