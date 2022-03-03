import React, { Component } from 'react'
import "./CSS/homepage.css"
class Login extends Component {
    state = {  } 
    render() { 
        return (<div>
            <form onSubmit={this.handleSubmit}>
                            <h1 class="one">Login</h1>
                            <label class='two'>Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} /><br />
                            <br></br>
                            <label class='three'>Email id:</label> <input type="text" value={this.state.Emaild} onChange = {this.Emailidhandler} /><br />
                            <br></br>
                           <label class='four'> Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} /><br />
                            <br></br>
                           <center><input name="submit" type="submit"  value="Login" /></center>
                        </form>
        </div>);
    }
}
 
export default Login;