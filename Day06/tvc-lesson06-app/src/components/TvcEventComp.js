import React from 'react'

export default function TvcEventComp() {

    const tvc_Func1 = ()=>{
        alert("Xin chào")
    }
    const tvc_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={tvc_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={tvc_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>tvc_Func2('Chung Trịnh')}>Click Here Param</button>

        </div>
    )
}
