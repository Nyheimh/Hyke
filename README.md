# Hyke

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Hyke is an application that allows users to view a trail within California. The users are allowed to view, and add hikes they have trekked. 


<br>

## MVP

<br>

### Goals

- Develop Backend, CRUD
- 3 Data Tables
- 8 components
- 2 Responsive Design
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend development  |
|   React Router   | Frontend development |
|   Authorization  | Login for Backend and Frontend |
| React Semantic Ui | Implementation of addons. |
|    Ruby On Rails      | Backend Creation and Deployment |
|  Material Ui  | Development of CSS |


<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/gf8aiuI4uBa7dxywLE1IaJ/Hyke?node-id=4%3A85


![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

(https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

https://whimsical.com/project-4-KVDgWZvXcmEZxrEfvLzivs

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Navbar.jsx
      |__ Home.jsx
      |__ Header.jsx
      |__ Trails.jsx
      |__ Footer.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ Search.jsx
      |__ Header.jsx
      |__ About.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ hyke.js
|__ screens/
      |__ Home.jsx
      |__ Start Hyking(Regsiter).jsx
      |__ Sign In.jsx
      |__ Hykes.jsx
      |__ Hyke Details.jsx
      |__ Add Hyke.jsx
      |__ Hyke Details Edit.jsx
      |__ Hyke Review (Add).jsx
      |__ About.jsx
|__ containers/
      |__ User.jsx
      |__ Trails.jsx
      |__ Reviews.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.
> 

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Hyke - Proposal                  |    H     |      2 hrs      |     hrs      |    hrs     |
| Rails - Controllers           |    H     |      2 hrs      |      hr      |     hr     |
| Rails - Seed      |    H     |      2 hrs      |     hrs      |    hrs     |
| Rails - Routes      |    H     |      2 hrs      |     hrs      |    hrs     |
| Rails - Authorization      |    H     |      3.5 hrs      |     hrs      |    hrs     |
| Rails - CORs        |    H     |      2 hrs      |     hrs      |    hrs     |
| Rails - CRUD        |    H     |      2 hrs      |      hr      |     hr     |
| Deployment of Backend        |    H     |      2 hrs      |      hr      |     hr     |
| React - Routes |    H     |      3 hrs      |     hrs      |   hrs     |
| Frontend - Navbar |    H     |      3 hrs      |      hr      |     hr     |
| Frontend - Homepage |    H     |      3 hrs      |      hr      |     hr     |
| Frontend - Header |    H     |      2 hrs      |      hr      |     hr     |
| Frontend - Search |    H     |      3 hrs      |      hr      |     hr     |
| Frontend - Hyke |    H     |       3 hrs      |      hr      |     hr     |
| Frontend - Sign Up |    H     |      3 hrs      |      hr      |     hr     |
| Frontend - Sign In |    H     |      3 hrs      |      hr      |     hr     |
| Frontend - Footer |    H     |      1.5 hrs      |      hr      |     hr     |
| Frontend - Add Hyke |    H     |      2 hrs      |      hr      |     hr     |
| Frontend - Hyke Details |    H     |      2 hrs      |      hr      |     hr     |
| Frontend - Hyke Review |    H     |      2 hrs      |      hr      |     hr     |
| Frontend - Sign In |    H     |      2 hrs      |      hr      |     hr     |
| Frontend - Deployment |    H     |     3 hrs      |      hr      |     hr     |
| Frontend - CSS |    H     |      4 hrs      |      hr      |     hr     |
| Total                     |    H     |    54 hrs     |     hrs     |    TBD    |

<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#LHyke

![image](https://user-images.githubusercontent.com/78383071/116000176-f2ff4500-a5a3-11eb-88cc-79d9d8f2fcd6.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
