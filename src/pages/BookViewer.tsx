import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";

export default function BookViewer() {
  const { bookName } = useParams();
  const decodedName = decodeURIComponent(bookName || "");

  return (
    <Card className="shadow-md">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-700 mb-4">{decodedName.replace(".pdf", "")}</h2>
        <iframe
          src={`/books/${decodedName}`}
          className="w-full h-[80vh] rounded border"
          title={decodedName}
        />
      </CardContent>
    </Card>
  );
}