import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Quote = () => {

  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    const url = `http://127.0.0.1:8000/api/get-a-quote/63a868bf91ebc6ccc24598c1`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imphc21lZXQiLCJlbWFpbCI6Imhhcm1lZXQucy5yYXRob3JlQGdtYWlsLmNvbSIsImlhdCI6MTY3MjE0NzMxNSwiZXhwIjoxNjcyMjMzNzE1fQ.UWE_rUhihv1qMgqxg161bGKmez9Y-M4QUVWpR3BDxZY';
    await axios
    .get(url, {headers : {Authorization : 'Bearer ' + token, is_subscribed : '1', is_admin : '1'}})
    .then((response) => {
      setQuote(response.data.Quote);
      console.log(quote, 'yes');
    })
    .catch((error) => {
      console.log('Line 16 Quote.js', error);
    })
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>

      <h1> Quotes </h1> 

            {quote && (
                <div>
                  {quote.quote}
                </div>
            ) }

    </div>
  )
}
