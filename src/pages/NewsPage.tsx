import React from 'react';
import { Card } from '../components/ui/Card';
import { CardContent } from '../components/ui/CardContent';

const NewsPage: React.FC = () => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">News</h2>
        <p>Latest library news and updates will appear here. Stay informed!</p>
      </CardContent>
    </Card>
  );
};

export default NewsPage;
