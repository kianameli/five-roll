import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchNewGameRecord = async () => {
  const fields = {
    gameName: "game",
    winner: "player",
    score: 0,
  };
  let res = await axios.post(URL, { fields }, config);
  return res.data.id;
};

export const updateGameRecord = async (fields, id) => {
  await axios.put(`${URL}/${id}`, { fields }, config);
};

export const updateScore = async (fields, id) => {
  await axios.put(`${URL}/${id}`, { fields }, config);
};
