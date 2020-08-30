import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedItem: 'profile'
  }

  getPage = () => {
    switch(this.state.selectedItem){
      case 'profile':
        return <Profile/>
      case 'photo':
        return <Photos/>
      case 'cocktail':
        return <Cocktails/>
      case 'pokemon':
        return <Pokemon/>
      default:
        return
    }
  }
  
  changeSelectedItem = (newItem) => {
    this.setState({selectedItem: newItem})
  }

  render() {
    const detailsToDisplay = this.getPage()

    return (
      <div>
        <MenuBar changeSelectedItem={this.changeSelectedItem} selectedItem={this.state.selectedItem}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
