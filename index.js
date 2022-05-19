const body = document.body

const p = document.querySelector('p')
const container = document.querySelector('.container');
const input = document.querySelector('input');
const btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
  e.preventDefault()

  if(input.value == ''){
    alert('type something');
  }else{
  const div = document.createElement('div');
  const text = document.createTextNode(input.value);
  const button = document.createElement('button');

  container.append(div);
  div.append(text);
  div.append(button);


  div.style.backgroundColor = 'blue';
  div.style.padding = '1rem';
  div.style.color = 'white';
  div.style.textAlign = 'center';
  div.style.border = '1px solid white';

  button.textContent = 'Delete';
  button.style.marginLeft = '40rem';
  button.setAttribute('class', 'btn btn-danger');



  button.addEventListener('click', () => {
    div.remove()
    button.remove()
  });
  }
  input.value = '';
});





