/*
Assignment: Moment 4 - TypeScript
Author: Albin Rönnkvist
*/



declare function require(name:string); // Make it possible to use require()-method in TypeScript

class WordCount {

    // Variables
    public file: string;
    public fs = require('fs'); // Include File System module with the reqiure()-method
    
    // Constructor
    constructor (name: string) {
        this.file = name;
    }



    // Word-counter
    wordCounter() {
        this.fs.readFile(this.file, 'utf8', function(err, data) { // Read all of the file content with fs.readFile()-method
            if (err) throw err;



            // Strip string and Split it into an array 
            let reg:RegExp = /\n| /; // Strip of all new lines and blanks
            let cleanUnfiltered = data.split(reg); // Split the string-object into an array of substrings with "reg" as separator
            let clean = cleanUnfiltered.filter(v=>v!=''); // Remove empty strings



            // Loop the "clean"-array & count amount of occurences for each element
            let count = {}; // Declare a new empty object

            for(let i of clean) {
                count[i] = (count[i]||0) + 1;
            }



            // Sort array by amount of occurenses, descending
            var sorted = []; // Declare a new array
            for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
            sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
            sorted.reverse(); // Reverse the result array



            // Logs
            // Welcome / explanation
            console.log("\x1b[34m%s\x1b[0m", "***************************");
            console.log("\x1b[34m%s\x1b[0m", "* Welcome to WordCounter! *");
            console.log("\x1b[34m%s\x1b[0m", "***************************\n");

            // Top 10 occuring words
            console.log("\x1b[36m%s\x1b[0m", "Top 10 words");
            console.log(sorted.slice(0,10));

            // Most occuring word
            console.log("\x1b[36m%s\x1b[0m", "\nMost occuring word:");
            // Loop "sorted"-object & separate keys from values
            var key=[];
            var value=[];
            sorted.forEach(function(item){
            
                for(let i in item) {
                    key.push(i);
                    value.push(item[i]);
                }
            
            });
            console.log("'" + value[0] + "'" + " is the most occuring word.\n"); // Log the value of the first element in the array(most used word)
        });
    }
}

let counter = new WordCount("txt/hitch.txt");
counter.wordCounter();