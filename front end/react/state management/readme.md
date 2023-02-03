# State Management in React

In normal programming, you will keep track of state by storing data within variables.

Now, in React it is not as simple as this. Why?

> Whether your react components are classes or functions, the code that figures out what should be displayed runs once per render. On each render, the code block runs fresh, meaning that the variable values do not persist across successive renders, so you cannot meaningfully use plain variables to capture program state.

So what’s the solution?

The two ways you will learn are:

-   `useState()` React hook.
-   **Redux** (toolkit).

---

## **useState()**

`useState()` is a [**React Hook**](https://reactjs.org/docs/hooks-intro.html).

_What are React Hooks?_

> React hooks are simply methods provided by React that provide extra functionality for react componenents.

Suppose we want to count something and keep track of that count in the state.

`useState()` would work like this:

```
const [count, setCount] = useState(0)
```

It's a strange bit of syntax if you're not used to it.

We call `useState(0)`, where 0 is the initial value of our count. Then we use [array deconstructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to take the returned value and assign it to the variables `count` and `setCount`.

`count` is the name of the **variable** that holds the count.

`setCount` is a **function** that we use to update the count e.g. `setCount(5)` will set that value of the count in the state to 5.

> NB: we cannot reassign this variable like `count = 5` and have it update the program state. It would only update the value of the variable for this particular render., but will not persist to the next render.

To summarise, `setState()` works like:

```
const [var, setVar] = useState(initialValue)
```

> **Important**:, you cannot data from across different React components. The data is availble via `useState()` only to the component which calls it.

You can, however pass the data through to child components via [props](https://www.w3schools.com/react/react_props.asp).

Also note that you can call `useState()` as many times as you like in one component! Each bit of data that you want to save in the state should have its own call to `useState()`.

## In context

_CountComponent.jsx_

```
import React, { useState } from "react";

export default function CountComponent() {
	const [count, setCount] = useState(0);
	return (
		<div>
			{count}
			<button onClick={() => setCount(count + 1)}></button>
		</div>
	);
}

```

---

## **Redux**

Redux is a library that manages **and centralises** app state.

When working with Redux, data is saved in a **store**, which is able to be accessed by any component. We use functions called **reducers** and **selectors** to modify and retrieve data from the **store**.

Redux on its own is quite complicated and involves a lot of boilerplate code. So I recommend learning [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started), which is a package that simplifies Redux.

## **Redux Toolkit**

## Set up the slice

To begin, we create a slice.

> A slice is just an independent section of the store. Each slice contains variables and reducers.

Here's how we create the slice that will hold our count.

_counterSlice.js_

```
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        addToCount: (state, action) => {
            state.count += action.payload;
        },
    },
});
export const { addToCount } = counterSlice.actions;
export default counterSlice.reducer;
```

From top to bottom, we give the slice a name, give the variable(s) an initial value and define reducer(s) by which we can modify the state from component code. Finally we export the reducers to make them accessbile elsewhere.

Let's take a closer look at the reducer decleration.

```
addToCount: (state, action) => {
    state.count += action.payload;
}
```

Again, we have some strange syntax.

`addToCount` is just the name of the reducer.

After the colon, we define the function using [arrow notation](https://www.w3schools.com/js/js_arrow_function.asp). The reducer almost always takes these parameters:

-   `state` allows us to modify data in the store through the `state`'s properties.
-   `action` allows us to recieve arguments into the reducer through action.payload.

## Set up the store

_storeConfig.js_

```
import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterSlice";

export default configureStore({
    reducer: {
        counter: counterReducers,
    },
});
```

All we're doing here is telling Redux which slices to use in our store. In particular we are saying

> We want the reducers defined in _counterSlice.js_ to control the slice of the store called counter.

### Use the store

Finally we can let counterComponent use the store.

_counterComponent_

```
import { useSelector, useDispatch } from "react-redux";
import { addToCount } from "./counterSlice";

export default function CounterComponent() {
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    return (
		<div>
			{count}
			<button onClick={() => dispatch(addToCount(1))}></button>
		</div>
    );
}
```

**`useSelector`** is a hook provided by redux that allows us to get data from the store.

```
const count = useSelector((state) => state.counter.value);
```

We pass it an arrow function which takes the state, and returns a value from the state using its properties. We then assign the return value to our `count` variable.

**`useDispatch`** is another hook provided by redux. This one simply returns a function that lets us run our reducers.

```
const dispatch = useDispatch();
```

And to use this dispatch function:

```
dispatch(addToCount(1))
```

where `addToCount` is the name of the reducer that we made in _counterSlice_ and `1` is the argument which we later retrive via `action.payload`.

> NB: Every component that needs to access the store must be wrapped in the `<Provider>` tag. It is recommended to have this on the outermost layer of your app, in your index.js file as shown below.

_index.js_

```
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
```

# Summary

`useState()` and Redux and two ways to manage state in a react front end.

`useState()`

-   Simple and straightforward.
-   One **hook** that is used in component code.
-   Makes persistent variables accessible by one component only.

Redux:

-   More difficult to set up, but more powerful.
-   Uses **slices** of the **store** to organise data, as well as **selectors** and **reducers** to retrieve and modify data.
-   The store is accessible to all components.
