import React from 'react';
import '../styles/graduation.css';  // Import the associated CSS

const Graduation = () => {
  return (
    <div className="graduation-container">
      <h1 className="graduation-heading">Graduation Checklist</h1>

      <div className="checklist-wrapper">
        {/* Undergraduate Box */}
        <div className="checklist-box undergraduate">
          <h2 className="checklist-heading">Undergraduate Checklist</h2>
          <ul className="checklist">
            <li><a href="Graduation Checklist for BTech 2020-CSAI..pdf" target="_blank" rel="noopener noreferrer">BTech 2020-CSAI</a></li>
            <li><a href="Graduation Checklist for BTech 2020-CSAM..docx.pdf" target="_blank" rel="noopener noreferrer">BTech 2020-CSAM</a></li>
            <li><a href="Graduation Checklist for BTech 2020-CSB..pdf" target="_blank" rel="noopener noreferrer">BTech 2020-CSB</a></li>
            <li><a href="Graduation Checklist for BTech 2020-CSD..pdf" target="_blank" rel="noopener noreferrer">BTech 2020-CSD</a></li>
            <li><a href="Graduation Checklist for BTech 2020-CSE..pdf" target="_blank" rel="noopener noreferrer"> BTech 2020-CSE</a></li>
            <li><a href="Graduation Checklist for BTech 2020-CSSS.pdf" target="_blank" rel="noopener noreferrer">BTech 2020-CSSS</a></li>
            <li><a href="Graduation Checklist for BTech 2020-ECE..pdf" target="_blank" rel="noopener noreferrer">BTech 2020-ECE</a></li>
          </ul>
        </div>

        {/* Postgraduate Box */}
        <div className="checklist-box postgraduate">
          <h2 className="checklist-heading">Postgraduate Checklist</h2>
          <ul className="checklist">
            <li><a href="11 (i)- Graduation Requirement Checklist M.Tech(CSE-AI) AY 2022-24 (1).pdf" target="_blank" rel="noopener noreferrer">M.Tech(CSE-AI) AY 2022-24</a></li>
            <li><a href="11- Graduation Requirement Checklist M.Tech(CSE) AY 2022-24 (1).pdf" target="_blank" rel="noopener noreferrer">M.Tech(CSE) AY 2022-24</a></li>
            <li><a href="12- Graduation Requirement Checklist M.Tech(ECE) AY 2022-24 (1).pdf" target="_blank" rel="noopener noreferrer">M.Tech(ECE) AY 2022-24</a></li>
            <li><a href="16- Graduation Requirement Checklist M.Tech(CB) AY 2022-24 (1).pdf" target="_blank" rel="noopener noreferrer">M.Tech(CB) AY 2022-24G Checklist 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Graduation;
