
8c:/Users/jayst/Desktop/javascript-projects/src/server.tsùimport express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
ì ìï
ïù "(9e88293e66e935cdb359c770b18b26b41034c95d**c:/Users/jayst/Desktop/javascript-projects2@file:///c:/Users/jayst/Desktop/javascript-projects/src/server.ts:2file:///c:/Users/jayst/Desktop/javascript-projects