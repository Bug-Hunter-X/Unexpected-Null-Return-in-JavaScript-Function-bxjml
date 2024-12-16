# Unexpected Null Return in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript function handling of null or undefined values. The function `foo` is intended to add two numbers. However, the current implementation returns `null` if either input is `null`, which is not necessarily intuitive or expected in all cases. This can cause unexpected behavior in larger applications.

## Bug

The `bug.js` file contains the erroneous implementation of the `foo` function.  If either `a` or `b` is null, the function immediately returns null, preventing further execution. This is problematic if handling of null values could be achieved differently, or if the function should produce a more meaningful outcome, such as throwing an error or returning a default value.

## Solution

The `bugSolution.js` file provides a revised version of the `foo` function. It checks for null values but handles them more gracefully, either returning 0 as a default or throwing an error to highlight the unexpected input.