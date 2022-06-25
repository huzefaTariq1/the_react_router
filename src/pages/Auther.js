import {useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Auther = () => {

   const {id} = useParams();
   const navigate=useNavigate()
   const url = `http://localhost:3000/article/${id}`
  const { data: article, ispending, error } = useFetch(url)

  useEffect(() => {
     if (error){
        setTimeout(()=>{
          navigate("/")
        },1000)
     }
  }, [error]);
  return (
    <div>
        {ispending && <div>loading....</div>}
        {error && <div>{error}</div>}
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