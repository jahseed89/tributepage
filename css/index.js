
const oldName = document.getElementById('title');
const newName = oldName.getElementByTagName("h1");
document.getElementById('empty').innerHTML = 'Gone, but never forgotten' + " " +newName[0].innerHTML; 