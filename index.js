
// Import the necessary modules here
const fs = require('fs');
const path = 'notes.txt';

  // Write your code here

  fs.writeFileSync(path, 'The world has enough coders'); //writing some content in 'notes.txt'
  
  const data = fs.readFileSync(path, {encoding : 'utf-8'}); // reading data in 'notes.txt'
  console.log(data);

  fs.appendFileSync(path, ' BE A CODING NINJA!'); // adding other data to available content in 'notes.txt' 
  

  const updatedText = fs.readFileSync(path, {encoding : 'utf-8'}); //reading data again in 'notes.txt'
  console.log(updatedText);
  

