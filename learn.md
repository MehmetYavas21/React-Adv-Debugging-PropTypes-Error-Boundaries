# Debugging, PropTypes & Error Boundaries

## Learning goals
We talked about debugging your code in several modules already. There, we covered using console.log to output data into our dev tools console, and we showed you how to use breakpoints. 

You can use these same techniques in React. In function components, each time the component is rendered, we can console.log something and it will show up in the console, or we can add a breakpoint so we can step through our code one line at a time and see what the value is of each variable at that point in our code execution. 

## After this concept you can:
- debug in React
- test a React component with Jest and react testing library

## Errors and warnings
In pure JavaScript, we would only encounter errors related to the JavaScript code we wrote, for example when trying to divide by zero, or accessing a property on a variable that is undefined.

But when we use a library like React, or some of the other libraries we discussed so far, like Chakra, or Redux, we may get some errors or warnings that are specific to that library. One example you may have already found is a missing key prop in a list of items, which is specific to React. 

!! The first thing to do when you see an error message is to stay calm and just read what it tells you.

It usually tells you where your error is located and what caused the error. When you are just starting out, reading such a bunch of red text may overwhelm you, or you may not understand some of the language that is used. This is completely normal, and part of the process of becoming an experienced developer is learning how to deal with these situations.

If you do not understand the error, it may help to google the first line of the error (omitting any variable name that is specific to your app, rather than the error itself). Chances are someone else already had such an error before and they or someone else found a solution for it. In the case of React, error messages often include a link to the documentation in which they explain how to solve the problem or fix the bug, which is really helpful. 

## Now, there are two levels we must take into account

We have warnings, which don’t necessarily break your code, but can result in faulty behavior. An example of this is when you have a missing key prop in a list of things. Your app will still run, but if you modify the list in certain ways, the UI may end up in a bad state - although the user can still interact with it.

And we have errors, which cause your code to stop running. An example of this is when you forget to wrap a component in angle brackets (<>) when you want to render it elsewhere in some JSX. React really doesn’t know what to do there, so it fails and your app becomes inoperable.

It will usually tell you you did something wrong and point you to the exact line number in the file it couldn’t handle, so chances are good you will be able to find the solution after closely inspecting the offending line.

!! Don't forget to breathe 🧘🏿‍♂️
Reset yourself for a moment. Deeply breathe in and out for a couple of times, and continue when you're ready.

## React Dev Tools revisited

There are also more subtle bugs, and while the errors and warnings are the thing you see most often during development, users of your app may point out to you that something unexpected happens whenever they perform a specific action.

Often this is an action you and your teammates haven’t thought about while developing. You may have a problem with a piece of state not being updated properly, or some changes that are not being saved correctly. Analyzing and finding the source of these bugs can take up a lot of development time. It will help you tremendously to be familiar with React’s dev tools and to have them open while you reproduce the bug on your machine. 

In the previous module, we altered some state of a React application from the dev tools, but you can also see the state, the props, a list of hooks and a flash in the component tree when a component is being re-rendered. You can also turn on the option to see updates in the DOM itself, which can show you which parts of your app are being updated at which time. Together with breakpoints, this is a very powerful tool in your toolkit.

Sometimes bugs are more about performance, if you render a lot of components and re-render them often enough, this can make your app feel slow, especially on less powerful devices.

## Profiler

To help with the problem mentioned above, the React dev tools also have a Profiler tab. Here, you can inspect how your components are being rendered by making a recording of the rendering process while you interact with your app. This can help you identify the bottlenecks more quickly and show you where you need to change something in order to improve the performance. 

Now let's talk about PropTypes
It's doable, trust me.

## PropTypes

We have been using ESLint for a while now. It helps us catch some inconsistencies in our code. 

One of the rules that we have turned off, however, has been the “react/prop-types” rule. This rule ensures that the props we pass to our components are of the right type. In order to prevent bugs (and catch them before your users encounter them), it is recommended to use proptypes. 

**NOTE!!** PropTypes helps us to check if the props we pass into our components are of the right type. They can let us know when our component expects a string and we actually pass it an object, or when a prop is required and we forget to pass it in. This is very useful, especially as your app grows.

