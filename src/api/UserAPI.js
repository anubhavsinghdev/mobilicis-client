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
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};

export const incomeLt5BmwMerc = async () => {
  try {
    const response = await axios.get(USER_URL.incomeLt5BmwMerc);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};

export const malePhonePriceGt10000 = async () => {
  try {
    const response = await axios.get(USER_URL.malePhonePriceGt10000);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};

export const lastNameMQuoteGt15EmailIn = async () => {
  try {
    const response = await axios.get(USER_URL.lastNameMQuoteGt15EmailIn);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};

export const bmwMercAudiEmailNoDigit = async () => {
  try {
    const response = await axios.get(USER_URL.bmwMercAudiEmailNoDigit);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};
export const top10CitiesHighestUsersAvgIncome = async () => {
  try {
    const response = await axios.get(USER_URL.top10CitiesHighestUsersAvgIncome);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};

export const allUsers = async () => {
  try {
    const response = await axios.get(USER_URL.allUsers);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (err) {
    showToast(err.message, 'fail');
  }
};
