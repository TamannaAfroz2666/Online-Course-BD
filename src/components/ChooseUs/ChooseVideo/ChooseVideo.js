import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import videoIntro from '../../../Assets/Videos/IMG_1016.MP4';
import 'react-html5video/dist/styles.css';
import './ChooseVideo.css'
// import { BsSkipStartCircleFill } from "react-icons/bs";
// import PulseBtn from './PulseBtn/PulseBtn';

const ChooseVideo = () => {
    return (
        <div className='videoPart'>
       
            <div className="videoSet">
           
                <Video  className="heroVideo"   loop muted
                 
                onCanPlayThrough={() => {
                  console.log('video is opening');
                }}
                >
                     <source className='iconic'  src={videoIntro} type='video/webm' />

                </Video>
               
                
            </div>

            
        </div>
    );
};

export default ChooseVideo;