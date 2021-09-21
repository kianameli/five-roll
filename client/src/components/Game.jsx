import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Game() {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState({});

  async function handleClick2(e) {
    e.preventDefault();
    let res = await axios.get(`${URL}/${id}`, config);
    console.log(res.data.fields);
    setGameInfo(res.data.fields);
  }

  async function handleClick1(e) {
    e.preventDefault();
    let { fields } = { gameInfo };
    fields.score = 10;
    let res = await axios.put(URL, { fields }, config);
    setGameInfo(res.data.fields);
  }
  
  return (
    <div>
      GAME: {id}
      {/* <button onClick={handleClick1}>set score to 10</button>
      <button onClick={handleClick2}>show record</button> */}
    </div>
  )
}
