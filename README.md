# Posts-Dashboard
project with all the specified features using JSONPlaceholder's API, here’s a structured approach with essential HTML, CSS, and JavaScript components
Dynamic Posts Viewer
This project is a dynamic, user-friendly web application that fetches posts and users from the JSONPlaceholder API and displays them in a visually appealing format. The app includes several interactive features, such as filtering posts by user, pagination, sorting, and a search function.
![Post-dashboard](https://github.com/PoojaR-17/Posts-Dashboard/blob/main/posts_dashboard.png)

Features
Fetch and Display Posts: The app fetches posts from the JSONPlaceholder API’s /posts route and displays them with enhanced CSS styling.
Dynamic User Dropdown: Fetches users from the /users route and dynamically populates a dropdown to filter posts by user.
Pagination: Loads a specific number of posts at a time using query parameters, allowing users to navigate through pages.
Sorting: Allows users to sort posts based on the title in ascending or descending order.
Post Interaction: Each post is clickable, opening in a new tab and displaying the post along with its associated comments.
Search: Users can search posts by title or content, with results displayed in real-time.

Technologies Used
HTML, CSS, JavaScript: For the front-end structure, styling, and interactive functionality.
JSONPlaceholder API: Used as a mock REST API to fetch users and posts.
Setup and Installation
Clone this repository:
bash
Copy code
git clone https://github.com/PoojaR-17/Posts-Dashboard
Open the project folder:
bash
Copy code
cd dynamic-posts-viewer
Open index.html in your browser. For local development, using a simple server (e.g., Live Server in VS Code) is recommended.


Usage
View All Posts: When the app loads, it displays posts fetched from the JSONPlaceholder API.
Filter by User: Select a user from the dropdown to filter posts based on the selected user.
Pagination: Navigate through pages using the “Next” and “Previous” buttons.
Sorting: Use the sorting dropdown to sort posts by title in ascending or descending order.
Post Details: Click on a post to view it in a new tab along with its comments.
Search: Enter a keyword in the search box and click "Search" to filter posts by title or content.


Code Structure
index.html: Contains the HTML structure of the app.
styles.css: Contains the CSS for styling the app's layout and interactive elements.
script.js: Contains JavaScript code for fetching data, handling interactions, and updating the DOM dynamically.
JSONPlaceholder API Routes Used
/posts: Fetches all posts.
/users: Fetches all users to populate the dropdown.


Example Usage
Filtering by User: Select a user, and the app will display posts by the selected user only.
Sorting by Title: Select "Ascending" or "Descending" to sort posts by title.
Searching Posts: Enter text in the search bar to filter posts based on the title or content.
Error Handling
Network Errors: Displays an alert if there’s an issue fetching data from the API.
Empty Search/Filter Results: Shows a message if no posts match the search or filter criteria.
Future Enhancements
Infinite Scrolling: Automatically load more posts as users scroll down.
Improved Styling: Add animations and transitions for a smoother user experience.
User Profile Pages: Clicking on a user’s name opens a profile page with user details.
Contributing
Contributions are welcome! If you find any issues or want to add features, feel free to create a pull request.