To use PropTypes, you have to install the prop-types package by typing the following in the terminal and in your project folder:  

      npm install --save prop-types
      
To ensure that it is actually enforced and we receive the warnings, we have to turn on the ESLint rule in our `.eslintrc.json` file. Either remove the “react/prop-types”: 0 line altogether, or turn the 0 into a 1.

Next, we need to import PropTypes and assign a propTypes property to our function component as you can see on line 12:

        import PropTypes from 'prop-types';

        const Component =({name, age}) => {
            return (
                <>
                    <h1> name: {name} </h1>
                    <p> age: {age]</p>
                </>
                );
        };

        Component.propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number
        }

We define the propTypes in an object that contains the props as keys and their type as value. In the value, we retrieve the type from the PropTypes object that we have imported.

On line 13, you can see that we added something extra: “isRequired”. This ensures that we must assign a name prop whenever we use our Component. Our editor will notify us (provided we have the ESLint extension installed) that a name is missing if it isn’t there. It also checks if the name we pass it, is a string, and that the (optional) age we pass it is a number.

In some cases we want to provide a default value to a prop. We can do that by assigning a defaultProps property to the component:

        Component.defaultProps= {
            age: 42
        };

This does not mean that you don’t also need to assign a propType for `age`. 

It does not matter in which order you assign propTypes and defaultProps, they assign properties on the object (yes, functions are objects as well in JavaScript) that is the Component, so they can be done in any order, although normally you would see them at the bottom of a file where a Component is defined. 

We can check for many complex types of props, for example an object containing certain properties and optionally other properties, or an array containing objects of a certain shape. By writing these out, your editor will help you find bugs before they hit production.

**Note:** If you and your team are using TypeScript instead of regular JavaScript, you don’t need PropTypes! Writing Types for your props will cover all these cases. 

## Exercise: PropTypes

In this exercise, you will gain some experience writing PropTypes and default props.

## Description

Let’s put this into action. We will write some prop types and default props for a component. 

Download [this folder](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fde%2Frgaat%2Fafvcnaef%2Fvrge-mcil%2Fgxgraiqe%2Fpport%7Bpgs-svaptgr) and install all dependencies. Run the development server with `npm run dev`, open the webpage and see what is there. 

First, note that in this folder, we have a .vscode folder, where we have some extra settings in a json file, which will enable some extra checks that VSCode performs and can help with identifying mistakes we make. It's quite sensitive, and will indicate problems that may theoretically come up, even if it is unlikely to happen in practice. 

If the check are somehow not performed, you can move these settings into your User settings: Ctrl/Cmd + SHIFT + P, and type “User”. Now select “Preferences: Open User Settings (JSON) and paste the extra settings. Make sure the syntax matches the rest of the settings. 

**NOTE!!** If you have moved the settings to your User Settings. They will now check every project, even when you don't use PropTypes. Make sure to disable the lines in other projects that do not use PropTypes.

If you want to continue working with PropTypes, you have to make sure that your components import React from 'react';

## Steps

- Install the prop-types package: `npm install --save prop-types`.

- Open the .eslintrc.json file. Under “rules”, find "react/prop-types" and set it to “error”.
    
    This ensures that we will get warnings in our editor whenever we do not have (some or all) proptypes available for a component.
- Open the Person component.

This component has quite a few props, and right now, because we turned on this linting rule, you see a bunch of squiggly lines under the props indicating that they are missing in prop validation. To solve this, we are going to write proptypes for them! If at any point below you do not know exactly how to proceed, first read the [readme page](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2Fdaae%60omk-ppor-vyreq) in the official prop-types repo on GitHub.

- First, import PropTypes from ‘prop-types’ at the top.

Note that the ‘ character might not be properly copy-pasted, so double check VScode to see if everything is fine.

- Now, at the bottom of the file, assign an object to Person.propTypes.


- Inside that object, add the 5 properties that our component expects: name, age, address, hobbies, and pronoun. For each of them, assign a validator from the PropTypes package.

For example: `name: PropTypes.string`

- For address, we need to define an object.

you can say PropTypes.object, but we actually expect it to be an object of a predetermined shape. So instead we use PropTypes.shape() and add the properties that we access when we create the formattedAddress variable (should be on line 5) in the component.

