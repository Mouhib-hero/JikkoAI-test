import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

import Fade from 'react-reveal/Fade';

import "animate.css/animate.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const dashboard = () => {
  console.log("dashboard");
  window.location.href='/dashboard';
     }

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="Card-Heading home-heading">Logo</span>
          <div className="home-links-container">
            <a href ="/"><span className="home-link Navbar-Link">Home</span></a>
            <span className="home-link1 Navbar-Link">Tutorial</span>
            <a href ="/contact"><span className="home-link2 Navbar-Link">Contact</span></a>
            <a href ="/logout"><span className="home-link3 Navbar-Link">Logout</span></a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Navbar-Link">Home</span>
              <span className="home-link5 Navbar-Link">Tutorial</span>
              <span className="home-link6 Navbar-Link">Contact</span>
              <span className="Navbar-Link">Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container02">
        
      <AnimationOnScroll animateIn="animate__fadeInDown"><Fade bottom> <div className="home-container03">
          <div className="home-container04">
            <div className="home-container05">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxlbnRyZXByaXNlJTIwbG9nb3xlbnwwfHx8fDE2NzQyODIzMjI&amp;ixlib=rb-4.0.3&amp;w=400"
                className="home-image"
              />
            </div>
            <a href="/editprofile"><button className="home-cta-btn button Anchor">Edit Profile</button></a>
          </div>
          <div className="home-container06">
            <span className="home-text">
              <span className="home-text01">- Name :</span>
              <span> Entreprise_Name</span>
            </span>
            <div className="home-container07">
              <div className="home-container08">
                <div className="home-container09">
                  <div className="home-container10">
                    <span>
                      Entreprise description
                    </span>
                  </div>
                  <div className="home-container11">
                    <div className="home-container12">
                      <div className="home-container13">
                        <button className="home-cta-btn1 Anchor button">
                        <span className="home-text04">Facebook</span>
                        </button>
                        <button className="home-cta-btn2 Anchor button">
                          <span className="home-text05">Instagram</span>
                        </button>
                        <button className="home-cta-btn3 Anchor button">
                          <span className="home-text06">LinkedIn</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-hero">
                <div className="home-hero-text-container">
                  <div className="home-cta-btn-container"></div>
                </div>
                <h1 className="home-heading2">
                Your entreprise has used our service **** times.
                </h1>
              </div>
              <h1 className="home-heading3">
                <span>
                  Payment state :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text08">Pending.</span>
              </h1>
            </div>
            <AnimationOnScroll animateIn="animate__jello"><button onClick={dashboard} className="home-button button Anchor">
              Dashboard (payment page)
            </button></AnimationOnScroll>
          </div>
          </div></Fade></AnimationOnScroll>
      </div>
      
      <AnimationOnScroll animateIn="animate__fadeInLeft"><Fade bottom><div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text09 Section-Heading">Statistics</h2>
          <span className="home-text10">
            <span className="home-text11">
              These numbers mean a lot to us, as well as to you
            </span>
            <br className="home-text12"></br>
            <span className="home-text13">You joined our service at ***</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-icon-container">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon04"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-content-container">
              <span className="home-heading4 Card-Heading">
                *** Predictions
              </span>
              <span className="home-text15">
                How many times we generated predictions for you after your
                request with your data
              </span>
            </div></AnimationOnScroll>
          </div>
          <div className="home-card1">
          <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-content-container1">
              <span className="home-heading5 Card-Heading">
                *** Evaluation requests
              </span>
              <span className="home-text16">
                How many times you asked our team of experts to examine your
                prediction
              </span>
            </div></AnimationOnScroll>
          </div>
          <div className="home-card2">
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-content-container2">
              <span className="home-heading6 Card-Heading">
                *** Sales improvement plan request
              </span>
              <span className="home-text17">
                <span>
                  How many times you asked us to perform a plan according to the
                  predictions made in order to improve your sales
                </span>
                <br></br>
              </span>
            </div></AnimationOnScroll>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounce"><button className="home-button1 button Anchor">
          Check full statistics review
        </button></AnimationOnScroll>
      </div></Fade></AnimationOnScroll>
      <div className="home-section-separator2"></div>
      <div className="home-pricing">
        <div className="home-heading-container1">
          <h1 className="home-text20">Pricing list</h1>
          <span className="home-text21">
            This is the list of the prices of all our offers.
          </span>
        </div>
        <div className="home-pricing-card-container">
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-card3">
            <div className="home-card-heading">
              <span className="home-type">Minimal</span>
              <span className="home-price">Basic</span>
            </div>
            <div className="home-card-content">
              <div className="home-feature">
                <span className="Card-Text">Feature one</span>
                <span className="home-limit Card-Text">TBD</span>
              </div>
              <div className="home-feature1">
                <span className="Card-Text">Feature two</span>
                <span className="home-limit1 Card-Text">TBD</span>
              </div>
              <div className="home-feature2">
                <span className="Card-Text">Feature three</span>
                <span className="home-limit2 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-feature3">
                <span className="Card-Text">Feature four</span>
                <span className="home-limit3 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-choose button Anchor">CHOOSE</button>
            </div>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-card4">
            <div className="home-card-heading1">
              <span className="home-type1">medium</span>
              <span className="Section-Heading">Complex</span>
            </div>
            <div className="home-card-content1">
              <div className="home-container16">
                <span className="Card-Text">Feature one</span>
                <span className="home-text23 Card-Text">TBD</span>
              </div>
              <div className="home-container17">
                <span className="Card-Text">Feature two</span>
                <span className="home-text25 Card-Text">TBD</span>
              </div>
              <div className="home-container18">
                <span className="Card-Text">Feature three</span>
                <span className="home-text27 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container19">
                <span className="Card-Text">Feature four</span>
                <span className="home-text29 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button2 Anchor button">CHOOSE</button>
            </div>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-card5">
            <div className="home-card-heading2">
              <span className="home-type2">Premium</span>
              <span className="Section-Heading">Professional</span>
            </div>
            <div className="home-card-content2">
              <div className="home-container20">
                <span className="Card-Text">Feature one</span>
                <span className="home-text31 Card-Text">TBD</span>
              </div>
              <div className="home-container21">
                <span className="Card-Text">Feature two</span>
                <span className="home-text33 Card-Text">TBD</span>
              </div>
              <div className="home-container22">
                <span className="Card-Text">Feature three</span>
                <span className="home-text35 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container23">
                <span className="Card-Text">Feature four</span>
                <span className="home-text37 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button3 Anchor button">CHOOSE</button>
            </div>
          </div></AnimationOnScroll>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <AnimationOnScroll animateIn="animate__flipInY"><div className="home-faqs">
        <h2 className="home-text38 Section-Heading">
          Answers to the most common questions
        </h2>
        <div className="home-content-container3">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer2 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer4 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div></AnimationOnScroll>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <div className="home-container24">
          <AnimationOnScroll animateIn="animate__fadeInLeft"><h1 className="home-text39">Towards success !</h1></AnimationOnScroll>
        </div>
        <div className="home-container25">
          <div className="home-heading-container2">
            <AnimationOnScroll animateIn="animate__fadeInRight"><h1 className="home-text40 Section-Heading">
              Get our guide to master predictions for your entreprise
            </h1></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight"><span className="home-text41">
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
              Subscribe below if you&apos;re interested !
            </span></AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__bounceIn"><input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button4 Anchor button">SEND</button></AnimationOnScroll>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link8 Anchor">Copyright, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
