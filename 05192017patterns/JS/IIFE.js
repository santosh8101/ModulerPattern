(function () {
    //this function or module can be used for adding an event for html elements or any actions which are independent and should not be global.  
    document.getElementById('submit').addEventListener('click', function () {
        console.log('i am clicked');
    });
    console.log("My first Immeditaley invoked function expression");
})();
