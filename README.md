# Project Title: Advanced Admin Dashboard
This project is a fully responsive Admin Dashboard built using React.js, Material UI (MUI v5), and Nivo Charts, featuring a customizable sidebar, color theme switching (light/dark mode), data tables, calendar events, and analytical charts.


## Features
🎨 1. Theme System

Light & Dark Mode switching using MUI Theme Provider

Custom color tokens for brand identity

Centralized theme logic for consistent UI

Supports dynamic colors for components (Sidebar, AppBar, Charts…)

📁 2. Sidebar (Mini Variant Drawer)

Built using MUI Drawer + styled() API

Smooth open/close animations

Collapsed mode keeps icons visible

Active route highlighting

Sidebar items contain:
   Icon
   Title (Manage Team, Contacts, Invoices…)
   Navigation link


🧭 3. Topbar

Includes:

Theme toggle (dark/light)

Notifications icon

Settings icon

User profile icon

Positioned inside AppBar

Works dynamically with theme changes

🗂️ 4. Routing 
Each page contains UI + components + custom MUI styling.



📊 5. Charts (Nivo)

Bar Chart (Sales per month)

Line Chart (Revenue growth)

Pie Chart (Breakdown values)

Fully responsive

Custom theme based on light/dark mode

Custom tooltip colors + axis styling

Ability to recolor totals and labels



📊 5. Charts (Nivo)

Bar Chart (Sales per month)

Line Chart (Revenue growth)

Pie Chart (Breakdown values)

Fully responsive

Custom theme based on light/dark mode

Custom tooltip colors + axis styling

Ability to recolor totals and labels


📅 6. FullCalendar Integration

Add events by selecting a date

Delete events using eventClick

Syncs events with the side event list

ListItemText shows event title + formatted date

Supports:

Month view

Week view

Day view

List view


📋 7. DataGrid Customization (MUI X)

Custom header background

Removes borders

Custom checkbox color

Pagination

Column styling

Integration with theme provider



## Technologies Used
React.js

Material UI

Nivo Charts

FullCalendar

React Router DOM

Emotion Styled Components

Vite / CRA


## Running the Project 
1-Install dependencies:
// npm install

2-Run development server:
// npm run dev

3-Build project:
// npm run build



## Future Enhancements
Add authentication (Login / Logout)

Add Redux or Zustand for global state

Add real backend API instead of mock data

Improve chart animations and dataset sources