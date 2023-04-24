import { FaCaretSquareRight } from "react-icons/fa";

import HotStar from '../../assets/hotstar.png';
import Partner from '../../assets/partner.png';
import HotStar1 from '../../assets/hotstar1.png';
import HotStar2 from '../../assets/hotstar2.png';
import HotStar3 from '../../assets/hotstar3.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import { useRef } from 'react';

function MainContainer() {
    const windowWidth = useRef(window.innerWidth);
    return (
        <div className="MainContainer">
            <div className="left-div">
                <h1>
                    FIRST IN THE FAMILY
                </h1>
                <h3>
                    They are the global citizens of
                    tomorrow. Start your study
                    abroad journey today
                </h3>
                <div className="left-para">
                    <FaCaretSquareRight />
                    Live on
                    <img src={HotStar} alt='Hotstar' />
                </div>
                <div className="btn-container">
                    <button className="btn-shortlist">
                        Get Your Shortlist for FREE
                    </button>
                    <button className="btn-call">
                        Talk to an Expert
                    </button>
                    <p>
                        95% of our students get an admit in less than 4 weeks
                    </p>
                </div>
                <div className="left-div-btm">
                    Our students finished university to work at global offices of:
                    <div className="image-container">
                        <img src={Partner} alt='partner' />
                    </div>
                </div>
            </div>
            <div className="right-div">
                <div className="carousel-div">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        autoPlay={true}

                    >
                        <div className="video-player">
                            <ReactPlayer width="100%"
                                height='100%'
                                url='https://www.youtube.com/watch?v=fJwIUclImaM' />
                        </div>
                        <div>
                            <img src={HotStar1} />
                        </div>
                        <div>
                            <img src={HotStar2} />
                        </div>
                        <div>
                            <img src={HotStar3} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;