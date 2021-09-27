# Project Overview

## Project Name

Five Roll

## Project Description

Five Roll lets users start a dice rolling game with multiple players and a name of their choosing. Players get to roll in turn and the winning score and player are recorded to AirTable and can be seen in the Recent Scores page.

## Wireframes

Wireframes and component hierarchy can be viewed [here.](https://whimsical.com/five-roll-9eLVUUW9J5wTsGZgWgUn7g)

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recDiGvjQBVDV0QIu",
      "fields": {
        "score": 10,
        "winner": "Player1",
        "gameName": "Game1"
      },
      "createdTime": "2021-09-20T15:05:09.000Z"
    },
    {
      "id": "recHgW12b8Pk1Niq5",
      "fields": {
        "score": 20,
        "winner": "Player2",
        "gameName": "Game2"
      },
      "createdTime": "2021-09-20T15:05:09.000Z"
    },
    {
      "id": "recwVj1VIpnqedu1Z",
      "fields": {
        "score": 6,
        "winner": "Player3",
        "gameName": "Game3"
      },
      "createdTime": "2021-09-20T15:05:09.000Z"
    }
  ],
  "offset": "recwVj1VIpnqedu1Z"
}
```

### MVP/PostMVP

#### MVP

- Create new game record in AirTable
- Require game name and >1 players to start game
- Allow user to change player names
- Record winner and score to AirTable
- Responsive design

#### PostMVP

- Let players choose dice to remove on roll tie
- Allow tying players to roll for win (vs. favor first roller)
- Better styling

## Project Schedule

| Day          | Deliverable                                        | Status     |
| ------------ | -------------------------------------------------- | ---------- |
| September 20 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| September 20 | Project Approval                                   | Complete   |
| September 21 | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| September 22 | Pseudocode / actual code                           | Complete   |
| September 24 | Initial Clickable Model                            | Complete   |
| September 25 | MVP                                                | Complete   |
| September 27 | Styling                                            | Incomplete |
| September 27 | Presentations                                      | Incomplete |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all parts of your app. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Navbar                         |    M     |      3hrs      |     4hrs      |    4hrs     |
| How To                         |    M     |      3hrs      |     2hrs      |    2hrs     |
| Recent scores                  |    H     |      3hrs      |     4hrs      |    4hrs     |
| POST                           |    H     |      3hrs      |     1hrs      |    1hrs     |
| PUT                            |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create game: players           |    H     |      3hrs      |     4hrs      |    4hrs     |
| Create game: name              |    H     |      2hrs      |     2hrs      |    2hrs     |
| Create game: start game button |    H     |      3hrs      |     4hrs      |    4hrs     |
| Play game: layout              |    H     |      3hrs      |     3hrs      |    3hrs     |
| Play game: score               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Play game: player turn         |    H     |      3hrs      |     4hrs      |    4hrs     |
| Turn                           |    H     |      3hrs      |     6hrs      |    6hrs     |
| Styling: general               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Styling: turn                  |    H     |      3hrs      |     3hrs      |    3hrs     |
| Styling: recent scores         |    H     |      3hrs      |     1hrs      |    1hrs     |
| Total                          |    H     |     44hrs      |     43hrs     |    43hrs    |

## SWOT Analysis

### Strengths: Clear game turns and play components

### Weaknesses: Gameplay isn't great for players, too rigid and first-move advantage is OP. Design is ugly.

### Opportunities: Design/styling; improved play

### Threats: Attribution
