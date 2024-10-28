import styled from "styled-components";
import {navList} from "./Header"

const Footer = () => {

  return (
    <FooterStyle>
      <div className="container">
        <nav>
          <span className="logo">SneakMax</span>
          <ul className="list">
            {navList.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  padding: 30px 0 0;
  color: white;
  background-color: var(--gray);
  height: 50px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
    
  .list{
    display: flex;
    gap: 20px;
  }

  a{
  color: white;
  text-decoration: none;
  }
 
  @media (max-width: 610px) {
   .logo{ display: none; }
   nav { justify-content: center; }
     contain: content
  }
`;

export default Footer;
