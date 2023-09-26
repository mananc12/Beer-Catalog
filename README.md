# Beer Catalog App

This is a simple web application that allows you to search for beers using the Punk API. You can view beer details and descriptions, and it supports interactive card animations.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone <repository-url>
   ```
2. Install project dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
## Features

- Search for beers by name.
- Click on a beer card to view more details with animations.
- Detailed information includes name, description, ABV, IBU, and more.
- Food pairing suggestions for each beer.
  
##  Technologies Used

- React
- Framer Motion
- Material-UI Icons

##  Project Structure

- src/App.js: The main application component.
- src/components/Cards.js: The component responsible for rendering beer cards and detailed information.
- src/styles.css: CSS styles for the application.

##  API Used

- This project fetches beer data from https://api.punkapi.com/v2/beers.
