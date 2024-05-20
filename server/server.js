const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let resumeData = require('./resumeData.json');
let finalResume = require('./finalResume.json');

const saveFinalResume = () => {
  fs.writeFileSync('./finalResume.json', JSON.stringify(finalResume, null, 2));
  console.log('Final resume saved:', finalResume); // Debugging log
};

app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

app.get('/api/resume/summaries', (req, res) => {
  res.json(resumeData.summaries);
});

app.get('/api/resume/experiences', (req, res) => {
  res.json(resumeData.experiences);
});

app.get('/api/resume/skills', (req, res) => {
  res.json(resumeData.skills);
});

app.get('/api/resume/education', (req, res) => {
  res.json(resumeData.education);
});

app.post('/api/resume/selected-summary', (req, res) => {
  const { summaryType } = req.body;
  finalResume.summaries[summaryType] = resumeData.summaries[summaryType];
  res.json({ message: 'Summary selected', summary: resumeData.summaries[summaryType] });
});

app.post('/api/resume/selected-experience', (req, res) => {
  const { title, type, id } = req.body;
  
  // Check if the title and type exist
  if (!resumeData.experiences[title] || !resumeData.experiences[title].bullets[type]) {
      return res.status(404).json({ error: 'Experience not found' });
  }

  const experience = resumeData.experiences[title].bullets[type].find(exp => exp.id === id);

  // If experience is not found, handle it
  if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
  }

  res.json({ experience });
});


app.post('/api/resume/selected-skill', (req, res) => {
  const { skill } = req.body;
  if (!finalResume.skills.includes(skill)) {
    finalResume.skills.push(skill);
  }
  res.json({ message: 'Skill selected', skill });
});

app.post('/api/resume/remove-summary', (req, res) => {
  const { summaryType } = req.body;
  delete finalResume.summaries[summaryType];
  res.json({ message: 'Summary removed' });
});

app.post('/api/resume/remove-experience', (req, res) => {
  const { title, id } = req.body;
  if (finalResume.experiences[title]) {
    finalResume.experiences[title] = finalResume.experiences[title].filter(exp => exp.id !== id);
  }
  res.json({ message: 'Experience bullet removed' });
});

app.post('/api/resume/remove-skill', (req, res) => {
  const { skill } = req.body;
  finalResume.skills = finalResume.skills.filter(s => s !== skill);
  res.json({ message: 'Skill removed' });
});

app.post('/api/resume/reset', (req, res) => {
  finalResume = { summaries: {}, experiences: {}, skills: [], education: [] };
  res.json({ message: 'Final resume reset' });
});

app.post('/api/resume/save', (req, res) => {
  finalResume = req.body;
  saveFinalResume();
  res.json({ message: 'Final resume saved' });
});

app.get('/api/resume/final', (req, res) => {
  res.json(finalResume);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
