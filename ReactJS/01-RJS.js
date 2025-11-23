
// hooks 
// redux
// react router
// react context
// react memo
// react lazy
// react suspense
// react portal
// react fragment
// react error boundary
// react forward ref
// react memo



// hooks examples
import { useState } from 'react'
// useState example
const [count, setCount] = useState(0)
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)

import { useEffect } from 'react'   
// useEffect example
useEffect(() => {
    console.log('count changed')
}, [count])
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)

// useContext example
import { useContext } from 'react'
const context = useContext(Context)
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)



// useMemo example
import { useMemo } from 'react'
const memoizedValue = useMemo(() => {
    return count + 1
}, [count])
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)

// useCallback example
import { useCallback } from 'react'
const memoizedValue = useCallback(() => {
    return count + 1
}, [count])
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)

// react portal example
import { createPortal } from 'react-dom'
return createPortal(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>,
    document.body
)

// react fragment example
import { Fragment } from 'react'
return (
    <Fragment>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
)

// react error boundary example
import { ErrorBoundary } from 'react'
return (
    <ErrorBoundary>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </ErrorBoundary>
)

// react forward ref example
import { forwardRef } from 'react'
const ForwardRef = forwardRef((props, ref) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
})
return (
    <ForwardRef ref={ref} />
)



// useref
import { useRef } from 'react'
const ref = useRef(null)
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)


// useImperativeHandle
import { useImperativeHandle } from 'react'
const ImperativeHandle = useImperativeHandle(ref, () => {
    return {
        count: count
    }
})
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)




// useLayoutEffect
import { useLayoutEffect } from 'react'
useLayoutEffect(() => {
    console.log('count changed')
}, [count])
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)



// useDebugValue
import { useDebugValue } from 'react'
useDebugValue('count')
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)


// useReducer   
import { useReducer } from 'react'
const [state, dispatch] = useReducer(reducer, initialState)
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
)


// react router example
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
)

// react context example
import { createContext } from 'react'
const Context = createContext()
return (
    <Context.Provider value={value}>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </Context.Provider>
)

