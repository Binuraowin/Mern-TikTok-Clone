import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter() {
    return(
        <div className="videoFooter">
            <div className="video_footer_text">
                <h3>Binuraowin</h3>
                <p>Description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>
                    <Ticker mode="smooth">
                        {
                            ({index})=>(
                                <>
                                <p>Song</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record"
            src="link"
                 alt="hfghj"
            />



        </div>
    )
}
export default VideoFooter
