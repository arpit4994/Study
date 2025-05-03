import './App.css'
import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './components/pages/Home';
import Udaan from './components/pages/Udaan';
import Subject from './components/pages/Subject';
import Chapter from './components/pages/Chapter.';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <Router>
      <MainLayout>
        <Analytics />
        <SpeedInsights/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/udaan" element={<Udaan />} />
          <Route path="/udaan/:subjectId" element={<Subject />} />
          <Route path="/udaan/:subjectId/:chapterId" element={<Chapter />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
