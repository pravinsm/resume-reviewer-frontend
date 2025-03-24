import React, { useEffect, useState } from 'react';
import { config } from './config';
import { SnackbarProvider } from './context/SnackbarContext';
import ResumeControlPanel from './components/ResumeControlPanel/ResumeControlPanel';
import ResumeDashboard from './components/ResumeDashboard/ResumeDashboard';

function App() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResumes = async() => {
    try {
      setLoading(true);
      const response = await fetch(`${config.url.RESUMES}`);

      if (!response.ok) {
        throw new Error(`Error fetching resumes: ${response.statusText}`);
      }

      const data = await response.json();
      setResumes(data.resumes);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch resumes:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchResumes();

  }, [])
  

  return (
    <main className="main-app">
      <SnackbarProvider>
        <ResumeControlPanel setResumes={setResumes}/>
        <ResumeDashboard loading={loading} resumes={resumes} setResumes={setResumes} />
      </SnackbarProvider>
    </main>
  );
}

export default App;
