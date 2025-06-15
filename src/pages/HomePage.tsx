// src/pages/HomePage.tsx
import BannerSlider from "../components/ui/BannerSlider";

const HomePage = () => (
  <div>
    <BannerSlider />

    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        📚 Welcome to Lumas Village Library
      </h2>
      <p className="text-gray-700">
        Explore a wide range of books, listen to insightful podcasts, watch educational videos, and stay updated with the latest news – all in one place.
      </p>
    </div>
  </div>
);

export default HomePage;
