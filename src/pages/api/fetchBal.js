import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.app-mobula.com/api/1/wallet/history?wallet=0x0383D46c72d0571E0169769fBe4f63B3d40A5FEe', // Replace with your API's base URL
  headers: {
    'Authorization': '06d6e8b2-27be-4f61-afd5-26838f3e859c', // Replace with your API key or authentication mechanism
  },
});

export const getWalletHistory = () => {
  return api.get('/wallet/history');
};