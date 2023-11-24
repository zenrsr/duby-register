import {Component} from 'react' // Added React import

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: false,
    lastError: false,
    firstMsg: '',
    lastMsg: '',
    submit: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstError: true, firstMsg: 'Required', submit: false})
    }
    if (lastName === '') {
      this.setState({lastError: true, lastMsg: 'Required', submit: false})
    } else {
      this.setState({submit: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  triggerFirstError = event => {
    if (event.target.value === '') {
      this.setState({firstError: true, firstMsg: 'Required'})
    }
  }

  triggerLastError = event => {
    if (event.target.value === '') {
      this.setState({lastError: true, lastMsg: 'Required'})
    }
  }

  triggerNewResponse = () => {
    this.setState({submit: false})
  }

  renderForm = () => {
    const {firstError, lastError, firstMsg, lastMsg} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <label className="first-label" htmlFor="first">
          FIRST NAME
        </label>
        <input
          id="first"
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.triggerFirstError}
          className={firstError ? 'name-input error' : 'name-input'}
        />
        {firstError && <p className="error-msg">{firstMsg}</p>}
        <label className="first-label" htmlFor="last">
          LAST NAME
        </label>
        <input
          id="last"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.triggerLastError}
          className={lastError ? 'error name-input' : 'name-input'}
        />
        {lastError && <p className="error-msg">{lastMsg}</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessfulSubmit = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="tick"
        alt="success"
      />
      <p className="info">Submitted Successfully</p>
      <button
        type="button"
        onClick={this.triggerNewResponse}
        className="submit-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submit} = this.state
    return (
      <div className="container">
        <h1 className="heading">Registration</h1>
        {!submit && this.renderForm()}
        {submit && this.renderSuccessfulSubmit()}
      </div>
    )
  }
}

export default RegistrationForm
