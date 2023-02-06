import React from 'react';
import { safeCredentials } from './utils/fetchHelper';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTweet: "",
      username: "",
      tweets: []
    }

  }

  componentDidMount() {
    fetch()
    .then((response) => {return response.json()})
    .then((data) => {
      this.setState({
          newTweet: data.newTweet,
          username: data.username,
          tweets: data.tweets
      })

    })
  }

  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  postTweet = (e) => {
    e.preventDefault();

    fetch('/api/tweets', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        tweet: {
          message: this.state.newTweet
        }
      })
    }))
    .then(data => {
      this.setState({
        tweets: [data.tweet, ...this.state.tweets]
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  render() {
    const { username, newTweet, tweets } = this.state;
    return (
      <React.Fragment>
              <div>
                  <h4>{username}</h4>
              </div>

              <div className="card" >
                  <p>{tweets}</p>
              </div>

              <div>
                  <form onSubmit={this.postTweet}>
                    <input className="userTweet" type="text" name="newTweet" placeholder="Write Tweet Here" value={ newTweet } onChange={this.changeHandler} />
                    <button className="register" type="submit">Post Tweet</button>
                  </form>
              </div>
      </React.Fragment>
    )
  }
}

export default Profile;