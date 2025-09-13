import React, { Component } from 'react';

class TvcEventCompClass extends Component {

    tvc_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    tvc_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.tvc_Func1}>Click</button>
                <button onClick={()=>this.tvc_Func2("Chung trịnh văn")}>Click Param</button>
            </div>
        );
    }
}

export default TvcEventCompClass;