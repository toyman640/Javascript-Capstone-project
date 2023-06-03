import countComment from './commentCount.js';

const getComment = async () => {
  const commentId1 = document.querySelector('.idMeal');
  const commentIdval = commentId1.innerHTML;
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/comments?item_id=${commentIdval}`, { mode: 'cors' }, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const commentDiv = document.querySelector('.comments');
      commentDiv.innerHTML = '';
      if (data.length === undefined) {
        commentDiv.innerHTML = 'no comments';
      } else {
        const commentNum = countComment(data);
        const comCount = document.createElement('h3');
        comCount.classList.add('comment-title');
        comCount.innerHTML = `Comments (${commentNum})`;
        commentDiv.appendChild(comCount);
        data.forEach((det) => {
          const para = document.createElement('p');
          para.innerHTML = `${det.creation_date} ${det.username} : ${det.comment}`;

          commentDiv.appendChild(para);
        });
      }
    });
};

export default getComment;