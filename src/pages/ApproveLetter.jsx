import React from 'react'

export default function ApproveLetter() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Club Events Report</title>
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: 'Arial', sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 0;\n        }\n\n        .container {\n            max-width: 800px;\n            margin: 50px auto;\n            background-color: #ffffff;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n\n        h1 {\n            color: #333333;\n            margin-bottom: 20px;\n            text-align: center;\n        }\n\n        .event {\n            margin-bottom: 20px;\n            border: 1px solid #dddddd;\n            border-radius: 4px;\n            overflow: hidden;\n        }\n\n        .event-header {\n            background-color: #4CAF50;\n            color: #ffffff;\n            padding: 10px;\n            text-align: center;\n        }\n\n        .event-body {\n            padding: 15px;\n        }\n\n        .event img {\n            max-width: 100%;\n            height: auto;\n            display: block;\n            margin: 10px auto;\n            border-radius: 4px;\n        }\n    " }} />
  <div className="container">
    <h1>Club Events Report</h1>
    <div className="event">
      <div className="event-header">
        <h2>Event 1</h2>
      </div>
      <div className="event-body">
        <p>Number of Participants: 50</p>
        <p>Budget Spent: $1000</p>
        <img src="event1.jpg" alt="Event 1" />
      </div>
    </div>
    <div className="event">
      <div className="event-header">
        <h2>Event 2</h2>
      </div>
      <div className="event-body">
        <p>Number of Participants: 30</p>
        <p>Budget Spent: $800</p>
        <img src="event2.jpg" alt="Event 2" />
      </div>
    </div>
    {/* Add more events as needed */}
  </div>
</div>
  )
}
