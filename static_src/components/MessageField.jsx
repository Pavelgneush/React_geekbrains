import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from './Message';
import '../styles/style.css'

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focus();
    }

    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
    inputName: '',
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
        }
    }

    handleSendMessage = () => {
        this.setState({ messages: [ ...this.state.messages, {text: this.state.input, sender: 'me'} ],
        input: '',
        });
    };
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleKeyUp = (e) =>{
        if (e.keyCode === 13) {
            this.handleSendMessage()
        }
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

        return <div className="layout">
        <div className='message-field'>
            { messageElements }
            <div style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    ref={ this.textInput }
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleInput }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />
                <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input) }>
                    <SendIcon />
                </FloatingActionButton>
                </div>
            </div>
        </div>
    }
}

