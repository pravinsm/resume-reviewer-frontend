import React, { useState } from 'react'
import { Paper } from '@mui/material'
import FileUploader from '../FileUploader/FileUploader'
import { useSnackbar } from '../../context/SnackbarContext'
import "./resume-control-panel.css"
import { config } from '../../config'

function ResumeControlPanel({ setResumes }) {
    const showSnackbar = useSnackbar();
    const [jobDes, setJobDes] = useState("");

    const onFileUpload = async(file, callback = () => {}) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("job_description", jobDes);
      
        try {
            const response = await fetch(config.url.UPLOAD, {
                method: "POST",
                body: formData,
            });
        
            const result = await response.json();

            if (!response.ok) throw new Error(result.detail || "Upload failed");
        
            callback();
            setJobDes("");
            setResumes(prev => [...prev, result.data]);
            showSnackbar(result.message,"success");
        } catch (error) {
            showSnackbar(error.message,"error");
        }
    }

    return (
        <div className='resume-control-panel'>
            <Paper className='control-sections flex-1' elevation={2}>
                <h3>
                    Job Description
                    <p className='helper-text'>
                        Please provide the job description to evaluate your resume.
                    </p>
                </h3>
                
                <textarea id="job-description" value={jobDes} onChange={(e) => setJobDes(e.target.value)}></textarea>
            </Paper>
            <Paper className='control-sections' elevation={2}>
                <h3>
                    Resume Upload
                    <p className='helper-text'>
                        Please upload your resume 
                    </p>
                </h3>
                <FileUploader jobDes={jobDes} onFileUpload={onFileUpload} />
            </Paper>
        </div>
    )
}

export default ResumeControlPanel