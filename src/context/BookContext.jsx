import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFormLocalDB } from '../utils/localDb';


export const BookContext = createContext()
const BookProvider = ({ children }) => {


  const [storedBooks, setStoredBooks] = useState(()=> getAllReadListFormLocalDB());
  const [wishList, setWishList] =useState([]);

  // useEffect(() =>{
  //  const getReadListFromLocalDB = getAllReadListFormLocalDB()
  //  console.log(getReadListFromLocalDB)
  //  setStoredBooks(getAllReadListFormLocalDB)
  // },[])


  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook)

    const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId)
    if (isExistBook) {
      toast.error("The book is already exist");
      // return;
    }
    else {
      setStoredBooks([...storedBooks, currentBook])
      toast.success(`${currentBook.bookName} is added tor read list`)
    }
  }



  
  const handleWishList = (currentBook) => {

    const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
    if(isExistInReadList){
      toast.error("This book is already in read list")
      return;
    }
   

    const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
    if (isExistBook) {
      toast.error("The book is already exist");
      // return;
    }
    else {
      setWishList([...wishList, currentBook])
      toast.success(`${currentBook.bookName} is added to wish list`)
    }
  }

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList
  }


  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
};

export default BookProvider;