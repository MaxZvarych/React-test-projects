/* eslint-disable @typescript-eslint/no-empty-interface */
import "./Home.scss";
import { Link } from "react-router-dom";
import * as React from "react";
import { Button } from "antd";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='home'>
      <h1>We Are Awesome Creative Agency</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, soluta
        earum eaque laboriosam exercitationem alias a. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Porro, soluta earum eaque laboriosam
        exercitationem alias a. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Porro, soluta earum eaque laboriosam exercitationem
        alias a.
      </p>
      <Button ghost>
        <Link to='/about'> Learn More</Link>
      </Button>
    </div>
  );
};

export default Home;
