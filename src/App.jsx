import React from 'react';

function App() {
  const handleShowQuote = () => {
    const imageUrl =
      '/src/assets/sk.jpg';

    const win = window.open('', '', 'width=400,height=700');

    win.document.write(`
      <html>
        <head>
          <title>Quote</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              background: #f9f9f9;
              height: 100vh;
              text-align: center;
            }

            img {
              width: 90%;
              max-width: 300px;
              border-radius: 12px;
              margin-top: 40px;
              box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }

            h2 {
              font-size: 1.1rem;
              margin-top: 20px;
              padding: 0 20px;
              color: #333;
            }

            button {
              margin-top: 30px;
              padding: 10px 20px;
              font-size: 16px;
              background-color: #dc3545;
              color: white;
              border: none;
              border-radius: 8px;
              cursor: pointer;
            }

            @media(min-width: 768px) {
              img {
                max-width: 350px;
              }

              h2 {
                font-size: 1.4rem;
              }
            }
          </style>
        </head>
        <body>
          <img src="${imageUrl}" alt="Motivational Photo" />
          <h2>"If you succeed without struggling, that is not a victory. That is called luck."</h2>
          <button onclick="window.close()">Close</button>
        </body>
      </html>
    `);

    win.document.close();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#eaf0f5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        letterSpacing: '0rem',
        color: '#222',
        userSelect: 'none'
      }}>
        PREM
      </h1>
      <button
        onClick={handleShowQuote}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        open
      </button>
    </div>
  );
}

export default App;
