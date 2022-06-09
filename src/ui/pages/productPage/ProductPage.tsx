import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import bookApi from '../../../api/bookApi';
import { Book } from '../../../types';

const ProductPage = () => {
  const [book, setBook] = useState<Book>();
  const params = useParams();
  useEffect(() => {
    (async () => {
      if (!params.id) return;
      const response = await bookApi.getOneBook(params.id);
      setBook(response.data.book);
      console.log('response', response.data);
    })();
  }, [params.id]);
  if (!book) return null;
  return (
    <div>
      <img src={book.cover} alt="" />
    </div>
  );
};

export default ProductPage;
