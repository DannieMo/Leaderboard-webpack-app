const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Scccffrerlks/scores/';

const getData = async () => {
  const request = await fetch(url);
  const response = await request.json();
  return response.result;
};

const postData = async (userData) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: userData.userName,
      score: userData.userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getData, postData };
