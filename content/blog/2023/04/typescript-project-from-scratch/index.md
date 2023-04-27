---
title: "Build an Express server in TypeScript, from scratch"
date: "2023-05-01T20:00:00.000Z"
description: "Learn how to build a server from scratch, using Node.js, Express, and TypeScript."
featuredImage: header.jpeg
status: draft
repository: https://github.com/DevRocketCode/pantry-pal
youTubeVideo: 0jKrLAlmKMw
---

## Introduction
If you're like many JavaScript developers, you want to write in TypeScript. It sounds great, but how do you use it in the real world? In this tutorial, we'll build a TypeScript project from scratch, using Node.js, Express, and TypeScript.

## Prerequisites
You should be able to follow this tutorial if you have a basic understanding of Node.js and TypeScript. If you're new to TypeScript, get my free guide: [TypeScript Essentials: 5 Critical Keys to Using TypeScript Effectively](/typescript-essentials-free-guide)

## Outline
Here's an overview of the steps we'll take in this tutorial:
- Setup & Config
  - [Install TypeScript](#install-typescript)
  - [Clone the project](#clone-the-project)
  - [Install Dependencies](#install-dependencies)
  - [Create a tsconfig.json file](#create-a-tsconfig-file)
- Create the Server
  - [Create a new TypeScript server file](#create-a-new-typescript-server-file)
  - [Add the Start Scripts](#add-the-start-scripts)
  - [Write the Server Code](#write-the-server-code)
  - [Install Type Definitions](#install-type-definitions)
  - [Watch the Code](#watch-the-code)
  - [Send Back Recipes](#send-back-recipes)
- Add Routes (more benefits of TypeScript)
  - [Add a DB Module](#add-a-db-module)
  - [Add a new route by id](#add-a-new-route-by-id)
  - [Add a Recipe](#add-a-recipe)
  - [Create an Interface](#create-an-interface)

## Install TypeScript

To install TypeScript, you can use npm, the Node.js package manager, by following these steps:

Open your terminal or command prompt.

Run the following command to install TypeScript globally:

```bash
npm install -g typescript
```

This will install the latest stable version of TypeScript on your machine.

To check if TypeScript is installed correctly, you can run the following command in your terminal:

```bash
tsc --version
```
This should print the version of TypeScript installed on your machine.

Now you're ready to use TypeScript in your Node.js project.

## Clone the Project

For this tutorial, we'll be using the project, [Pantry Pal](https://github.com/DevRocketCode/pantry-pal.git), as a starting point. I recommend to fork it and clone it instead of cloning it directly.  Note: the project already has the npm project initialized, so you can skip that step.

> ⚠️ There is a **[solution branch](https://github.com/DevRocketCode/pantry-pal/tree/solution)** in the project that you can use to compare your code to the finished project.

## Install Dependencies

We'll need to install the required dependencies for TypeScript. Run this in your terminal, at the root of your project:

```bash
npm install typescript ts-node @types/node --save-dev
```

## Create a tsconfig file
Create a tsconfig.json file to configure TypeScript. You can do this manually or by running the following command in your terminal.

```bash
tsc --init
```
This generates a file with a few configs plus a lot of comments. Feel free to edit the comments until you have just the configs:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Create a new TypeScript server file
We'll create a new TypeScript server file in our project directory.

```bash
touch app.ts
```

## Add the Start Scripts
Now we'll update our package.json file to include a script to run our TypeScript code. Add the following under the `scripts` property in your package.json file.

```json
  "start": "ts-node app.ts"
```

This is the command we'll use when developing our project. It will run our TypeScript code using ts-node.

Also, we'll add another script to build a production version of our project. Add the following under the `scripts` property in your package.json file.

```json
  "build": "tsc"
```

## Write the Server Code
Finally, the fun part!  We get to write the code for our server. 

First, let's install Express
  
```bash
npm install express
```

Next, open the app.ts file and add the first line to import express.

```ts
import express from 'express';
```

## Install Type Definitions

When we write just this first line, TypeScript is already mad at us!  It gives us an error like this:

```bash
Cannot find module 'express' or its corresponding type declarations.
```

This is because we haven't installed the type definitions for Express.  We can fix this by installing the @types/express package.

```bash
npm install @types/express
```

Now, TypeScript is happy, yay!  But, what exactly happened, here?  The @types/express package is a type definition file.  It's a file that tells TypeScript what types to expect from the express package.  It's not a package that we need to import into our code.  It's just a file that TypeScript uses to help it understand the types of the express package.  And now we can write our server code.

```ts
// Import express
import express from 'express';

// Create a new express app instance
const app = express();

// Make the PORT configurable
const { PORT = 3000 } = process.env;

// Start the Express server, displaying the localhost URL
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

This is great, but there aren't any routes for our server 😱.  Let's add a route to serve up some recipes.

```ts
// ... express initialization above

// GET /recipes
app.get('/recipes', (req, res) => {
  res.send('Recipes to come');
});
```
Now we should see these words when we request the route on our server at http://localhost:3000/recipes

## Watch the Code
You'll notice that when making changes, nothing happens. The server isn't restarting, nor is typescript recompiling our code. We can fix this by updating our `start` script in our package.json file. Before we do so, though, let's move our `app.ts` and `recipes.json` files into a `src` folder. This will help keep our project organized.

```bash
mkdir src
mv app.ts src
mv recipes.json src
```

Now our project should look like this
```bash
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   └── recipes.json
└── tsconfig.json
```

Now, we can update our `start` script:
  
```json
    "start": "nodemon --watch 'src/**' --ext 'ts,json' --ignore 'src/**/*.spec.ts' --exec 'ts-node src/app.ts'",
```

This script will watch our `src` folder for changes to any `.ts` or `.json` files.  It will ignore any `.spec.ts` files.  It will run `ts-node` on our `app.ts` file.  However, we'll now need to install `nodemon` to watch our files.

```bash
npm install nodemon
```

Finally, we can run our `start` script to watch our files and run our server.

```bash
npm start
```

Now we should see the response from our server when we request the root of our server at http://localhost:3000/recipes.

## Send Back Recipes
Instead of boring boilerplate code, let's add some recipes to our server.  We'll use the pre-existing recipes.json file in the root of our project.

```ts
// Import the recipes
import recipes from './recipes.json';

// ... express initialization and other stuff

// GET /recipes
app.get('/recipes', (req, res) => {
  res.send(recipes);
});
```

When we do this, we get an error:
```bash
Cannot find module './recipes.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.
```

Typescript basically is saying "I don't know what to do with this file.  It's not a JavaScript file, and it's not a TypeScript file.  What do you want from me?"  We can fix this by adding the `resolveJsonModule` flag to our `tsconfig.json` file. Then, TypeScript will know how to handle JSON files.

```json
  "resolveJsonModule": true
```

Now, our import works, and we are sending back recipes. Visit the API, and you'll see the recipes, in all their glory!

Great! We've created a simple API using TypeScript and Express.  But... you might be wondering why TypeScript looks so much like JavaScript.  What's the point?  Well, let's add a new route to our server, and see how TypeScript can help us.

## Add a DB module
In the next step, we'll add a new route, but first, let's create a lightweight in-memory "database".

```bash
touch src/db.ts
```
In this file, we'll create a mock db that basically mimics some functions that we might use to interact with a real database.  We'll export a few functions that we can use to add and get recipes.

```ts
import recipes from './recipes.json';

export const get = () => {
  return recipes;
}

export const getByIndex = (idx) => {
  return recipes[idx];
}
```

You'll notice that the new function throws an error:

```bash
Parameter 'idx' implicitly has an 'any' type.
```

This is because TypeScript doesn't know what type `idx` is.  We can fix this by adding a type annotation to the function parameter. What type do we expect? A number, to access the object in the array via index. So, we can add a type annotation to the parameter. Also, let's add a return type annotation to the function.

```ts
export const getByIndex = (idx: number) => {
  return recipes[idx];
}
```

## Add a new route by id

Now, we can use this function in our server code.

```ts
// Import the db module
import * as db from './db';

// ... express initialization and other stuff

// GET /recipes/:idx
app.get('/recipes/:idx', (req, res) => {
  const idx = req.params.idx;
  const recipe = db.getByIndex(idx);
  res.send(recipe);
});
```
But, oops! Now we get an error in our route handler:

```bash
Argument of type 'string' is not assignable to parameter of type 'number'.
```

This is because `req.params.idx` is a string, but we're passing it to a function that expects a number.  We can fix this by casting the string to a number.

```ts
const idx = Number(req.params.idx);
```

Now, before we start cursing TypeScript for all these errors, lets take a step back and think about what's going on.  We're using TypeScript to help us catch errors before we run our code.  This is a good thing!  It's much easier to catch errors in our code before we run it, than to find them after we've deployed our code to production.  So, rejoice in TypeScript, and fix your errors! 😄

Now, we can request a recipe by index at http://localhost:3000/recipes/1.

## Add a Recipe

Let's add a new route to add a recipe to our database.  We'll use the `POST` method to add a new recipe.

```ts
// POST /recipes
app.post('/recipes', (req, res) => {
  const recipe = req.body;
  db.add(recipe);
  res.send(recipe);
});
```

Of course, we'll also need an `add` function in our db module.

```ts
export const add = (recipe) => {
  recipes.push(recipe);
}
```

But we run into the same error here: 

```bash
Parameter 'recipe' implicitly has an 'any' type.
```

Ok, we know that we need to give it a type, but what type do we give for an object like the recipes?  This is where we'll need to create an interface!

## Create an interface

An interface is a TypeScript construct that allows us to define the shape of an object.  We can use interfaces to define the shape of our recipes, and then use them in our code. In this case, we want to define the shape of a recipe, so we'll call it `Recipe`.

```ts
export interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
}
```

Now, we can use this interface in our db module.  This way, when we call `add`, TypeScript knows what we'll be passing in.

```ts
export const add = (recipe: Recipe) => {
  recipes.push(recipe);
}
```

Now, we can use our `db.add` function in our route handler.  Don't forget to configure Express to parse JSON.

```ts
// Configure Express to parse JSON
app.use(express.json());

// POST /recipes
app.post('/recipes', (req, res) => {
  const recipe = req.body;
  db.add(recipe);
  res.send(recipe);
});
```

Now we can add recipes to our server.  We can test this out by using `curl` to send a POST request to our server.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Pancakes", "description": "Delicious pancakes", "ingredients": ["flour", "eggs", "milk"]}' http://localhost:3000/recipes
```

And to confirm, we can visit http://localhost:3000/recipes/5 to see our new recipe!

And that's it! We've created an API using TypeScript and Express.  We've also learned a bit about TypeScript, and how it can help us catch errors before we run our code.  We've also learned about interfaces, which allow us to define the shape of an object.  We can use interfaces to define the shape of our data, and then use them in our code.
