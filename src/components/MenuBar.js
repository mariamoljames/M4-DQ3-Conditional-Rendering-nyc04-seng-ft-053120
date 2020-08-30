import React from 'react'

const MenuBar = (props) => {

let handleOnClick = (event) => {
  props.changeSelectedItem(event.target.id)
}

let setActive = (itemName) => {
  return props.selectedItem === itemName? 'active' : ''
}
  
return (
    <div className="ui four item menu">
      <a className={`item ${setActive('profile')}`} id="profile" onClick={handleOnClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={`item ${setActive('photo')}`}  id="photo" onClick={handleOnClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={`item ${setActive('cocktail')}`}  id="cocktail" onClick={handleOnClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={`item ${setActive('pokemon')}`}  id="pokemon" onClick={handleOnClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
