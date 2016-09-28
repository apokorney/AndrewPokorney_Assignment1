/**
 * Created by andrew.pokorney on 9/23/2016.
 */


var reader = require('fs');                                 //'fs' is the node file system wrapper
reader.readFile                                             //create the readFile obj
("Assignment1_names-1.txt", 'utf8', function(err,textData)  //so 'utf8' gives a blank unicode space, need that function in there too.
{
    textData = textData.slice(1, 100000);                   //syntax here is.... 'arr.slice([begin[, end]])'
        textData.split('","')                               //i'm  spliting by " , " here
            .sort()                                         //sorts array elements
            .forEach(function(simpsons){                    //forEach() method executes a provided function once per array element
                console.log(simpsons) })                    //print out the sorted simpons arry
}
);



//Some original stuff, keeping for reference
// var fs = require("fs");
// var text = fs.readFileSync("C:\\Users\\andrew.pokorney\\WebstormProjects\\Scratch\\Assignment1_names-1.txt" + '' );
// var textByLine = text.split('","');
// console.log(fs);
