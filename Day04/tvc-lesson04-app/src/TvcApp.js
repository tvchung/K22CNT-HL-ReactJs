import React, { Component } from 'react';
import TvcFuncComp from './components/TvcFuncComp';
import TvcClassComp from './components/TvcClassComp';
import TvcrRenderList from './components/TvcrRenderList';
import TvcListStudent from './components/TvcListStudent';

class TvcApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1>Trịnh Văn Chung</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <TvcFuncComp />
        <hr/>
        <TvcFuncComp fullName="Chung Trịnh" address="FitNTU" email="chungtrinhj@gmail.com"></TvcFuncComp>

        <TvcClassComp />
        <TvcClassComp name="Chung Chung" age="47" phone = "0978611889" email="chungtrinhj@gmaill.com"></TvcClassComp>

        <hr/>
        <TvcrRenderList />
        <hr/>
        <TvcListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default TvcApp;