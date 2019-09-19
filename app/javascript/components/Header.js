import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>These are a few of my favorite things...</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>main list</li>
          <li onClick={() => {this.props.handleView('addFavorite')}}>add a favorite</li>
        </ul>
      </header>
    )
  }
}


export default Header
