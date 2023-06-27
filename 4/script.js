function convertStringToObject(str) {
    const regex = /([a-zA-Z]+):\s(\d+)/g;
    const matches = str.matchAll(regex);
    const obj = {};
  
    for (const match of matches) {
      const key = match[1];
      const value = parseInt(match[2]);
      obj[key] = value;
    }
  
    return obj;
  }
  
  const inputString = "Vampires: 2, Zombies: 1, Witches: 4, Houses: 5";
  const result = convertStringToObject(inputString);
  console.log(result);