import { Card, CardContent } from "../components/ui/Card";

export default function HomePage() {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">📚 Welcome to Lumas Village Library</h2>
        <p className="text-gray-700">
          Discover community books, listen to local voices, and watch educational content. Stay informed and inspired.
        </p>
      </CardContent>
    </Card>
  );
}