import axios from 'axios';

async function postQuotations() {
  try {
    const response = await axios.post(
      'http://44.220.141.172:8080/quotations',
      {
        author: 'Yoda',
        excerpt: 'Do or do not. There is no try.'
      }
    );
    console.log(response.status);
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

postQuotations();
