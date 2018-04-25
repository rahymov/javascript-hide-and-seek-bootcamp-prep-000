function getFirstSelector(selector){
  let el = document.querySelector(selector);
  return el;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let parsed =  document.querySelector('ranked-list') ;
  return parsed + n;
}

function deepestChild(){
  
}