import React, {Component,createRef} from 'react';

class RefSample extends Component{
    private myRef = React.createRef<HTMLDivElement>();
    // handleFocus = () => {
    //     this.input.current;
    // }
    render(){
        return (
            <div ref={this.myRef}>
            </div>
        )
    }
}
export default RefSample