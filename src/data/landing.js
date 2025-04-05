import {
  AccessTimeOutlined,
  ElectricBoltOutlined,
  FileUploadOutlined,
  InsertLinkOutlined,
  LightbulbOutlined,
  Percent,
  ReviewsOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";

export const avatars = [
  {
    name: "Sarah Johnson",
    url: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Michael Chen",
    url: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cindy Baker",
    url: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "Travis Howard",
    url: "https://randomuser.me/api/portraits/men/74.jpg",
  },
];

export const features = [
  {
    icon: <LightbulbOutlined color="primary" />,
    name: "AI Analysis",
    description:
      "Powered by Meta Llama 3.3, our AI analyzes resumes against job descriptions with human-like understanding.",
  },
  {
    icon: <Percent color="primary" />,
    name: "Match Scoring",
    description:
      "Get precise 92% match scores that accurately reflect how well candidates meet your requirements.",
  },
  {
    icon: <TextSnippetOutlined color="primary" />,
    name: "Comprehensive Summaries",
    description:
      "Receive detailed candidate summaries highlighting strengths, weaknesses, and unique qualifications.",
  },
  {
    icon: <AccessTimeOutlined color="primary" />,
    name: "Time-Saving Automation",
    description:
      "Reduce screening time by 75% with automated analysis of hundreds of resumes in minutes.",
  },
  {
    icon: <InsertLinkOutlined color="primary" />,
    name: "Easy Integration",
    description:
      "Seamlessly integrate with your existing ATS and recruitment workflow tools.",
  },
  {
    icon: <ElectricBoltOutlined color="primary" />,
    name: "Interactive Dashboard",
    description:
      "Visualize candidate comparisons and make data-driven hiring decisions with our intuitive dashboard.",
  },
];

export const steps = [
  {
    icon: <TextSnippetOutlined color="primary" />,
    name: "Upload Job Description",
    description:
      "Start by uploading your job description or selecting from your saved templates. Our AI will analyze the requirements.",
  },
  {
    icon: <FileUploadOutlined color="primary" />,
    name: "Upload Resumes",
    description:
      "Upload a single resume or batch upload hundreds of resumes in various formats including PDF, DOCX, and more.",
  },
  {
    icon: <ReviewsOutlined color="primary" />,
    name: "Review AI Analysis",
    description:
      "Get instant match scores, detailed summaries, and candidate comparisons to make informed hiring decisions.",
  },
];
