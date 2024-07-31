// src/components/BooksList.tsx

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

interface Book {
  isbn: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books/');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ISBN</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.length > 0 ? (
            books.map((book) => (
              <TableRow key={book.isbn}>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>${book.price.toFixed(2)}</TableCell>
                <TableCell>{book.quantity}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography>No books found</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BooksList;
