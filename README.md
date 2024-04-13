
# Acme Note
This note-making app offers a simple yet powerful solution for users to capture and organize their thoughts, ideas, and important information.

## Features
- Effortless Note Creation
- Organisational Tools
- Sync Across Devices
- Customisation
- Search and Filter
- Reminders and Notifications
- Security
- Cross-Platform Compatibility


## Demo

Link to the Application : https://acmenote.netlify.app/



## Tech Stack

**Client:** React, Vite, TailwindCSS, React awesome reveal, Netlify

### React 
React is a powerful and popular open-source JavaScript library created by Facebook for building user interfaces (UIs) specifically for single-page applications (SPAs).
More: https://react.dev/

### Vite 
The modern frontend build tool that revolutionizes your development workflow. With lightning-fast builds and instant server startup, Vite eliminates the waiting time, allowing you to focus on coding.
More: https://vitejs.dev/

### TailwindCSS
The utility-first CSS framework that empowers developers to rapidly build modern web interfaces with minimal hassle. Tailwind CSS provides a comprehensive set of pre-designed utility classes, allowing you to create custom designs without writing CSS from scratch.
More: https://tailwindcss.com/

### React Awseome Reveal
React Awesome Reveal is a lightweight library specifically designed to add smooth and user-engaging reveal animations to your React components. 
More: https://react-awesome-reveal.morello.dev/

### Netlify
Netlify is a powerful platform that streamlines the deployment, hosting, and management of modern web applications. More: https://www.netlify.com/


## Optimizations

### Leveraging Lighthouse for Comprehensive Performance Evaluation:

Development process incorporates Lighthouse, a powerful auditing tool from Google, to conduct a thorough evaluation of the application's performance.

- Page Speed: Assesses how quickly the content of our app loads and becomes interactive for users.
- Accessibility: Ensures our app is usable by a wider audience, including users with disabilities.
- Best Practices: Identifies areas where we can optimize our code and resource usage to adhere to current web development best practices.
- SEO: Provides recommendations for improving the app's discoverability in search engines.

### Optimizing Performance for Accessibility and Load Time:
- Accessibility Audits with Axe: I have used Axe, a leading accessibility testing tool, to identify and address potential accessibility issues. This ensures our application is usable by a wider audience, including users with disabilities.

- React Lazy Loading with Code Splitting: I have utilize React's Lazy Loading capabilities in conjunction with code splitting. This technique delays the loading of non-critical components until they are needed, improving initial page load times and overall responsiveness.

-  Vite Configuration for Optimized Builds: App is configured in Vite, a modern build tool, is optimized for performance which helps pre-bundling and minimizing the build footprint, resulting in faster loading times and a smoother user experience.

###### Light House Report
![Light House Report](<Screenshot 2024-04-13 at 7.11.59 PM.png>)

##### Performance Tab Report
![Performance Tab Report](<Screenshot 2024-04-13 at 7.16.46 PM.png>)

##### Axe Tool Report
![Axe Tool Report](<Screenshot 2024-04-13 at 7.18.41 PM.png>)


## Screenshots

##### Mobile View
![Mobile View](<Screenshot 2024-04-13 at 7.21.38 PM.png>)

##### Tablet View
![Tablet View](<Screenshot 2024-04-13 at 7.22.44 PM.png>)

##### Laptop View
![Laptop View](<Screenshot 2024-04-13 at 7.24.43 PM.png>)


## Run Locally
Clone the Repository

Repository Link

```bash
  git clone git@github.com:adityagarg2198/acme-note.git
```

Go to the project directory

```bash
  cd atlan-note-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Production

To generate production build this project run

```bash
  npm run build
```

