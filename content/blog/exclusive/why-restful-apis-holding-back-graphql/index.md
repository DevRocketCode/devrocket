---
title: Why RESTful APIs are Holding You Back
description: Embrace the Future with GraphQL
type: exclusive
---

**RESTful APIs have been the standard for building APIs for a long time**, but they have their limitations. As APIs become more complex and dynamic, RESTful APIs can become difficult to maintain and optimize. That's where GraphQL comes in.

GraphQL is a query language for APIs that was developed by Facebook. It provides a more efficient and powerful alternative to traditional RESTful APIs. Let's take a closer look at some of the flaws of RESTful APIs and how GraphQL addresses them.

## 1. Overfetching and Underfetching


One of the biggest flaws of RESTful APIs is overfetching and underfetching. 

Let's say you have a RESTful API for a pizza delivery service. You want to retrieve a list of pizzas with their toppings, but with RESTful APIs you have to make two separate requests to get this information.

```bash
# RESTful API example
GET /pizzas
# Returns an array of pizza objects with their ids

GET /pizzas/{id}/toppings
# Returns an array of toppings for the specified pizza id

```

This can result in overfetching (getting more data than you need) and underfetching (having to make multiple requests to get all the data you need).

Now, let's compare this to a GraphQL query:

```graphql
# GraphQL example
query {
  pizzas {
    id
    toppings
  }
}

```

This single query retrieves all the data you need in one go. No more overfetching or underfetching!

## 2. Multiple Endpoints
Another flaw of RESTful APIs is that you often have to make multiple requests to different endpoints to get all the data you need. This can make your API more complex and difficult to maintain.

With GraphQL, you can get all the data you need in a single request, regardless of where the data is stored. This simplifies your API and makes it easier to maintain.

Suppose we have the following RESTful endpoints:

```bash
GET /pizzas - to get all the available pizzas
GET /toppings - to get all the available toppings
GET /orders - to get all the pizza orders
```

In GraphQL, we can create a single query that retrieves data from all three endpoints:

```graphql
query {
  pizzas {
    id
    name
    price
  }
  toppings {
    id
    name
  }
  orders {
    id
    customerName
    pizza {
      id
      name
    }
    toppings {
      id
      name
    }
  }
}
```

## 3. Versioning
Another issue with RESTful APIs is versioning. When you make changes to your API, you often have to create a new version, which can result in a lot of redundant code and extra work.

With GraphQL, you can add new fields to your schema without breaking existing queries. This means you can evolve your API over time without the need for versioning.


```graphql
# GraphQL schema example
type Pizza {
  id: ID!
  toppings: [String!]!
  size: String!
}

type Query {
  pizzas: [Pizza!]!
}

# New field added to the schema
type Pizza {
  id: ID!
  toppings: [String!]!
  size: String!
  isVegetarian: Boolean!
  calories: Int! // New field!
}

```

In this example, we added a new `calories` field to the `Pizza` type without breaking any existing queries. This makes it easier to evolve your API over time, without the need for versioning.

## 4. Documentation
Finally, documentation can be a challenge with RESTful APIs. With so many endpoints and resources, it can be difficult to keep track of everything.

With GraphQL, your schema serves as a self-documenting contract between your API and your clients. You can see from the below schema that it already describes what the different types and fields represent for your pizza ordering system:

```graphql
type Pizza {
  id: ID!
  name: String!
  price: Float!
}

type Topping {
  id: ID!
  name: String!
}

type Order {
  id: ID!
  customerName: String!
  pizza: Pizza!
  toppings: [Topping!]!
}

type Query {
  pizzas: [Pizza!]!
  toppings: [Topping!]!
  orders: [Order!]!
}


```

With RESTful APIs, you would have to update your documentation manually to reflect this change. But in this schema, we define three types (`Pizza`, `Topping`, and `Order`) and three queries (`pizzas`, `toppings`, and `orders`). The types define the structure of the data returned by the API, and the queries define the ways in which the data can be retrieved.

By defining a schema like this, we have provided a single source of truth for the API, which makes it easy for developers to understand how to use the API and what data they can expect to receive. Additionally, tools like GraphiQL can use the schema to provide a rich development environment with auto-complete, validation, and documentation.

In conclusion, while RESTful APIs have been the standard for a long time, they have their flaws. GraphQL provides a more efficient and powerful alternative, allowing you to build APIs that are faster, more flexible, and easier to maintain. If you haven't already, it's time to switch to GraphQL!
