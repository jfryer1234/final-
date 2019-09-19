import React from 'react'
import Button from 'react-bootstrap/Button';

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
      <div className="form-div">
      <form onSubmit={this.handleSubmit}>
        <label>
          What is your new favorite thing?...
          <input type="text" placeholder="name / type" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          Write a description...
          <input type="text" placeholder="describe it here" id="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <br />
        <Button size="lg" variant="outline-info" type="submit" block>Add</Button>
      </form>
    </div>
    )
  }
}

export default Create
