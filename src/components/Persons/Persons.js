import React, { Component } from 'react';
import Person from './Person/Person';
//Functional component cause we have no need to manage state in there
class Persons extends Component {
render(){
  return this.props.persons.map((person, index) => {
    //props.person.map is normal js code not a jsx
    return <Person
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)} />
  });
}}


export default Persons;