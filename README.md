# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### My application

The application can add and edit quizzes, using Redux, state management, navigation, etc.
The first step to the input is the initial data of the quiz, the next screen follows is about the questions.
The number of options per question is dynamic as per the user's request.
![sc1](https://user-images.githubusercontent.com/66166781/134790189-cc8e00b7-1660-4d7c-9285-fdab8f53e628.PNG)
![sc2](https://user-images.githubusercontent.com/66166781/134790208-d5962f5f-a906-4456-9a78-4d3281a47ed3.PNG)
![sc3](https://user-images.githubusercontent.com/66166781/134790212-0f2c25f5-50d2-4418-b99e-f95c802a03ba.PNG)

After finishing the user navigates to the home screen showing the list of quizzes. 
A user can click on the quiz to edit it, the initial values already filled. 
![sc4](https://user-images.githubusercontent.com/66166781/134790227-ff852452-3a50-49fc-b782-c1963ef3e09a.PNG)
![sc5](https://user-images.githubusercontent.com/66166781/134790232-8a7fffb0-e438-4a28-82e4-41f36e97432d.PNG)

The data is all saved in a global state array that can be accessed anywhere by Redux. This is an example of an object inside the array, with the nested questions object
![sc6](https://user-images.githubusercontent.com/66166781/134790270-05463ce2-3757-4e4f-8d17-1b730c3baf62.PNG)
![sc7](https://user-images.githubusercontent.com/66166781/134790274-7765cbe2-6db4-4ed5-a4ca-c676ae20b03b.PNG)


