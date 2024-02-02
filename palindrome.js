function palindromeCheck(str) {
    const regEx = /[\W_]/g;  //creates a regular expression (regEx) to catch all Non  AlphaNumeric Characters including underscore
   
    const sameCase = str.toLowerCase().replace(regEx,  ""); // converts the given string  into lower case and also replaces all the matching regEx with nothing i.e deleting it
   
    const rev = sameCase.split("") .reverse().join(""); //Splits the converted string into an array, reverses the array, then joins it back to make a new string (reversed string)
    if(rev === sameCase) { return true }; //If condition that returns the boolean: True when the reversed string is strictly the same as the converted string
    return false; //Returns false when it's not
}

palindromeCheck("eve"); //This should console true