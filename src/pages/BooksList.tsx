import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";

export default function BooksList() {
  const [books, setBooks] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/books/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.reverse()));
  }, []);

  const filtered = books.filter((book) =>
    book.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">📖 Available Books</h2>
      <Input
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((book, i) => (
        <Card key={i}>
          <CardContent onClick={() => navigate(`/books/${encodeURIComponent(book)}`)} className="cursor-pointer hover:bg-gray-100">
            <p className="text-blue-800 font-medium">{book.replace(".pdf", "")}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}