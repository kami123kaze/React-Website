import React from 'react'
import AboutHooks from '../aboutHooks/AboutHooks'

function Home() {
  return (
    <>
     <div className='px-auto mx-auto siz'><h1 className='text-xl'>THE FOLLOWING HAS BEEN MADE USEING RESUABLE REACT COMPONENTS ONLY</h1></div>
      <AboutHooks 
        hookNumber ={'1'} 
        hookName={`useState`} 
        aboutHook={'In React, useState is a special function that lets you add state to functional components. It provides a way to declare and manage state variables directly within a function component. It should be noted that one use of useState() can only be used to declare one state variable.'}
        additionalInformation={`Internal working of useState hook
          useState() creates a new cell in the functional component’s memory object.
          New state values are stored in this cell during renders.
          The stack pointer points to the latest cell after each render.
          Deliberate user refresh triggers stack dump and fresh allocation.
          The memory cell preserves state between renders, ensuring persistence.`}/>
          <hr className="w-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <AboutHooks 
        hookNumber ={'2'} 
        hookName={`useEffect`} 
        aboutHook={'IThe useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering' }
        additionalInformation={`
          You call useEffect with a callback function that contains the side effect logic.
              By default, this function runs after every render of the component.
              You can optionally provide a dependency array as the second argument.
              The effect will only run again if any of the values in the dependency array change.`}/>
              <hr className="w-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <AboutHooks 
        hookNumber ={'3'} 
        hookName={`useRef`} 
        aboutHook={'The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef hook is a new addition in React 16.8. To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage' }
        additionalInformation={`
          The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(ihnitialValue). The object can persist a value for a full lifetime of the component. `}
          />
          <hr className="w-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  )
}

export default Home