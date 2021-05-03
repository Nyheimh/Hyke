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

Hyke is an application that allows users to view a trail. The users are allowed to view, and add hikes they have trekked. 


<br>

## MVP

<br>

### Goals

- Develop Backend, CRUD
- 3 Data Tables
- 8 components
- 2 Responsive Design
- Reviews



<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      ReactJs       | Frontend development  |
|      HTML, CSS3       | Frontend development  |
|   React Router   | Frontend development |
|   Authorization  | Login for Backend and Frontend |
|    Ruby On Rails      | Backend Creation and Deployment |
|  Material Ui  | Development of CSS |


<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/gf8aiuI4uBa7dxywLE1IaJ/Hyke?node-id=4%3A85


#### Component Tree

https://whimsical.com/project-4-KVDgWZvXcmEZxrEfvLzivs

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images 
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
      |__ Start Hyking(Register).jsx
      |__ Sign In.jsx
      |__ Hykes.jsx
      |__ Hyke Details.jsx
      |__ Add/Edit Hyke.jsx
      |__ Hyke Review (Add).jsx
      |__ About.jsx
|__ containers/
      |__ User.jsx
      |__ Trails.jsx
      

```

#### Time Estimates

> 

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Hyke - Proposal                  |    H     |      2 hrs      |    2 hrs      |   2 hrs     |
| Rails - Controllers           |    H     |      2 hrs      |      1.5hr      |     2.23hr     |
| Rails - Seed      |    H     |      2 hrs      |    2 hrs      |   2.17 hrs     |
| Rails - Routes      |    H     |      2 hrs      |    1 hrs      |    2 hr     |
| Rails - Authorization      |    H     |      3.5 hrs      |    2 hrs      |   2 hrs     |
| Rails - CORs        |    H     |      2 hrs      |    1 hr      |   1 hr     |
| Rails - CRUD        |    H     |      2 hrs      |     2 hrs      |    2 hrs     |
| Deployment of Backend        |    H     |      2 hrs      |     1 hr      |    1 hr     |
| React - Routes |    H     |      3 hrs      |    2 hrs      |  2 hrs     |
| Frontend - Navbar |    H     |      3 hrs      |   3 hrs      |    3 hrs     |
| Frontend - Homepage |    H     |      3 hrs      |     2 hrss      |    2 hrs     |
| Frontend - Header |    H     |      2 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Search |    H     |      3 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Hyke |    H     |       3 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Sign Up |    H     |      3 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Sign In |    H     |      3 hrs      |     1 hr      |    1 hr     |
| Frontend - Footer |    H     |      1.5 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Add Hyke |    H     |      2 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Hyke Details |    H     |      2 hrs      |    2  hrs     |    2 hrs     |
| Frontend - Hyke Review |    H     |      2 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Sign In |    H     |      2 hrs      |     2 hrs      |    2 hrs     |
| Frontend - Deployment |    H     |     3 hrs      |    2  hrs      |    2 hrs     |
| Frontend - CSS |    H     |      4 hrs      |     5 hrs      |     5 hrs     |
| Total                     |    H     |    54 hrs     |     46.5 hrs     |    44.4 hours   |

<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#LHyke

![image](https://user-images.githubusercontent.com/78383071/116000176-f2ff4500-a5a3-11eb-88cc-79d9d8f2fcd6.png)

<br>

***

## Post-MVP

 - Sub-comments
 - Add a Module
 - My Hykes

***

## Code Showcase

```
eturn (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <h3 className="title">Trails</h3>
      <Grid container spacing={3}>
        {trails.map((trail) => (
          <React.Fragment key={trail.id}>

          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia id="box"
                    component={Link} to={`/trails/${trail.id}`}
                className={classes.media}
                image={trail.img_url}
                title={trail.name}
                />
```

## Code Issues & Resolutions

The development of React since it was about 3-4 weeks since I have used constantly. 
