import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/udaan/${subject.id}`}>
      <Card className="h-full">
        <div className="p-5">
          <div className="flex justify-center mb-4">
            <img src={subject.image} alt={subject.name} className="w-16 h-16"/>
          </div>
          <h3 className="text-xl font-bold text-center text-white mb-2">{subject.name}</h3>
          <p className="text-gray-400 text-center">Teacher: {subject.teacher}</p>
        </div>
      </Card>
    </Link>
  );
};

export default SubjectCard;