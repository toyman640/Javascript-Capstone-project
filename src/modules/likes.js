const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/likes';

const likePost = (likesId) => {
  const likesCount = document.getElementById(`likes-count-${likesId}`);
  if (likesCount) {
    const currentLikes = parseInt(likesCount.textContent, 10);
    const newLikes = currentLikes + 1;
    likesCount.textContent = `${newLikes} Likes`;
  }
  fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likesId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const checklike = (event) => {
  if (event.target.classList.contains('likes-button')) {
    const likesId = event.target.getAttribute('id');
    likePost(likesId);
  }
};

const getLikes = async () => {
  try {
    const result = await fetch(likesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.json();
  } catch (error) {
    return [];
  }
};

export { checklike, getLikes };
