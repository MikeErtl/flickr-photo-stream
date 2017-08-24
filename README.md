# Flickr Photo Stream

This is an app to designed to be developed quickly to display photos from the public Flickr API defined here: 
https://www.flickr.com/services/feeds/docs/photos_public/

This readme describes the development of the app.

# ENVIRONMENT

The project was set up as a React App with instructions from here:
Use create-react-app from:
https://github.com/facebookincubator/create-react-app

This generates a README.md with instructions for building, running and testing the app. This 
was renamed `create-react-app.md`

# INSTRUCTIONS

## Run the development env with
`npm start`
Point to http://localhost:3000

# DEVELOPMENT BRANCHES

## 1) add-bootstrap
React Bootstrap Installation: 
Use a React Bootstrap project for the navbar described here:
https://www.thinkful.com/projects/react-bootstrap-456/

## 2) add-card
Add code to display a simplified no-design carousel of photo data (title for now)  

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




# TODOS AND NOTES 

## Lazy Loading
https://www.npmjs.com/package/react-lazy-load


        


