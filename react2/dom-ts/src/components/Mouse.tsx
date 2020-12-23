import { Component, MouseEvent } from "react";

class Mouse extends Component{
    onMouseOverCapture(event: MouseEvent<HTMLDivElement>) {
        console.log('mouse over on capture event')
        console.log(this,event)
    }
    onMouseOver(event:MouseEvent<HTMLDivElement>){
        console.log('mouse over on bubbling event')
        console.log(this,event)
    }
    render(){
        return(
            <div>
                <div style={{border:'1px solid red'}}
                    onMouseOverCapture={this.onMouseOverCapture.bind(this)}
                    onMouseOver={this.onMouseOver.bind(this)}
                >
                    Open DevTools and move your mouse cursor over here
                </div>
            </div>
        )
    }
}
export default Mouse