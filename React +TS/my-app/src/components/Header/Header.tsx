import "./Header.scss";
import * as React from "react";
import Navigation from "../Navigation/Navigation";
import Aboba from "../../global_components/Aboba/Aboba";

export interface HeaderProps {
  mainText?: string;
}

const Header: React.FC<HeaderProps> = ({ mainText }: HeaderProps) => {
  return (
    <header className='header'>
      <Aboba mainText={mainText} width={200} height={50} />
      <Navigation />
    </header>
  );
};

export default Header;
