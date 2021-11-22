const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const usCities = [
    'Austin, TX',
    'Phoenix, AZ',
    'Miami, FL',
    'Las Vegas, NV',
    'Dallas, TX',
    'Atlanta, GA',
    'Charlotte, NC',
    'Denver, CO',
    'Charleston, SC',
    'Tampa, FL',
];

// store list items
const listItems = [];

let dragStartIndex;

createList(); 

// Insert list items into DOM
function createList() {
    [...usCities]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((city, index) => {

            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="us-city">${city}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}