- The hobbies should be an array of strings, we can use PropTypes.arrayOf() for that, which we pass the type of each array element as argument.

- Now, make name, age, and address required properties by adding `.isRequired` at the end of each PropType validator.

For hobbies and pronoun, we are going to write some default props.

- Assign an object to Person.defaultProps and in it give default values for the hobbies array (an array containing one element, “coding”), and for the pronoun (we suggest “Their”).

Note that all the squiggly lines are gone.


- Now open main.jsx and add another <Person /> after the first.

    !! You will see a red squiggly line under it to indicate that some things are missing. This indication is coming from the extra settings in the .vscode folder. If you don’t see any red squiggly lines, we recommend putting the extra settings in the .vscode folder and add them to your User settings (see description).

The error message may be a bit hard to grasp at first glance, but further down the line you can see the name of some of the props that are missing. Try adding some of them. See how the error message changes on each addition. Try giving one of the props a wrong type (like a number for the name, or a string for the address), and see what happens.

Note that if you were to open your app in the browser you will also see similar errors in the console, but we want to show you that VSCode can do this by itself and show these errors earlier on in the process. Note that it is fine to omit props for which you have given a default value. Make the squiggly line disappear, and notice that it indeed works in the browser.

[SOLUTION](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fde%2Frgaat%2Fafvcnaef%2Fvrge-mcil%2Fgxgraiqe%2Fpport%7Bpgs-smlwtkol)


## ErrorBoundary Components

Whatever the case may be, it is worthwhile to have some guards in place so your app breaks in as graceful a way as possible whenever something goes wrong.

For this purpose, you can build an ErrorBoundary Component. It acts like a JavaScript catch block and catches all errors that happen in any of its children. 

Unfortunately, you cannot write an ErrorBoundary as a function component. This has to do with its dependence on the getderivedStateFromError and componentDidCatch lifecycle methods (more on lifecycle methods below when we talk about useEffect), for which no alternative exists in functional components.

The first method is used to show something instead of the children component in which the error occurred, the second method is used for logging the error to an error logging service in which you can inspect the errors your users encounter.

## An ErrorBoundary component looks something like this:


                        class ErrorBoundary extends React.Component {
                            constructor(props){
                                super(props);
                                this.state = {hasError : false};
                            }
                        }

                        static getDerivedStateFromError(error){
                            // Update state so the next render will show the fallback UI.
                            return {hasError: true};
                        }

                        componentDidCatch(error, errorInfo){
                            //You can also log the error to an error reporting service
                            logErrorToMyService(error,errorInfo);
                        }

                        render(){
                            if(this.state.hasError){
                                //you can render any custom fallback UI
                                return <h1>Something went wrong</h1>
                            }
                            return this.props.children;
                        }

It is then placed at some point in your component tree. You can be as granular as you want and have Error Boundaries at several places in your tree. The error will bubble up to the closest Error Boundary and the rest of your app may continue to be functional, so your user can navigate away from the component causing the error and doesn’t have to reload the entire page. Using an Error Boundary looks as follows:

                        const App = () => {
                            return (
                                <ErrorBoundary>
                                    <ChildComponent1 />
                                    <ChildComponent2 />
                                </ErrorBoundary>
                                )
                        }

Now, any error that occurs in ChildComponent1 or ChildComponent2 will be caught by the ErrorBoundary and instead of seeing a blank page, the user will see the header with “Something went wrong”.  

## Exercise: Using ErrorBoundaries

In this exercise, you will learn how to write a basic ErrorBoundary.

## Description

So, let’s practice this. You will now write your own ErrorBoundary. When you start to work in React, usually on a Project level you have one or more ErrorBoundary components, but they will all look pretty similar. 

First download this [folder](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fde%2Frgaat%2Fafvcnaef%2Fvrge-mcil%2Fgxgraiqe%2Feprmr%2Fbmuldcr%7B%2Fqtcrvep) with starter files. Install the dependencies and run the development server.

### Steps

- When you open the webpage, about half the time you reload the page something goes wrong and nothing is shown. This is because one of our components is likely to error. In the browser console, you can now also see a big fat red error when that happens. Reload the page a few times, if you haven’t seen the error yet.

