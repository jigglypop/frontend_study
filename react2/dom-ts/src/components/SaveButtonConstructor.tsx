import React,{Component,MouseEvent} from 'react'


class SaveButtonConstructor extends Component{
    constructor(props:()=>{}){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event:MouseEvent<HTMLButtonElement>){
        console.log(this,event)
    }
    render(){
        return(
            <div>
                <button onClick={this.handleSave}>SaveButtonConstructor</button>
            </div>
        )
    }
}
export default SaveButtonConstructor