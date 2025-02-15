# Notes and Assignments Episode 01

### What is Emmet

### React is library of framework
A: React ia library it can work independently in a small portion of your app as well. It is not a full fludged framework. React is normal barebone JS library it is just a some peace of js code whic is written by FB developers. It is just giving us some helper methods that we need to use to develop your fast application and we can do this in small portion of tha app as well. This is not the case with other frameworks all frameworks will require you to create whole app using it but react work on your existing app as well.

### Q How this project or browser get to know that what is this document, .createElement, innerHTML, getElement etc... ?

A: This comes from browser API browser knows what all of these brower has JS engone gives this functionality.

This is how we get react into our project using CDN first

now create a element using react we installed cdn and we created a react environment
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
React.Element(Object) => becomes while rendering - HTML(Browser understand)

how to create nested html structure inside react
And how to make siblings in the create.Element third arugument we can either pass one childern to it or if you have to give more than one childern we can convert this to an array. 

Q Is cdn, js sequesce matter 
A: yes it will matter a lot. 

what ever we pass in html root it will replaced and if something top of bottom it will show as it is. 