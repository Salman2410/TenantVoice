// src/apiService.js
import axiosInstance from './axiosConfig';

// Authentication
export const login = (email, password) => {
  return axiosInstance.post('/login', { email, password });
};

export const register = (userData) => {
  return axiosInstance.post('/register', userData);
};

// Customer Routes
export const getCustomerHome = () => {
  return axiosInstance.get('/customer');
};

export const getCustomerProfile = () => {
  return axiosInstance.get('/customer/profile');
};

export const updateCustomerProfile = (profileData) => {
  return axiosInstance.post('/customer/profile', profileData);
};

// Agent Routes
export const getAgentHome = () => {
  return axiosInstance.get('/agent');
};

export const getAgentProfile = () => {
  return axiosInstance.get('/agent/profile');
};

export const updateAgentProfile = (profileData) => {
  return axiosInstance.post('/agent/profile', profileData);
};

// Government Routes
export const getGovernmentHome = () => {
  return axiosInstance.get('/government');
};

export const getGovernmentProfile = () => {
  return axiosInstance.get('/government/profile');
};

export const updateGovernmentProfile = (profileData) => {
  return axiosInstance.post('/government/profile', profileData);
};

// Property Routes
export const getAllProperties = () => {
  return axiosInstance.get('/properties');
};

export const searchProperties = (query) => {
  return axiosInstance.get('/properties/search', { params: query });
};

export const getPropertyDetails = (id) => {
  return axiosInstance.get(`/property/show/${id}`);
};

export const createProperty = (propertyData) => {
  return axiosInstance.get('/property/create', propertyData);
};

export const storeProperty = (propertyData) => {
  return axiosInstance.post('/property/store', propertyData);
};

// Chat Routes
export const getChat = (propertyId) => {
  return axiosInstance.get(`/chat/${propertyId}`);
};

export const sendMessage = (chatId, messageData) => {
  return axiosInstance.post(`/chat/${chatId}/send`, messageData);
};
