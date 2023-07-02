let log = new Log(document.querySelector('.log'));

let char = new Sorcerer('Gandalf');
let monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);
stage.start();

document.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicou na tag a');
})