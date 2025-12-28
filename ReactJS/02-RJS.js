// Redux setup 

// install redux redux-toolkit react-redux
// npm install redux redux-toolkit react-redux


// create a store
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

// create a reducer
const counterReducer = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1
    }
})

// create a store
import { Provider } from 'react-redux'
return (
    <Provider store={store}>
        <App />
    </Provider>
)

// create a component
const App = () => {
    return (
        <div>
            <h1>Count: {store.getState().counter}</h1>
            <button onClick={() => store.dispatch(increment())}>Increment</button>
        </div>
    )
}

// create a store
import { useSelector } from 'react-redux'
const count = useSelector((state) => state.counter)
return (
    <div>
    <h1>Count: {count}</h1> 
    </div>
)




// 