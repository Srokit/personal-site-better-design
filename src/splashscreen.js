import './splashscreen.css';
import profPic from './images/prof-pic.jpg';

const SplashScreen = () => {
  return (
    <div className="splashscreen-container">
      <div className="splashscreen-bg-top"></div>
      <div className="splashscreen-bg-bottom"></div>
      <div className="ss-main-area">
        <div className="prof-pic">
          <div className="prof-pic-circular-border"></div>
          <img src={profPic} />
        </div>
        <div className="prompt1 prompt prompt-g">
          <p>Hi! I'm Stan.</p>
        </div>
        <div className="prompt2 prompt prompt-b">
          <p>I'm a developer.</p>
        </div>
        <div className="prompt3 prompt prompt-g">
          <p>Here's work I've done so far...</p>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen;
