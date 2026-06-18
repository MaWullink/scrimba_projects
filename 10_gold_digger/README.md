# Gold Bidding Server

Simple Node.js backend that receives user bids from a frontend form and saves them to a text file.

## Features

- Node.js server with basic routing
- Receives POST data from frontend
- Parses JSON request body
- Saves bid values to a file (appends new entries)

## How it works

- Frontend sends a value via fetch
- Server handles /save route
- Data is parsed and written to output.txt

## Technologies

- Node.js
- JavaScript (Frontend + Backend)

## What I learned

- Creating a basic server in Node.js
- Handling HTTP requests and routes

## Setup

1. Clone the project
2. Install dependencies
3. Run the server with npm start
