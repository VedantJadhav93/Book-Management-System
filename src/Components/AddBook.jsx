import React, { useState } from 'react';
import './AddBook.css';

function AddBook(props){

    const[enteredId, setEnteredId] = useState("");
    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAuthor, setEnteredAuthor] = useState("");
    const[enteredPrice, setEnteredPrice] = useState("");

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }

    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }

    return (
        <div className="form-container">

            <form className='form-div' onSubmit={handleSubmit}>
                <span>id:</span> <input type = "text" id="id" className='input-field' onChange={handleChangeId} value={enteredId}></input>
                <span>Title:</span> <input type = "text" id="title" className='input-field' onChange={handleChangeTitle} value={enteredTitle}></input>
                <span>Author:</span> <input type = "text" id="author" className='input-field' onChange={handleChangeAuthor} value={enteredAuthor}></input>
                <span>Price:</span> <input type = "text" id="price" className='input-field' onChange={handleChangePrice} value={enteredPrice}></input>

                <input type="submit" value="add" id="add-btn"/>
            
            </form>
        </div>  
    );
}

export default AddBook;

