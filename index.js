function getFirstSelector(selector){
  let el = document.querySelector(selector);
  return el;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let rnklists =  document.querySelectorAll('.ranked-list') ;
  for(var i=0; i < rnklists.length; i++){
    rnklists[i].innerHTML = parseInt(rnklists[i].innerHTML)+n ;
  }
}

function deepestChild(){
  let dchild = document.getElementById('grand-node').querySelectorAll('div');
  for(var i=0; i < dchild.length-1 ; i++){
    let result = 
  }
}