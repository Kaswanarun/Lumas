import React from 'react';
import { Card } from '../components/ui/Card';
import { CardContent } from '../components/ui/CardContent';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const FeedbackPage: React.FC = () => {
  // For now, we won't implement actual form submission logic.
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    alert('Feedback submitted!'); // placeholder action
  };

  return (
    <Card className="max-w-lg mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Input type="text" name="name" placeholder="Your Name" required className="mb-2" />
            <Input type="email" name="email" placeholder="Your Email" required className="mb-2" />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={4} 
              required 
              className="block w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button type="submit" variant="primary">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackPage;
