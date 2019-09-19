import React from 'react';
import Button from 'react-bootstrap/Button';


class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1 className="title">These are a few of my favorite things...</h1>
        <div className="style">
        <Button size="lg" variant="info" onClick={() => {this.props.handleView('addFavorite')}}>Add a Favorite</Button>
        </div>
      </header>
    )
  }
}


export default Header
