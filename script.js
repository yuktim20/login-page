document.getElementById('loginForm').addEventListener('submit' ,function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const password=document.getElementById('password').value;
    console.log(name);
    console.log(password);
    alert("Form submitted successfully!\nName:-"+name+"\nPassword:"+password+"\nThanks for login...");
});