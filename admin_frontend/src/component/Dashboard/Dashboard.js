import React, { useState, useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const url = `http://127.0.0.1:8000/api/get-all-quotes`;
    await axios
      .get(url)
      .then((response) => {
        setQuotes(response.data.Quotes);
        console.log("Response successfull", quotes);
      })
      .catch((error) => {
        console.log("Line 18 ViewAllQuotes.js", error);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return(
    <div>
        {quotes.length > 0 && (
          <div>
            <h1> {quotes.length} </h1>
          </div>
        )}
    </div>
  )
};
