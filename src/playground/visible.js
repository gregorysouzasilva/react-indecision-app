class Visibility extends React.Component {
    constructor (props) {
        super(props);
        this.toogle = this.toogle.bind(this);
        this.state = {
            show: false
        };
    }

    toogle() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toogle}>{!this.state.show ? 'Show Details' : 'Hide Details'}</button>
            { this.state.show && (
                <div><p>Details</p></div>
            )
            }
            </div>
        )
    }
}
ReactDOM.render(<Visibility />, document.getElementById('app')); 

// const appRoot = document.getElementById('app');

// let show = false;

// const toggle = () => {
//     show = !show;

//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>{!show ? 'Show Details' : 'Hide Details'}</button>
//         { show && (
//             <div><p>Details</p></div>
//         )

//         }
        
//         </div>
        
//     )

//     ReactDOM.render(template, appRoot); 
// }

// render();


