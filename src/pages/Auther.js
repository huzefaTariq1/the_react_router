import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Auther = () => {

   const {id} = useParams();

   const url = `http://localhost:3000/article/${id}`
  const { data: article, ispending, error } = useFetch(url)
  return (
    <div>
        { article &&
        <div>
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <h3>{article.content}</h3>
        </div>
        }
    </div>
  )
}

export default Auther