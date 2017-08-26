# Flickr Photo Stream

This is an app to designed to be developed quickly to display photos from the public Flickr API defined here: 
https://www.flickr.com/services/feeds/docs/photos_public/

It is served from an amazon s3 bucket here:

http://cloud.flickr-photo-stream.com.s3-website.eu-west-2.amazonaws.com/

This readme describes the development of the app.

# Environment

The project was set up as a React App with instructions from here:
Use create-react-app from:
https://github.com/facebookincubator/create-react-app

This generates a README.md with instructions for building, running and testing the app. This 
was renamed `create-react-app.md`

# Instructions

## Run the development env with
`npm start`
Point to http://localhost:3000


# Code
Used lowercase for filenames (I have not renamed all from the boilerplate original) as this makes it compatible with 
all operating systems and removes git problems when cases are changed etc.

Demonstrates best practice React code, redux gives the app a master state so all the components can be stateless,
while redux-thunk allows for async actions such as getting results from Flickr API.

JSONP had to be used as the headers from the Flickr server were not set to allow cross domain access using XMLHttpRequest, 
at least not in the logged out (no ID) public access mode.

Lazy loading was used for browser speed.

Responsive works on all devices.

Straight CSS was used as the app is small but using BEM (Block Element Modifier) methodology to improve structure of CSS,
in the format B__E_M. 
  

# Development

## 1) Add Botstrap
React Bootstrap Installation: 
Use a React Bootstrap project for the navbar described here:
https://www.thinkful.com/projects/react-bootstrap-456/

## 2) Add Simple Style Free List
Add code to display a carousel of photo cards (picture and metadata)  

Install react redux to manage state in a redux store. This is the preferred way to use React,
in conjuction with Redux so that there is one master place for State. The components should therefore
be stateless and get state by using 'connect' to access the store. 
All components in the app are connected to the store since <App> is wrapped in a <Provider>.
This provider maps component properties with the state.
See:
https://github.com/reactjs/react-redux

The Flickr Api requires a JSONP implementation to get round cross origin issues.
For this install jsonp. 
See:
https://www.npmjs.com/package/jsonp

For asynchronous redux actions (getting a feed) use thunk middleware. See
https://www.npmjs.com/package/redux-thunk

For description of its use see 
http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/

For lazy loading use this react library:
https://www.npmjs.com/package/react-lazy-load

Note I couldn't see anything useful in description in the Flickr feed so left it blank although code is in there ready

For infinite scroll, I need to know when the end of a scroll is reached and trigger an action to get more data.
To hook up with the scroll listener I need a ref on a react dom node but Stateless components cannot have refs, so
I converted carousel.jsx to stateful component for this reason.
I then added infinite scroll in such a way that the beginning is chopped as you move right, so there are
never more than 100 items on screen

# Ideas for improvement
For lack of time the following ideas were not implemented. 

1 - Implement scroll up down for mobile devices, and general look and feel tidy.

2 - Add another carousel below containing favourites. When you like a picture click (+) and it appears in that row. This would be a good way of reusing the carousel component and putting a new array of data in the redux store.

3 - Fiddle with lazy loading timings for mobile devices - needs to load more at once.


