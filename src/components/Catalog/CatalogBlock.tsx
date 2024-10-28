import { useState } from "react";
import styled from "styled-components";
import CatalogFilter from "../Filters/CatalogFilter";
import CatalogItems from "./CatalogItems";
import "swiper/css";

const Catalog = () => {
  const [gender, setGender] = useState<string>("");
  return (
      <CatalogBlockStyle id="catalog">
        <div className="container">
          <h2>Каталог</h2>
          <div className="content">
            <CatalogFilter setGender={setGender} />
            <CatalogItems gender={gender} />
          </div>
        </div>
      </CatalogBlockStyle>
  );
}
const CatalogBlockStyle = styled.section`
  margin-bottom: 60px;
  padding-top: 60px;
  position: relative;

  .content {
    display: flex;
    gap: 20px;
  }

  h2 {
    margin-bottom: 40px;
  }

  .lines {
    display: none;
    flex-direction: column;
    gap: 5px;

    span {
      width: 30px;
      height: 5px;
      display: inline-block;
      background-color: var(--bg);
    }
  }

  @media (max-width: 810px) {
  
    .content { flex-direction: column; }

    .lines {
      display: flex;
      z-index: 3;
      span {
        transition: all 300ms linear;
      }
    }

    .lines-open {
      span:first-child {
        transform: rotate(-45deg) translate(-6px, 8px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(45deg) translate(-6px, -8px);
      }
    }
  }
`;
export default Catalog;