function getFirstSelector(selector) {
  let response = document.querySelector(selector)
  return(response)
}

function nestedTarget() {
  let response = document.querySelector('#nested .target')
  return(response)
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
 
  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild() {
  let levels = document.getElementById('grand-node').querySelectorAll('div');
  let response = levels[levels.length-1];
  return(response);
}