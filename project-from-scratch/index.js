
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
root.render({});
// window.ReactDom.render(element, root);

// create nested elements div is the parent element and h2 and p are the child elements of div
//h2 and p are siblings
const nestedElement = React.createElement(
  'div',
  null,
  React.createElement('h2', {}, 'Nested Heading'),
  React.createElement('p', {}, 'This is a nested paragraph.')
);

{/* 
results in the following HTML structure:
<div>
  </h2>'Nested Heading'</h2>
  <p>This is a nested paragraph.</p>
</div> */}


// created 4 lavels of nested elements
const deeplyNestedElement = React.createElement(
  'div',
  null,
  React.createElement('h2', {}, 'Deeply Nested Heading'),
  React.createElement('p', {}, React.createElement('span', {}, 'This is a deeply nested paragraph.'))
);
{/*
results in the following HTML structure:
<div>
  <h2>Deeply Nested Heading</h2>
  <p>
    <span>This is a deeply nested paragraph.</span>
  </p>
</div>
*/}


// created 4 lavels of nested button element and add onclick event to the button element and also added some attributes to the button element
const deeplyNestedElementWithButton = React.createElement(
  'div',
  { id: 'parent-div' },
  React.createElement('h2', { className: 'nested-heading' }, 'Deeply Nested Heading'),
  React.createElement('p', {}, React.createElement('span', {}, React.createElement('button ', { onclick: () => console.log('Button clicked!') }, 'This is a deeply nested paragraph.'))))
/*
results in the following HTML structure:
<div id="parent-div">
  <h2 class="nested-heading">Deeply Nested Heading</h2>
  <p>
    <span>
      <button onclick="console.log('Button clicked!')">This is a deeply nested paragraph.</button>
    </span>
  </p>
</div>
*/

