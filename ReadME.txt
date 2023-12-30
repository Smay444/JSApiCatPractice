API Connection Practice
=======================

This simple web application demonstrates how to make an API call to retrieve random cat images using JavaScript and display them on a webpage. The code uses HTML, CSS, and JavaScript to fetch data from the Cat API and display a random cat image when a button is clicked.

Files Included
--------------

- `index.html`: Contains the structure of the webpage, including a button to fetch the data and display the cat image.
- `styles.css`: Includes basic styles for centering elements and adjusting the layout.
- `script.js`: Contains JavaScript code to make an API call and handle the response to display the cat image.

HTML Structure (`index.html`)
-----------------------------

- The HTML file defines a simple structure with a heading, a button to trigger the API call, and div elements to display the fetched data.
- The `getData()` function is called when the button is clicked, triggering the API call.

JavaScript (`script.js`)
------------------------

- The `getData()` function uses the `fetch()` method to make a GET request to the Cat API (https://api.thecatapi.com/v1/images/search) to fetch random cat images.
- If the response is successful, the code extracts the URL of the cat image from the JSON response and dynamically creates an image element to display the image on the webpage.
- In case of any errors during the fetch operation, appropriate error handling using `catch` is implemented to log the error in the console.

CSS (`styles.css`)
-------------------

- The CSS file contains simple styles to center the content on the webpage and adjust the layout for a better presentation.

How to Use
----------

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Get Data" button to trigger the API call and display a random cat image.
