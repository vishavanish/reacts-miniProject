import React from 'react';
import "../App.css";
function Amazonsale() {
  // const firstBook={
  //   title:"this is book" ,
  //   author : "kaka"
  // }
  // const secondBook={
  //   title:"this is article from react" ,
  //   author : "vish"
  // }
  // const thirdBook={
  //   title:" Book is opeen yo read" ,
  //   author : "baba"
  // }
  const books = [{title:"this is book" ,  author : "kaka" , id: 1},{title:" Book is opeen yo read" , author : "baba" ,id:2}]
  return (
    
    <section className='booklist'>
     { 
     books.map( (book) =>{ const {title , author , id } = book;
     
      return <Book book={book} key={book.id}/>
    })}
        
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quidem. Laboriosam pariatur non libero,
             adipisci dolore magnam ex nulla neque nihil eveniet fugit inventore cupiditate rem doloremque quasi quas dolorum.</p>
           <button>click me</button>
        </Book>  */}
        {/* <Book title={secondBook.title}  author={secondBook.author} />  */}
        {/* <Book title={thirdBook.title}  author={thirdBook.author} />  */}
        
      
    </section>
  )
}


export default Amazonsale

const Book = (props) =>{   //{title, author ,children}
  console.log(props)
  const{title , author }  = props
    return(
        <article className='book'>
           <img src= './imgpic/book-1.webp' alt="img loading.."  /> 
           <h2>{title}</h2> 
           <h2>Name: {author}</h2>
           
           {/* {children} */}
        </article>
    )
}
