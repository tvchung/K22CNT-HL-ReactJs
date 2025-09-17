import React from 'react'
import TvcUseState from './components/TvcUseState'
import TvcListStudent from './components/TvcListStudent'

export default function TvcApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Trịnh Văn Chung]</h1>
        <hr/>

        <TvcUseState />

        <TvcListStudent />
    </div>
  )
}
