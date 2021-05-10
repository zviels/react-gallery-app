# React Gallery App

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). For this project, I used the popular React library to create an image gallery app. With the help of React, I built the app in the style of modern single-page applications to keep it fast, modular and in sync with current web development trends.

I learned about some of the best practices of working with React, like using JSX to write markup-like syntax directly in my JS files, and managing state in a container component that passes data down to reusable stateless components. Additionally, I got practice working with React supportive tools like the **Create React App** and **React Router** modules.

Using the **Create React App** tool, I set up the initial project.

Then I -

- Used JavaScript and JSX to build out the gallery components in a modular fashion.
- Used **React Router** to set up routes for three default topic pages and a search page.
- Used **Axios** to fetch data from an API.
- Used the fetched data to display images in my app.
- Added logic to handle the search functionality of the project.

## Table of Contents

- [Preview](https://github.com/zviels/react-gallery-app#preview)
- [Quick Start](https://github.com/zviels/react-gallery-app#quick-start)
- [Overview](https://github.com/zviels/react-gallery-app#overview)
- [Built With](https://github.com/zviels/react-gallery-app#built-with)
- [Thanks](https://github.com/zviels/react-gallery-app#thanks)

## Preview

<a href="https://react-gallery-app-zviels.vercel.app">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/react-gallery-app/react-gallery-app.gif" alt="App Preview" width="100%">
</a>

## Quick Start

The easiest way to view the app is by clicking [here](https://react-gallery-app-zviels.vercel.app).

If you wish to run this app locally on your machine, you'll have to - 

- [Download the ZIP file](https://github.com/zviels/react-gallery-app/archive/refs/heads/main.zip), extract it and open the project folder in your favorite code editor.
- Sign up for [Giphy](https://developers.giphy.com) and create an app to get an API key.
- In your code editor, create a new file inside the `API` folder (which is located in the `src` folder). Name this file `config.js`.
- Put your Giphy API in the `config.js` file. This key should be exported.

The `config.js` file should look something like this -

```
const apiKey = 'YOUR API KEY';
export default apiKey;
```

Note that the `Giphy.js` file will import the API key from `config.js`.

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- React Basics <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- React Components <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- React Router Basics <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

I also learned how to - 

- Use **Create React App**.
- Use **React Context API**.
- Fetch data in React.
- Deploy a React app.

### Project Requirements

You can view the project requirements [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/react-gallery-app/project-requirements.jpg).

**Note:** The original project I submitted for review used Flickr API. After submitting the project, I replaced Flickr API with Giphy API. I find this API easier to use and more engaging to the user. Moreover, the images provided by Giphy API are of better quality compared to the images provided by Flickr API.

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

This project received the **"Exceeds Expectations"** rating.

See the full project review [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/react-gallery-app/project-review.jpg).

:100:

## Built With

- HTML
- CSS
- React

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/treehouse-logo.png" alt="Treehouse Logo" width="100%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter CSS file for this project -

- `styles.css`

In addition, a huge thank you to everyone who reviewed the project! :grinning: