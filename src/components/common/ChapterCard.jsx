import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const ChapterCard = ({ chapter, subjectId }) => {
  return (
    <Link to={`/udaan/${subjectId}/${chapter.id}`}>
      <Card className="h-full">
        <div className="p-5 flex flex-col h-full">
          <h3 className="text-xl font-bold text-white mb-2">{chapter.title}</h3>
          <div className="flex items-center mt-auto text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>{chapter.lectureCount} lectures</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ChapterCard;