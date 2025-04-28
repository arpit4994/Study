import React from 'react';
import SubjectCard from './SubjectCard';
import { subjects } from '../data/subjects';

const SubjectList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        <span className="text-blue-400">Udaan</span> Subjects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;