document.getElementById('button').addEventListener('click',setBackground);

function setBackground(){
    let elements = document.getElementsByName('css-property');
    
    for( let index = 0; index < elements.length; index++){
        
        let cssProperty = elements[index].getAttribute('id');
        let cssValue = elements[index].value;

        let div = document.getElementById('modify');

        div.style[cssProperty] = cssValue;
    }
    // console.log(elements);
}