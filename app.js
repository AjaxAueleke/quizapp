let fname = document.getElementById('f-name');
let lname = document.getElementById('l-name');
let userName = '';

let form = document.getElementsByClassName('form')[0];





var validation = () => {
    if (fname.value == '' || lname.value == '') {
        alert("Fields should be filled");
        fname.value = '';
        lname.value = '';
    } else {
       userName = fname + ' ' + lname;
       form.style.display = 'none';
       
    }

}