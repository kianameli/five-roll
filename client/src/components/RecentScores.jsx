import React from 'react'
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

  async function fetchScores() {
    console.log(airtableBase,airtableKey);
    const res = await axios.get(URL, config);
    console.log(res);
  }

  fetchScores();
  
  
  return (
    <div>
      RECENT SCORES
    </div>
  )
}
