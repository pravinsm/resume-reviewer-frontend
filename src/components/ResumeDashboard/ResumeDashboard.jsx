import React from 'react'
import { Paper, Skeleton } from '@mui/material'
import UserCard from '../UserCard/UserCard'
import { InsertDriveFileOutlined } from '@mui/icons-material'
import './resume-dashboard.css'

function ResumeDashboard({ loading, resumes, setResumes }) {

  return (
    <div className='resume-dashboard'>
      <Paper className='dasboard-section' elevation={2}>
        <h3>Resume Dashboard</h3>

        {loading ? (
          <>
            <Skeleton variant="rounded" sx={{width: "100%"}} height={200} />
            <Skeleton variant="rounded" sx={{width: "100%"}} height={200} />
          </>
        ) : (
          <div className='user-card-section'>
            {resumes.length > 0
              ? resumes.map((resume) => <UserCard key={resume.id} data={resume} setData={setResumes} />)
              : (
                <div className='no-preview'>
                  <InsertDriveFileOutlined />
                  <h4>No Resumes Uploaded</h4>
                  <span>Upload a resume on the left panel to see the analysis of the resume</span>
                </div>
              )
            }
          </div>
        )}
      </Paper>
    </div>
  )
}

export default ResumeDashboard