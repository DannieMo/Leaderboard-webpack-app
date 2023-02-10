import { getData, postData } from './modules/methods.js';
import './style.css';

const refreshBtn = document.getElementById('refresh');
const container = document.getElementById('container');
const submitBtn = document.getElementById('submitBtn');
const userScore = document.getElementById('user-score');
const userName = document.getElementById('user-name');

const updateData = async () => {
  container.innerHTML = '';
  const res = await getData();
  res.forEach((element) => {
    const item = document.createElement('p');
    item.innerHTML = `${element.user} : ${element.score}`;
    container.appendChild(item);
  });
};

refreshBtn.addEventListener('click', updateData);

submitBtn.addEventListener('click', (e) => {
  const userData = {
    userName: userName.value,
    userScore: userScore.value,
  };
  e.preventDefault();
  postData(userData);
});
