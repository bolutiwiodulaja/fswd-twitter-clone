import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTweet: "",
      username: "",
      tweets: []
    }

  }

  componentDidMount() {
    fetch()
    .then((response) => {return response.json()})
    .then((data) => {
      this.setState({
          postTweet: data.postTweet,
          username: data.username,
          tweets: data.tweets
      })

    })
  }

  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  postTweet = () => {
    fetch( {
      method: 'POST',
      body: JSON.stringify({tweet: this.state})
    })
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
    const { username, postTweet, tweets } = this.state;
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
                    <input className="userTweet" type="text" name="tweet" placeholder="Write Tweet Here" value={ postTweet } onChange={this.changeHandler} />
                    <button className="register" type="submit">Post Tweet</button>
                  </form>
              </div>
      </React.Fragment>
    )
  }
}

export default Profile;