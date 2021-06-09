let address = document.querySelector("#addressUser");

for(let index = 1; index <= 26; index += 1){
  console.log(index);
  let option = document.createElement('OPTION');
  option.setAttribute("value", "state");
  let optionName = document.createTextNode("Estado " + index); 
  option.appendChild(optionName);
  address.appendChild(option);
}