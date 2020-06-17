import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'
import Card from './components/Card'

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
          <Card 
            title="Erika"
            text="Singin' in the Rain"
          />
        </div>
        <div className="row">
          <Card
            text="Nathan"
          />
        </div>
        <div className="row">
          <Card
            text="Jonathan"
          />
        </div>
      </div>
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
