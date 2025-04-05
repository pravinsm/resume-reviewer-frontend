import React, { useState } from "react";
import { Drawer, LinearProgress } from "@mui/material";
import { config } from "../../config";
import { useSnackbar } from "../../context/SnackbarContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useUser } from "@clerk/clerk-react";
import "./user-card.css";

function UserCard({ data, setData }) {
  const { user } = useUser();
  const showSnackbar = useSnackbar();
  const [open, setOpen] = useState(false);
  const isPdf = data.fileName.split(".").pop().toLowerCase() === "pdf";
  const max_screen_768 = window.matchMedia("(max-width: 768px)").matches;

  const msToDateString = (ms) => {
    return new Date(parseInt(ms)).toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const msToTimeString = (ms) => {
    return new Date(parseInt(ms)).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      const response = await fetch(
        `${config.url.RESUMES}/${id}?user_id=${user.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setData((prevResumes) =>
          prevResumes.filter((resume) => resume.id !== id)
        );
        showSnackbar("Resume deleted successfully!", "success");
      } else {
        const errorData = await response.json();
        showSnackbar("Error: " + errorData.detail, "error");
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
      showSnackbar("Failed to delete resume.", "error");
    }
  };

  const handleFilePreviewOrDownload = () => {
    if (isPdf) {
      // Open the drawer to preview the PDF
      setOpen(true);
    } else {
      // Create a temporary download link for .docx files
      const link = document.createElement("a");
      link.href =
        "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64," +
        data.fileData;
      link.download = data.fileName;
      link.click();
      showSnackbar(`${data.fileName} is downloaded successfully!`, "success");
    }
  };

  return (
    <>
      <div className="user-card">
        <div className="user-detail">
          <div>
            <h4>{data.userName}</h4>
            <span>
              Uploaded {msToDateString(parseInt(data.uploadTime) * 1000)} &bull;{" "}
              {msToTimeString(parseInt(data.uploadTime) * 1000)}
            </span>
          </div>
          <div>
            <button onClick={handleFilePreviewOrDownload}>
              {isPdf ? <VisibilityIcon /> : <SaveAltIcon />}Resume
            </button>
            <button onClick={() => handleDelete(data.id)}>
              <DeleteOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="user-match-score">
          <div>
            <span>Match Score</span>
            <span>{data.score}%</span>
          </div>
          <LinearProgress variant="determinate" value={data.score} />
        </div>
        <div className="user-summary">
          <span>Summary</span>
          <p>{data.summary}</p>
        </div>
      </div>
      <Drawer
        className="preview-drawer"
        anchor={max_screen_768 ? "bottom" : "right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <button onClick={() => setOpen(false)}>
          <ChevronRightIcon />
        </button>
        <iframe
          title="resume-preview"
          src={`data:application/pdf;base64,${data.fileData}`}
        />
      </Drawer>
    </>
  );
}

export default UserCard;
