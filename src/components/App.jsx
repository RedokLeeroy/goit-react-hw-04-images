import { useState, useEffect} from 'react';
import { mapper } from './utils/mapper';
import { GalleryList } from './GalleryList.jsx/GalleryList';
import { SearchBar } from './SearchBar/SearchBar';
import { Service } from './serviceApi/serviceApi';
// import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Modal } from './Modal/Modal';
import { LoaderSpinner } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [largeIMG, setLargeIMG] = useState('');


  useEffect(() =>{
    if(query === "") {
      return 
    }
      setLoading(true)
    Service(page,query).then(({data}) => {setImages((ps) =>( [...ps, ...mapper(data)]))})
    .finally(() => setLoading(false))
  },[query, page])



  const handlerSubmit = (queue) => {
    if(query === queue) {
      return
    }
    setImages([])
    setPage(1)
    setQuery(queue)
  }

  const handlerModal = (largeIMG) => {
    setLargeIMG(largeIMG)
  }

  const modalWindowClose = () => {
    setLargeIMG('');

  };

  const handlerLoadMore = () => {
    setPage((ps) => (ps + 1 ))
  }

  return <div className="App">
  <SearchBar onSubmit ={handlerSubmit}  />
   {images.length > 0 && <GalleryList images={images} handlerModal={handlerModal}/>}
   {loading && (<LoaderSpinner/>)}
   {images.length >= 12 * page && <button onClick={handlerLoadMore} className="Button">Load More</button>}
   {largeIMG && <Modal largeimg={largeIMG} onClose={modalWindowClose}/>}
   <ToastContainer autoClose={3000} />
  </div>
};