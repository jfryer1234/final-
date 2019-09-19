import React from 'react'

class Create extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      id: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.view.page === 'addFavorite') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editFavorite') {
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      description: this.props.formInputs.description,
      id: this.props.formInputs.id
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="your name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          description
          <input type="text" placeholder="description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="add"/>
      </form>
    )
  }
}

export default Create
