const jobs = [
    {
        title: "Software Engineer University Graduate",
        company: "Google",
        country: "USA",
        mode: "onsite",
        location: ["San Francisco", "California"],
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "Tailwind"],
        eligibleBatches: ["2022", "2023", "2024"],
        duration: null,
        requiredExperience: "48",
        startDate: null,
        stipend: null,
        salary: 4000000,
        type: "full-time",
        role: "programming"
    },
    {
        title: "Software Engineer University Graduate",
        company: "Microsoft",
        country: "India",
        mode: "onsite",
        location: ["Bangalore", "Hyderabad", "Noida"],
        skills: ["Java", "C/C++", "Python", "PostgreSQL", "Tailwind"],
        eligibleBatches: ["2023", "2024"],
        duration: null,
        requiredExperience: "24",
        startDate: null,
        stipend: null,
        salary: 5100000,
        type: "full-time",
        role: "programming"
    },
    {
        title: "Software Engineer Intern",
        company: "Amazon",
        country: "India",
        mode: "remote",
        location: ["Hyderabad", "Gurgaon"],
        skills: ["Angular", "Vue.js", "Tailwind", "SpringBoot", "MySQL"],
        eligibleBatches: ["2023", "2024"],
        duration: 6,
        requiredExperience: null,
        startDate: "July, 2024",
        stipend: 145000,
        salary: null,
        type: "internship",
        role: "programming"
    },
    // Add more job objects as needed
];


const mongoose = require('mongoose')
const Job = require('./models/Job')
const MONGO_URL = "mongodb+srv://bishalkundu17:bishalkundu17@cluster0.vf8n1xt.mongodb.net/JobHub?retryWrites=true&w=majority&appName=Cluster0"

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);
}

const seedDB = async () => {
    await Job.deleteMany({})
    for(const job of jobs) {
        const newJob = new Job(job)
        await newJob.save()
    }
}

seedDB().then(() => {
    console.log("Done")
    mongoose.connection.close()
})