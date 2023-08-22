import React, { Suspense, lazy} from 'react';
const Lazy1 = lazy(() => import("./LazyLoading"))
const Lazy2 = lazy(() => import("./LazyLading2"))

function App() {
  return (

     <div>
          <h1>
               Working with lazy loading
          </h1>
          <Suspense fallback=
               {<div>Component1 are loading please wait...</div>}>
               <Lazy1 />
          </Suspense>
          <Suspense fallback=
               {<div>Component1 are loading please wait...</div>}>
               <Lazy2 />
          </Suspense>
     </div>
  )
}

export default App
