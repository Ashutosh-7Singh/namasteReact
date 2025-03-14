


# React Hooks

**React Hooks** are special JavaScript functions that allow you to "hook into" React features, such as state and lifecycle methods, from functional components.

- **A React Hook is a normal JavaScript function** that follows specific rules set by React for managing state and side effects in functional components.

## Commonly Used Hooks

1. **useState**: A hook that allows you to add state to a functional component. It returns an array with the current state and a function to update that state.
2. **useEffect**: A hook that performs side effects in functional components, such as data fetching, DOM manipulation, or subscribing to external data sources. It is executed after the component renders.

### React Component Re-rendering (Reconciliation)

React re-renders a component when its state or props change. This process is called **Reconciliation**, and it ensures that the UI is always in sync with the component’s state.

#### Reconciliation Algorithm (React Fiber)

- React uses **React Fiber**, a new reconciliation algorithm, to efficiently update the user interface (UI) when state or props change.
- **Virtual DOM**: The virtual DOM is a lightweight representation of the actual DOM in memory. React uses it to determine what changes have been made to the UI.
- **Diffing Algorithm**: This algorithm compares the old virtual DOM with the new one and calculates the minimal set of changes needed to update the actual DOM. This ensures that React performs efficient and minimal updates.

For example, if you have 7 cards and apply a filter that only shows 3 cards, React will compare the old virtual DOM with the new one, and only update the actual DOM by removing the 4 cards that are no longer needed.

## Two Approaches to Rendering Data in React

There are two common approaches to rendering data in React:

1. **Load -> API -> Render**: The component makes an API call, waits for the response, and then renders the data.
2. **Load -> Render Skeleton -> API -> Render**: A loading skeleton (e.g., placeholders) is shown initially, the component makes the API call, and once the data is fetched, the actual content is rendered. This approach improves user experience by providing immediate feedback and avoiding blank screens while waiting for data.

## **useEffect Hook**

- **What is a hook?** A hook is a JavaScript function that enables a React component to interact with internal React features, such as state management and side effects.

- **useEffect** is used to handle side effects in functional components, such as fetching data, setting up subscriptions, or modifying the DOM after rendering. It runs after the component has rendered, and you can specify dependencies to control when it should re-run.

### Why do we need state variables in React when we have normal variables?

- **State variables** are essential because they trigger a re-render of the component whenever their values change. React uses this mechanism to keep the UI in sync with the application’s state. Normal variables do not trigger re-renders and are not tracked by React.

### Why is React faster?

- React is fast because of its **React Fiber** reconciliation algorithm, which efficiently updates only the parts of the DOM that have changed. React compares the previous and current virtual DOM, and only updates the actual DOM elements that need to be changed, minimizing unnecessary re-renders and improving performance.

## Types of Routing in Web Apps

### 1. **Client-Side Routing** (SPA)

- In **Client-Side Routing**, the browser does not reload the entire page when navigating between different views or components. Instead, React loads and renders the specific component or view without a full page refresh. This is typical in **Single Page Applications (SPA)**, where the application behaves like a single page, and only the relevant content is updated dynamically.

### 2. **Server-Side Routing**

- **Server-Side Routing** involves a full page reload. When you click a link, the browser sends a request to the server to load the corresponding HTML page (e.g., `aboutUs.html`). The server sends back the entire HTML, and the page is reloaded. This is typical of traditional multi-page applications, where every link results in a full page reload from the server.




<!-- # React Hooks

**React Hooks** are special functions that let you “hook into” React features like state and lifecycle methods in functional components.

- **A React Hook is just a normal JavaScript function.**

## Commonly Used Hooks

1. **useState** - Allows you to add state to a functional component.
2. **useEffect** - Allows you to perform side effects like data fetching, DOM manipulation, etc., in functional components.

### React Component Re-rendering (Reconciliation)

Whenever a state variable changes, React triggers a re-render of the component. This process of updating the UI when the state changes is known as **Reconciliation**.

#### Reconciliation Algorithm (React Fiber)

- React uses a process called **React Fiber** (also known as the Reconciliation algorithm) to efficiently update the UI when there are changes.
- **Virtual DOM**: React maintains a virtual representation of the DOM. The virtual DOM helps React quickly determine the difference between the actual DOM and the virtual DOM.
- **Diffing Algorithm**: This algorithm compares the old virtual DOM with the new virtual DOM and determines the minimal changes required to update the actual DOM.

For example, if you have 7 cards in your UI and after applying a filter only 3 cards should be shown, React will compare the old virtual DOM with the new one and only update the necessary DOM elements (e.g., removing the 4 cards that no longer match).

## Two Approaches to Rendering Data in React

There are two common approaches to fetching and displaying data:

1. **Load -> API -> Render**: You fetch the data, and once it’s ready, you render the component.
2. **Load -> Render Skeleton -> API -> Render**: You render a loading skeleton (e.g., a placeholder), fetch the data, and once the data is ready, render the actual content. This is generally the recommended approach in React as it provides a smoother user experience.

## **useEffect Hook**

- **What is a hook?** A hook is just a normal JavaScript function with some special rules and behavior provided by React.
  
- **useEffect** is called after the component renders, and it's commonly used for side effects like fetching data or updating the DOM.

### Why do we need state variables in React when we have normal variables?

- In React, **state variables** are crucial because when you update them, React will re-render the component to reflect the updated state. Normal variables don’t trigger re-renders, so React needs state variables to manage the UI dynamically.

### Why is React faster?

- React uses the **React Fiber** reconciliation algorithm, which efficiently updates only the parts of the DOM that need to change, reducing unnecessary re-renders. It does this by comparing the old and new virtual DOM and updating the actual DOM only where needed.

## Types of Routing in Web Apps

### 1. **Client-Side Routing** (SPA)

- Client-side routing happens without a full page reload. When you click on a link or navigate in the app, React dynamically loads and renders the relevant component without making a full network request.
- This is known as **Single Page Application (SPA)**, where only the specific component is updated without refreshing the entire page.

### 2. **Server-Side Routing**

- Server-side routing requires a full page reload. When you click on a link, the browser makes a network request to fetch a new HTML page (e.g., `aboutUs.html`) from the server and reloads the entire page with new content. 
- This is the traditional routing method used in classic multi-page applications. -->





# REDUX Toolkit

- Install @redux/toolkit and react-redux
- Build our store 
- Connect our store to our app
- Sclice (Create cartSlice to add)
- Dispatch(action)- it call function(reducer)
- Selector(suscribed)-Cart is suscribed through selectr so the forntend cart get updated

