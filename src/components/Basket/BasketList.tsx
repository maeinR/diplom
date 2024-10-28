import { FC } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useSelector } from "react-redux";
import { ISneakers } from "../../slices/basketSlice";
import { RootState } from "../../store";

interface IProps {
  page?: boolean;
  isBasketOpen?: boolean;
}

const BasketList: FC<IProps> = ({ page, isBasketOpen }) => {
  const items = useSelector<RootState, ISneakers[]>(
    (state) => state.basket.data
  );

  return (
    <BasketListStyle $page={page} $isBasketOpen={isBasketOpen}>
      {items.map((item) => (
        <BasketCard key={item.id} isPage={page} item={item} />
      ))}
    </BasketListStyle>
  );
};

const BasketListStyle = styled.ul<{ $page?: boolean; $isBasketOpen?: boolean }>`
  ${(props) => !props.$page && "padding: 0;"}
  max-height: ${(props) => (props.$page ? "260px" : "min(414px, 50vh)")};
  overflow: auto;
  transition: all 300ms ease-out;

  ${(props) => (props.$isBasketOpen ? "height: 260px" : "height: 0")}
`;

export default BasketList;
