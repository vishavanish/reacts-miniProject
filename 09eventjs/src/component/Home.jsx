import React from 'react';
import '../App.css' ;

const books=[
    {title :"Card Title" , desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",id:1},
    {title :"Card Title" , desc:"lorem" ,id:2},
    {title :"Card Title" , desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",id:3},
]

const getBook = (id) => {
    const book = books.find( (book) => book.id === id)
    console.log(book)
}

function Home() {
  return (
    <section>

        <EventExample />
       {
       books.map( (book) =>{ 
       const {title , desc , id } = book;
        return <Book book={book} key={book.id} getBook={getBook}/>
       })}
        
      
        {/* <Book />
        <Book /> */}
    </section>
  )
}

export default Home
//Event Example heer
const EventExample = () =>{
    const getTextChnages = (e) =>{console.log(e.target.value)  }  
    const clickButton = () =>{
        window.alert("Click ho gya")
    }
    const formSummite = (e) =>{
        e.preventDefault()
        console.log("Form Submit")
     }
        return(
        <div className="flex justify-center items-center">
        <form  onSubmit={formSummite}className="flex space-x-2">
            <input 
                type="text" 
                placeholder="Search..." 
                // value={onchange=}
                onChange={getTextChnages}
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition" >Submit</button>
        </form>
        <button onClick={clickButton}  >Click me</button>
    </div>
    )
}


const Book = (props) =>{
    const {title ,desc ,id } =props.book
    // const { getBook } = props.getBook;
    // console.log(getBook(3))
    const getSingleBook = () => {
        getBook(id)
    }
        // console.log(title)
    return(
        <div className="flex justify-center items-center h-screen ">
        <div className="bg-white rounded-lg shadow-lg w-80 p-4 transition-shadow">
            <img 
                className="card-img-top w-32 h-32 object-cover mx-auto" 
                src='./assets/pic.jpeg' 
                alt="Card image cap" 
            />
            <div className="card-body text-center">
                <h5 className="card-title m-1">{title}</h5>
                <button onClick={getSingleBook}>Click me</button>
                <p className="card-text p-3 m-0.5">{desc}</p>
                <a href="#" className="bg-blue-500 text-white font-semibold py-2 px-3 rounded hover:bg-blue-600 ">Go somewhere</a>
            </div>
        </div>
    </div>
    );
}
