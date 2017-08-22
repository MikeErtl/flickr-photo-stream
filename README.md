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

# DEVELOPMENT BRANCHES AND FLOW

The following is a list of branch names (this is a quick one person project without JIRA ticket numbers).
Each branch is designed to be a typical pull request sized task, not too onorous to review and not too small. 
Files are lower case for greater compatibility. (leaving README.md as is)

## 1) add-bootstrap
React Bootstrap Installation: 
Use a React Bootstrap project for the navbar described here:
https://www.thinkful.com/projects/react-bootstrap-456/

## 2) add-card
Add a single 'PhotoCard' containing photo and metadata.

Install react redux to manage tate in a redux store.
https://github.com/reactjs/react-redux



# TODOS AND NOTES 

## Getting Data:
Install a promise based HTTP Client 'axios' which has the same API for requests as JQuery but does
not have any DOM manipulation which would be bad in a React app. See
https://github.com/mzabriskie/axios


## Description is injected HTML
Sanitize the html using the sanitize-html module, and render it using dangerouslySetInnerHTML

## Lazy Loading
https://www.npmjs.com/package/react-lazy-load


        


