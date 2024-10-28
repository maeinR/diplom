import { useState } from "react";
import About from "./components/About"
import CatalogBlock from "./components/Catalog/CatalogBlock"
import Header from "./components/Header"
import Selection from "./components/Selection"
import TeamBlock from "./components/Team/TeamBlock"
import Hero from "./components/Hero"
import FAQ from "./components/FAQ"
import Contacts from "./components/Contacts"
import Questions from "./components/Questions"
import Footer from "./components/Footer"
import BasketBlock from "./components/Basket/BasketBlock";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

  const isOpenCallback = () => {
    setIsOpen(!isOpen);
  };

  const isBasketOpenCallback = () => {
    setIsBasketOpen(!isBasketOpen)
  }

  return (
    <>
      <Header 
      isOpen={isOpen}
      setIsOpen={isOpenCallback}
      setIsBasketOpen={isBasketOpenCallback}
      />
      {isBasketOpen && <BasketBlock setIsBasketOpen={isBasketOpenCallback} />}
      <Hero />
      <CatalogBlock />
      <About />
      <Selection />
      <TeamBlock />
      <FAQ />
      <Contacts />
      <Questions />
      <Footer />
    </>
  )
}

export default App
