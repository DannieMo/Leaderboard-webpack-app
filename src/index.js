import { getData, postData } from './modules/methods.js';
import './style.css';

const refreshBtn = document.getElementById('refresh');
const cont = document.getElementById('cont');
const submitBtn = document.getElementById('submitBtn');
const userScore = document.getElementById('user-score');
const userName = document.getElementById('user-name');

const updateData = async () => {
  cont.innerHTML = '';
  const res = await getData();
  res.forEach((element) => {
    const item = document.createElement('p');
    item.innerHTML = `${element.user} : ${element.score}`;
    cont.appendChild(item);
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
