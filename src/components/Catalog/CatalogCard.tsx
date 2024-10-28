import { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ISneakers, postBasket } from "../../slices/basketSlice";
import { AppDispatch } from "../../store";

interface IProps {
  item: ISneakers;
}

const CatalogCard: FC<IProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <CatalogCardStyle
      $isOpenModal={isOpenModal}
      onClick={() => setIsOpenModal((prev) => !prev)}
    >
      <div className={isOpenModal ? "modal modal-open" : "modal"}>
        <div className="options">
          <button className="add" onClick={() => dispatch(postBasket(item))}>
            <img src="../icons/add-to-basket.svg" alt="add to basket" />
          </button>
          <button className="add" onClick={() => dispatch(postBasket(item))}>
            <img src="../icons/add-to-basket.svg" alt="add to basket" />
          </button>
        </div>
        <picture>
          <img className="card" src={item.imgUrl} alt={item.title} />
        </picture>
      </div>
      <p>{item.title}</p>
      <span>{item.price} ₽</span>
    </CatalogCardStyle>
  );
};

const CatalogCardStyle = styled.li<{ $isOpenModal: boolean }>`
  .modal {
    position: relative;
  }

  .options {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: all 200ms linear;

    button {
      width: 80px;
      height: 80px;
      background-color: rgb(49, 52, 60);
      border-radius: 50%;

      @media (min-width: 810px) {
        &:hover {
          background-color: var(--text);
        }
      }
    }
  }

  @media (min-width: 810px) {
    &:hover .options {
      opacity: 1;
    }
  }

  @media (max-width: 810px) {
    .options {
      opacity: ${(props) => (props.$isOpenModal ? 1 : 0)};
    }
  }

  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-bottom: 6px;
    line-height: 19px;
  }

`;

export default CatalogCard;
