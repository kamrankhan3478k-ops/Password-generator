function GeneratePassword() {
    // Character Set
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    // Loop to generate a 12-character password
    for (let i = 0; i < 12; i++) {
        let randomindex = Math.floor(Math.random() * characters.length);
        password += characters[randomindex];
    }

    // Display the generated password
    document.getElementById("passwordDisplay").value = password;
} function copyPassword(){
    let copyText = document.getElementById("passwordDisplay");
    copyText.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}