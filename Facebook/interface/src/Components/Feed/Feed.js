import React from "react"
import danki_bg from "../resource/danki_bg.jpg"
import { AiFillVideoCamera, AiOutlineFileImage, AiFillMeh } from "react-icons/ai"

const Feed = () => {
    return(
        <div>
            <div className="feed">
                <div className="feedForm">
                <img src={danki_bg} />
                <input
                placeholder="No que você está pensando?"
                type={"text"}
                />
                </div>
                <div className="feedIcons">
                    <div className="iconSingle">
                    <AiFillVideoCamera />
                    <span>Vídeo ao vivo</span>
                    </div>

                    <div className="iconSingle img">
                    <AiOutlineFileImage />
                    <span>Fotos</span>
                    </div>

                    <div className="iconSingle emoji">
                    <AiFillMeh />
                    <span>Reações</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Feed