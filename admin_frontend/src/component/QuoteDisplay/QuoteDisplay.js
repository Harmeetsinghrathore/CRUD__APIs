import React, {useState, useEffect} from 'react'
import uniqueRandomArray from 'unique-random-array';
import axios from 'axios';

export const QuoteDisplay = () => {

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
        console.log("Line 17 ViewAllQuotes.js", error);
      });

    };
    
    // const random = uniqueRandomArray(quotes);
    // const randomQuote = random();
    
  useEffect(() => {
    getQuotes();
  }, []);


  return (
    <div>
        {quotes.length > 0 && (
          <div>
            <h1> {uniqueRandomArray(quotes)()} </h1>
          </div>
        )}
    </div>
  )
}
