# 14-TechnoTalesBlog 📔

## Description

TechnoTales blog allows user to publish their blog posts and comment on other users posts. It follows the MVC (Model-View-Controller) architectural pattern and utilizes Handlebars.js as the templating language, Sequelize as the ORM (Object-Relational Mapping), and the express-session npm package for authentication. The site is built from scratch and can be deployed to Heroku.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

To run TechnoTales Blog, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Edit the `.env.DEMO` file in the root directory of the project and set the following environment variables with your MySQL database configuration
5. Rename `.env.DEMO` to `.env`
6. Create the specified database in your MySQL server.
7. Run `npm run seed` to create the tables and seed the initial data in the database.
8. Run `npm start` to start the server.
9. Navigate to localhost:3001 to view the website localy.


## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Preview

View live demo hosted on [Heroku](https://desolate-hollows-36679-dc548d9b90e0.herokuapp.com/)




## Features
The StaffTrack Pro has the following features:
- Create, read, update, and delete blog posts: Logged-in users can create new blog posts, view existing posts, update their own posts, and delete their posts.
- Comment on blog posts: Users can comment on blog posts created by other users.
- Logged-in users have access to a personalized dashboard where they can view and manage their own blog posts.
- The homepage displays all blog posts with the most recent ones appearing first.


## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Sequelize (ORM)
- express-session (authentication)
- MySQL 




