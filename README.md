# Blogs API Project

This is a back-end project developed by me during the full-stack development course at [Trybe](https://www.betrybe.com/).

The objective was architect and develop a blog CRUD API (with Sequelize ORM).

## Table of contents

- [The project](#the-project)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Migrations and seeders](#migrations-and-seeders)
  - [API Reference](#api-reference)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## The project

- Architect and develop a blog CRUD API (with Sequelize ORM).
- Create endpoints (following REST principles) that will be connected to a database.
- Create a login system using JSON Web Token Authentication.
- Handle errors with specific messages and statuses.
- Create tables: Users, categories, posts and their associations.

---

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`MYSQL_USER`

`MYSQL_PASSWORD`

`HOSTNAME`

`JWT_SECRET`

Note: The .env file must be in the project's root folder.

If you need more information, please check the [official dotenv documentation](https://github.com/motdotla/dotenv#readme).

---

### Installation

Clone the repository:

```bash
git clone git@github.com:joelsalmeida/blogs-api.git
```

Access the repository folder:

```bash
cd blogs-api
```

Install dependencies:

```bash
npm install
```

**Start MySQL server** and run the application:

This command in addition to running the application, creates the database with tables.

```bash
npm start
```

---

### Migrations and seeders

To create **blogs_api** database:

```bash
npm run create
```

To drop database:

```bash
npm run drop
```

To create the tables:

```bash
npm run migrate
```

To populate the tables with a small database:

```bash
npm run seed
```

---

### API Reference

Note: For requests that need authentication, you must pass the token in a **"authorization"** field in the request **header**.

```http
POST /user
```

Create a new user. Email and password are used for login.

Request body format:

```json
{
    "displayName": "Your Name"
    "email": "your@email.com"
    "password": "123456"
    "image": "http://yourimage.png"
}
```

---

```http
GET /user
```

Lists all registered users.

---

```http
GET /user/:id
```

Returns a user with a specific id.

---

```http
DELETE /user/me
```

Remove user logged in current session.

---

```http
POST /login
```

**Important:** Returns a token that must be used in other requests.

Email and password must be registered in a user previously.

Request body format:

```json
{
  "email": "your@email.com",
  "password": "123456"
}
```

---

```http
POST /categories
```

Adds a new blog post category.

Request body format:

```json
{
  "name": "History"
}
```

---

```http
GET /categories
```

Lists all registered categories.

---

```http
POST /post
```

Adds a new blog post.

Categories must have been registered previously.

Request body format:

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

---

```http
GET /post
```

Lists all registered blog posts.

---

```http
GET post/:id
```

Returns a blog post with a specific id.

---

```http
PUT /post/:id
```

Update a blog post with a specific id.

Note: The logged user must be the one who created the post.

Request body format:

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

---

```http
GET post/search?q=
```

Searches a blog post by title or content.

---

```http
DELETE post/:id
```

Remove a blog post with a specific id.

Note: The logged user must be the one who created the post.

---

## My process

### Built with

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Sequelize](https://sequelize.org/) - TypeScript and Node.js ORM
- [JSON Web Token](https://jwt.io/libraries) - Libraries for Token Signing/Verification

---

### What I learned

In this project, I had the opportunity to apply the "model, service, controller" architecture for the first time using Sequelize.

I learned about the relationship between models, migrations and seeders. "Which was a little tricky at first"

In addition, I was also able to better understand how error middlewares and routes work in Express.

---

### Continued development

I intend to understand how to best use eager or lazy loading and how to structure more complex queries.

Also, I want to continue delving into software architecture "I loved studying about it".

---

## Author

- LinkedIn - [@joelalmeidasa](https://www.linkedin.com/in/joelalmeidasa/)
- GitHub - [@joelsalmeida](https://github.com/joelsalmeida)
- Frontend Mentor - [@joelsalmeida](https://www.frontendmentor.io/profile/joelsalmeida)
