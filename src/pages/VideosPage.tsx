import React from 'react';
import { Card } from '../components/ui/Card';
import { CardContent } from '../components/ui/CardContent';

const VideosPage: React.FC = () => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">Videos</h2>
        <p>Video content will appear here soon. Check back later!</p>
      </CardContent>
    </Card>
  );
};

export default VideosPage;
