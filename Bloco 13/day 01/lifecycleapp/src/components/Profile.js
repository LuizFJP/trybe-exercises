import { Component } from "react";

class Profile extends Component{
  constructor() {
    super();

    this.state = {

    }
  }

 async () => {
    const myUser = ''; //Preencha myUser com o seu user do GitHub.
    try {
    const url = `https://api.github.com/users/${myUser}`;
    const response = await fetch(url)
    const dataJson = await response.json()
    this.setState({ api: dataJson})
  } catch (error) {
    console.log(error)
  }
  
  componentDidMount(){
    
  }
  }
  
  render() {


}
}
export default Profile;
