import React from 'react'
var books = [
      {
      id: 1,
      title: "Wall Street Titan",
      author: "Anna Zaires",
      genre: "romance",
      price: 730,
      pages: 360,
      },
      {
      id: 2,
      photo: "",
      title: "The Invisible Man",
      author: "H.G. Wells",
      genre: "horror",
      price: 90,
      pages: 186,
      },
      {
      id: 3,
      photo: "",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Personal development",
      price: 1182,
      pages: 319,
      },
      {
      id: 4,
      photo: "",
      title: "A Prince of Mars Returns",
      author: "Philip Francis Nowlan",
      genre: "Action & Adventure",
      price: 50,
      pages: 74,
      },
      {
      id: 5,
      photo: "",
      title: "The Yellow Wallpaper",
      author: "Charlotte Perkins Gilman",
      genre: "horror",
      price: "90",
      pages: 24,
      },
   ];

export const Mapdemo6 = () => {
  return(
      <div>
      <h1>MapDemo6</h1>
      <table className="table table-warning">
         <thead>
            <tr>
            <th>ID</th>
            <th>COVER PHOTO</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>PRICE</th>
            <th>PAGES</th>
            </tr>
         </thead>
         <tbody>
            {books.map((book) => {
            
            let imageSrc = new URL(
               `../assets/imgs/${book.id}.jpg`,
               import.meta.url,
            ).href;
            return (
               <tr key={book.id} style={{backgroundColor: book.genre == 'horror' && 'maroon', color:book.genre=='horror' && 'white'}}>
                  <td>{book.id}</td>
                  <td style={{backgroundColor: book.price>500 && 'brown'}}> 
                  <img 
                     src={imageSrc}
                     alt={`Cover of ${book.title}`}
                     style={{ width: 80, height: "auto" }}
                     onError={(e) => {
                        e.target.src = "";
                        e.target.alt = "Image not found";
                     }}
                  />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td style={{backgroundColor: book.genre == 'romance' && 'lightpink'}}>{book.genre}</td>
                  <td style={{color: book.price<100 && "green"}}>{book.price}</td>
                  <td style={{fontWeight: book.pages>100 && "bolder"}}>{book.pages}</td>
               </tr>
            );
            })}
         </tbody>
      </table>


    </div>
  )
}
