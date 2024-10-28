import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "../../store";
import { ISneakers } from "../../slices/basketSlice";
import { fetchSneakers } from "../../slices/sneakersSlice";
import { changeLimit } from "../../slices/dataSlice";
import CatalogCard from "./CatalogCard";

interface IProps {
  gender: string;
}

const CatalogItems: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneakers.data
  );
  const limit = useSelector<RootState, number>((state) => state.data.limit);

  React.useEffect(() => {
    dispatch(
      fetchSneakers({
        priceFrom: 0,
        priceTo: 99999,
        gender: gender,
        sizes: [],
      })
    );
  }, [dispatch, gender, limit]);

  return (
    <CatalogItemsStyle>
      <ul>
        {sneakers
          .filter((_, index) => index < limit)
          .map((item: ISneakers) => (
            <CatalogCard key={item.id} item={item} />
          ))}
      </ul>

      <button className="btn1" type="button" onClick={() => dispatch(changeLimit())} disabled={limit >= sneakers.length}>
      Показать еще
    </button>
    </CatalogItemsStyle>
  );
};

const CatalogItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export default CatalogItems;
