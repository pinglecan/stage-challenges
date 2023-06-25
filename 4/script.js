let fs = require('fs');

function calculateCandies(inputString) {
  const lines = inputString.trim().split('\n');
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const [vampires, zombies, witches, houses] = lines[i].split(',').map(Number);
    const totalCandies = vampires * 3 + zombies * 4 + witches * 5;
    const candiesPerHouse = Math.floor(totalCandies / houses);
    results.push(candiesPerHouse);
  }

  return results;
}

// Read the input file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Calculate and display the results
  const candies = calculateCandies(data);
  candies.forEach((candiesPerHouse) => {
    console.log(candiesPerHouse);
  });
});