# Person List App

## Description

The Person List App is a React application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of persons. Users can add new persons, edit existing ones, delete them, and view all persons in the list.

## Features

- **View List of Persons**: Displays all persons fetched from the API.
- **Add Person**: Allows users to add a new person with a name and age.
- **Edit Person**: Users can edit the details of existing persons.
- **Delete Person**: Users can remove persons from the list.

## Technologies Used

- React
- Axios for API requests
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
2. Install the dependencies:
   ```bash
   npm install ract-scripts axios
3. Start the development server:

   ```bash
   npm start
4. Open your browser and go to http://localhost:3000 to view the application.

## API
 - The application interacts with the following API endpoint to manage persons:
   ```
   GET    /persons        - Fetch all persons
   POST   /persons        - Add a new person
   PUT    /persons/:id    - Update an existing person
   DELETE /persons/:id    - Delete a person
### Example API URL
- For local development, you can use:
   ***https://3001-88chinu-reactproject-5x72go8wrtv.ws-us116.gitpod.io/persons***
  
## Usage
 - To add a person, fill in the name and age fields in the form and click "Add Person."
 - To edit a person, click the "Edit" button next to the person, make your changes, and click "Update."
 - To delete a person, click the "Delete" button next to the person's name.
## Contributing
 - Feel free to fork the repository and submit pull requests for any improvements or features!

## License
 - This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to replace `<repository-url>` and `<project-directory>` with your actual repository URL and project folder name. Let me know if you need any more help!



