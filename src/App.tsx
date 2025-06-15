import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const TABS = ["Home", "Books", "Podcasts", "Videos", "News", "Feedback"];

export default function LibraryApp() {
  const [activeTab, setActiveTab] = useState("Home");
  const [feedbacks, setFeedbacks] = useState<{ user: string; message: string }[]>([]);
  const [feedback, setFeedback] = useState("");
  const [showName, setShowName] = useState(true);
  const [username, setUsername] = useState("Guest");

  const submitFeedback = () => {
    if (feedback.trim()) {
      setFeedbacks([
        ...feedbacks,
        {
          user: showName && username.trim() ? username : "Anonymous",
          message: feedback,
        },
      ]);
      setFeedback("");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white text-center py-4 shadow-md w-full">
        <h1 className="text-3xl font-bold tracking-wide">📚 Village Library</h1>
      </header>

      {/* Mobile-Responsive Scrollable Tabs */}
      <nav className="w-full bg-white border-b shadow-sm overflow-x-auto no-scrollbar">
        <div className="flex w-max px-4 py-3 gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <main className="flex-1 w-full max-w-screen-md mx-auto px-4 py-8">
        {activeTab === "Home" && (
          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Welcome</h2>
              <p className="text-gray-700 leading-relaxed">
                Explore books, listen to community podcasts, watch educational videos, and stay updated with local news.
              </p>
            </CardContent>
          </Card>
        )}

        {activeTab === "Books" && (
          <div className="space-y-8">
            <Card className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Pride and Prejudice</h2>
                <iframe
                  src="/books/pride_and_prejudice.pdf"
                  className="w-full h-[80vh] rounded border"
                  title="Pride and Prejudice"
                ></iframe>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Frankenstein</h2>
                <iframe
                  src="/books/frankenstein.pdf"
                  className="w-full h-[80vh] rounded border"
                  title="Frankenstein"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "Podcasts" && (
          <Card className="shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">Podcasts</h2>
              <p>Audio players and topic categories will be added here soon.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "Videos" && (
          <Card className="shadow-md">
            <CardContent className="space-y-6">
              <h2 className="text-xl font-semibold text-blue-700">Educational & Fun Videos</h2>
              <div className="aspect-video w-full rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Z1Yd7upQsXY"
                  title="Crash Course"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-60 sm:h-96 rounded"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "News" && (
          <Card className="shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">News</h2>
              <p>Latest village and world news updates will be shown here.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "Feedback" && (
          <Card className="shadow-md">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-700">Feedback</h2>
              <Input
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Share your thoughts..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showName}
                  onChange={() => setShowName(!showName)}
                />
                <label>Display my name</label>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={submitFeedback}>
                Submit
              </Button>
              <div className="mt-4 space-y-2">
                {feedbacks.map((f, i) => (
                  <div key={i} className="border p-2 rounded bg-white shadow-sm">
                    <strong className="text-blue-700">{f.user}</strong>
                    <p>{f.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-3 border-t">
        © {new Date().getFullYear()} Lummas-Village Library. All rights reserved, MIT licsence
      </footer>
    </div>
  );
}
