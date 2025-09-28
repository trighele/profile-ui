import documentIcon from "../../../../src/assets/projects/document-icon.png";

const projectData = [
    {
        id: "d769f2f8-4bc2-42b2-8de0-0f71914f3c77",
        backgroundColor: "#203BA9",        
        title: "Home UnRaid Server",
        subTitle: "Custom NAS Home Server Project",
        projdate: "Jan 2025",
        description: "What started as a simple solution to organize my scanned documents quickly grew into something much bigger. I built my own Network Attached Storage system using Unraid OS, and it's become the backbone of my entire home tech setup. Beyond just file storage, I'm running a Plex server for family movie nights, keeping all our photos in one place, and hosting a Linux virtual machine with Kubernetes where I deploy my personal projects—including the website you're looking at right now. I've got GitHub runners handling my deployment pipelines and Nginx managing web traffic. It's been an incredible learning experience that combines hardware setup, virtualization, container management, and DevOps practices. Every new feature I add teaches me something different, and I'm constantly finding new ways to expand what this little server can do.",
        keywords: ["Infrastructure Management", "Containerization/Orchestration", "DevOps/CI-CD", "System Administration"],
        links: [
            {
                icon: {documentIcon},
                linkTitle: "NAS Killer 6.0 Guide",
                url: ""
            }
        ]
    },
    {
        id: "7a32574b-0d7a-4bfa-8dbd-fba5198aad51",
        backgroundColor: "#0C4305",
        title: "AI Fantasy Football Summarizer",
        subTitle: "AI-Powered Fantasy Football Podcast Summarizer",
        projdate: "Aug 2025",
        description: "As my family grew, I found myself falling behind on fantasy football podcasts—there just weren't enough hours in the day to stay current with all the latest player news and analysis. So I built an app that does the heavy lifting for me. It automatically downloads podcast episodes, uses OpenAI's Whisper to transcribe them, and then has Claude generate clean, structured summaries of the key points. I built a simple Gradio interface so it's easy to use, and I'm using HuggingFace's on-demand GPU endpoints to keep costs low—the system only spins up expensive compute power when I actually need transcription done. Now when I miss an episode, I can get caught up in minutes instead of hours. It's been a great way to combine my love of football with learning about AI integration and smart cloud resource management.",
        keywords: ["AI/Machine Learning Integration", "API Development & Orchestration", "Cloud Computing & Resource Management", "DevOps/CI-CD"],
        links: [
            {
                icon: {documentIcon},
                linkTitle: "NAS Killer 6.0 Guide",
                url: ""
            }
        ]
    }    

]

export default projectData;