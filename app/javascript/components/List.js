import React from 'react'

class List extends React.Component {
  render () {
    return (
      <article>
        <div className="post-header">
          <h4>{this.props.favoriteData.name}</h4>
        </div>
        <div className="post-body">
          {this.props.favoriteData.description}
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editFavorite', this.props.favoriteData)}}>edit favorite</li>
            <li onClick={() => {this.props.handleDelete(this.props.favoriteData.id)}}>delete favorite</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default List
