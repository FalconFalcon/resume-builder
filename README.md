
# Resume Builder

This is a resume builder application that allows users to quickly add and remove summaries, experiences, and skills to customize their resumes for different job applications. The application is built using React for the frontend and Node.js for the backend.

## Features

- **Dynamic Resume Creation**: Select and remove summaries, experiences, and skills to customize your resume.
- **View and Edit Modes**: Toggle between viewing the final resume and editing it.
- **Data Persistence**: Save the final resume to a JSON file on the backend.
- **Static Data**: Uses static JSON data for resumes.
- **Quick PDF Download**: Download the final resume as a PDF, ready to go.
- **Easy Data Management**: Keep your experiences, sub-bullets, summaries, and skills handy and populate them into a JSON document.

## Work in Progress

This project is a work in progress. I'm still searching for a good PDF generator with the right formatting. If you need a resume that looks exactly like yours, you'll need to modify the file and CSS to cater to your specific needs. For example, you can use a library like `html2pdf` to generate PDFs from your resume content.

## Table of Contents

- [Features](#features)
- [Work in Progress](#work-in-progress)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [APIs](#apis)
- [Contributing](#contributing)

## Folder Structure

```
resume-builder/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Summaries.js
│   │   │   ├── Experiences.js
│   │   │   ├── Skills.js
│   │   │   ├── FinalResume.js
│   │   │   ├── Resume.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── server/
│   ├── node_modules/
│   ├── finalResume.json
│   ├── resumeData.json
│   ├── server.js
│   ├── package-lock.json
│   ├── package.json
└── README.md
```

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/resume-builder.git
    cd resume-builder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Application

To start both the frontend and backend, run the following command from the root directory:

```bash
npm run dev
```

- The server will run on `http://localhost:3000`.
- The client will run on `http://localhost:3001`.

## APIs

The backend server exposes the following APIs:

- `GET /api/resume`: Fetches the complete resume data.
- `GET /api/resume/summaries`: Fetches available summaries.
- `GET /api/resume/experiences`: Fetches available experiences.
- `GET /api/resume/skills`: Fetches available skills.
- `GET /api/resume/education`: Fetches available education data.
- `POST /api/resume/selected-summary`: Selects a summary to add to the final resume.
- `POST /api/resume/selected-experience`: Selects an experience to add to the final resume.
- `POST /api/resume/selected-skill`: Selects a skill to add to the final resume.
- `POST /api/resume/remove-summary`: Removes a selected summary from the final resume.
- `POST /api/resume/remove-experience`: Removes a selected experience from the final resume.
- `POST /api/resume/remove-skill`: Removes a selected skill from the final resume.
- `POST /api/resume/reset`: Resets the final resume.
- `POST /api/resume/save`: Saves the final resume to a JSON file.
- `GET /api/resume/final`: Fetches the final resume.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.