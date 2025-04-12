/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// This is an array of strings (Weeknd ALbums)
let albums = [
  {
    title: "House of Ballons",
    year: 2011,
    imageURL: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/18/fa/3118fab0-90ea-2ae5-cf6c-bc64054ab9e3/21UMGIM21449.rgb.jpg/1200x1200bb.jpg"
    description: "A debut mixtape blending R&B with a dark atmospheric vibe. The mystery behind The Weeknd will be uncovered. The, and the story begins."
    songs: ["House of Balloons", "The Morning", "Twenty-Eight"]
  },
  {
    title: "Thursday",
    year: 2011,
    imageURL: "https://m.media-amazon.com/images/I/81AtEOlBwML._UF1000,1000_QL80_.jpg"
    description: "A tragic on and off love story. The Weeknd's ignorance will make him the man he is today."
    songs: ["Thursday", "The Zone", "The Birds Pt. 1"]
  },
  {
    title: "Echos of Scilence",
    year: 2011,
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/The_Weeknd_-_Echoes_of_Silence.png/250px-The_Weeknd_-_Echoes_of_Silence.png"
    description: "The final mixtape in what will be come the first trilogy of The Weeknd, transitioning from homeless Toronto boy, to his first steps as a super star."
    songs: ["The Fall", "Echos of Scilence", "Til Dawn/(Here Comes the Sun)"]
  },
  {
    title: "Kiss Land",
    year: 2013,
    imageURL: "https://www.slantmagazine.com/wp-content/uploads/2013/09/kissland.jpg"
    description: "Kiss Land describes The Weeknd's reflection of himself as he tours the world for the first time."
    songs: ["Belong to the World", "Kiss Land", "Pretty"]
  },
  {
    title: "Beauty Behind the Maddness",
    year: 2015,
    imageURL: "https://media.pitchfork.com/photos/5929b065b1335d7bf169a0f0/master/pass/99bf5594.jpg"
    description: "Popular for his hair and vocals like Michael Jackson. The album that made him mainstream."
    songs: ["The Hills", "Can't Feel My Face", "In the Night"]
  },
  {
    title: "Starboy",
    year: 2016,
    imageURL: "https://m.media-amazon.com/images/I/814htMhuuML._UF1000,1000_QL80_.jpg"
    description: "A pop-infused album with electronic and funk elements. Proving he isn't a one hit wonder."
    songs: ["Starboy", "Die For You", "I Feel It Coming"]
  },
  {
    title: "After Hours",
    year: 2020,
    imageURL: "https://i.redd.it/yn81w7k64vh41.jpg"
    description: "At the time, wasn't known to be the first of his final triology as The Weeknd. An 80's vibe representing pain and regret."
    songs: ["Blinding Lights", "After Hours", "Save Your Tears"]
  },
  {
    title: "Dawn FM",
    year: 2022,
    imageURL: "https://lastfm.freetls.fastly.net/i/u/ar0/7da8e979d89d285b5ddf44e64b92f16c.jpg"
    description: "The second part of the final triology. Portraying false hope and unfulfilling promises to himself as he fades."
    songs: ["Take My Breath", "Sacrifice", "Ot of Time"]
  },
  {
    title: "Hurry Up Tommorow",
    year: 2025,
    imageURL: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/N248/248714/248714.jpeg?filename=Gil5wqYbgAAUFnU.jpg"
    description: "The final chapter of this triolgy and final album of the Weeknd. Representing his acceptence of flaws and troubles he ahs faced his entire career."
    songs: ["Cry For Me", "Timeless", "Take Me Back to LA"]
  },
]

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    const album = albums[i];
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, album); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, album) {
  card.style.display = "block";

  const cardHeader = card.querySelector(".card-content");

  //Update Title
  const cardHeader = cardContent.querySelector("h2");
  cardHeader.textContext = '${album.title} (${album.year})';

  //Update Image
  const cardImage = cardContent.querySelector("img");
  cardImage.src = album.imageURL;
  cardImage.alt = '${album.title} Album Cover';

  //Update Song List
  const cardList = cardContent.querySelector("ul")
  cardLit.innerHTML = ""; //Clear exisiting list items
  album.songs.forEach (song => {
    const li = document.createMelement("li"):
    li.textContent = song;
    cardList.appendChild(li);
  });

  let description = cardContent.querySelector("p");
  if (!description){
    description = document.createElement("p");
    cardContent.insertBefore(description, cardList);
  }
  description.textContent = album.description;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", album.title);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Until You're Used To My Face... And My Mystery Fades..."
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
