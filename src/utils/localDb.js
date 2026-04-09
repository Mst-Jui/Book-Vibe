const getAllReadListFormLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    console.log(allReadList)
    if(allReadList) return JSON.parse(allReadList);

    return [];
}


const addReadListToLocalDB = (book) =>{
  const allBooks = getAllReadListFormLocalDB()
  const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId) 
  if(!isAlreadyExist){
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks))
  }
}

export {getAllReadListFormLocalDB, addReadListToLocalDB}