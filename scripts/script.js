const button=document.getElementById('myButton');

button.onclick= function() {
    alert('Button clicked-DOM property method')
    
}
let btn=document.getElementById("button");
let output=document.getElementById('output');
btn.addEventListener('click',function() {
    output.textContent='button clicked-addEventListener \n',
});
//different events
let imput=document.getElementById('input Box')

// keydown event
Input.addEventListener('keydown',function(event)(){
console.log( "You pressed this key:", event.key);
});

// focus event
 Input.addEventListener('focus',function(){
 Input.style.backgrpundcolor='blue';
});

        
// blur event
ImageCapture.addEventListener('blur',function(){
Input.style.backgroundcolor='yellow';
});

// drag item
let gragitem= document.getElementById('dragitem');
let dropzone=document.getElementById('dropxzone');

dragitem.addEventListener('dragstar', function (event){
    event.datatransfer.setdata('id',event.target.id);
});
    dropzone.addEventListener('drop',function(event){
        event.preventDefault();
        let id=event.dataTransfer.getData('id');
        let draggableElement=document.getElementById(id);
        dropzone.appendChild(draggableElement);
        dropzone.style.backgroundcolor='green';
    });
}// validate form
function ValidateSignup(){
    let username=dropzone.getElementById('username').value.trim();
    let email-document.getElementById('Email').value.trim();
    if(username===''|| email==='){
        alert('All Fields are required');
        return false;
            }
            function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
const email = "example@domain.com";
console.log(validateEmail
                
            }
}
    
