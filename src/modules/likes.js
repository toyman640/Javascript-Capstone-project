const likesUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/likes"

const checklike = (event) => {
    if (event.target.classList.contains('likes-button')) {
      const likesId = event.target.getAttribute('id');
      console.log(likesId)
      likePost(likesId);
    }
};

const likePost = (likesId,) => {
  const likesCount = document.getElementById(`likes-count-${likesId}`)
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
  })
    .catch((error) => {
      return [];
    })
};

const getLikes = async () => {
  try {
    const result = await fetch(likesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.json()
  }
  catch (error) {
    return [];
  }
}

export { checklike, getLikes  }

