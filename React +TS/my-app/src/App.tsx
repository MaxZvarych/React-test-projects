import React, { useRef } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import client from "./apollo/apollo-client";
import { gql } from "@apollo/client";

export interface isCurrent {
  current: number;
}

function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  let timerId: NodeJS.Timeout;
  const onChange = (page: any) => {
    console.log(page);
    setCurrent(page);
    clearTimeout(timerId);
  };

  const [current, setCurrent] = useState<number>(1);

  // const changeCurrent = function () {};

  useEffect(() => {
    timerId = setTimeout(() => {
      if (current > 0 && current < 5) {
        setCurrent(current + 1);
      } else if (current === 5) {
        setCurrent(1);
      }
    }, 3000);
    const div = ref.current!;
    div.className = `bg-${current}`;
    div.className += " routeWrapper";
  }, [current]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query ExampleQuery {
            countries {
              name
              cities {
                name
              }
              population
            }
          }
        `,
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='App'>
      <div ref={ref} className='routeWrapper bg-1'>
        <div className='wrapper'>
          <Router>
            <Header mainText='Masyanya'></Header>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <div className='field'>about</div>
              </Route>
              <Route path='/users'>
                <div>{current}</div>
              </Route>
            </Switch>
          </Router>
          {/* <button onClick={changeCurrent}>222</button> */}
          <Pagination
            className='pagination'
            current={current}
            onChange={onChange}
            total={50}
          />
        </div>
      </div>

      <Footer mainText='Aboba' />
    </div>
  );
}

export default App;
