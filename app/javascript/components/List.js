import React from 'react'
import Button from 'react-bootstrap/Button';

class List extends React.Component {
  render () {
    return (
      <div className="form-div">
          <h4>{this.props.favoriteData.name}</h4>
          <h5>{this.props.favoriteData.description}</h5>
          <ul>
            <Button size="lg" variant="outline-info"  onClick={() => {this.props.handleView('editFavorite', this.props.favoriteData)}} block>edit favorite</Button>
            <Button size="lg" variant="outline-info" onClick={() => {this.props.handleDelete(this.props.favoriteData.id)}} block>delete favorite</Button>
          </ul>
          </div>
    )
  }
}

export default List
