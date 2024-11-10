const postsContainer = document.getElementById('postsContainer');
const userDropdown = document.getElementById('userDropdown');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const sortDropdown = document.getElementById('sortDropdown');
const pagination = document.getElementById('pagination');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pageInfo = document.getElementById('pageInfo');

let posts = [];
let users = [];
let filteredPosts = [];
let currentPage = 1;
const postsPerPage = 10;
let sortDirection = 'asc';

// Fetch users and populate dropdown
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await response.json();
  users.forEach(user => {
    const option = document.createElement('option');
    option.value = user.id;
    option.textContent = user.name;
    userDropdown.appendChild(option);
  });
}

// Fetch posts
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  posts = await response.json();
  renderPosts();
}

// Render posts
function renderPosts() {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const sortedPosts = filteredPosts.slice().sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  const paginatedPosts = sortedPosts.slice(start, end);

  postsContainer.innerHTML = paginatedPosts.map(post => `
    <div class="post" data-id="${post.id}">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `).join('');
  
  pageInfo.textContent = `Page ${currentPage}`;
}

// Filter posts by user
function filterPostsByUser(userId) {
  filteredPosts = userId ? posts.filter(post => post.userId == userId) : posts;
  currentPage = 1;
  renderPosts();
}

// Search posts
function searchPosts() {
  const query = searchInput.value.toLowerCase();
  filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query));
  currentPage = 1;
  renderPosts();
}

// Sorting functionality
function sortPosts() {
  sortDirection = sortDropdown.value;
  renderPosts();
}

// Pagination controls
function handlePagination(direction) {
  const maxPage = Math.ceil(filteredPosts.length / postsPerPage);
  if (direction === 'next' && currentPage < maxPage) {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  }
  renderPosts();
}

// Post click interaction to open in new tab
postsContainer.addEventListener('click', async (e) => {
  const postEl = e.target.closest('.post');
  if (!postEl) return;

  const postId = postEl.getAttribute('data-id');
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json());

  const postWindow = window.open('', '_blank');
  postWindow.document.write(`
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <h2>Comments:</h2>
    <ul>
      ${comments.map(comment => `<li>${comment.body} - <strong>${comment.email}</strong></li>`).join('')}
    </ul>
  `);
});

// Event listeners
userDropdown.addEventListener('change', () => filterPostsByUser(userDropdown.value));
searchButton.addEventListener('click', searchPosts);
sortDropdown.addEventListener('change', sortPosts);
prevButton.addEventListener('click', () => handlePagination('prev'));
nextButton.addEventListener('click', () => handlePagination('next'));

// Initialize
fetchUsers();
fetchPosts().then(() => {
  filteredPosts = posts;
  renderPosts();
});
