import React from 'react';
import { Card } from '../components/ui/Card';
import { CardContent } from '../components/ui/CardContent';

const PodcastsPage: React.FC = () => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">Podcasts</h2>
        <p>Podcast episodes will appear here soon. Stay tuned!</p>
      </CardContent>
    </Card>
  );
};

export default PodcastsPage;
