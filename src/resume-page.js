import './resume-page.css';
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import samsungLogo from './images/samsung_logo.png';
import crosLogo from './images/cros_logo.png'
import andLogo from './images/and_logo.png'

const ResumePage = () => {
  return (
    <div className="resumePage">
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <div className="resumeCard">
          <img className="resumeCardLogo samsungLogo" src={samsungLogo} />
          <div className="resumeCardTitle">
            Samsung Research America | Senior Software Engineer
          </div>
          <div className="resumeCardSummary">
            Built C++ native service that calculates
            hand position and body poses using camera data.
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="resumeCard">
          <img className="resumeCardLogo crosLogo" src={crosLogo} />
          <div className="resumeCardTitle">
            ChromeOS (Google) | Software Engineer
          </div>
          <div className="resumeCardSummary">
          Developed asynchronous system to allow faster framerate
          while drawing frames on CrOS machines.
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="resumeCard">
          <img className="resumeCardLogo andLogo" src={andLogo} />
          <div className="resumeCardTitle">
            Android (Google) | Software Engineer
          </div>
          <div className="resumeCardSummary">
          Created hardware abstraction layer for sensors that
          allowed third-party developers to easily integrate into Android.
          </div>
        </div>
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default ResumePage;
