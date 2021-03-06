import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Home = () => {
  const [url, setUrl] = useState('http://localhost:3000/article')
  const { data: article, ispending, error } = useFetch(url)
  console.log(article);
  return (
    <div>
      <h1>Home</h1>

      {ispending && <div>loading...</div>}
      {error && <div>Could not fetch</div>}
      {article && article.map((article)=>{
        return(
          <div key={article.id}>
            <h1>{article.title}</h1>
             <h2>Auther : {article.author} </h2>
             <Link to={`/article/${article.id}`}>Click here to read more...</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home