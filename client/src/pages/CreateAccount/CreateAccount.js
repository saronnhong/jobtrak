import React, { Component } from 'react';
import API from '../../utils/API';
import "./style.css";

class CreateAccount extends Component {
    state = {
        login: {
            user: "",
            password: "",
            reenterpassword: ""
        }
    }
    createAccountSubmit = () => {
        // console.log(this.state.login.user);
        if(this.state.login.password === this.state.login.reenterpassword){
            API.signUpUser(
                this.state.login.user,
                this.state.login.password
            ).then(() => {
                // alert("New user has been signed up.");
                this.props.history.replace('/login');
            })
        
        }else{
            this.setState({login: { password: "", reenterpassword: "" }})
            alert("The password you entered is incorrect. Please try again.");
        }
    }

    render() {
        const { login } = this.state;
        return (
            <div className="loginContainer z-depth-3">
                <div className="row">
                    <div className="loginTitle">Create New Account</div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="user" type="text" value={login.user} onChange={e => this.setState({ login: { ...login, user: e.target.value } })}/>
                        <label for="user">User</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" value={login.password} onChange={e => this.setState({ login: { ...login, password: e.target.value } })}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password"  value={login.reenterpassword} onChange={e => this.setState({ login: { ...login, reenterpassword: e.target.value } })}/>
                        <label for="password">Re-Enter Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                    <label>
                        <input type="checkbox" />
                        <span>Agree to Terms & Conditions</span>
                    </label>
                    </div>
                </div>
                <div className="row center">
                    <button class="waves-effect btn createAccountBtn hvr-sweep-to-right-login #40c4ff light-blue accent-2" onClick={()=>this.createAccountSubmit()}>Create Account</button>
                </div>
            </div>
        )
    }
}

export default CreateAccount;