import Card from "./components/Card";
const App = () => {
  const jobOpenings = 
  [
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "company": "Google",
    "date_posted": "5 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "company": "Amazon",
    "date_posted": "2 days ago",
    "post": "Software Development Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$50/hour",
    "location": "Hyderabad, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "company": "Meta Platforms",
    "date_posted": "7 days ago",
    "post": "React Developer",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$70/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "company": "Apple",
    "date_posted": "3 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "company": "Netflix",
    "date_posted": "6 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$80/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "company": "Microsoft",
    "date_posted": "4 days ago",
    "post": "Full Stack Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$55/hour",
    "location": "Hyderabad, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    "company": "Tesla",
    "date_posted": "14 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hour",
    "location": "Palo Alto, USA"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    "company": "Adobe",
    "date_posted": "1 day ago",
    "post": "UI Engineer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$40/hour",
    "location": "Noida, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    "company": "Uber",
    "date_posted": "3 days ago",
    "post": "Frontend Developer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$60/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    "company": "Salesforce",
    "date_posted": "7 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$68/hour",
    "location": "Pune, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "company": "IBM",
    "date_posted": "2 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$48/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Intel-logo.png",
    "company": "Intel",
    "date_posted": "6 days ago",
    "post": "Embedded Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$62/hour",
    "location": "Hyderabad, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Oracle_logo.svg",
    "company": "Oracle",
    "date_posted": "3 days ago",
    "post": "Database Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$58/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    "company": "Spotify",
    "date_posted": "1 day ago",
    "post": "Frontend Engineer",
    "tag1": "Contract",
    "tag2": "Junior Level",
    "pay": "$42/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e8/LinkedIn_icon_circle.svg",
    "company": "LinkedIn",
    "date_posted": "5 days ago",
    "post": "Full Stack Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$72/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/31/PayPal_logo.svg",
    "company": "PayPal",
    "date_posted": "4 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$55/hour",
    "location": "Chennai, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/04/Nvidia_logo.svg",
    "company": "NVIDIA",
    "date_posted": "2 weeks ago",
    "post": "AI Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$85/hour",
    "location": "Pune, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Twitter_logo_2021.svg",
    "company": "X (Twitter)",
    "date_posted": "3 days ago",
    "post": "Backend Engineer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$60/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Zoom_Communications_Logo.svg",
    "company": "Zoom",
    "date_posted": "1 week ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$68/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/29/Snapchat_Logo.svg",
    "company": "Snap Inc.",
    "date_posted": "6 days ago",
    "post": "Mobile App Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$57/hour",
    "location": "Remote"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Atlassian-logo-blue.svg",
    "company": "Atlassian",
    "date_posted": "2 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$46/hour",
    "location": "Bangalore, India"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Red_Hat_logo.svg",
    "company": "Red Hat",
    "date_posted": "5 days ago",
    "post": "Linux Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$64/hour",
    "location": "Pune, India"
  }
]
  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (element,index) {
        return (
          <div key={index}>
            <Card
            company={element.company}
            tag1={element.tag1}
            tag2={element.tag2}
            payment={element.pay}
            location={element.location}
            post={element.post}
            postedDate={element.date_posted}
            logo={element.logo}
          />
            </div>
        );
      })}
    </div>
  );
};

export default App;
