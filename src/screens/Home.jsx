import React from "react";
import "../styles/Home.scss";
import HomeCircles from "../components/HomeCircles";

import { mage } from '../images'
import Down from "../components/Down";

import { axe, bow, shovel, pickaxe, creeper } from '../images'

const Home = () => {
  return (
    <div className="home__case">

      <div className="home__case__case" >

        <div className="home__img__case">
          <img className="home__img" src={mage} alt="img" />
          <h2>Let's Mine and Craft</h2>
        </div>

      </div>

          <div className="home__case__mat">
            <div className="home__down">
              <Down />
            </div>

            <div className="home__circle__case" >
              <HomeCircles 
              forImg={axe}
              altTag={'Axe'}
              title={'Axe'}
              text={'Chop some wood'}
              />
              <HomeCircles 
              forImg={bow}
              altTag={'Bow'}
              title={'Bow'}
              text={'Aim some people'}
              />
              <HomeCircles 
              forImg={shovel}
              altTag={'Shovel'}
              title={'Shovel'}
              text={'Bury some bodies'}
              />
              <HomeCircles 
              forImg={pickaxe}
              altTag={'Pickaxe'}
              title={'Pickake'}
              text={'Mine those resources'}
              />
              <HomeCircles 
              forImg={creeper}
              altTag={'Creeper'}
              title={'Creeper'}
              text={'I hate this zombie 😑'}
              />
            </div>
          </div>



    </div>
  );
};

export default Home;
