import React, { useState, useRef } from "react";
import { Button, LinearProgress } from "@mui/material";
import { useSnackbar } from "../../context/SnackbarContext";
import UploadIcon from '@mui/icons-material/Upload';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "./file-uploader.css";

function FileUploader({ jobDes, onFileUpload }) {
  const showSnackbar = useSnackbar();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      showSnackbar("No file selected.","error");
      return;
    }
      
    if (!jobDes.trim()) {
      showSnackbar("Job description is required.","error");
      return;
    }

    setUploading(true);

    onFileUpload(file, () => {
      setUploading(false);
      setFile(null);
    });
  };

  const removeFile = () => {
    setFile(null);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="uploader-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.docx"
        className="hidden-input"
      />

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="drop-zone"
          onClick={openFileDialog}
        >
          <div className="upload-content">
            <UploadIcon />
            <p className="upload-text">Drag & drop your resume here</p>
            <p className="upload-subtext">Supports PDF, DOCX</p>
            <button className="browse-button">Browse Files</button>
          </div>
        </div>
      ) : (
        <div className="file-preview">
          <div className="file-header">
            <div className="file-info">
              <InsertDriveFileOutlinedIcon />
              <span className="file-name">{file.name}</span>
            </div>
            <button
              className="remove-button"
              onClick={removeFile}
              disabled={uploading}
            >
              <ClearOutlinedIcon />
            </button>
          </div>

          {uploading ? (
            <LinearProgress />
          ) : (
            <Button variant="contained" fullWidth size="small" color="primary" onClick={handleUpload}>
              Upload Resume
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default FileUploader;