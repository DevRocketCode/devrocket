---
title: "Interfaces vs Types in TypeScript: What's the diff?"
date: "2023-04-24T16:00:00.000Z"
description: "Recipes for Well-Defined Data in TypeScript"
repository: https://github.com/DevRocketCode/interfaces-vs-types/blob/main/src/app.ts
featuredImage: header.jpg
youTubeVideo: https://www.youtube.com/embed/wQ-CWKhnCJc?controls=0
---

When we cook, we use recipes.  In recipes, we use ingredients.  Recipes contain collections of different ingredients.

In TypeScript, interfaces and types serve as "recipes" for your data. Interfaces define the specific requirements for each piece of data, like how many ingredients are needed and how they should be combined. Types, on the other hand, define the specific data types, like whether an ingredient is a liquid or a solid.

Interfaces are used to describe the shape of data and specify the syntax that each entity must follow. Types, on the other hand, define data types, such as primitive, intersection, union, tuple, or different types. Below is an example of a `Recipe` that is a union type of two different interfaces, `Success` and `Failure`:

```typescript
type Result = Success | Failure;

interface Success {
  success: true;
  message: string;
}

interface Failure {
  success: false;
  error: string;
}
```

The `Result` type can either be a `Success` or a `Failure`. The `Success` and `Failure` interfaces define the shape of the `Result` type, with `Success` having a `success` property that is always `true` and a `message` property, and `Failure` having a `success` property that is always `false` and an `error` property.


## Interfaces
In TypeScript, an interface is a way to define a contract that an object must conform to. It specifies the syntax that each entity must follow, without providing any implementation details. An interface describes the shape of data and is useful for creating reusable code.

An entity that is described by an interface must conform to the syntax requirements specified by the interface. For example, consider the following interface:

```typescript
interface Animal {
  name: string;
  age: number;
  speak: (sound: string) => void;
}
```
This interface describes an `Animal` object that must have a `name` property that is a string, an `age` property that is a number, and a `speak` method that takes a `sound` parameter and returns nothing. Any object that implements this interface must have these properties and methods.
### Merging of interfaces

Interfaces in TypeScript can be merged when two interfaces have the same name. This is useful for breaking down large interfaces into smaller, more manageable pieces. For example, consider the following interfaces:

```typescript

interface Person {
  name: string;
}

interface Person {
  age: number;
}
```



These two interfaces have the same name and will be merged into a single interface that looks like this:

```typescript

interface Person {
  name: string;
  age: number;
}
```


### Extending interfaces with types

In TypeScript, it is possible to extend an interface with a type. This allows you to add additional properties to an interface that are defined by a type. For example, consider the following interface:

```typescript

interface Person {
  name: string;
}

type Employee = {
  id: number;
  salary: number;
} & Person;
```

In this example, we define a `Person` interface with a `name` property. We also define an `Employee` type that has additional properties for `id` and `salary`. We use the `&` operator to combine the `Employee` type with the `Person` interface to create a new interface that has all of the properties from both. This allows us to create an object that is both a `Person` and an `Employee`.

## Types
### Definition and purpose of types

In TypeScript, a type is a way to define a set of data types that a value can have. It is used to ensure that variables, parameters, and return values have the correct data types. Types are useful for catching errors early in the development process.
### Types of data that can be defined with types

In TypeScript, there are several types of data that can be defined with types, such as: 
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. 
- Intersection types: a type that is a combination of two or more types, written with the `&` operator. 
- Union types: a type that can be one of several types, written with the `|` operator.
- Tuple types: a type that represents an array with a fixed number of elements and each element having its own data type.
- Function types: a type that represents a function, including its parameters and return type.
- Class types: a type that represents a class, including its properties and methods.
### Error that occurs when defining two types with the same name

Using the `type` keyword to define two different types with the same name will result in an error. For example, consider the following code:

```typescript

type Person = {
  name: string;
};

type Person = {
  age: number;
};
```

This code will result in the following error:

```bash

Duplicate identifier 'Person'.
```


### Intersection types

Intersection types are a way to combine multiple types into a single type. This can be useful for creating reusable code. For example, consider the following code:

```typescript
type A = {
  name: string;
};

type B = {
  age: number;
};

type C = A & B;

const person: C = {
  name: 'John',
  age: 30,
};
```

In this example, we define two types `A` and `B`. We then use the `&` operator to create a new type `C` that is an intersection of `A` and `B`. We can then use `C` to create an object that has both a `name` property of type `string` and an `age` property of type `number`.

### Union types

Union types are a way to define a type that can be one of several types. For example, consider the following code:

```typescript

type Result = Success | Failure;

interface Success {
  success: true;
  message: string;
}

interface Failure {
  success: false;
  error: string;
}

function handleResult(result: Result) {
  if (result.success) {
    console.log(result.message);
  } else {
    console.log(result.error);
  }
}
```

In this example, we define a `Result` type that can either be a `Success` or a `Failure`. We use this type as a parameter for the `handleResult` function, which takes a `Result` object and checks if it is a `Success` or a `Failure`. Depending on the type of the object, it logs either the `message` property or the `error` property to the console.

## Tuple types

Tuple types are a way to define an array with a fixed number of elements and each element having its own data type:

```typescript
type Person = [string, number];

const person: Person = ['John', 30];

// this will throw an error: Type 'string' is not assignable to type 'number'.
const person: Person = ['John', '30'];
```

## Differences between Interfaces and Types
### Summary of the main differences between interfaces and types

In TypeScript, interfaces and types are often used interchangeably, but they have different purposes and syntax requirements. Here are some of the main differences between interfaces and types:
- Interfaces are used to describe the shape of data and specify the syntax that each entity must follow, whereas types define data types. 
- Interfaces can merge when two interfaces have the same name, but using the same name for two different types with the `type` keyword will result in an error.
- Interfaces can be extended with types, but type aliases cannot extend a class. 
- Intersection types can be created with the `&` operator using types, but not interfaces. 
- Union types can be created with the `|` operator using both interfaces and types.

When deciding whether to use an interface or a type, it is important to consider the specific needs of the code being written. For example, if you are defining the structure of an object, an interface may be more appropriate because it is more focused on defining the shape of the data. On the other hand, if you need to define a specific data type or create a type that is a combination of multiple types, a type may be more appropriate.

## Conclusion
### Recap of the important points discussed in the article

In this article, we discussed the differences between interfaces and types in TypeScript. We explored the purpose and syntax requirements of interfaces, including their ability to merge and be extended with types. We also discussed the types of data that can be defined with types, such as intersection and union types, and the error that occurs when defining two types with the same name.
### Final thoughts on when to use interfaces and types in TypeScript programming

When deciding whether to use an interface or a type in TypeScript programming, it is important to consider the specific needs of the code being written. Both interfaces and types have their strengths and weaknesses, and there is no one-size-fits-all solution.

Interfaces are useful for defining the shape of data, specifying the syntax that each entity must follow, and merging with other interfaces. Types, on the other hand, are better suited for defining specific data types and creating a type that is a combination of multiple types.

Ultimately, the decision to use an interface or a type will depend on the specific requirements of the project and the preference of the developer. By understanding the differences between interfaces and types, TypeScript programmers can make informed decisions about which approach to use in their code.

