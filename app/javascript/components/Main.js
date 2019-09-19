
import React from 'react'

import List from './List.js'
import Create from './Create.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }

  fetchFavorites = () => {
    fetch('/favorites/')
      .then(data => data.json())
      .then(jData => {
        this.setState({ favorites: jData })
      })
  }

  handleCreate = (createData) => {
    fetch('/api/favorites', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdFavorite => {
        return createdFavorite.json()
      })
      .then(jsonedFavorite => {
        this.props.handleView('home')
        this.setState(prevState => {
          prevState.favorites.push(jsonedFavorite)
          return { favorites: prevState.favorites }
        })
      })
      .catch(err => console.log(err))
  }

  handleUpdate = (updateData) => {
    fetch(`/api/favorites/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedFavorite => {
        this.props.handleView('home')
        this.fetchFavorites()
      })
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`/api/favorites/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const favorites = prevState.favorites.filter( favorite => favorite.id !== id)
          return { favorites }
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchFavorites()
  }

  render () {
    return (
      <main>
        { this.props.view.page === 'home'
          ? this.state.favorites.map((favoriteData) => (
            <List
              key={favoriteData.id}
              favoriteData={favoriteData}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}
            />
          ))
          : <Create
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
      </main>
    )
  }
}


export default Main
