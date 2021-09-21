import React, { useEffect,useState } from 'react'
import axios from "axios";

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
    <div>
      {scores.map((record) => {
        return (
          <div>{record.fields.gameName} {record.fields.winner} {record.fields.score}</div>
        );
      })}
    </div>
  )
}
