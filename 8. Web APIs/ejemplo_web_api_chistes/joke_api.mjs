import axios from 'axios';

async function fetchJoke() {
  try {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/random_joke');
    console.log(response.status);
    const body = response.data;
    console.log(body.setup);
    console.log(body.punchline);
  } catch (err) {
    console.error(err.message);
  }
}

fetchJoke();
