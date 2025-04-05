import React, { useEffect, useState } from "react";
import { config } from "../config";
import ResumeControlPanel from "../components/ResumeControlPanel/ResumeControlPanel";
import ResumeDashboard from "../components/ResumeDashboard/ResumeDashboard";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.url.RESUMES}?user_id=${user.id}`);

      if (!response.ok) {
        throw new Error(`Error fetching resumes: ${response.statusText}`);
      }

      const data = await response.json();
      setResumes(data.resumes);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch resumes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="main-app dashboard">
      <ResumeControlPanel setResumes={setResumes} />
      <ResumeDashboard
        loading={loading}
        resumes={resumes}
        setResumes={setResumes}
      />
    </main>
  );
};

export default Dashboard;
