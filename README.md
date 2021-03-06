# WHOSE is a content platform for public anonymous diaries! Crazy, right?

## Check out our public development server 100% cloud hosted by AWS:

   http://ec2-54-185-39-90.us-west-2.compute.amazonaws.com:3000/

It's on the free-tier, so no performance promises (according to amazon).
We set it up from scratch instead of self-managing bundled packages of
services. I'm not planning on much traffic yet, but honestly, if there's
going to be scalability concerns I may move over to heroku. This is a fun
idea, so I'd really like it to become popular.

It will take a minute for the infrastructure to catch up with the idea,
and I'm building the server with technologies that I've never used (but am
very excited to dive into)! 

I'll be keeping the code public and synced with development frequently, so
for a few days it will have very limited functionality. The general structure 
will follow MVC patterns with the Express framework. The development server 
will be purely hosted using AWS, with a link available to those interested in 
checking the progress. 

I planned this to be a 3 day build up of the skeletal structure, at which 
point I wanted to start flushing out feature ideas and aesthetic elements.
Since I'm learning as I go, this initial phase will probably last a week.
I'm quickly falling in love with Node. I've spent a few days looking 
at the many ways of doing things instead of diving right in with the 
first approach that popped up on Google.

So far I've settled on Jasmine for testing. I love the way the specs read
like user stories to fascilitate a TDD approach to implementation. I'll 
be using a local MongoDB server for now, with the mongoose module to 
address Models. I like how mongoose saves me a layer of abstraction on
DB interactions in an MVC context. I'm leaning toward handlebars for a
template rendering engine, mostly because pug(jade) has more of a logic
feel and I like my templates to feel like a document. I may need more logic
someday, but for now I want to try and keep the logic in the controllers &
use the views for presentation.


## To build/install this code (so far):
- Install Node.JS on your system
- Install NPM 
- Install a local MongoDB server
- Clone the code repo 
- Navigate to the root directory for the repo in a terminal (for Windows
 I recommend git-bash), and execute the command `npm install`

## To launch the server:
- From the repo root directory (i.e. ~/whose), execute the following:
 `DEBUG=~/whose:* && npm start`
 
