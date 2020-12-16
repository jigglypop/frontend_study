import React, {Component} from 'react'

class EventPractice extends Component {
    state={
        message:''
    }
    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                        type='text' 
                        name='message' 
                        placeholder='내용 입력' 
                        value={this.state.message}
                        onChange={
                            (e) => {
                            this.setState({
                            message: e.target.value
                        })
                    }}
                />
                <h1>{this.state.message}</h1>
                <button onClick={() =>{
                    alert(this.state.message)
                    this.setState({
                        message: ''
                    })
                }}>확인</button>
            </div>
        )
    }
}
export default EventPractice;