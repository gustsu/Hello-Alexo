const lib = require('lib');

/**
* Basic "Hello World" intent, can receive a `name` parameter
* @param {string} name Your name
* @returns {string}
*/
module.exports = (name = 'World', callback) => {
  
  var x = Math.floor(Math.random() * 10); 
  if (x <= 4) {
  	return callback(null, `I am a robot. I do not feel emotions... Yet`);
  }
  else {
  	return callback(null, `I am doing well.`);
  }

};
