//Accessing all buttons
const buttons = document.querySelectorAll('.button');
//console.log(buttons);

//Accessing body
const body = document.querySelector('body');
//console.log(body);

//Buttons return in form of NodeList so forEach loop can be applied
buttons.forEach(function (button) {
 // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target)

    
switch (e.target.id) {
  case 'grey':
    body.style.backgroundColor = e.target.id
    break;

  case 'white':
    body.style.backgroundColor = e.target.id
   break;

  case 'blue':
    body.style.backgroundColor = e.target.id
    break;

  case 'yellow':
    body.style.backgroundColor = e.target.id
    break; 
    
  case 'orange':
    body.style.backgroundColor = e.target.id
    break;   

  default:
      break;
}
    
  });
});
