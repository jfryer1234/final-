import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'your favorites'
      },
      formInputs: {
        name: null,
        description: null
      }
    }
  }

  handleView = (view, favoriteData) => {
    let pageTitle = ''
    let formInputs = {
      name: '',
      description: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'your favorites'
        break
      case 'addFavorite':
        pageTitle = 'add a favorite'
        break
      case 'editFavorite':
        pageTitle = 'edit favorite'
        formInputs = {
          name: favoriteData.name,
          description: favoriteData.description,
          id: favoriteData.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  render () {
    return (
      <div className="large-container">
        <Header handleView={this.handleView}/>
        <div className="main-container">
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
          />
        <div className="space">
        </div>
        <Footer />
      </div>
      </div>

    )
  }
}

export default App
