// import React from 'react'
// import logo from '../../images/firescriptlogo.png'
// import { Button } from 'reactstrap'
// import { Form, Input } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { login } from '../../actions/loginAction'

// class Login extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       credentials: {
//         username: '',
//         password: '',
//       }
//     }
//   }

// 	handleInputChange = e => {
// 		this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     })
// 	}

// 	handleLoginSubmit = e => {
//     e.preventDefault()
//     this.props
//       .login(this.state.credentials)
//       .then(() => this.props.history.push('/protected'))
//   }

//   render() {

//     return (

//       <div className='landing-wrapper'>

//         <Link to='/'>
//           <img src={logo} className='app-logo' alt='logo' />
//           <h1 className='heading'>FireScript</h1>
//         </Link>

//         <div className='headline'>
//           <h4>Please log-in here!</h4>
//         </div>
//         <Form>

//           <Input
//             type="text"
//             placeholder="User Name"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleInputChange}
//           />

//           <Input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleInputChange}
//           />

//           <Button
//             className='red-btn'
//             onClick={this.handleLoginSubmit}>
//             Log in
//           </Button>
//         </Form>
//       </div>
//     )
//   }
// }

// export default connect(
//     null,
//     { login }
// )(Login)