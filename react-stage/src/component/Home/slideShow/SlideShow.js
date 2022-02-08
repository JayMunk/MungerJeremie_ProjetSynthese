import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import { Fade } from 'react-slideshow-image'
import './SlideShow.css'
import allerRetour from '../../../assets/images/aller-retour.jpg'
import courseBarils from '../../../assets/images/course-barils.jpg'
import tourRing from '../../../assets/images/tour-ring.jpg'

const SlideShow = () => {

  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={allerRetour} />
            </div>
            <p>Aller retour</p>
          </div>
          <div className="each-fade">
            <p>Course de barils</p>
            <div>
              <img src={courseBarils} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={tourRing} />
            </div>
            <p>Tour de ring</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default SlideShow