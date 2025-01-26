# AnxiEase 🩷

## Basic Details
### Team Name: Battery Acid

### Team Members
- Member : Alita Antony - Jyothi Engineering College

### Hosted Project Link
[Hosted Project Link](https://github.com/alitaantony/AnxiEase/archive/refs/heads/main.zip)

### Project Description
AnxiEase is a browser extension that helps with anxiety by prompting grounding questions and breathing exercises. The goal is to provide users with tools to manage anxiety through interactive activities.

### The Problem Statement
Anxiety can be overwhelming, and people often struggle with finding effective ways to manage it. How can we offer quick and simple tools that are accessible directly from your browser to help you stay calm and grounded?

### The Solution
AnxiEase helps users manage anxiety by offering grounding questions and breathing exercises. The extension provides an engaging experience where users can check in with themselves, answer questions, and participate in calming exercises. It even rewards you with badges for your participation!

## Technical Details
### Technologies/Components Used
Software:
- **Languages used**: JavaScript, HTML, CSS
- **Frameworks used**: None
- **Libraries used**: None
- **Tools used**: Visual Studio Code, GitHub, Chrome Developer Tools

### Implementation

The **AnxiEase** extension is built with a focus on simplicity and user engagement. It provides a seamless user experience through two main modes: grounding questions and breathing exercises. The extension's functionality is driven by JavaScript for the core logic, with HTML for structure and CSS for styling, ensuring a responsive and clean UI.

#### Software Implementation
- The extension utilizes a manifest file (`manifest.json`) which contains configuration details about the extension, such as its name, version, and required permissions.
- The **popup** interface is styled using custom CSS (`popup.css`) to create a visually appealing and calming theme, featuring elements like soft colors, animated buttons, and a smooth layout.
- **JavaScript (popup.js)** handles user interactions. The script manages switching between grounding questions and breathing exercises, handles the timer for the breathing mode, and stores user achievements (earned badges) in the browser's local storage.
- The extension includes a **badge reward system** that allows users to earn badges by answering questions or completing breathing exercises, adding an element of motivation.

#### Breathing Mode
- A 30-second timer is displayed during the breathing exercises to encourage focused breathing. The user earns a "Tranquil" badge when they complete the timer, and the badge is displayed on the interface.

#### Grounding Questions Mode
- In grounding mode, the user is prompted with different reflective questions aimed at easing anxiety. After responding, the user earns a badge, and the question changes to the next one in the sequence.

#### Badge System
- Badges are stored in local storage and can be viewed on the extension popup. These badges serve as a form of positive reinforcement to encourage users to engage with the extension regularly.

The implementation provides a user-friendly, calming experience that promotes mental well-being, using browser extension technology to deliver grounding techniques and breathing exercises.


#### Installation
1. Clone the repository:  
   `git clone https://github.com/alitaantony/AnxiEase.git`
   
2. Navigate to the folder:  
   `cd AnxiEase`
   
3. Open the `popup.html` in your browser after loading the extension.

#### Run
1. Enable Developer Mode in Chrome's Extensions page.
2. Load the unpacked extension by selecting the `AnxiEase` folder.
3. Enjoy using AnxiEase!

### Project Documentation
For Software:

#### Screenshots

![Screenshot1](https://github.com/alitaantony/AnxiEase/raw/main/chromeexten.png)  
*This shows the extension icon in the browser.

![Screenshot2](https://github.com/alitaantony/AnxiEase/raw/main/breatheq.png)  
*This shows the breathing exercise timer.*

![Screenshot3](https://github.com/alitaantony/AnxiEase/raw/main/groundq.png)  
*This shows the grounding question displayed in the extension.*

#### Diagrams
![Workflow](https://github.com/alitaantony/AnxiEase/raw/main/workflow.png)  
*This shows the architecture of AnxiEase.*

### Project Demo
#### Video
[Watch the demo video here](https://drive.google.com/file/d/1tk_0mRD_RbWTdK3ep2mldAcGqHBBhp3v/view?usp=sharing)  
*This demonstrates how the extension works in action.*


## Team Contributions
- Alita Antony - Everything :P

---
Made with ❤️ at TinkerHub
