# Flickr Photo Stream

This is a web app written in React to display photos from the public Flickr API.
It can be run here:

http://cloud.flickr-photo-stream.com.s3-website.eu-west-2.amazonaws.com/

The public Flickr API used is this:

https://www.flickr.com/services/feeds/docs/photos_public/

# Environment

The project was set up as a React App with instructions from here:
Use create-react-app from:
https://github.com/facebookincubator/create-react-app

This generates a README.md with instructions for building, running and testing the app. This 
was renamed `create-react-app.md`

# Instructions

## Development Run 
Run with 

```npm start```

and point browser to http://localhost:3000


# Code

Used lowercase for filenames (I have not renamed all from the boilerplate original) as this makes it compatible with 
all operating systems and removes git problems when cases are changed etc.

Demonstrates best practice React code, redux gives the app a master state so all the components can be stateless,
while redux-thunk allows for async actions such as getting results from Flickr API.

JSONP had to be used as the headers from the Flickr server were not set to allow cross domain access using XMLHttpRequest, 
at least not in the logged out (no ID) public access mode.

Lazy loading was used for browser speed.

The simple design is responsive from mobile to desktop designed to keep photocards large on screen.

Straight CSS was used but using BEM (Block Element Modifier) methodology to improve structure of CSS,
in the format B__E_M. 
  

# Development
The development followed these steps in design:

## Add Botstrap
React Bootstrap Installation: 
Used a React Bootstrap project for the navbar described here:

https://www.thinkful.com/projects/react-bootstrap-456/

## Add Carousel 
Add code to display a carousel of photo cards (picture and metadata)  

## React Redux
Install react redux to manage state in a redux store. This is the preferred way to use React,
in conjuction with Redux so that there is one master place for State. The components should 
be stateless and get state by using 'connect' to access the store. 
All components in the app are connected to the store since `<App>` is wrapped in a `<Provider>`.
This provider maps component properties with the state. See:

https://github.com/reactjs/react-redux

## JSONP
The Flickr Api requires a JSONP implementation to get round cross origin issues.
For this install jsonp. 
See:

https://www.npmjs.com/package/jsonp

## Redux-Thunk
For asynchronous redux actions (getting the flickr feed) use thunk middleware. See

https://www.npmjs.com/package/redux-thunk

For description of its use see 

http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/

## Lazy Loading
For lazy loading use this react library:

https://www.npmjs.com/package/react-lazy-load

I picked a preload value of 1500px so that on a phone you can scroll fast enough to see the lazyness.

## Description?
Note I couldn't see anything useful in description in the Flickr feed so left it blank although code is in there ready

## Carousel Design
I kept the scroll horizontal for mobile and desktop. I used a
fraction of the viewport hight to size the carousel height and individual photocard width. This ensures portrait
phone shows largely one photocard and desktop shows the wireframe's approx 4. 

## Infinite Scroll
For infinite scroll, I need to know when the end of a scroll is reached and trigger an action to get more data.
To hook up with the scroll listener I need a ref on a react dom node but Stateless components cannot have refs, so
I converted carousel.jsx to stateful component for this reason.
I then added infinite scroll in such a way that the beginning is chopped as you move right, so there are
never more than 100 items on screen

## Add Saved Photocards
Added another Carousel to save pictures. This also demonstrates the case where one action can affect both
carousels - clicking save adds an item to the saved carousel and removes the Save button from the live
carousel. 

# Ideas for improvement
For lack of time the following ideas were not implemented. 

- Using redux offline, the saved items can be persisted using this tool: 
https://www.npmjs.com/package/redux-offline

- Implement a search, making use of the Navbar.


