// Array of albums with verified image URLs (using placeholders for reliability)
let albums = [
  {
    title: "House of Balloons",
    year: 2011,
    imageURL: "https://via.placeholder.com/300?text=House+of+Balloons", // Placeholder for testing
    description: "A debut mixtape blending R&B with a dark atmospheric vibe. The mystery behind who The Weeknd is will be uncovered.",
    songs: ["House of Balloons", "The Morning", "Twenty-Eight"]
  },
  {
    title: "Thursday",
    year: 2011,
    imageURL: "https://via.placeholder.com/300?text=Thursday",
    description: "A tragic on and off love story. The Weeknd's ignorance will make him the man he is today.",
    songs: ["Thursday", "The Zone", "The Birds Pt. 1"]
  },
  {
    title: "Echoes of Silence",
    year: 2011,
    imageURL: "https://via.placeholder.com/300?text=Echoes+of+Silence",
    description: "The final mixtape in the first trilogy, transitioning from homeless Toronto boy to his first steps as a superstar.",
    songs: ["The Fall", "Echoes of Silence", "Til Dawn/(Here Comes the Sun)"]
  },
  {
    title: "Kiss Land",
    year: 2013,
    imageURL: "https://via.placeholder.com/300?text=Kiss+Land",
    description: "Kiss Land describes The Weeknd's reflection of himself as he tours the world for the first time.",
    songs: ["Belong to the World", "Kiss Land", "Pretty"]
  },
  {
    title: "Beauty Behind the Madness",
    year: 2015,
    imageURL: "https://via.placeholder.com/300?text=Beauty+Behind+the+Madness",
    description: "Popular for his hair and vocals like Michael Jackson. The album that made him mainstream.",
    songs: ["The Hills", "Can't Feel My Face", "In the Night"]
  },
  {
    title: "Starboy",
    year: 2016,
    imageURL: "https://via.placeholder.com/300?text=Starboy",
    description: "A pop-infused album with electronic and funk elements. Proving he isn't a one-hit wonder.",
    songs: ["Starboy", "Die For You", "I Feel It Coming"]
  },
  {
    title: "After Hours",
    year: 2020,
    imageURL: "https://via.placeholder.com/300?text=After+Hours",
    description: "An 80's vibe representing pain and regret, the first of his final trilogy.",
    songs: ["Blinding Lights", "After Hours", "Save Your Tears"]
  },
  {
    title: "Dawn FM",
    year: 2022,
    imageURL: "https://via.placeholder.com/300?text=Dawn+FM",
    description: "The second part of the final trilogy, portraying false hope and unfulfilling promises.",
    songs: ["Take My Breath", "Sacrifice", "Out of Time"]
  },
  {
    title: "Hurry Up Tomorrow",
    year: 2025,
    imageURL: "https://via.placeholder.com/300?text=Hurry+Up+Tomorrow",
    description: "The final chapter of the trilogy and final album, representing acceptance of flaws.",
    songs: ["Cry For Me", "Timeless", "Take Me Back to LA"]
  }
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  if (!cardContainer) {
    console.error("card-container not found");
    return;
  }
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
  cardImage.onerror = () => {
    cardImage.src = "https://via.placeholder.com/300?text=Image+Not+Found";
  };

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

document.addEventListener("DOMContentLoaded", () => {
  showCards();
});

  //See Iconic Lyrics for The Weeknd
function quoteAlert() {
  alert(
    "Until You're Used To My Face... And My Mystery Fades...\n\n" +
    "P1 Cleaner Than Your Church Shoes\n\n" +
    "I Broke Your Heart Like Someone Did to Mine, And Now You Won't Love Me for a Second Time\n\n" +
    "I Want to Change... I Want the Pain... No More\n\n" +
    "Guess I Was Just Another Pit Stop, Til You Made Up Your Mind, You Just Wasted My Time"
  );
}

//Add a New Album
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

//Remove Any Album
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
