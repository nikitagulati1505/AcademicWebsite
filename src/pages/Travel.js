import React from 'react';

const Travel = () => {
  return (
    <div>
      <style>
        {`
        /* General Container Styling */
        .beforeArrive-container {
            background-color: #f9f9f9;
            padding: 20px;
            font-family: 'Roboto', sans-serif;
            max-width: 1200px;
            margin: auto;
        }

        /* Heading Styles */
        .heading {
            font-size: 2.5em;
            text-align: center;
            color: rgb(3, 168, 163);
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        .smallHeading {
            font-size: 2em;
            text-align: center;
            color: #2c3e50;
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        .vSmallHeading {
            font-size: 1.5em;
            text-align: center;
            color: #2c3e50;
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        /* Subheading Style */
        .subheading {
            font-size: 1.8em;
            text-align: center;
            color: #34495e;
            margin-bottom: 30px;
        }

        /* Info Box Styling */
        .info {
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            color: #333;
            background-color: #ffffff;
            opacity: 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            transition: all 0.5s ease-in-out;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }

        .info.visible {
            opacity: 1;
            transform: translateY(0);
            text-align: left;
            color: #2c3e50;
        }

        /* Footer Styling */
        .footer {
            margin-top: 40px;
            padding: 20px;
            background-color: #2c3e50;
            color: white;
            text-align: center;
            font-size: 14px;
        }

        /* Responsive Design */
        @media only screen and (max-width: 768px) {
            .beforeArrive-container {
                padding: 15px;
                max-width: 100%;
            }

            .heading {
                font-size: 2em;
            }

            .smallHeading, .vSmallHeading {
                font-size: 1.5em;
            }

            .subheading {
                font-size: 1.5em;
            }

            .info {
                font-size: 1em;
                padding: 15px;
                max-width: 100%;
            }
        }

        @media only screen and (min-width: 768px) and (max-width: 1200px) {
            .beforeArrive-container {
                padding: 20px;
                max-width: 1000px;
            }

            .heading {
                font-size: 2.2em;
            }

            .subheading {
                font-size: 1.6em;
            }

            .info {
                max-width: 900px;
            }
        }
        `}
      </style>

      <div className="beforeArrive-container">
        <h1 className="heading">Travel Assistance</h1>
     
        <div className="info visible">
          <p>
            For more information on travel assistance programs, please refer to the document linked below.
          </p>
          <p>
            <a href="https://www.iiitd.ac.in/sites/default/files/docs/forms/2024/Office%20Order%20-%20Travel%20Assistance%20for%20Btech%20&%20Mtech%20Students%20(Revised).pdf">
              Travel Assistance for BTech & MTech Students (Revised)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
