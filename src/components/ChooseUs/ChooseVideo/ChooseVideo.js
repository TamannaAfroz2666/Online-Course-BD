import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import videoIntro from '../../../Assets/Videos/IMG_1016.MP4';
import 'react-html5video/dist/styles.css';

const ChooseVideo = () => {
    return (
        <div className='videoPart'>
            <h1>Video here</h1>
            <div className="videoSet">
                <Video autoPlay loop 
                onCanPlayThrough={() => {
                  console.log('video is opening');
                }}
                >
                     <source src={videoIntro} type='video/webm' />

                </Video>
               
                
            </div>

            
        </div>
    );
};

export default ChooseVideo;