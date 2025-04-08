Task Management System API

A full-featured Task Management backend built using Node.js, Express, MySQL (via Sequelize ORM), This system features secure authentication using email and JWT, where tokens are stored in HTTP-only cookies, and real-time task updates are delivered to connected clients.

=> Install Dependencies
npm install

=> Configure Environment Variables
Create a .env file in the root directory and add the following configuration:
PORT=3000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret

=> Start the Application
npm start ot npm index.js

=> Authentication
Users log in using email only.

JWT tokens are created on successful login and stored in HTTP-only cookies.

Authenticated routes validate the token from the cookies.

=>API Endpoints

**Authentication**
POST /api/auth/login

Login a user with their email.
in request body
{
"email": "user@example.com"
}
response 
{
"message": "Login successful"
}

Below all end point is secure it will take token form cookies and authenticate than give a output

**Users**
GET /api/users  ===>Returns a list of all users.
GET /api/users/id  ===> Return a user with id perameter which we can pass in url if not find than give error
POST /api/users   ===> Create new user
PUT /api/users/id  ===> update user with their id
Delete /api/user/id   ===> Delete user with id


**Cetegory**

GET /api/categories ===> Retrieve all categories.
POST /api/categories ===> Create a new category.

in request body  (note : if give letter less than 3 it will throw a error and not provide name it will throw error)
{
  "name": "Work"
}
GET /api/categories/id ===> give cetegory by id if exist
PUT /api/categories/id  ===> update category with id

 **Tasks**

 GET /api/tasks  ==> Get all tasks for the authenticated user

 POST /api/tasks  ===> Create a new task.
 in request body this all field is requeird 
 {
  "title": "New Task",
   status:"pendding",
   "dueDate":date,
  "categoryId": 2,
  "userId": 1
}

PUT /api/tasks/:id  ==> Update a task by ID.
request body
{
  "title": "Updated Task Title"
}

DELETE /api/tasks/:id ==> Delete a task by ID.
