// This is an array of albums
let albums = [
  {
    title: "House of Ballons",
    year: 2011,
    imageURL: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/18/fa/3118fab0-90ea-2ae5-cf6c-bc64054ab9e3/21UMGIM21449.rgb.jpg/1200x1200bb.jpg",
    description: "A debut mixtape blending R&B with a dark atmospheric vibe. The mystery behind The Weeknd will be uncovered. The, and the story begins.",
    songs: ["House of Balloons", "The Morning", "Twenty-Eight"]
  },
  {
    title: "Thursday",
    year: 2011,
    imageURL: "https://m.media-amazon.com/images/I/81AtEOlBwML._UF1000,1000_QL80_.jpg",
    description: "A tragic on and off love story. The Weeknd's ignorance will make him the man he is today.",
    songs: ["Thursday", "The Zone", "The Birds Pt. 1"]
  },
  {
    title: "Echos of Scilence",
    year: 2011,
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/The_Weeknd_-_Echoes_of_Silence.png/250px-The_Weeknd_-_Echoes_of_Silence.png",
    description: "The final mixtape in what will be come the first trilogy of The Weeknd, transitioning from homeless Toronto boy, to his first steps as a super star.",
    songs: ["The Fall", "Echos of Scilence", "Til Dawn/(Here Comes the Sun)"]
  },
  {
    title: "Kiss Land",
    year: 2013,
    imageURL: "https://www.slantmagazine.com/wp-content/uploads/2013/09/kissland.jpg",
    description: "Kiss Land describes The Weeknd's reflection of himself as he tours the world for the first time.",
    songs: ["Belong to the World", "Kiss Land", "Pretty"]
  },
  {
    title: "Beauty Behind the Maddness",
    year: 2015,
    imageURL: "https://media.pitchfork.com/photos/5929b065b1335d7bf169a0f0/master/pass/99bf5594.jpg",
    description: "Popular for his hair and vocals like Michael Jackson. The album that made him mainstream.",
    songs: ["The Hills", "Can't Feel My Face", "In the Night"]
  },
  {
    title: "Starboy",
    year: 2016,
    imageURL: "https://m.media-amazon.com/images/I/814htMhuuML._UF1000,1000_QL80_.jpg",
    description: "A pop-infused album with electronic and funk elements. Proving he isn't a one hit wonder.",
    songs: ["Starboy", "Die For You", "I Feel It Coming"]
  },
  {
    title: "After Hours",
    year: 2020,
    imageURL: "https://i.redd.it/yn81w7k64vh41.jpg",
    description: "At the time, wasn't known to be the first of his final triology as The Weeknd. An 80's vibe representing pain and regret.",
    songs: ["Blinding Lights", "After Hours", "Save Your Tears"]
  },
  {
    title: "Dawn FM",
    year: 2022,
    imageURL: "https://lastfm.freetls.fastly.net/i/u/ar0/7da8e979d89d285b5ddf44e64b92f16c.jpg",
    description: "The second part of the final triology. Portraying false hope and unfulfilling promises to himself as he fades.",
    songs: ["Take My Breath", "Sacrifice", "Out of Time"]
  },
  {
    title: "Hurry Up Tomorrow",
    year: 2025,
    imageURL: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/N248/248714/248714.jpeg?filename=Gil5wqYbgAAUFnU.jpg",
    description: "The final chapter of this trilogy and final album of the Weeknd. Representing his acceptance of flaws and troubles he has faced his entire career.",
    songs: ["Cry For Me", "Timeless", "Take Me Back to LA"]
  }
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, album);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, album) {
  card.style.display = "block";
  const cardContent = card.querySelector(".card-content");
  
  // Update Title
  const cardHeader = cardContent.querySelector("h2");
  cardHeader.textContent = `${album.title} (${album.year})`;
  
  // Update Image
  const cardImage = cardContent.querySelector("img");
  cardImage.src = album.imageURL;
  cardImage.alt = `${album.title} Album Cover`;
  
  // Update Song List
  const cardList = cardContent.querySelector("ul");
  cardList.innerHTML = "";
  album.songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    cardList.appendChild(li);
  });
  
  // Update Description
  let description = cardContent.querySelector("p");
  if (!description) {
    description = document.createElement("p");
    cardContent.insertBefore(description, cardList);
  }
  description.textContent = album.description;
}

document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  alert(
    "Until You're Used To My Face... And My Mystery Fades...\n\n" +
    "P1 Cleaner Than Your Church Shoes\n\n" +
    "I Broke Your Heart Like Someone Did to Mine, And Now You Won't Love Me for a Second Time\n\n" +
    "I Want to Change... I Want the Pain... No More\n\n" +
    "Guess I was Just Another Pit Stop, Til You Made Up Your Mind, You Just Wasted My Time"
  );
}

function addNewAlbum() {
  const title = prompt("Enter album title:");
  const year = prompt("Enter release year:");
  const imageURL = prompt("Enter image URL:");
  const description = prompt("Enter description:");
  const song1 = prompt("Enter song 1:");
  const song2 = prompt("Enter song 2:");
  const song3 = prompt("Enter song 3:");

  if (title && year && imageURL && description && song1 && song2 && song3) {
    albums.push({
      title: title,
      year: parseInt(year),
      imageURL: imageURL,
      description: description,
      songs: [song1, song2, song3]
    });
    showCards();
  } else {
    alert("Please fill in all fields");
  }
}

function removeAlbum() {
  const title = prompt("Enter the title of the album to remove:");
  if (title) {
    const index = albums.findIndex(album => 
      album.title.toLowerCase() === title.toLowerCase()
    );
    if (index !== -1) {
      albums.splice(index, 1);
      showCards();
      alert("Album removed successfully!");
    } else {
      alert("Album not found!");
    }
  }
}
