const para= React.createElement("p",{id:"para"},"FDGHBFhgfhgfhy");
// Clear the existing HTML content
const heading= React.createElement("h1",{className:"helo"},"hello boss","vh",para);
console.log(heading,"boss");
// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(heading);
