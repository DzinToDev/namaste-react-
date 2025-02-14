# Notes and Assignments

## What is Emmet

## React is library of framework

## Q How this project or browser get to know that what is this document, .createElement, innerHTML, getElement etc... ?

A: This comes from browser API browser knows what all of these brower has JS engone gives this functionality.

This is how we get react into our project using CDN first 

- now create a element using react we installed cdn and we created a react environment
  creating a element is a core thing of react that is come from first CDN
  now creating a root and rendering something inside it is the job of react DOM. This root is place where all react code will run everything we will render will render inside this root.

** what i learn here what ever we render inside this root will br replaced not appended **

Q Waht is the most expensive operation in browser or web page ?
A: When your web page is interactive so the most imp operation the most imp hit the browser takes is when the dom nodes need to be manuplited.

Q What is this `React.createElement` what is it giving to us ?
A: It will not give us HTML element. It will give us `Object` this is the react element at the end of the day. and what is `React.Element` nothing but a normal js `Object`.
see inside it it has something props. props are children and attributes that we pass in.
Now when we do render() we passing here reat element a javascript Object to this render file. This root.render() job is basically to take this object create that h1 tag which browser understands and put that inside the DOM root.
i love this behind the seen process.

- how to create nested html structure inside react
