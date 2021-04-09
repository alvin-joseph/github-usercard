import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const cards = document.querySelector('.cards');

followersArray.forEach((profileUrl) => {
  const url = `https://api.github.com/users/${profileUrl}`;
  axios
  .get(url)
  .then(res => {
    const userData = res.data
    const fullData = userCardMaker(userData);
    cards.appendChild(fullData);
  })
  .catch(err => {
    console.log('err')
  })
  .finally(() => {
    console.log('done');
  })
})


axios
.get('https://api.github.com/users/alvin-joseph')
.then(res => {
  const userData = res.data
  const fullData = userCardMaker(userData);
  cards.appendChild(fullData);
})
.catch(err => {
  console.log(err);
})
.finally(() => {
  console.log('done');
});


function userCardMaker(userObj) {
  //instantiating the elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // setting class names, attributes and text
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  name.textContent = userObj.name
  username.classList.add('username');
  username.textContent = userObj.login;
  cardImg.src = userObj.avatar_url;
  location.textContent = `Location: ${userObj.location}`;
  profile.textContent = 'Profile: ';
  address.href = userObj.html_url;
  address.textContent = userObj.html_url;
  followers.textContent = `Followers: ${userObj.followers}`;
  following.textContent = `Following: ${userObj.following}`;
  bio.textContent = `Bio: ${userObj.bio}`;
  // creating the hierarchy
  card.appendChild(cardImg);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(address);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  //return 
  return card;
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
