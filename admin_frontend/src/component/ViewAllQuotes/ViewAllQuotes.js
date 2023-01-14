import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewAllQuotes.css";
import { Link } from "react-router-dom";
import { EditQuote } from "../EditQuote/EditQuote";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ViewAllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [quote_by, setQuoteBy] = useState("");
  const [quote, setQuote] = useState("");

  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ________ GET QUOTES API _______

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

  // ________ DELETE QUOTE API _________

  const deleteQuote = async (id) => {
    console.log("we have id", id);
    const url = `http://127.0.0.1:8000/api/delete-a-quote/${id}`;
    await axios
      .delete(url)
      .then((response) => {
        console.log("Successfull response", response);
        getQuotes();
      })
      .catch((error) => {
        console.log("Line 33 deleteQuote()", error);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Quote by " + quote_by}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {quote}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
      <div>
        <li className="flex-container">
          <Link to="/dashboard" className="link">
            {" "}
            <ul className="nav-item p-3"> Dashboard </ul>{" "}
          </Link>
          <Link to="/add-quote" className="link">
            {" "}
            <ul className="nav-item p-3"> Add Quotes </ul>{" "}
          </Link>
          <Link to="/view-all-quotes" className="link">
            {" "}
            <ul className="nav-item p-3"> View Quotes </ul>{" "}
          </Link>
          <Link to="/login" className="link">
            {" "}
            <ul className="nav-item p-3"> Login </ul>{" "}
          </Link>
        </li>
      </div>
      <hr className="nav-line" />

      <h2 className="heading"> WELCOME ADMIN </h2>
      <table
        className="table table-bordered"
        border="1"
        style={{
          width: "80em",
          margin: "auto",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th> S no</th>
            <th> Quote-By</th>
            <th> Quote</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.length > 0 &&
            quotes.map((quote, index) => {
              return (
                <>
                  <tr>
                    <td> {index + 1}</td>
                    <td> {quote.quote_by}</td>
                    <td> {quote.quote.slice(0, 10) + " ...."}</td>
                    <td>
                      <button
                        className="btn btn-success m-1"
                        variant="outlined"
                        // onClick={handleClickOpen(quote)}
                        onClick={ () => {
                          setQuote(quote.quote);
                          setQuoteBy(quote.quote_by);
                          handleClickOpen(quote)
                        }}
                      >
                        {" "}
                        View{" "}
                      </button>
                      <button
                        className="btn btn-primary m-1"
                        onClick={<EditQuote _id={quote.quote._id}/>}
                      >
                        {" "}
                        Edit{" "}
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        type="button"
                        onClick={() => {
                          console.log("Here it is");
                          deleteQuote(quote._id);
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
