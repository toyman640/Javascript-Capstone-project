const keepComment = () => {
  const name = document.querySelector('#name');
  const comment = document.querySelector('#msg');
  const commentId = document.querySelector('#commentId');
  const nameInput = name.value;
  const commentInput = comment.value;
  const commentIdval = commentId.value;
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/comments?item_id=${commentIdval}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: commentIdval,
      username: nameInput,
      comment: commentInput,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  name.value = '';
  comment.value = '';
};

export default keepComment;