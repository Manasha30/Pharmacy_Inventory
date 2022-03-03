import React, { Component } from 'react'
class Register extends Component {
    state = {  } 
    render() {
         this.state = {
        firstName: "",
        lastName: "",
        password: "",
        gender: "",


    }
    this.handleSubmit=this.handleSubmit.bind(this)
}

firsthandler = (event) => {
    this.setState({
        firstName: event.target.value
    })
}
lasthandler = (event) => {
    this.setState({
        lastName: event.target.value
    })
}
passwordhandler = (event) => {
    this.setState({
        password: event.target.value
    })
}

genderhandler = (event) => {
    this.setState({
        gender: event.target.value
    })
}

handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
    console.log(this.state);
    this.setState({
        firstName: "",
        lastName: "",
        password: '',
        gender: "",
    })
 event.preventDefault()
    
}
render(){
        return (<div>
            <form onSubmit={this.handleSubmit}>
                            <h1 class="static">User Registration</h1>
                            <label class="a1">FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} /><br />
                            <br></br>
                            <label class="b1">LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} /><br />
                            <br></br>
                            <label class="c1">Email id:</label> <input type="text" value={this.state.Emaild} onChange = {this.Emailidhandler} /><br />
                            <br></br>
                           <label class ="d1"> Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} /><br />
                            <br></br>
                           <label class="e1">Gender : </label><select onChange={this.genderhandler} defaultValue="Select Gender">
                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select><br />
                            <center><input type="submit" value="Register" /></center>
                        </form>
        </div>);
    }
}
 
export default Register;