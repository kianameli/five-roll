import React, { useEffect,useState } from 'react'
import axios from "axios";
import './styles/RecentScores.css';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function RecentScores() {
  
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      const res = await axios.get(URL, config);
      res.data.records.sort((a, b) => b.fields.score - a.fields.score);
      setScores(res.data.records);
    }
    fetchScores();
  }, []);
 
  return (
    <div className="recent-scores">
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores
            .filter(record => record.fields.score !== 0)
            .map((record, index) => {
            return (
              <tr key={index}>
                <td>{record.fields.gameName}</td>
                <td>{record.fields.winner}</td>
                <td>{record.fields.score}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
  )
}
