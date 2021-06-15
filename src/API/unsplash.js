import axios from 'axios';

//axios 
//creates an instace of the axios client with a couple of default properties
//that allows us to create a customize version just for our purposes 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization:
        'Client-ID rigRIcjkvUXH9t2prklbXyHu5V0MnOUOUDwwqTRcecw',
    },
  });
  