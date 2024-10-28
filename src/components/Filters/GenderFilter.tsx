import { FC } from "react";
import styled from "styled-components";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "./CatalogFilter";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const GenderFilter: FC<IProps> = ({ setValue }) => {
  return (
    <GenderFilterStyle>
      <p>Пол</p>
      <div className="filter">
        {genders.map((gender) => (
          <div key={gender.label}>
            <input
              type="radio"
              id={gender.label}
              name="gender"
              onChange={() => setValue("gender", gender.value)}
            />
            <label htmlFor={gender.label}>{gender.value}</label>
          </div>
        ))}
      </div>
    </GenderFilterStyle>
  );
};

const GenderFilterStyle = styled.div`
  margin-bottom: 20px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    input {
      visibility: hidden;
      position: absolute;
    }

    label {
      position: relative;
      height: 24px;
      padding-left: 34px;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      font-family: "Intro", Book;
      color: var(--text);

      &::before {
        content: "";
        width: 24px;
        height: 24px;
        border: 1px solid rgb(219, 187, 169);
        border-radius: 4px;
        position: absolute;
        left: 0;
      }
    }

    input:checked + label::before {
      background: url("../public/icons/check.svg") no-repeat center;
    }
  }
`;

export default GenderFilter;
