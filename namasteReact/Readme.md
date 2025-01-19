# React Hooks

(Normal JS utility function)

- what is React Hooks

* A Normal JS function

- There are multiple Hooks but we mostly use only two

* useState
* useEffect

# when ever a state variable changed react re rendering the component

## As soon as i change the state varibale react automically refrest the compoenet very fast it is called RECONCILIATION

# Reconiliation Algorithm () it is also known as react fiber

- reconiliatino(react fiber)
  -ex->
  suppose we have 7 card but when i filter i got only 3 card

- so what here virtual dom comes see actual doms are tags like <div></div>
but virtual dom is the representaion of the actual dom
- Diff Algorith
* it means diffrece betwenn the actual dom and the virtual dom or we can say that old virtual dom and the new veirtual dom  and update the dom 

* this whole algoritm called Reconciliation also called React Fiber 

* suppose i have 7 res card and when i click on  button it filer 3 res card and it show the difference 4 actual cards 