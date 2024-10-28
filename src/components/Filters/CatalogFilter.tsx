import { FC } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSneakers } from "../../slices/sneakersSlice";
import { AppDispatch } from "../../store";
import { getBaseLimit } from "../../slices/dataSlice";

interface IProps {
  setGender: (gender: string) => void;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}

const CatalogFilter: FC<IProps> = ({ setGender }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    // Устанавливаем начальные значения для полей формы.
    defaultValues: {
      startPrice: 0,
      endPrice: 99999,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);
    // Вызываем асинхронный экшен `fetchSneakers`, передавая ему объект с параметрами фильтрации:
    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
  };

  return (
    <CatalogFilterStyle
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3>Подбор по параметрам</h3>
      </div>
      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter setValue={setValue} />
      <SizesFilter setValue={setValue} />
      <button className="btn2" type="submit" onClick={() => dispatch(getBaseLimit())}>
        Применить
      </button>
      <button className="btn3"
        type="reset"
        onClick={() =>
          onSubmit({ startPrice: 0, endPrice: 99999, gender: "", sizes: [0] })
        }
      >
        Сбросить
      </button>
    </CatalogFilterStyle>
  );
};

const CatalogFilterStyle = styled.form`
  background: var(--sec-bg);
  border-radius: 4px;
  width: max-content;
  padding: 15px 15px 20px;
  max-width: 280px;
  height: fit-content;
  background-color: var(--light);
  radius: 4px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfiled;
    -moz-appearance: textfield;
    background-color: var(--sec-bg);
  }

  h3 { margin-bottom: 15px; }
  p { margin-bottom: 6px; }

  button[type="submit"] {
    padding: 22px 48px;
    width: 100%;
    margin-bottom: 20px;
  }

  button[type="reset"] {
    width: 100%;
    text-transform: lowercase;
    border: 0;
    padding: 0;
    height: 0;

    &:hover {
      color: var(--accent);
    }
  }

  @media (max-width: 810px) {
    transition: all 200ms linear;
    z-index: 2;

    &.open {
      left: 20px;
    }
  }
`;

export default CatalogFilter;
