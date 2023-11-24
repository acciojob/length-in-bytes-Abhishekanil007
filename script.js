const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str], { type: 'text/plain;charset=utf-8'});

	return blob.size;
};

// Do not change the code below 
const str = prompt("Enter some string.");
alert(byteSize(str));
