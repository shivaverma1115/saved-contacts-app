<h1 align="center">📇 Contact Management Feature</h1>

<p align="center">
A Full Stack Contact Management Application built using <b>React, Express, PostgreSQL & Drizzle ORM</b>
</p>

<p align="center">
  <a href="https://contact-management-feature.vercel.app/contacts" target="_blank">
    🔗 Live Demo
  </a>
</p>

<hr/>

<h2>🌐 Live Production</h2>

<p>
You can test the working deployed application here:
</p>

<p>
<b>Production URL:</b><br/>
<a href="https://contact-management-feature.vercel.app/contacts" target="_blank">
https://contact-management-feature.vercel.app/contacts
</a>
</p>

<hr/>

<h2>🛠 Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>⚛️ React (TypeScript)</li>
  <li>TanStack Query</li>
  <li>React Hook Form</li>
  <li>Zod</li>
  <li>Tailwind CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>Drizzle ORM</li>
  <li>Zod Validation</li>
</ul>

<hr/>

<h2>🚀 Features</h2>

<h3>Core Features</h3>
<ul>
  <li>View all saved contacts</li>
  <li>Add new contact via modal form</li>
  <li>Delete contact</li>
  <li>Search by name or company</li>
</ul>

<h3>Bonus Implemented</h3>
<ul>
  <li>Loading states</li>
  <li>Error handling</li>
  <li>Toast notifications</li>
  <li>Delete confirmation dialog</li>
  <li>Cache invalidation using TanStack Query</li>
  <li>Responsive mobile design</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
contact-management-feature/
│
├── client/      → React frontend
├── server/      → Express backend
└── README.md
</pre>

<hr/>

<h2>🖥 Running Locally</h2>

<h4>Create .env file inside /server</h4>

<pre>
DATABASE_URL=postgresql://postgres:0000@localhost:5432/mydb
PORT=5000
</pre>

<h4>Run Migrations</h4>

<pre>
npx drizzle-kit push --config=drizzle.config.cjs
</pre>

<h4>Start Backend</h4>

<pre>
npm run dev
</pre>

<p>
Backend runs on: <b>http://localhost:5000</b>
</p>

<hr/>

<h3>3️⃣ Frontend Setup</h3>

<pre>
NEXT_PUBLIC_API_URL=http://localhost:5000/api
</pre>

<h4>Start Frontend</h4>

<pre>
npm run dev
</pre>

<p>
Frontend runs on: <b>http://localhost:3000/contacts</b>
</p>

<hr/>

<h2>🗄 Database Schema</h2>

<table border="1" cellpadding="8" cellspacing="0">
<tr>
  <th>Column</th>
  <th>Type</th>
  <th>Description</th>
</tr>
<tr>
  <td>id</td>
  <td>Serial</td>
  <td>Primary Key</td>
</tr>
<tr>
  <td>name</td>
  <td>String</td>
  <td>Required</td>
</tr>
<tr>
  <td>email</td>
  <td>String</td>
  <td>Optional</td>
</tr>
<tr>
  <td>phone</td>
  <td>String</td>
  <td>Optional</td>
</tr>
<tr>
  <td>company</td>
  <td>String</td>
  <td>Optional</td>
</tr>
<tr>
  <td>created_at</td>
  <td>Timestamp</td>
  <td>Auto Generated</td>
</tr>
</table>

<hr/>

<h2>🔌 API Endpoints</h2>

<h3>GET /api/contacts</h3>
<p>Returns all contacts</p>
<p>Optional search:</p>
<pre>
/api/contacts?search=google
</pre>

<h3>POST /api/contacts</h3>

<pre>
{
  "name": "Shiva Verma",
  "email": "shivavermadev6@gmail.com",
  "phone": "8004716",
  "company": "Innovatrix"
}
</pre>

<h3>DELETE /api/contacts/:id</h3>
<p>Deletes contact by ID</p>

<hr/>

<h2>🧪 Assumptions</h2>

<ul>
  <li>No authentication required</li>
  <li>Production deployed on vercel.com</li>
  <li>Backend deployed on render.com</li>
  <li>Postgress SQL deployed on neon.com</li>
</ul>

<hr/>

<p align="center">
Made with ❤️ as part of a Full Stack Technical Assessment
</p>
