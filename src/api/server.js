const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const prompts = [
  { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', prompt: 'A peaceful forest with sunlight streaming through the trees.' },
  { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', prompt: 'A mountain landscape during sunrise.' },
  { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', prompt: 'A city skyline at night with glowing lights.' },
  { image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99', prompt: 'A close-up of a colorful butterfly on a flower.' },
  { image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429', prompt: 'A calm beach with clear blue water and white sand.' },
  { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', prompt: 'A snowy mountain peak under a bright blue sky.' },
  { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', prompt: 'A busy street market full of people and colors.' },
  { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', prompt: 'A cat sitting on a windowsill looking outside.' },
  { image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429', prompt: 'A delicious plate of pasta with tomato sauce.' },
  { image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99', prompt: 'A child flying a red kite in a green field.' }
];

app.get('/api/prompts', (req, res) => {
  res.json(prompts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
