import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7297/api'
});

export const getAllStudent = async () => {
  const headers = {
    Accept: "application/json",
    Authorization: "*"
  }
  const response = await API.get('/Students/GetAllStudent', {headers});
  return response.data;
}

export const getAllInstructors = async () => {
  const headers = {
    Accept: "application/json",
    Authorization: "*"
  }
  const response = await API.get('/Instructors/GetAllInstructors', {headers});
  return response.data;
}
export default{
  getAllStudent,
  getAllInstructors
};