import React from "react"
import danki_bg from "../resource/danki_bg.jpg"

const FeedPost = (props) => {
    return(
        <div>
            <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPost__profile">
                    <img src={danki_bg} />
                    <h3>{props.nome}<br /><span>{props.horario}</span></h3>
                    
                </div>


                <div className="feedPost__content">
                    <p>{props.conteudo}</p>

                    <img src={props.img} />
                </div>

            </div>
            </div>
        </div>
    )
}
export default FeedPost