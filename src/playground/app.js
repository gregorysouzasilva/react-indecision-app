class Indecisionapp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: this.props.options
        }
        
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState (() => ({options}));
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions () {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }
    handlePick () {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option)
    }
    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    render () {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length} handlePick={this.handlePick}/>
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
    </div>
        )
    }
}

Indecisionapp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => <Option key={option} optionText={option}  handleDeleteOption={props.handleDeleteOption}/>)
            }
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
        
    )
}

const Option = (props) => {
    return (
        <div>{props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onSubmit (e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error: error}));
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}                
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Indecisionapp options={['a','b']}/>, document.getElementById('app'));