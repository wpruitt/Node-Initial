# Crash Course in NodeJS
(This is a very thrown together, last minute talk. Please forgive everything about it.)

This is line 4. (Might be relevant later)

### What is NodeJS?
JavaScript has long been the ubiquitous language of the web because it has become present in every computer, phone, and web-capable device. It has long been used for client-side scripting, embedded in HTML files to be executed in the browser when you visit a web page. It's baked into IE, Chrome, Firefox, Safari, Opera and most every browser you can think of.

So is Node a library, like React or Angular? Not really, althought it *contains* libraries as we'll see shortly.  Node is an *environment* where JavaScript can run outside of a web browser.  It is an open source project originating around 2009 that allows JavaScript to live on the server-side.

So I'd like to take you through a few basics, and then show you how JavaScript can work on both the front-end and the back-end of a web application.

### What is NPM?
If you've done back-end things in other languages, you may be familiar with using libraries or dependencies. Basically this is code someone else has already written, to do common things that make your life easier.

With NodeJS, npm is now bundled together automatically.  It stands for Node Package Manager, and is a great way to quickly add useful JavaScript functionality to your own code.

Some basic commands to know
- npm init
- npm install --save

A node project will have a 'package.json' file which holds dependencies and some other information.

### Platform
We're going to be using Cloud9, a cloud based IDE, to run these demonstrations. If you'd like to code along with me, please go ahead and create a free account at c9.io

Later if we have time, we can talk about downloading node and running it locally on your machine.

Start a Cloud9 workspace, and git clone this repo.

*** Finish instructions ***




### Hello World
This first example is a basic JavaScript function. We're going to execute it from the command line and see the output there too.  'node 1_helloworld.js' tells node which file we want to execute.

I want to show you something cool about the commands we're typing in. We actually can access the commands from inside the file. When I console log 'process.argv' we get back an array.  One is the file path to node, which is the process we're running. The second is the path to the file node is executing. The first and second commands are available here as arrays.

Just for fun, let's add a third command, any word. We can see that get console logged too, in the second index of this array.  Because that's accessible from inside the file, let's see what we can do.  Let's say hello to a name that we provide.

Cool, so we were able to access the terminal commands inside our file and use them as input.

### Hello File
Now we're going to use our first node library.  This comes baked into Node already, and you can review the documentation at https://nodejs.org/dist/latest-v6.x/docs/api/. We're going to pull in the 'fs' library to be able to read a file.

We start by declaring a variable and setting it to 'require' the 'fs' library. I'm basically pulling in an Object that has a method I want to use, which reads a file. This method returns a buffer object, which we're going to convert to a string and then split into an array separating each line.

### Hello Web
Now we're going to make a simple web server. For that we're going to bring in 'http', a baked in node library for handling web requests. The require method saves our library into a variable we can use.

### Hello Express
# Node-Initial
