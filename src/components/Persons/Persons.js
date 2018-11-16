import React from 'react';
import Person from './Person/Person';
//Functional component cause we have no need to manage state in there
const persons = (props) => props.persons.map( ( person, index ) => {
  //props.person.map is normal js code not a jsx
        return <Person
          click={() => props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => props.changed( event, person.id )} />
      } );

export default persons;