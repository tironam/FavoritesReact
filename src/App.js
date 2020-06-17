import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <Button text="My button" />
      <Button 
        text="New Button"
        one="Something"
        two="Also something"
      />
      <Navbar />
      <div className="container">
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <div className="col-md-6">
          <List />
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
