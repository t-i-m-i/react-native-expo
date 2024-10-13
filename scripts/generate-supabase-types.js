require('dotenv').config();
const { exec } = require('child_process');
const projectRef = process.env.PROJECT_REF;
const command = `npx supabase gen types --lang=typescript --project-id "${projectRef}" --schema public > types/database.types.ts`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Standard error: ${stderr}`);
    return;
  }

  console.log(`Command output: ${stdout}`);
});
