---
title: 7 Common Mistakes Junior Developers Make
description: ...and How to Avoid Them
youTubeVideo: 3bqohVu_zmw
type: exclusive
---

As a junior developer, you're bound to make mistakes. But don't worry, we've got your back. Here are 7 common mistakes that junior developers make and how to avoid them.

## 1. Not Using Version Control


Version control is your best friend. It helps you keep track of your code changes, collaborate with your team, and revert to previous versions if needed. Don't be the developer who doesn't use version control.

```bash
# Initialize a Git repository in your project folder
git init

# Add all files to the staging area
git add .

# Commit your changes with a meaningful message
git commit -m "Initial commit"

```
## 2. Ignoring Error Messages
Error messages may seem like the bane of your existence, but they're actually your friend. They tell you what's wrong with your code and how to fix it. Don't ignore them!

```js
// Don't ignore error messages!
if (myVar === undefined) {
  console.log("myVar is undefined!");
}

```
## 3. Overcomplicating Code
Simplicity is key. Don't try to reinvent the wheel or write overly complex code. Keep it simple and clean.

```js
// Instead of this...
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 10 && myArray[i] < 20) {
    console.log(myArray[i]);
  }
}

// ...do this
myArray.filter(num => num > 10 && num < 20).forEach(num => console.log(num));

```
## 4. Not Testing Code
Testing your code is essential. It helps you catch bugs early and ensures that your code works as expected. Don't skip testing!

```js
// Use a testing framework like Jest
test("addition works correctly", () => {
  expect(add(2, 2)).toBe(4);
});

```
## 5. Hardcoding Values
Hardcoding values may work in the short term, but it's not scalable or maintainable. Use variables or constants instead.

```js
// Instead of this...
function calculateTax(price) {
  return price * 0.2;
}

// ...do this
const TAX_RATE = 0.2;
function calculateTax(price) {
  return price * TAX_RATE;
}

```
## 6. Not Using Comments
Comments are your friend. They help you and your team understand what your code does and why. Don't be afraid to use them!

```js
// Use comments to explain what your code does
function calculateArea(width, height) {
  // Calculate the area by multiplying width and height
  const area = width * height;
  return area;
}

```
## 7. Copying and Pasting Code
Copying and pasting code may seem like a quick solution, but it's not a good habit to have. It can lead to errors and make your code harder to maintain. Write your own code!

```js
// Instead of copying and pasting code...
function sum(a, b) {
  return a + b;
}

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// ...write your own code
function mean(numbers) {
  return numbers.reduce((total, num) => total + num) / numbers.length;
}

```

That's it for today! Avoid these 7 common mistakes and you will be well on your way to becoming a great developer. Stay tuned for more tips and tricks to level up your skills!

We hope you found this lesson helpful and engaging. Remember, as a junior developer, you are bound to make mistakes, but it's important to learn from them and keep improving. Keep coding, keep learning, and keep growing!
