// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 100,
  id: 0,
};

console.log(user.name);
