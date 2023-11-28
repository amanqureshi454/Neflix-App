import React from "react";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <>
      <section id="header-logo">
        <div className="header">
          <div className="nav h-[50px] w-full px-36 flex justify-between items-center">
            <div className="logo_home">
              <img id="logo" src="logo.png" title="Netflix" />
            </div>
            <div className="login-btns">  
              <select id="language" className="mr-[10px]">
                <option value="English">English</option>
              
                <option value="தமிழ்">தமிழ்</option>
              </select>
              <Link
                to="/signin"
                id="signin"
                type="button"
                onclick="alert('vanakam da mapala madurai la irruthu!!!!')"
              >
                Log in
              </Link>
            </div>
          </div>
          <div className="headercontent flex justify-center items-center flex-col">
            <h1>Unlimited movies, TV shows and more</h1>
            <p className="p1">Watch anywhere. Cancel anytime.</p>
            <p className="p2">
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </p>
            <div className="email-box mt-6">
              <input type="text" placeholder="Email address" id="searchbox" />
              <Link to="/signin" id="start" type="button">
                Get Start
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="linetop"></div>
      <section className="feature_1 px-40 flex justify-between items-center">
        <div className="left-feature">
          <h1 id="feature1_h1">Enjoy on your TV</h1>
          <p id="downloadshow1">
            Watch on smart TVs, PlayStation, Xbox, Chromecast,
            <br /> Apple TV, Blu-ray players and more.
          </p>
        </div>
        <div className="right-feature">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_LOehFGnfxVd61gwvul-x74eVrqdLg9Bwg&usqp=CAU"
            alt=""
          />
        </div>
      </section>

      <div id="line1"></div>

      <section className="feature_1 flex justify-between items-center px-40">
        <div className="right-feature">
          <img
            src="https://images.tv9hindi.com/wp-content/uploads/2022/06/netflix-child-lock.jpg"
            alt=""
          />
        </div>
        <div className="left-feature left_img text-right">
          <h1 id="feature1_h1">
            Download your shows <br />
            to watch offline
          </h1>
          <p id="downloadshow1">
            Save your favourites easily and always have something
            <br /> to watch.
          </p>
        </div>
      </section>

      <div id="line1"></div>
      <section className="feature_1 px-40 flex justify-between items-center">
        <div className="left-feature">
          <h1 id="watcheverywhere">Watch everywhere</h1>
          <p id="watcheverywhere1">
            Stream unlimited movies and TV shows on your
            <br /> phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="right-feature">
          <img
            src="https://images.tv9hindi.com/wp-content/uploads/2022/06/Child-lock-.jpg"
            alt=""
          />
        </div>
      </section>
      <div id="line1"></div>
      <section className="feature_1 px-40 flex justify-between items-center">
        <div className="right-feature">
          <img
            src="https://occ-0-2087-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <div className="left-feature text-right left_img">
          <h1 id="downloadshow">Create profiles for kids</h1>
          <p id="downloadshow1">
            Send children on adventures with their favourite
            <br /> characters in a space made just for them—free with
            <br />
            your membership..
          </p>
        </div>
      </section>
      <div id="linebottom"></div>

      <section className="frequently asked qns">
        <div className="faq">
          <h1> Frequently Asked Questions</h1>
          <ul className="accordion">
            <li>
              <input type="radio" name="accordion" id="first" />
              <label for="first">What is Netflix</label>
              <div className="content">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordion" id="second" />
              <label for="second">How Much Netflix Cost</label>
              <div className="content">
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device,
                  <br />
                  all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649
                  a month. No extra costs, no contracts.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordion" id="third" />
              <label for="third">Where I can Watch?</label>
              <div className="content">
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordion" id="four" />
              <label for="four">How Do I Cancel</label>
              <div className="content">
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordion" id="five" />
              <label for="five">Where I can Watch?</label>
              <div className="content">
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime,
                  <br /> award-winning Netflix originals, and more. Watch as
                  much as you want, anytime you want
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="bottom mt-8 flex justify-center gap-5 items-center flex-col">
        <h3 id="ready">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <input type="text" placeholder="Email address" id="searchbox2" />
        <button id="start2" type="button">
          Get Start
        </button>
      </div>

      {/* <div id="linebottom"></div> */}
    </>
  );
};

export default Main;
