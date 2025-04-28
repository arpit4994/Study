// src/pages/Chapter.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../udaan/VideoList';
import BackButton from '../common/BackButton';
import { getChaptersForSubject } from '../data/chapters';
import { subjects } from '../data/subjects';

const Chapter = () => {
  const { subjectId, chapterId } = useParams();
  
  const subject = subjects.find(s => s.id === subjectId);
  const chapters = getChaptersForSubject(subjectId);
  const chapter = chapters.find(c => c.id === chapterId);

  if (!chapter) {
    return <div className="container mx-auto px-4 py-12 text-white">Chapter not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <h2 className="text-3xl font-bold text-white mb-2">{chapter.title}</h2>
      <p className="text-gray-400 mb-8">{subject?.name || 'Subject'}</p>
      <VideoList videos={chapter.videos} />
    </div>
  );
};

export default Chapter;