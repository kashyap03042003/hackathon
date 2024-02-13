import React from 'react'

export default function Bills() {
  return (
    <>
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Event Bills Management</title>
  <link rel="stylesheet" href="styles.css" />
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    \t body {\n        font-family: Arial, sans-serif;\n        background: linear-gradient(to bottom, #663399, #7952b3, #8e44ad, #9b59b6, #a569bd);\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n    }\n\n    .container-b {\n        max-width: 800px;\n        width: 90%; /* Set a percentage width for responsiveness /\n        margin: 50px auto;\n        background-color: #ffffff;\n        padding: 20px;\n        border-radius: 8px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    }\n\n    h1 {\n        color: #fff;\n        margin-bottom: 20px;\n        text-align: center;\n    }\n\n    / Rest of the styles remain unchanged /\n\n    input[type=\"submit\"] {\n        width: 90%; / Make the submit button full width on smaller screens /\n    }\n\n    @media (max-width: 600px) {\n        / Adjust styles for screens with a maximum width of 600px /\n        .container-b {\n            width: 100%; / Full width on small screens /\n        }\n    }\n\n    / Additional styling for file input /\n    input[type=\"file\"] {\n        display: inline-block;\n        width: 100%; / Make file input full width /\n        box-sizing: border-box; / Ensure padding doesn't exceed 100% width */\n        padding: 8px;\n        font-size: 16px;\n        border: 1px solid #dddddd;\n        border-radius: 4px;\n        background-color: #ffffff;\n        color: #555555;\n    }\n\n    " }} />
  <div className="container-b">
    <div className="h1tag">
      <h1>Event Bills Management</h1>
    </div>
    <form id="billsForm" encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="eventImages">Event Images:</label>
        <input type="file" id="eventImages" name="eventImages[]" multiple />
      </div>
      <div className="form-group">
        <label htmlFor="participants">Number of Participants:</label>
        <input type="number" id="participants" name="participants" min={0} />
      </div>
      <div className="form-group">
        <label htmlFor="numBills">Number of Bills:</label>
        <select id="numBills" name="numBills" onchange="createBillInputs()">
          <option value={0} selected>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          {/* Add options for numbers 3 to 15 */}
          {/* Example: */}
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          {/* Add remaining options up to 15 */}
        </select>
      </div>
      <div id="billInputsContainer" className="form-group">
        <div className="form-group">
          <label htmlFor="eventImages">Bill proofs:</label>
          <input type="file" id="BillImages" name="BillImages[]" multiple />
        </div>
        {/* Bill inputs will be dynamically added here */}
      </div>
      <div className="form-group">
        <input type="submit" defaultValue="Submit" />
      </div>
    </form>
  </div>
</div>
    </>
  )
}
