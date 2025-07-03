import React from 'react';

function App() {
  const handleShowQuote = () => {
    const imageUrl = "/sk.jpg"; // Place sk.jpg in your public folder

    const win = window.open("", "_blank", "width=800,height=1000");

    win.document.write(`
      <html>
        <head>
          <title>Quote</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              font-family: Arial, sans-serif;
              background-color: #000;
              color: white;
              text-align: center;
            }

            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              padding: 20px;
            }

            .image-box {
              max-width: 90%;
              max-height: 80vh;
            }

            .image-box img {
              width: 100%;
              height: auto;
              border-radius: 10px;
            }

            .quote {
              margin-top: 20px;
              font-size: 20px;
              background: rgba(0, 0, 0, 0.6);
              padding: 12px 20px;
              border-radius: 8px;
              max-width: 90%;
            }

            .close-btn {
              margin-top: 20px;
            }

            .close-btn button {
              padding: 10px 20px;
              font-size: 16px;
              background-color: #ff4d4f;
              color: white;
              border: none;
              border-radius: 6px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="image-box">
              <img src="${imageUrl}" alt="Motivational" />
            </div>
            <div class="quote">
              "If you succeed without struggling, that is not a victory. That is called luck."
            </div>
            <div class="close-btn">
              <button onclick="window.close()">Close</button>
            </div>
          </div>
        </body>
      </html>
    `);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>PREM</h1>
      <button
        onClick={handleShowQuote}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Open
      </button>
    </div>
  );
}

export default App;
