import React from 'react';

//not a functional component, it's a normal javascript function
//which expects two arguments which then returns a
// function which qualifies as a functional component.
const withClass = (WrappedComponent, className) =>{
    //functional component
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}
export default withClass;