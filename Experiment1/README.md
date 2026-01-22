

**Implementation of Page Navigation Using React State and Multiple Components**

---

## **Objective**

To design and implement a **React.js application** that:

1. Contains **three sections**: Home, About, and Contact.
2. Navigates between pages using **React state (`useState`)**.
3. Uses **separate functional components** for each page.
4. Achieves navigation **without using React Router**.

---

## **Theory**

React follows a **component-based architecture**, where the UI is divided into reusable components.
To manage dynamic behavior, React provides **Hooks**, such as `useState`.

### **useState Hook**

The `useState` hook allows functional components to store and update state values.
When the state changes, React automatically **re-renders** the component.

### **Concept Used in This Experiment**

* A state variable stores the **currently active page**.
* Button clicks update the state.
* **Conditional rendering** displays the selected component.
* Only **one component is visible at a time**.

---

## **Requirements**

* Node.js (LTS Version)
* Visual Studio Code
* npm (Node Package Manager)
* Web Browser (Chrome / Edge)

---

## **Technologies Used**

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| Node.js          | JavaScript runtime       |
| React.js         | Frontend UI library      |
| JavaScript (ES6) | Logic and state handling |
| JSX              | UI rendering             |

---

## **Folder Structure**

```
src/
 ├── App.jsx
 ├── Home.jsx
 ├── About.jsx
 └── Contact.jsx
```

---

## **Implementation**

### **App.jsx**

```jsx
import { useState } from "react"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  const [page, setPage] = useState("home")

  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </div>
  )
}

export default App
```

---

### **Home.jsx**

```jsx
function Home() {
  return <h1>Home Page</h1>
}

export default Home
```

---

### **About.jsx**

```jsx
function About() {
  return <h1>About Page</h1>
}

export default About
```

---

### **Contact.jsx**

```jsx
function Contact() {
  return <h1>Contact Page</h1>
}

export default Contact
```

---

## **Working Explanation**

1. The application starts with the **Home page** by default.
2. Clicking a button updates the `page` state value.
3. React checks the state and renders the matching component.
4. Navigation occurs **without page reload**.
5. Only one component is displayed at any time.

---

## **Output**

| Button Clicked | Displayed Page |
| -------------- | -------------- |
| Home           | Home Page      |
| About          | About Page     |
| Contact        | Contact Page   |

---

## **Learning Outcomes**

* Understand **state management** using `useState`
* Implement **conditional rendering**
* Create and use **multiple React components**
* Navigate between pages **without React Router**
* Improve understanding of **component-based design**

---

## 🏁 **Conclusion**

This experiment successfully demonstrated how **React state and conditional rendering** can be used to navigate between multiple pages using separate components. The approach avoids external routing libraries while maintaining clean and efficient UI behavior.



Just tell me 👌
