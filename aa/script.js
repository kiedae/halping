var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // make your characters an array you need seperate arrays for each char type but this is what you would do
    var chars = ['0','1','2','3','4','5','6','7','8','9', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_",];
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
    //    random index is the same as you randomNumber index is just the fancy word the javascript nerds like to use
        var randomIndex = Math.floor(Math.random() * chars.length);
    // this adds the random character to the password
        password += chars[randomIndex];
    }
    // make sure to include the return
    return password;
}

function writePassword() {
    // calls the function to generate the password
    var password = generatePassword();
    // prints the password to the password box in html
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);