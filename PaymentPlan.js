import React from 'react'

import './PaymentPlan.css'

const PaymentPlan = (props) => {
  return (
    <div className="payment-plan-container">
      <div data-role="Header" className="payment-plan-navbar-container">
        <div className="payment-plan-navbar">
          <span className="Card-Heading payment-plan-heading">Logo</span>
          <div className="payment-plan-links-container">
            <span className="payment-plan-link Navbar-Link">About</span>
            <span className="payment-plan-link1 Navbar-Link">Experience</span>
            <span className="payment-plan-link2 Navbar-Link">Portofolio</span>
            <span className="payment-plan-link3 Navbar-Link">Contact</span>
          </div>
          <div data-role="BurgerMenu" className="payment-plan-burger-menu">
            <svg viewBox="0 0 1024 1024" className="payment-plan-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="payment-plan-mobile-menu">
            <div className="payment-plan-container01">
              <span className="Card-Heading payment-plan-heading1">Logo</span>
              <div
                data-role="CloseMobileMenu"
                className="payment-plan-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="payment-plan-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="payment-plan-links-container1">
              <span className="payment-plan-link4 Navbar-Link">About</span>
              <span className="payment-plan-link5 Navbar-Link">Experience</span>
              <span className="payment-plan-link6 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-plan-section-separator"></div>
      <div className="payment-plan-section-separator1"></div>
      <div className="payment-plan-section-separator2"></div>
      <div className="payment-plan-pricing">
        <div className="payment-plan-heading-container">
          <h1 className="payment-plan-text">Pricing list</h1>
          <span className="payment-plan-text01">
            This is the list of the prices of all our offers.
          </span>
        </div>
        <div className="payment-plan-pricing-card-container">
          <div className="payment-plan-card">
            <div className="payment-plan-card-heading">
              <span className="payment-plan-type">Minimal</span>
              <span className="payment-plan-price">Basic</span>
            </div>
            <div className="payment-plan-card-content">
              <div className="payment-plan-feature">
                <span className="Card-Text">Feature one</span>
                <span className="payment-plan-limit Card-Text">TBD</span>
              </div>
              <div className="payment-plan-feature1">
                <span className="Card-Text">Feature two</span>
                <span className="payment-plan-limit1 Card-Text">TBD</span>
              </div>
              <div className="payment-plan-feature2">
                <span className="Card-Text">Feature three</span>
                <span className="payment-plan-limit2 Card-Text">UNLIMITED</span>
              </div>
              <div className="payment-plan-feature3">
                <span className="Card-Text">Feature four</span>
                <span className="payment-plan-limit3 Card-Text">UNLIMITED</span>
              </div>
              <button className="payment-plan-choose Anchor button">
                CHOOSE
              </button>
            </div>
          </div>
          <div className="payment-plan-card1">
            <div className="payment-plan-card-heading1">
              <span className="payment-plan-type1">medium</span>
              <span className="Section-Heading">Complex</span>
            </div>
            <div className="payment-plan-card-content1">
              <div className="payment-plan-container02">
                <span className="Card-Text">Feature one</span>
                <span className="payment-plan-text03 Card-Text">TBD</span>
              </div>
              <div className="payment-plan-container03">
                <span className="Card-Text">Feature two</span>
                <span className="payment-plan-text05 Card-Text">TBD</span>
              </div>
              <div className="payment-plan-container04">
                <span className="Card-Text">Feature three</span>
                <span className="payment-plan-text07 Card-Text">UNLIMITED</span>
              </div>
              <div className="payment-plan-container05">
                <span className="Card-Text">Feature four</span>
                <span className="payment-plan-text09 Card-Text">UNLIMITED</span>
              </div>
              <button className="payment-plan-button button Anchor">
                CHOOSE
              </button>
            </div>
          </div>
          <div className="payment-plan-card2">
            <div className="payment-plan-card-heading2">
              <span className="payment-plan-type2">Premium</span>
              <span className="Section-Heading">Professional</span>
            </div>
            <div className="payment-plan-card-content2">
              <div className="payment-plan-container06">
                <span className="Card-Text">Feature one</span>
                <span className="payment-plan-text11 Card-Text">TBD</span>
              </div>
              <div className="payment-plan-container07">
                <span className="Card-Text">Feature two</span>
                <span className="payment-plan-text13 Card-Text">TBD</span>
              </div>
              <div className="payment-plan-container08">
                <span className="Card-Text">Feature three</span>
                <span className="payment-plan-text15 Card-Text">UNLIMITED</span>
              </div>
              <div className="payment-plan-container09">
                <span className="Card-Text">Feature four</span>
                <span className="payment-plan-text17 Card-Text">UNLIMITED</span>
              </div>
              <button className="payment-plan-button1 Anchor button">
                CHOOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-plan-section-separator3"></div>
      <div className="payment-plan-section-separator4"></div>
      <div className="payment-plan-section-separator5"></div>
      <div className="payment-plan-section-separator6"></div>
      <div className="payment-plan-footer-container">
        <div className="payment-plan-footer">
          <div className="payment-plan-social-links">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="payment-plan-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="payment-plan-icon06"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="payment-plan-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="payment-plan-copyright-container">
            <svg viewBox="0 0 1024 1024" className="payment-plan-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="payment-plan-link8 Anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlan
