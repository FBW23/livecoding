const fibonnaci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const div = document.createElement('div');
div.style['background-color'] = 'black';
div.style.color = 'white';
div.style['font-family'] = 'monospace';
fibonnaci.forEach(number => {
    let span = document.createElement('span');
    let text = document.createTextNode(number + ' ');
    span.style['font-size'] = `${number}px`;
    span.appendChild(text);
    div.appendChild(span);
});
document.body.appendChild(div);


const students = [{
        name: 'Inkar Haber',
        age: '27',
        location: 'Tehran'
    },
    {
        name: 'Joakim MacDermott',
        age: '31',
        location: 'Birmingham'
    },
    {
        name: 'Eilert Schwarz',
        age: '52',
        location: 'Saint Petersburg'
    }
];
const listElem = document.createElement('ul');

students.sort((studentA, studentB) => studentA.name.localeCompare(studentB.name))
    .map(students => {
        let listItem = document.createElement('li');
        listItem.innerText =`${students.name} is ${students.age} years old from ${students.location}`;
        listItem.classList.add('student-item');
        return listItem;
    })
    .forEach(listItem => listElem.appendChild(listItem));
document.body.appendChild(listElem);

let animals = ['chicken', 'cow', 'pigeon', 'duck', 'pig', 'dog', 'sheep', 'goat', 'horse'];

animals.filter(animal => animal.includes('o'))
.map(animal => {
    let image = document.createElement('img');
    image.src = `images/${animal}.jpg`;
    image.dataset.animal = animal;
    return image;

})
.forEach(image => {
    let container = document.createElement('div');
    container.className = 'animal-container';
    container.appendChild(image);
    document.body.appendChild(container);
})

const triggers = document.querySelectorAll('#trigger-container .trigger');
triggers.forEach(trigger => trigger.addEventListener('click', event => {
    event.preventDefault();
    let currentTrigger = event.target;
    let triggerParent = currentTrigger.parentElement;

    for(let i= 0; i< 100; i++) {
        let paragraph = document.createElement('p');
        paragraph.innerText = 'Haha, you clicked the trigger!';
        //triggerParent.appendChild(paragraph);
    }
}))

const triggerContainer = document.querySelector('#trigger-container');
triggerContainer.addEventListener('click', event => {
    if(!event.target.classList.contains('trigger')) return;

    event.preventDefault();
    let currentTrigger = event.target;
    let triggerParent = event.currentTarget;

    for(let i= 0; i< 100; i++) {
        let paragraph = document.createElement('p');
        paragraph.innerText = 'Haha, you clicked the trigger!';
        //triggerParent.appendChild(paragraph);
    }
})

triggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
        event.preventDefault();

        let currentTrigger = event.target;
        let triggerParent = event.currentTarget;

        for(let i= 0; i< 100; i++) {
            let paragraph = document.createElement('p');
            paragraph.innerText = 'Haha, you clicked the trigger!';
            triggerParent.appendChild(paragraph);
        }
    })
});