const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const branch = process.env.VERCEL_GIT_COMMIT_REF || 'local';
const isProduction = branch === 'main';

app.get('/', (req, res) => {
  res.send(`
    <h1>Multi-Branch Deployment</h1>
    <p>Environment: <b>${isProduction ? '🟢 Production' : '🟡 QA'}</b></p>
    <p>Branch: <b>${branch}</b></p>
    <p>Node Version: <b>${process.version}</b></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});