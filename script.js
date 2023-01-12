function changeColors(){
    var hex_numbers =   ["0", "1", "2", "3", "4", "5","6", "7",
                        "8", "9", "A", "B", "C", "D", "E", "F"];
    var hexcode = '';

    for(var i=0;i < 6;i++){
    //'for loop' that loops 5 times
        var random_index = Math.floor(Math.random()
        * hex_numbers.length);
        
        hexcode += hex_numbers[random_index]
    }
    document.getElementById("hex-code").innerHTML
    = hexcode;
    document.getElementsByTagName("body")[0].style.
    background = "#" + hexcode;
    
}




//var index = 0;
//starting point for array

//function changeColors(){
//    var colors = [
//        "red","blue", "orange", "yellow", "green", "purple"];
//Array of colors        
    
 //   document.getElementsByTagName("body")[0].style.background = colors[index++];
//Locates the "body" element and determines the array is at 0. Then moves by 1 in 
//the array each time the function is called.
    
 //   if(index > colors.length -1)
//    index = 0;
//loops back to the begining of the array once the last color is shown.
//}