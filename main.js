/*
Assignment: Moment 4 - TypeScript
Authors: Albin Rönnkvist, Mikael Hasselmalm
*/
var fs = require('fs'); // Include File System module with the reqiure()-method
var file = "txt/hitch.txt"; // The text-file
fs.readFile(file, 'utf8', function (err, data) {
    if (err)
        throw err;
    // Split single words from the text-file into an array
    var reg = /\n| /; // Strip of all new lines and blanks
    var cleanUnfiltered = data.split(reg); // Split the string-object into an array of substrings with "reg" as separator
    var clean = cleanUnfiltered.filter(function (v) { return v != ''; }); // Remove empty strings
    // Loop the "clean"-array & count amount of occurences for each element
    var count = {}; // Declare a new empty object
    for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
        var i = clean_1[_i];
        count[i] = (count[i] || 0) + 1;
    }
    // Sort array by amount of occurenses, descending
    var sorted = []; // Declare a new array
    for (var key_1 in count)
        sorted.push([key_1, count[key_1]]); // Create a new array for use - sorted[word] = count;
    sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
    sorted.reverse(); // Reverse the result array
    // Logs
    // Welcome / explanation
    console.log("\x1b[34m%s\x1b[0m", "***************************");
    console.log("\x1b[34m%s\x1b[0m", "* Welcome to WordCounter! *");
    console.log("\x1b[34m%s\x1b[0m", "***************************\n");
    // Top 10 occuring words
    console.log("\x1b[36m%s\x1b[0m", "Top 10");
    console.log("10 most occuring words in the file " + "'" + file + "'" + ":"); // Log explanation
    console.log(sorted.slice(0, 10)); // Log the 10 first elements in the array(10 most used words)
    // Most occuring word
    console.log("\x1b[36m%s\x1b[0m", "\nMost occuring word:");
    // Loop "sorted"-object & separate keys from values
    var key = [];
    var value = [];
    sorted.forEach(function (item) {
        for (var i in item) {
            key.push(i);
            value.push(item[i]);
        }
    });
    console.log("'" + value[0] + "'" + " is the most occuring word.\n"); // Log the value of the first element in the array(most used word)
});
