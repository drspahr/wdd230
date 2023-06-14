const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetsInfo(url) {
    const response = await fetch(url);
    if (response.ok) {
        const prophets = await response.json();
        displayProphets(prophets.prophets);
    }
}

getProphetsInfo(url);

const displayProphets = (prophet) => {
  const cards = document.querySelector('div.cards');
  
  prophet.forEach((prophet) => {
    // Create the elements to add to the div.cards
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let portrait = document.createElement('img');
    
    // Set h2 header and birthdate and birthplace
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.innerHTML = `Date of birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
    
    // Set attributes of the image
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    
    // Append elements to section
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(portrait);
    
    // Append section to division
    cards.appendChild(card);
  });
}

