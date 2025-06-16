import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";

import HomePage from "./pages/HomePage";
import BooksList from "./pages/BooksList";
import BookViewer from "./pages/BookViewer";
import PodcastsPage from "./pages/PodcastsPage";
import VideosPage from "./pages/VideosPage";
import NewsPage from "./pages/NewsPage";
import FeedbackPage from "./pages/FeedbackPage";

const AppTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [visitCount, setVisitCount] = useState(0);

  const tabs = ["Home", "Books", "Podcasts", "Videos", "News", "Feedback"];

  useEffect(() => {
    const visits = localStorage.getItem("lumas-visit-count");
    const updated = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("lumas-visit-count", updated.toString());
    setVisitCount(updated);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="bg-blue-800 text-white text-center py-4 shadow-md w-full">
        <h1 className="text-3xl font-bold tracking-wide">📖 Lumas Village Library</h1>
      </header>

      <nav className="w-full bg-white border-b shadow-sm overflow-x-auto no-scrollbar">
        <TabsList className="flex w-max px-4 py-3 gap-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} active={activeTab} setActive={setActiveTab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </nav>

      <main className="flex-1 w-full max-w-screen-md mx-auto px-4 py-6">
        <Tabs defaultValue={activeTab}>
          <TabsContent value="Home" active={activeTab}><HomePage /></TabsContent>
          <TabsContent value="Books" active={activeTab}><BooksList /></TabsContent>
          <TabsContent value="Podcasts" active={activeTab}><PodcastsPage /></TabsContent>
          <TabsContent value="Videos" active={activeTab}><VideosPage /></TabsContent>
          <TabsContent value="News" active={activeTab}><NewsPage /></TabsContent>
          <TabsContent value="Feedback" active={activeTab}><FeedbackPage /></TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-3 border-t">
        <div>© {new Date().getFullYear()} Lumas Village Library. All rights reserved.</div>
        <div className="text-xs text-gray-500 mt-1">
          👥 Total visitors globally: <strong>{visitCount}</strong> {visitCount === 1 ? "time" : "times"} since Jun 15 2025.
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTabs />} />
        <Route path="/books/:bookName" element={<BookViewer />} />
      </Routes>
    </BrowserRouter>
  );
}
