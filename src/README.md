# ESS Frontend Assignment

Develop two solutions that are cross-platform compatible and delivers the same functionality and styling that exists in the index.html page without the use of an iframe.

## Getting Started

1. open index.html in an iframe supported browser to be able to see the iframe's content (ex: Chrome)
2. Code away!

## Requirements

- Come up with two solutions to solve this problem.
- In the included README.md please include a brief explanation as to why each solution was chosen.
- ** The index.html styling should only be dependent on the main.css file. **
- **The content that was previously rendered by the iframe should not be affected by the main.css file but should still have styling. **
- The solutions should be compatible across all browsers (Edge, IE, Chrome, Firefox, Mobile)

## For each solution please provide a brief explanation below.

This solution converts the original code to a more modern javascript framework, React. The code that was originally in the `<iframe>` has been converted into components, and the components are controlled via `useState` in the root component. I chose to convert it into a React app because as the site grows in size and complexity, React can help by efficiently re-rendering the DOM as needed and offers a multitude of libraries to help customize components as needed.
