import React, { Component } from 'react'
class Login extends Component {
    state = {  } 
    render() { 
        return (<div>
            <form onSubmit={this.handleSubmit}>
                            <h1>Login</h1>
                            <label>Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} /><br />
                            <br></br>
                            <label>Email id:</label> <input type="text" value={this.state.Emaild} onChange = {this.Emailidhandler} /><br />
                            <br></br>
                           <label> Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} /><br />
                            <br></br>
                           <input type="submit" value="Submit" />
                        </form>
        </div>);
    }
}
 
export default Login;