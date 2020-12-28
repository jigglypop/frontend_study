import React, {MouseEvent, Component} from 'react'


export class SaveButton extends Component {
    handleClick(event: MouseEvent<HTMLButtonElement>) {
        console.log(this,event)
    }
    render() {
        return <button onClick={this.handleClick.bind(this)}>
            SaveButton
        </button>
    }
}
export default SaveButton;