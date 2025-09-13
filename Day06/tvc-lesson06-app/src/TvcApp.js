import React, { Component } from 'react';
import TvcEventComp from './components/TvcEventComp';
import TvcEventCompClass from './components/TvcEventCompClass';
import TvcEventForm1 from './components/TvcEventForm1';
import TvcEventForm2 from './components/TvcEventForm2';

class TvcApp extends Component {
  render() {
    return (
       <div className='container border'>
          <h1 className='text-center'> Trịnh Văn Chung <br/>ReactJs - Form - Event</h1>
          <hr/>

          <TvcEventComp />

          <TvcEventCompClass />

          <TvcEventForm1 />

          <TvcEventForm2 />
      </div>
    );
  }
}

export default TvcApp;