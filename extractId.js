fs.readFile('id.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file: ', err);
      return;
    }
  
    // Define a regular expression to match the Id
    const regex = /-i (\w+)/;
    const match = data.match(regex);
  
    if (match && match[1]) {
      const extractedId = match[1];
      console.log(`Extracted Id: ${extractedId}`);
    } else {
      console.log('Id not found in the file content.');
    }
  });