- To really drill this point home, add several more instances of the <ComponentThatErrors /> in our App.jsx, see if you can make the page work at all. With 10 of those components, the chances of having a successful render are less than 0.1%.

- So let’s create an ErrorBoundary.jsx file where we will write our component. As you remember it has to be a class component, so first `import { Component } from “react”` and then create a `class ErrorBoundary extends Component {...}`. Export the class as a default.

- Inside the class, we have to do several things. First of all, let’s write a constructor:

                        constructor(props) {
                            super(props);
                            this.state = { hasError: false, error: null };
                        }

This adds some basic state to our ErrorBoundary component.

- In our case, we will only use the static getDerivedStateFromError class method, not the componentDidCatch. So add that static method:

                  static getDerivedStateFromError(error) {
                      return { hasError: true, error };
                  }

This ensures that each time something within the ErrorBoundary errors, we set the state in this component to what we have in this code snippet.

- Now, we can add a render method that returns some JSX: `render() { // Your JSX }`. If this.state.hasError is true, we want to show the error message as follows:

                  return <p style={{ color: 'red' }}>{this.state.error.message}</p>;

If there is no error, we should simply return this.props.children.

- Let’s try our ErrorBoundary out. In App.jsx, import the component and put an <ErrorBoundary> tag around the <ComponentThatErrors />’s. Make sure you have two of these <ComponentThatErrors />. Open the webpage and see if your bright red error is showing when either of those components errors.

Note also that the rest of your app is still working even though there is an error somewhere. 

- This is still quite coarse though, because if one of our component errors, the other may still show valuable information to the user. So let’s make it a bit more granular. Add an ErrorBoundary around each of the <ComponentThatErrors />, add a couple more, each within their own boundary. Open the webpage and you will see error messages for each of the components that error, but the components that do not error still show their normal rendered JSX.

The advantage of ErrorBoundaries is that you can be as specific or general as you want.
      
 [Solution](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fde%2Frgaat%2Fafvcnaef%2Fvrge-mcil%2Fgxgraiqe%2Feprmr%2Fbmuldcr%7B%2Fqonuvimn)

[Documantation](https://qag99.online/school/hvtrs8%2F-rgaaths%2Copg-dmcq%2Fgrpop-%60ownfapigs%2Chvmn)

## Testing React components
      
We talked about testing JavaScript functions in Module 7, where we introduced the testing framework Jest and showed some examples of how you can test your code.

Since React is built in JavaScript (or rather TypeScript, which compiles to JavaScript), we can also test our components, to see if they behave the way we expect them to. 

When working with React, you usually have a bundler. We have been using Vite so far, but there are others like parcel and webpack, which are both quite common solutions. Each different bundler requires some setup in order for tests to be run, and some testing frameworks work better with some bundlers. With Vite, the most common solution is Vitest, while you see Jest being used in parcel and webpack. 

The only problem, however, is that React produces a DOM tree, rather than returning a simple value. Browsers know how to handle those, but our testing framework needs to emulate the browser, because the tests don’t run in the browser. The testing framework you use therefore has to somehow emulate the DOM to be able to interact with it in your tests. There are low level solutions like JSDOM, which is a JavaScript DOM emulator, and many abstractions built on top of that - we recommend React Testing Library, which provides some special functions that help you test React components effectively.

Each good testing framework (like Jest and Vitest), has plugins that you can add so that you can easily test React code, though it is likely you have to install some packages and write some configuration. 

Since it will be quite likely that testing has already been set up when you start working on a project as a junior, and the best way to do it depends on the bundler and other configuration, we won’t go into too many details here, but just provide you with some links that can give you an idea about where to look. There are plenty of guides for your specific bundler available online (google “set up testing for vite + React”, for example). 

## Resources
      
[jest documantation](https://qag99.online/school/hvtrs8%2F-jgsvjq.ko-)
      
[vite documentation](https://qag99.online/school/hvtrs8%2F-vktgsv.fet%2F)
      
[React testing library-documentation](https://qag99.online/school/hvtrs8%2F-tgsvilg%2Flkbpapy%2Ccmm-dmcq%2Fpeccv-veqtkne-ni%60rcr%7B%2Fknvrm)
      
      
