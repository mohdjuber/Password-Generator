function genPassword() {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()<>?/";
    let passwordLength = 11;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let RandomNumber = Math.floor(Math.random() * chars.length);
        password += chars.slice(RandomNumber, RandomNumber + 1);
    }
    document.getElementById("password").value = password;
}
function copyPassword() {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
    alert("Password Copied");
}