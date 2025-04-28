import React from 'react';
import { useParams } from 'react-router-dom';
import ChapterList from '../udaan/ChapterList';
import BackButton from '../common/BackButton';
import { subjects } from '../data/subjects';

const Subject = () => {
  const { subjectId } = useParams();
  const subject = subjects.find(s => s.id === subjectId);

  if (!subject) {
    return <div className="container mx-auto px-4 py-12 text-white">Subject not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <ChapterList subjectId={subjectId} subjectName={subject.name} />
    </div>
  );
};

export default Subject;
