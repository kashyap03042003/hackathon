import React from 'react'

export default function ApprovalForm() {
  return (
    <>
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Approval Request</title>
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n        }\n        .container {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff;\n            border-radius: 5px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        h1, h2 {\n            color: #333;\n        }\n        .event-details, .approval-timeline {\n            margin-bottom: 20px;\n        }\n        .event-details p {\n            margin: 5px 0;\n        }\n        .approval-timeline ul {\n            list-style-type: none;\n            padding: 0;\n        }\n        .approval-timeline li {\n            margin-bottom: 5px;\n        }\n        .approval-button {\n            background-color: #4CAF50;\n            color: white;\n            padding: 10px 20px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            font-size: 16px;\n        }\n        .approval-button:hover {\n            background-color: #45a049;\n        }\n        #dis{\n            background-color: red;\n        }\n        #dis:hover{\n            background-color: #c00707;\n        }\n    " }} />
  <div className="container">
    <h1>Welcome, Professor!</h1>
    <div className="event-details">
      <h2>Event Details</h2>
      <p><strong>Name:</strong> Sample Event</p>
      <p><strong>Purpose:</strong> To organize a fun activity</p>
      <p><strong>Venue:</strong> Main Hall</p>
      <p><strong>Date:</strong> January 1, 2025</p>
      <p><strong>Start Time:</strong> 10:00 AM</p>
      <p><strong>End Time:</strong> 12:00 PM</p>
      <p><strong>Permissions Required:</strong> Girls in time permission, First-year permission, Equipments, Sports equipments, Classes off</p>
    </div>
    <div className="approval-timeline">
      <h2>Approval Timeline</h2>
      <ul>
        <li><strong>Prof-incharge:</strong> Pending</li>
        <li><strong>Associate Dean:</strong> Pending</li>
        <li><strong>Dean:</strong> Pending</li>
        <li><strong>Director:</strong> Pending</li>
      </ul>
    </div>
    <button className="approval-button">Approve Event</button>
    <button className="approval-button" id="dis">Disprove Event</button>
  </div>
</div>
    </>
  )
}
