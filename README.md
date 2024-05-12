## Project Title

Multi-page Web Application: To-Do-List page + Tic-Tac-Toe page via Next.js Framework

## Motivation

I am kind of learning the basics of web-development by myself. It is not enough to learn web-development by just taking cousrses and learning concepts. I should enhance my problem solving skills, which is the number 1 skill that any web-developer should acquire. Because of this I decided to build a web-application that requires the usage of the most important concepts of front- and back-end development. So far I have made this application above for which you can navigate between the Homepage, a To-Do-List page, and a Tic-Tac-Toe page via the Next.js framework(React-based framework) with both handling the front-end and back-end logic. For sure the application will be enhanced and a lot of new features should be added in the near future.  

## Project Description

The project has two main pages:

1-The To-Do-List page <br>
2-Tic-Tac-Toe page <br>

I used Nextjs 14 to build the application with utilizing the App Router feature.

### 1- To-Do-List page:

- It is a simple To-Do-App where CRUD operations are included except the update one.
- In the application we submit the name of the task and its description.
- The name of the submitted tasks will appear in the To-do-items container with a show and delete buttons next to each of them.
- The show button will let me see the details of the task, like the id, name, and the description in the Details container.
- For the back-end I used Prisma ORM to manage the database queries. For this page the database used is crud_api and the name of the table is Task.
- I managed the state of the application by using Redux library, so we have a central cenralized place for the global state, which is the store, that all the components of the app can see and would update whenever the state changes.
- You can find the source code for this page in src/app/toDoApp/page.jsx

### 2- Tic-Tac-Toe page:

- It is a standard Tic-Tac-Toe game
- You can reset the game and also return to previous plays.
- For the back-end I used Prisma ORM to manage the database queries. For this page the database used is crud_api and the name of the table is Hit.
- For this page instead of using Redux I passed down regular React props.
- You can find the source code for this page in src/app/TicTacToe/page.jsx


## Installation


1- Before running the project you should first write this command to install the required dependencies:

        npm i 

2- Configure MySQL connection in .env

3- Run 

    npx prisma migrate dev

4- To run the project, write this command 

    npm run dev

     

     

     

    





  





  



