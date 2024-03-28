// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="thumbnail-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="video-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
