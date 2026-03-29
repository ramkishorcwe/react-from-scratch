
// Menuplate Dom using js
console.log(window.React); // Browser environment
console.log(window.ReactDOM); // Browser environment

// const root = document.getElementById('root');
// root.innerHTML = '<h1>Hello, World!</h1><p>This is a simple Node.js application.</p><p>It demonstrates how to use console.log to output messages to the console.</p>';

// const h1 = document.createElement('h1');
// h1.innerText = 'Hello, World!';
// root.appendChild(h1);

// const h2 = document.createElement('h2');
// h2.textContent = 'Hello, World!';
// root.appendChild(h2);

// const p = document.createElement('p');
// p.textContent = 'This is a simple Node.js application.';
// p.textContent += ' It demonstrates how to use console.log to output messages to the console.';
// p.setAttribute('class', 'paragraph');
// p.id = 'paragraph';
// p.translate = 'yes';
// p.attributes.setNamedItem(document.createAttribute('data-info'));
// p.attributes['data-info'].value = 'This is a paragraph element.';
// p.attributes = {
//   'data-info': 'This is a paragraph element.',
//   'data-type': 'text'
// };
// root.appendChild(p);




// React and React Dom
// const element = React.createElement('h1', null, 'Hello, World!');
const element = React.createElement('h1', {}, 'Hello, World!');
const targetRootElement = document.getElementById('root');
// const root = ReactDom.createRoot(targetRootElement);
const root = ReactDOM.createRoot(targetRootElement);
root.render(element);
// window.ReactDom.render(element, root);
