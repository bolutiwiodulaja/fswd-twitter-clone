// layout.jsx
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signinUsername:'',
      signinPassword:'',
      username:'',
      password:'',
      email: '',
      usernames:[],
      passwords:[],
      emails:[]
    };

}

changeHandler = (e) => {
this.setState({[e.target.name]: e.target.value});
};

submitRegistrationHandler = (e) => {
  e.preventDefault();
  this.state.usernames.push(this.state.username);
  this.state.passwords.push(this.state.password);
  this.state.emails.push(this.state.email);
  console.log(this.state);
};


  render() {
    const { username, password, email, signinUsername, signinPassword,  } = this.state
      return (
        <React.Fragment>
              <form>
              <input className="signinUsername" type="text" name="signinUsername" placeholder="username" value={ signinUsername } onChange={this.changeHandler} />
              <input className="signinPassword" type="text" name="signinPassword" placeholder="password" value={ signinPassword } onChange={this.changeHandler} />
              <button className="sign-in">Sign In</button>
              </form>

              <form onSubmit={this.submitRegistrationHandler}>
              <input className="signupUsername" type="text" name="username" placeholder="register username" value={ username } onChange={this.changeHandler} />
              <input className="email" type="text" name="email" placeholder="email" onChange={this.changeHandler} />
              <input className="registerPassword"type="text" name="password" placeholder="register password" value={ password } onChange={this.changeHandler} />
              <button className="register" type="submit">Register</button>
              </form>
          <div className="container py-3">
            {this.props.children}
          </div>
        </React.Fragment>
      );
  };
}


export default Home;