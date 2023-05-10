---
title: "Build a Plagiarism Detection Service"
date: "2023-05-09T20:00:00.000Z"
description: "Using TypeScript and the ChatGPT API from OpenAI"
featuredImage: header.png
---

## The Conference
I gave this talk at the [TypeScript Global Summit '23](https://events.geekle.us/typescript/), on May 10 2023, and it was a blast!  I had a great time and met a lot of awesome people.  I'm looking forward to the next one!  In this talk, I cover how to build a plagiarism detection service using TypeScript and the ChatGPT API from OpenAI.


Detecting plagiarism in written works is an important task, and there are many tools available to help with this. However, building your own plagiarism detection service using natural language processing can be a fun and educational experience. In this talk, we will explore how to build a "works well enough" plagiarism detection service using TypeScript and the OpenAI API.

## What we'll cover

First, we'll introduce the OpenAI API and its capabilities. We'll see how to call the API from an Express server, using TypeScript to define types and interfaces. We'll also look at how to handle the API's response and format it for display in a React front-end.
### OpenAI API and ChatGPT

We'll clarify that the OpenAI API is not called the "ChatGPT API", although ChatGPT is one of the many products that OpenAI offers. ChatGPT is a natural language processing model that can be used to build chatbots, while the OpenAI API encompasses a broader range of models, including Dall-E and GitHub CoPilot. However, we'll be focusing on ChatGPT models in this talk, since they're well-known and useful for our specific use case.
### What we're not building

It's important to clarify what we won't be building. We won't be building a true plagiarism detector, since that would require a large database of existing works and a model trained specifically to detect plagiarism. We also won't be building a chatbot, since that's a popular use case for ChatGPT models and many tutorials already exist for it. Instead, we'll focus on building a service that works well enough for our purposes, and that demonstrates how to use the OpenAI API and TypeScript.

### What we are building

We'll dive into our main topic: building a plagiarism detection service. We'll outline the steps involved, including gathering input from the client, wrapping it in a context prompt, calling the OpenAI API, formatting the response on the server side, and displaying it in a helpful view. We'll emphasize that we're using TypeScript, React, and Express to build the service.

### Point of the Demo

By the end of this tutorial, you'll have a better understanding of how to use the OpenAI API and TypeScript to build a plagiarism detection service. You'll also have a sense of the strengths and limitations of such a service, and you'll have gained some experience working with natural language processing models. Let's dive in and get our hands dirty with the OpenAI API!

## Project Setup

### The Repo
- Clone [the starter repo](https://github.com/DevRocketCode/plagiarism-detection-service) for this tutorial
```
git clone https://github.com/DevRocketCode/plagiarism-detection-service
```
- CD into the directory
```
cd plagiarism-detection-service
```
- Run the install command
```
npm install
```
### OpenAI Account
- Go to [platform.openai.com](https://platform.openai.com/) and log in or sign up for a free account
- Go to [View API Keys](https://platform.openai.com/account/api-keys) of the Account section, create a new secret key, and copy your API key
### Add your API Key
- In the projct locally, create a new file named `.env` (including the dot) in the root directory, and add your OpenAI API key to it.  Its contents should look like this:

```
OPENAI_API_KEY=sk-<your-api-key>
```
### Run the project
- Run `npm run start-client` to start the client
- Run `npm run start-server` to start the server
- Open your browser to [http://localhost:1234](http://localhost:1234) to see the app in action
- As you follow along, you can also take a look at the solution branches:
  - [Solution 1: Introduced OpenAI API](https://github.com/DevRocketCode/plagiarism-detection-service/compare/solution-1?expand=1)
  - [Solution 2: Formatted OpenAI response in a more helpful way](https://github.com/DevRocketCode/plagiarism-detection-service/compare/solution-2?expand=1)

### Understanding the project
Take a look through the source code to get a sense of how the project is structured.
- Client:
  - All client-side code (React) is in the `client/src` directory. 
  - We'll be working exclusively in `client/src/App.tsx` for this tutorial.

The Front end is a basic React app that allows the user to enter text and submit it to the server for processing.

- Server:
  - All server-side code (Express) is in the `server/src` directory.
  - We'll be working in both `server/src/app.ts` and `server/src/util.ts` for this tutorial.
  
The server then returns the response to the client, which will display it in a helpful way.

## Requesting a Completion
First, we'll need to build our completion request. Work inside `server/src/util.ts` for this section.

### The Docs
Go to the [OpenAI API Docs](https://platform.openai.com/docs/api-reference/completions/create) and read the docs for the `Create Completion` endpoint.  

### The Config
We'll copy the first portion of this code and add it to our module:
```ts
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
```

### The Request
Next, we need to create and export the function that will allow us to call the API.

Add the following function to `server/src/util.ts`
```ts
export const checkForPlagiarism = async (textBody: string): Promise<string | undefined> => {

  // we build a prompt, not just passing the text directly.
  const prompt = `Please check the following text for plagiarism. Here is the text: "${textBody}". Give detail on why you think this is plagiarized or not. If it is likely a quote, it should be categorized as "Plagiarized", but give the explanation that it is a quote.`;
  const response = await openai.createCompletion({
    // different models are better at some things than others
    // for example, to moderate text, use text-moderation-stable
    model: "text-davinci-003", 
    // the composed prompt from above
    prompt,
    // keeping this number low will allow you to conserve your API credits
    // but we need to increase it to get a long enough description 
    // of the reason why something is categorized the way it is
    max_tokens: 1000,
    // temperature is how random the text response is
    // 0 is deterministic (consistent), 2 is very random
    // defaults to 1
    temperature: 0,
  });
  
  // we return the first choice's text
  return response?.data?.choices[0]?.text;
}
```

### Forwarding The Response
Now that we have our completion request, we need to forward the response to the client.  We'll do this in `server/src/app.ts`.

First, we'll import our function:
```ts
import { checkForPlagiarism } from './util';
```

Then, we'll replace this line...
```ts
    const verdict = 'NOT YET IMPLEMENTED. This is where the response will be returned.'
```
...with this:
```ts
    const verdict = await checkForPlagiarism(textBody);
```
Now we are passing the text body to our function, and awaiting the response. This verdict gets passed back to the front end on the next line.

### Testing It Out
Now that we have our completion request, we need to test it out.  Go to [http://localhost:1234](http://localhost:1234), enter the single word "something" and click "Submit".  You should see a response that looks something like this:
> This is not plagiarized because it is an incomplete sentence.

Now let's try something from Edgar Allen Poe's "The Raven":
> Once upon a midnight dreary, while I pondered, weak and weary

You should see a response that looks something like this:
> This is plagiarized because it is a quote from Edgar Allan Poe's poem 'The Raven'.

It is already quite astonishing how accurate Chat's responses are, but we can do better.  Let's format the response in a more helpful way.

## Formatting the Response

Inside the `checkForPlagiarism` function, we'll change our context for the prompt a bit. Let's change it so that we request valid json back, with two useful properties: `verdict` and `detail`.
```ts
const prompt = `Please check the following text for plagiarism. Here is the text: "${textBody}". Give detail on why you think this is plagiarized or not. Respond with only valid json object in this format: { "verdict": "Plagiarized", "detail": "This is plagiarized because..." }. If it is likely a quote, "verdict" should come back as "Plagiarized". If it is likely unique, "verdict" should come back as "Not plagiarized".`;
```
Now, if we test our App, we notice that the Verdict comes back as something like:
```json
{
  "verdict": "Plagiarized",
  "detail": "This is plagiarized because it is a quote from Edgar Allan Poe's poem 'The Raven'."
}
```
This is amazing! Chat is also able to consistently return responses in a json-valid format, something we can use in our application.  So let's update our React app:

## Updating the React App
We'll be working inside `client/src/App.tsx` for this section.

We'll need 2 more pieces of state, to hold our detail and whether or not to show our detail.
```tsx
  const [detail, setDetail] = useState(undefined);
  const [showDetail, setShowDetail] = useState(false);
```
Next, we need to parse the JSON response and update the `output` state to only hold the verdict
```tsx
try {
  // wrap everything in a try/catch block because we are parsing json, and we're not 100% sure the response from ChatGPT will be valid json
  const json = JSON.parse(output);
  // set the output to the verdict
  if (json.verdict) {
    setOutput(json.verdict);
  }
  // set the detail to the detail
  if (json.detail) {
    setDetail(json.detail);
  }
  return;
} catch (error) {
  if (error instanceof Error) {
    // just in case json doesn't parse correctly, we'll set the output to the raw response
    setOutput(output);
    return;
  }
}
```

Now, inside our "Verdict" div, we need to add a button to show the detail, and a way to hide it:
```tsx
{
  detail && <button onClick={() => setShowDetail(!showDetail)}>Show Explanation</button>
}
```

Finally, if we are currently showing the detail, display a div with the detail in it
```tsx
{
  showDetail && <div>
    <h2>Explanation</h2>
    <p>{detail}</p>
  </div>
}
```

## Testing It Out
Now, if we test our application as we did before, we should see a simple "Plagiarized" or "Not Plagiarized" in the verdict box, along with a details button that can toggle the further explanation.

## Conclusion
We've now built a plagiarism checker using ChatGPT and OpenAI's API.  This is a very simple example of what is possible with these tools.  You can use this as a starting point to build your own plagiarism checker, or you can use it as a starting point to build something else entirely.  The possibilities are endless!
