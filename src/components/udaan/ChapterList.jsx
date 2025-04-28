import React from 'react';
import ChapterCard from '../common/ChapterCard';
import { getChaptersForSubject } from '../data/chapters';
const ChapterList = ({ subjectId, subjectName }) => {
  const chapters = getChaptersForSubject(subjectId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8">
        <span className="text-blue-400">{subjectName}</span> Chapters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <ChapterCard 
            key={chapter.id} 
            chapter={chapter}
            subjectId={subjectId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterList;