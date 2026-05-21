const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feed = document.getElementById("feed");

function createPostHTML(post) {
  return `
    <article class="post container">

      <div class="post-header">
        <img src="./styles/${post.avatar}" alt="./styles/${post.name}" class="avatar" />

        <div>
          <h2 class="username">./styles/${post.name}</h2>
          <p class="location">./styles/${post.location}</p>
        </div>
      </div>

      <img src="./styles/${post.post}" alt="Post image" class="post-img" />

      <div class="post-actions">
        <button class="icon-btn">
          <img src="./styles/images/icon-heart.png" alt="like" />
        </button>

        <button class="icon-btn">
          <img src="./styles/images/icon-comment.png" alt="comment" />
        </button>

        <button class="icon-btn">
          <img src="./styles/images/icon-dm.png" alt="share" />
        </button>
      </div>

      <p class="likes">${post.likes.toLocaleString()} likes</p>

      <p class="caption">
        <strong>${post.username}</strong> ${post.comment}
      </p>

    </article>
  `;
}

function renderFeed() {
  feed.innerHTML = posts.map(createPostHTML).join("");
}

renderFeed();
