import React from "react"
import {FaFacebook, FaSearch, FaAlignJustify} from "react-icons/fa"

const Header = () => {
    return(
        <div className="header">
        <div classsName="headerLeft">
          <div className="logo-fb">
            <FaFacebook />
          </div>
          </div>
        <div className="search-fb">
          <FaSearch />
        </div>
        <div className="menu-fb">
        <FaAlignJustify />
        </div>
        
        <div className="headerRight">
            <div className="plus-btn">
            +
        </div>
        </div>
      </div>
    )
}
export default Header