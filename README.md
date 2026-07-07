# QuickMeet – Video Conferencing Platform

## Overview
QuickMeet is a full-stack video conferencing web application built using the MERN stack. It enables users to connect in real-time through video calls, similar to platforms like Zoom or Google Meet.

The application uses WebRTC and Socket.io to handle real-time video communication and messaging. It supports both registered and guest users, making it easy to join meetings without any complex setup. The platform includes essential features such as joining meetings using a meeting code, live chat, screen sharing, and maintaining meeting history.

The main focus of this project is to implement a clear user flow and demonstrate how real-time communication systems work in a full-stack environment.

## Technologies Used
The project is built using the MERN stack along with real-time communication technologies:
- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** WebRTC, Socket.io
- **State Management & APIs:** REST APIs
- **Version Control:** Git & GitHub

## Key Features and Functionalities

### User Account Management
The application provides a basic authentication system for users:
- Users can register using Full Name, Username, and Password
- Existing users can log in securely
- Logout functionality is available
- After successful login, users are redirected to the Home Page

### Guest Access System
The platform allows users to join meetings without creating an account:
- Users can directly enter the meeting lobby
- Only a username is required to join
- After the call ends, users are redirected to the Login/Register page

### Home Dashboard
After logging in, users are redirected to the Home Page, where they can:
- Join a new meeting
- Access meeting history
- Navigate easily through available options

### Meeting Join System
Users can join meetings using a meeting code or link:
- The same meeting code can be reused
- Joining flow includes:
  1. Enter meeting code
  2. Enter username
  3. Enter meeting lobby
  4. Join the video call

### Video Conferencing System
The core functionality of the application is real-time video communication:
- Built using WebRTC for live video streaming
- Multiple users can join the same meeting
- The meeting interface includes:
  - Video controls
  - Audio (microphone) controls
  - End call option

### Real-Time Chat System
The application includes a live chat feature:
- Users can send and receive messages during meetings
- Messages are delivered instantly using Socket.io

### Screen Sharing Feature
Users can share their screen during meetings:
- Useful for presentations and collaboration
- Integrated directly into the meeting interface

### Meeting History
The system maintains a record of previous meetings:
- Stores Meeting ID and date
- Helps users keep track of past sessions

### Call Flow Management
The application ensures smooth navigation after a call ends:
- Logged-in users are redirected to the Home Page
- Guest users are redirected to the Login/Register page

## Limitations
- **No Meeting Recording:** The application currently does not support recording of video calls, so users cannot save or replay meetings.
- **Basic Participant Controls:** There are no advanced controls such as muting other participants, removing users, or managing roles (admin/host).
- **Limited Scalability for Large Meetings:** The system may not perform efficiently with a large number of participants, as it is not optimized for high-scale usage.
- **No Waiting Room or Approval System:** The application does not include a waiting room feature, so any user with the meeting code can directly join the meeting without host approval.

## Future Scope and Enhancements
- **Add Meeting Recording:** Implement a feature to record video meetings so users can save and access them later.
- **Improve User Interface (UI/UX):** Enhance the design and overall user experience to make the application more intuitive and visually appealing.
- **Add Basic Participant Controls:** Introduce simple controls like muting participants or removing users from the meeting to improve session management.
- **Optimize for Multiple Users (Scalability):** Improve the system to handle more participants efficiently without affecting performance, especially for larger meetings.
- **Add Meeting Access Control:** Introduce features like meeting passwords or host approval to control who can join a meeting, improving privacy and security.

## Deployment
### Live Project Link: https://quickmeet-1-bwpx.onrender.com
