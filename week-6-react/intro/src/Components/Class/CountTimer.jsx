import {
    Component
} from "react";

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time : props.start
        }
    }

    // Lifecyle
    componentDidMount(){
        this.addInterval = setInterval(() => {
            this.increase()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.addInterval)
    }

    increase(){
        // update state time setiap detik
        this.setState((state, props) => ({
            time : parseInt(state.time) + 1
        }))
    }

    render(){
        return (
            <div>{this.state.time} Detik</div>
        )
    }
}

export default Timer;