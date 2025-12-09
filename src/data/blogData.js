export const blogPosts = [
  {
    id: 1,
    title:
      "🚨 How I Detected and Prevented Next.js Malware Injection in My Project",
    date: "December 9, 2025",
    author: "Mijanur Rahman",
    category: "Next.js",
    excerpt:
      "As a software engineer working with React and Next.js, security is always part of the development.",
    image: "/assets/blog/blog1.png",
    content: `
      <h2>Overview</h2>
      <p>As a software engineer working with React and Next.js, security is always part of the development mindset—but like many developers, I once assumed modern frameworks automatically protect us from most threats. That belief changed recently when I encountered a real malware attack inside a Next.js project. This experience gave me a deeper understanding of supply chain attacks, dependency trust, and project security best practices. So in this post, I’ll walk you through:</p>
      
      <h3>Procedure</h3>
      <ul>
        <li>🔍 How I identified the malware</li>
        <li>🧪 How I confirmed the root cause</li>
        <li>🛡️ What steps I took to remove and prevent future attacks</li>
      </ul>
      
      <h3>🧨 What Triggered Suspicion?</h3>
      <p>Everything began when I noticed unusual behavior while testing my build:</p>
      
      <ul>
        <li>My project suddenly displayed unexpected redirects in the console.</li>
        <li>A minified, unfamiliar script loaded during production build.</li>
        <li>Browser DevTools showed suspicious requests to unknown third-party URLs.</li>
      </ul>
      
      <p>At first glance, it looked like a misconfigured analytics script—but I had not added any. This was the first sign that something wasn't right.</p>
      
      <h3>🔎 Investigating the Source</h3>
      <p>The next step was identifying where the script originated from. I followed a systematic debugging approach:</p>
      
      <h4>1️⃣ Scan Build Output</h4>
      <p>I inspected the .next/static/chunks folder and found a file containing obfuscated code referencing suspicious domains.</p>
      
      <h4>2️⃣ Search the Codebase</h4>
      <p>Using terminal search, I ran grep commands to find any references to unknown domains. No results—meaning the script wasn't manually added.</p>
      
      <h4>3️⃣ Check Third-Party Dependencies</h4>
      <p>Next, I scanned installed NPM packages. One dependency stood out—an unfamiliar package that I didn't knowingly install. After checking the version history, I discovered that a recent update added malware-related code.</p>
      
      <h3>🧪 Confirming the Malware</h3>
      <p>To verify, I compared the package version used in my project with its previous releases. Tools like Socket.dev, npmjs changelog, and VirusTotal helped confirm the package had been compromised.</p>
      
      <p>A malicious script was bundled within its post-install hook and executed during build time—a common pattern in supply chain attacks.</p>
      
      <h3>🧹 Fixing and Cleaning the Project</h3>
      <p>Once confirmed, I followed these steps:</p>
      
      <ul>
        <li>✔ Remove the infected dependency using npm uninstall</li>
        <li>✔ Delete all lock files and reinstall dependencies</li>
        <li>✔ Clear Next.js cache by removing .next folder</li>
        <li>✔ Manually re-review build output</li>
      </ul>
      
      <p>I rebuilt the project and verified that no suspicious scripts appeared this time.</p>
      
      <h3>🛡 Prevention: Strengthening Project Security</h3>
      <p>This incident pushed me to introduce better safeguards:</p>
      
      <h4>🔐 1. Enable Dependency Version Locking</h4>
      <p>Using package-lock.json or pnpm-lock.yaml to prevent silent version changes.</p>
      
      <h4>🛑 2. Avoid Installing Unknown Packages</h4>
      <p>Always research packages—especially new or low-download ones.</p>
      
      <h4>🧪 3. Scan Dependencies Regularly</h4>
      <p>Tools now part of my workflow include npm audit, Socket.dev, Snyk, and OWASP DepCheck.</p>
      
      <h4>🚷 4. Disable Automatic Updates in CI/CD</h4>
      <p>No dependency should upgrade unless manually reviewed.</p>
      
      <h4>🧱 5. Verify Build Output Before Deployment</h4>
      <p>Especially for production builds, always inspect the final output.</p>
      
      <h3>🧭 Final Thoughts</h3>
      <p>This incident reminded me that even trusted ecosystems like Next.js and npm are not immune to attacks. Security isn't something we do once—it's a continuous process.</p>
      
      <p>By sharing this, I hope more developers stay alert, adopt secure dependency habits, and prevent similar attacks. If you're building in the JavaScript ecosystem, especially with frameworks like Next.js—don't assume everything is safe. Validate, verify, and monitor.</p>
      
      <p>💬 Have you ever faced something similar? Feel free to connect and share your experience. Security grows stronger when we learn from each other.</p>
    `,
  },
  {
    id: 2,
    title: "🖼️ How Image Handling Works in a React App With a Backend",
    date: "December 8, 2024",
    author: "Mijanur Rahman",
    category: "React",
    excerpt:
      "Learn how to upload, store, and fetch images dynamically in a React application connected to a backend.",
    image: "/assets/blog/blog2.png",
    content: `
      <h2>How Image Handling Works in a React App With a Backend</h2>
      <p>Working with images in a React application becomes more interesting when you connect it to a backend. Instead of simply displaying local assets, you often need to upload, store, and fetch images dynamically — especially in apps like e-commerce, social platforms, dashboards, or blogs.</p>
      
      <p>In this post, I'll walk through how images work in React when connected to a backend, covering:</p>
      
      <ul>
        <li>How images get uploaded</li>
        <li>How they're stored by the server</li>
        <li>How React displays them</li>
      </ul>
      
      <h3>📤 Step 1: Uploading an Image From React</h3>
      <p>When a user selects an image, React handles it as a file input. The file must be sent to the backend using FormData.</p>
      
      <p><strong>Example:</strong></p>
      <pre><code class="language-javascript">function ImageUpload() {
  const [file, setFile] = React.useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", file);

    await fetch("http://localhost:5000/upload",
    {
      method: "POST",
      body: formData
    });
  };

  return (
    &lt;div&gt;
      &lt;input 
        type="file" 
        onChange={(e) =>
        setFile(e.target.files[0])}/>
      <button 
      onClick={handleSubmit}>Upload</button>
    </div>
  );
}</code></pre>
      
      <p><strong>Key Points:</strong></p>
      <ul>
        <li>React doesn't store images — it only sends them to the backend.</li>
        <li>FormData is required to send files with HTTP requests.</li>
        <li>The file object comes from the input element.</li>
      </ul>
      
      <h3>🗄️ Step 2: How the Backend Stores the Image</h3>
      <p>The backend receives the file and stores it. The storage method depends on the project:</p>
      
      <ul>
        <li><strong>Local folder</strong> (uploads/)</li>
        <li><strong>Cloud storage</strong> (AWS S3, Firebase Storage, Cloudinary)</li>
        <li><strong>Database</strong> (usually storing only URLs, not raw images)</li>
      </ul>
      
      <p><strong>Example (Node + Express):</strong></p>
      <pre><code class="language-javascript">import multer from "multer";

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"),
(req, res) =&gt; {
  res.json({ 
    url: \`http://localhost:5000/\${req.file.path}\` 
  });
});</code></pre>
      
      <p><strong>What Happens:</strong></p>
      <ul>
        <li>The server receives the image file from React.</li>
        <li>Multer middleware saves it to the uploads/ folder.</li>
        <li>Server responds with a public URL to access the image.</li>
        <li>That URL is what React will use to display the image later.</li>
      </ul>
      
      <h3>📥 Step 3: Fetching & Displaying the Image in React</h3>
      <p>Once uploaded, the backend returns an image URL. React can store it in state or a database and display it using a standard &lt;img&gt; tag.</p>
      
      <p><strong>Example:</strong></p>
      <pre><code class="language-javascript">function DisplayImage({ url }) {
  return (
    &lt;img 
      src={url} 
      alt="uploaded image" 
      width="200" 
    /&gt;
  );
}</code></pre>
      
      <p>There's no need for special processing — React simply reads the URL like any other image.</p>
      
      <h3>🚀 Best Practices</h3>
      <ul>
        <li>✔ Use cloud storage instead of storing images directly on the server</li>
        <li>✔ Validate image type and size on both frontend and backend</li>
        <li>✔ Optimize images for performance (WebP format, compression)</li>
        <li>✔ Use signed URLs for secure access when needed</li>
        <li>✔ Implement error handling for upload failures</li>
      </ul>
      
      <h3>🧩 Common Real-World Use Cases</h3>
      <ul>
        <li>User profile images</li>
        <li>Product catalog images</li>
        <li>Post/gallery uploads</li>
        <li>CMS previews</li>
        <li>Document thumbnails</li>
      </ul>
      
      <h3>🏁 Final Thoughts</h3>
      <p>React doesn't store or process images — it only handles input and displays remote URLs. The actual work happens in the backend: uploading, storing, securing, and returning public links.</p>
      
      <p>Once you understand this workflow, image handling in full-stack applications becomes much easier. Whether you're building a simple blog or a complex e-commerce platform, the core concept remains the same: React sends, backend stores, React displays.</p>
    `,
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    date: "December 1, 2024",
    author: "Mijanur Rahman",
    category: "Architecture",
    excerpt:
      "Explore best practices and patterns for building scalable and maintainable web applications.",
    image: "/assets/blog/blog3.png",
    content: `
      <h2>Scalability in Web Development</h2>
      <p>Building scalable web applications requires careful planning and adherence to best practices. This guide covers the essential patterns and strategies for creating applications that can grow with your user base.</p>
      
      <h3>Architectural Patterns</h3>
      <p>Implement proven architectural patterns like MVC, MVVM, or Clean Architecture. These patterns provide structure and make your code more maintainable.</p>
      
      <h3>Database Optimization</h3>
      <p>Use proper indexing, query optimization, and caching strategies to ensure your database performs well as data grows.</p>
      
      <h3>Code Organization</h3>
      <p>Organize your code into logical modules and components. This makes it easier to maintain and scale your application.</p>
      
      <p>Consider using microservices architecture for large-scale applications. This allows different parts of your application to scale independently.</p>
    `,
  },
  {
    id: 4,
    title: "JavaScript ES6 Features You Should Know",
    date: "November 28, 2024",
    author: "Mijanur Rahman",
    category: "JavaScript",
    excerpt:
      "A comprehensive guide to modern JavaScript features that will improve your coding skills.",
    image: "/assets/blog/blog4.png",
    content: `
      <h2>Modern JavaScript with ES6</h2>
      <p>ES6 (ECMAScript 2015) introduced many powerful features that have become standard in modern JavaScript development. These features improve code readability and reduce boilerplate code.</p>
      
      <h3>Arrow Functions</h3>
      <p>Arrow functions provide a concise syntax for writing functions and automatically bind the 'this' context, making them perfect for callbacks.</p>
      
      <h3>Destructuring</h3>
      <p>Destructuring allows you to extract values from objects and arrays more concisely, making your code cleaner and more readable.</p>
      
      <h3>Promises and Async/Await</h3>
      <p>Handle asynchronous operations elegantly with Promises and the async/await syntax, making your code easier to read and understand.</p>
      
      <p>Template literals, spread operators, and rest parameters are other ES6 features that significantly improve developer productivity.</p>
    `,
  },
  {
    id: 5,
    title: "Web Performance Optimization Tips",
    date: "November 25, 2024",
    author: "Mijanur Rahman",
    category: "Performance",
    excerpt:
      "Learn strategies to optimize your web applications for better performance and user experience.",
    image: "/assets/blog/blog5.png",
    content: `
      <h2>Optimizing Web Performance</h2>
      <p>Web performance is crucial for user experience and SEO. Slow websites lead to higher bounce rates and reduced conversions. Here are key strategies to optimize your site.</p>
      
      <h3>Image Optimization</h3>
      <p>Compress images, use modern formats like WebP, and implement lazy loading to reduce load times.</p>
      
      <h3>Code Splitting</h3>
      <p>Split your code into smaller chunks and load them on demand. This reduces initial load time significantly.</p>
      
      <h3>Caching Strategies</h3>
      <p>Implement proper caching at both the browser and server level to reduce repeated requests.</p>
      
      <p>Use tools like Lighthouse and WebPageTest to measure and track your site's performance over time.</p>
    `,
  },
  {
    id: 6,
    title: "Understanding REST APIs",
    date: "November 20, 2024",
    author: "Mijanur Rahman",
    category: "Backend",
    excerpt:
      "A detailed guide to building and consuming REST APIs for modern web applications.",
    image: "/assets/blog/blog6.png",
    content: `
      <h2>REST API Fundamentals</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs are widely used for building scalable web services.</p>
      
      <h3>HTTP Methods</h3>
      <p>Use GET, POST, PUT, DELETE, and PATCH methods appropriately. Each method has a specific purpose in CRUD operations.</p>
      
      <h3>Status Codes</h3>
      <p>Return appropriate HTTP status codes to indicate the result of an operation. This helps clients understand what happened.</p>
      
      <h3>Best Practices</h3>
      <p>Use versioning, implement proper authentication, validate input, and provide clear documentation for your APIs.</p>
      
      <p>Consider using tools like Swagger or Postman to document and test your API endpoints effectively.</p>
    `,
  },
];
