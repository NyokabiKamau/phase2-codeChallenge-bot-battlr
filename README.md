# Phase2 Code Challenge Week1 
# Bank of Flat Iron

## Table of Content
1. [Requirements](#requirements)
2. [Project Guidelines](#project-guidelines)
    - [Core Deliverables](#core-deliverables)
    - [Advanced Deliverables](#advanced-deliverables)
2. [Project Setup & Pre-requisite Data](#project-setup--pre-requisite-data)
3. [Project Setup](#project-setup)
    - [Installations](#installations)
    - [Access](#access)
4. [Authors](#author)
5. [License](#license)
 

## Requirements
For this project, you’ll be building out a React application that will browse through
a list of robots, view a robot's details, and, enlist a bot into their army

## Project Guidelines
Your project should conform to the following set of guidelines:

### Core Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

### Advanced Deliverables
As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking
  on the card should instead display a show view (`BotSpecs`) for that bot,
  which should replace `BotsCollection`. BotSpecs should have two buttons: one
  to go back to the list view and another to enlist that bot. 
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added
  to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are
  `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## Project Setup & Pre-requisite Data
In your project directory, create a db.json file and use this data Links to an external site.for your server DB.

* Run this command to get the backend started: <code>json-server --watch db.json</code>
* Test your server by visiting this route in the browser: http://localhost:8001/bots
 

## Project Setup
To access this project on you local computer, follow the steps below

* Open your terminal
* Clone this repository: 
    - Run <code>git clone (git@github.com:NyokabiKamau/phase2-codeChallenge-bot-battlr.git)</code>


### Installations:
* Run <code>npm install</code> on the terminal

* Open Visual Studio Code:
    - Run <code>code .</code>

* Click on the available files to view the codes used


### Access
To access the content on the browser:

* click on this link ()

* Run <code>npm start</code> on your terminal to start the backend json server
   * (This enables the user to view the list of bank transactions)

   * or
   
   * Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Author
This project was contributed to by: 
* [Nyokabi Kamau](https://github.com/NyokabiKamau/)

# License
* This project is licensed under GNU General Public License v3
