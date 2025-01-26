# AnxiEase 🩷

## Basic Details

### Team Name: Battery Acid

### Team Members
- **Alita Antony** - Jyothi Engineering College

### Hosted Project Link
[Hosted Project Link](https://github.com/alitaantony/AnxiEase/archive/refs/heads/main.zip)

### Project Description
AnxiEase is a browser extension designed to help users manage anxiety by offering grounding questions and breathing exercises. The goal is to provide quick and simple tools that help users stay calm and grounded, all directly from their browser.

### The Problem Statement
Anxiety can be overwhelming, and people often struggle with finding effective ways to manage it. How can we offer quick, easy, and accessible tools that users can reach directly from their browser to help them stay calm and grounded?

### The Solution
AnxiEase offers users a calming experience by providing grounding questions and breathing exercises. The extension encourages users to check in with themselves, answer questions, and participate in calming exercises. Plus, users are rewarded with badges for their participation!

---

## Technical Details

### Technologies/Components Used

- **Languages**: JavaScript, HTML, CSS
- **Frameworks**: None
- **Libraries**: None
- **Tools**: Visual Studio Code, GitHub, Chrome Developer Tools

---

### Implementation

The **AnxiEase** extension focuses on simplicity and user engagement, offering two main modes: grounding questions and breathing exercises. Here's an overview of how the extension works:

#### Software Implementation
- The extension uses a `manifest.json` file to define configuration details such as the name, version, and permissions required.
- The **popup** interface is styled with custom CSS (`popup.css`) for a visually soothing and calming theme, featuring soft colors, animated buttons, and a clean layout.
- **JavaScript (popup.js)** handles user interactions by switching between grounding questions and breathing exercises. It also manages the timer for breathing mode and stores user achievements (earned badges) in the browser’s local storage.
- The extension includes a **badge reward system**, where users earn badges for answering questions or completing breathing exercises.

#### Breathing Mode
- A 30-second timer encourages focused breathing during the breathing exercises. Users earn a "Tranquil" badge once they complete the timer, which is then displayed on the interface.

#### Grounding Questions Mode
- In grounding mode, users are prompted with reflective questions aimed at easing anxiety. After responding, the question changes, and the user earns a badge.

#### Badge System
- Badges are stored in local storage and can be viewed on the extension popup. These serve as positive reinforcement, motivating users to engage with the extension regularly.

This implementation ensures a user-friendly experience that promotes mental well-being by delivering grounding techniques and breathing exercises directly through a browser extension.

---

## Installation

To install the extension, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/alitaantony/AnxiEase.git`
   
2. Navigate to the folder:  
   `cd AnxiEase`
   
3. Open `popup.html` in your browser after loading the extension.

---

### Running the Extension

1. Enable Developer Mode in Chrome's Extensions page.
2. Load the unpacked extension by selecting the `AnxiEase` folder.
3. Enjoy using **AnxiEase**!

---

## Project Documentation

### Screenshots

![Screenshot1](https://github.com/alitaantony/AnxiEase/raw/main/chromeexten.png)  
*This shows the extension icon in the browser.*

![Screenshot2](https://github.com/alitaantony/AnxiEase/raw/main/breatheq.png)  
*This shows the breathing exercise timer.*

![Screenshot3](https://github.com/alitaantony/AnxiEase/raw/main/groundq.png)  
*This shows the grounding question displayed in the extension.*

---

### Diagrams

![Workflow](https://github.com/alitaantony/AnxiEase/raw/main/workflow.png)  
*This shows the architecture of AnxiEase.*

---

### Project Demo

#### Video
[Watch the demo video here](https://drive.google.com/file/d/1tk_0mRD_RbWTdK3ep2mldAcGqHBBhp3v/view?usp=sharing)  
*This demonstrates how the extension works in action.*

---

## Team Contributions

- **Alita Antony** - Everything :P

---

Made with ❤️ at TinkerHub
