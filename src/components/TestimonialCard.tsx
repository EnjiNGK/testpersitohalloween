
import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, role, company }) => {
  return (
    <div className="glass-card p-6 hover-lift">
      <div className="mb-4 text-nexrank-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" fill="currentColor" viewBox="0 0 45 36">
          <path d="M13.415.43c-2.523-.21-4.694.84-6.314 2.842-1.62 2.003-2.33 4.796-2.11 7.319l.13 2.156 2.126-.303c3.894-.486 6.674-2.21 7.741-5.226.486-1.312.638-2.187.425-3.529L15.15 2.21l-1.736-1.736h.001zM33.862.43c-2.523-.21-4.694.84-6.314 2.842-1.62 2.003-2.33 4.796-2.11 7.319l.13 2.156 2.126-.303c3.894-.486 6.674-2.21 7.741-5.226.486-1.312.638-2.187.425-3.529L35.597 2.21 33.861.43h.001z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-6">{content}</p>
      <div className="flex items-start">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-nexrank-purple to-nexrank-violet flex items-center justify-center">
            <span className="text-white font-bold">{author.charAt(0)}</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
