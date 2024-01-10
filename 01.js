function checkHTTPS(s){
	return s.toLowerCase().startsWith("https://")
}

console.log(checkHTTPS("https://test.com/"));
console.log(checkHTTPS("test.com"));
console.log(checkHTTPS("HTTPs://test.com/"));
