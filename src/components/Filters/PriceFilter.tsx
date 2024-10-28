import Nouislider from "nouislider-react";
import { FC } from "react";
import styled from "styled-components";
import "nouislider/distribute/nouislider.css";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormData } from "./CatalogFilter";

interface IProps  {
  setValue: UseFormSetValue<IFormData>;
  register: UseFormRegister<IFormData>;
}

const PriceFilter: FC<IProps> = ({ register, setValue }) => {
  return (
    <PriceFilterStyle>
      <p>Цена, руб</p>
      <div className="filter">
        <input className="p-style" type="number" min={0} max={99999} {...register("startPrice")} />
        <input className="p-style" type="number" min={0} max={99999} {...register("endPrice")} />
        <Nouislider
          range={{ min: 0, max: 99999 }}
          start={[0, 99999]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setValue("startPrice", Math.round(start));
            setValue("endPrice", Math.round(end));
          }}
        />
      </div>
    </PriceFilterStyle>
  );
};

const PriceFilterStyle = styled.div`
  color: var(--text);
  font-size: 16px;
  margin-bottom: 29px;

  .filter {
    border: 1px solid rgba(178, 181, 187, 1);
    border-radius: 4px;
    width: 100%;
    padding: 17px 0;
    position: relative;
    

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 0.5px;
      height: 34px;
      background-color: rgba(178, 181, 187, 1);
    }

    input {
      max-width: 120px;
      text-align: center;
      border: 0;
      width: 50%;
    }
  }

  .noUi {
    &-target {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      background: none;
      border: none;
    }

    &-horizontal {
      height: 4px;
    }

    &-connect {
      background: #444b58;
    }

    &-handle {
      width: 6px;
      height: 20px;
      background-color: #444b58;
      box-shadow: none;
      border: none;
      top: -8px;
      right: -3px;

      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export default PriceFilter;
