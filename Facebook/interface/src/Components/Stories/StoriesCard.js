import React from "react"
import danki_bg from "../resource/danki_bg.jpg"
import tom from "../resource/tom.png"
import Zendaya from "../resource/Zendaya.png"
import bullock from "../resource/bullock.jpg"

const StoriesCard = () => {
    return(
        <div>
            <div className="stories">
                <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                    <p>Henri Cavill</p>
                </div>

                <div className="storiesCard" style={{backgroundImage: `url(${tom})`}}>
                    <p>Tom Holland</p>
                </div>

                <div className="storiesCard" style={{backgroundImage: `url(${Zendaya})`}}>
                    <p>Zendaya</p>
                </div>

                <div className="storiesCard" style={{backgroundImage: `url(${bullock})`}}>
                    <p>Sandra Bullock</p>
                </div>

                <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                    <p>Henri Cavill</p>
                </div>
            </div>
        </div>
    )
}
export default StoriesCard