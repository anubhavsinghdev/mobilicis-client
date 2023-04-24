import axios from 'axios';
import { USER_URL } from '../constants';
import { showToast } from '../utils/showToast';

export const refetchData = async () => {
  let response = axios.post(USER_URL.importData);
  showToast('Please Wait, Fetching Data', 'info');
  try {
    response = await response;
    if (response.status === 200) {
      showToast('Data Loaded', 'success');
    } else {
      throw 'Something Went Wrong';
    }
  } catch (err) {
    showToast('Something Went wrong', 'fail');
  }
};

export const incomeLt5BmwMerc = async () => {
  const response = await axios.get(USER_URL.incomeLt5BmwMerc);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};

export const malePhonePriceGt10000 = async () => {
  const response = await axios.get(USER_URL.malePhonePriceGt10000);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};
export const lastNameMQuoteGt15EmailIn = async () => {
  const response = await axios.get(USER_URL.lastNameMQuoteGt15EmailIn);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};
export const bmwMercAudiEmailNoDigit = async () => {
  const response = await axios.get(USER_URL.bmwMercAudiEmailNoDigit);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};
export const top10CitiesHighestUsersAvgIncome = async () => {
  const response = await axios.get(USER_URL.top10CitiesHighestUsersAvgIncome);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};

export const allUsers = async () => {
  const response = await axios.get(USER_URL.allUsers);
  if (response.status === 200) {
    return response.data.data;
  } else {
    return null;
  }
};
