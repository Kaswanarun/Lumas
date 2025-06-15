import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";

export default function BooksPage() {
  const [books, setBooks] = useState<string[]>([]);

  useEffect(() => {
    fetch("/books/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-800">📚 Available Books</h2>
      {books.map((book) => (
        <Card key={book} className="shadow-md">
          <CardContent>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {book.replace(".pdf", "")}
            </h3>
            <iframe
              src={`/books/${encodeURIComponent(book)}`}
              className="w-full h-[70vh] rounded border"
              title={book}
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
