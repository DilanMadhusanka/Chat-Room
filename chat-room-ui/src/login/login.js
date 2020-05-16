import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            username: ''
        };
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleConnectPublicly = () => {
        this.props.connect(this.state.username, false)
    }

    render() {
        return (
            <div className="component-Login">
                <TextField
                    id="user"
                    label="Type your username"
                    placeholder="Username"
                    onChange={this.handleUserNameChange}
                    margin="normal"
                />
                <br />
                <Button variant="contained" color="primary" onClick={this.handleConnectPublicly} >
                    Start Chatting
                </Button>
            </div>
        )
    }
}

export default Login