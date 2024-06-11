import React from 'react';

const DevInfo = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full mx-auto text-white bg-gray-900 shadow-md p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg mb-6">
          I am currently completed graduation in Computer Science and Engineering at KLE College of Engineering and Technology. I am a self-taught Full Stack Web Developer, currently diving deeper into MERN stack. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.
        </p>
        <h2 className="text-xl font-bold mb-2">Contact Details</h2>
        <p className="text-lg mb-6">
          <span className="font-bold">Pramod Savant</span><br />
          Nandikurali, Belagavi<br />
          <a href="https://github.com/pammu453" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/pammu453</a>
        </p>
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <ul className="list-disc ml-6 mb-6">
          <li><span className="font-bold">B.E. (Bachelor of Engineering) in Computer Science and Engineering</span> - Visvesvaraya Technological University (VTU), Jul 2024 (CGPA: 8.32)</li>
          <li><span className="font-bold">PCMB (Physics, Chemistry, Mathematics, Biology)</span> - Govt PU College, Majalatti, Mar 2020 (Percentage: 92.67%)</li>
          <li><span className="font-bold">Karnataka Secondary Education Examination Board</span> - Govt High School, Nandikurali, Apr 2018 (Percentage: 94.40%)</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        <p className="text-lg mb-6">
          Full-Stack Developer Intern at DLithe Consultancy Services Pvt Ltd (Aug 2023 - Sep 2023)
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Developed and maintained front-end and back-end components of web applications using technologies such as HTML, CSS, JavaScript, React.js, Node.js, and Express.js.</li>
          <li>Implemented responsive design principles, resulting in a 20% increase in user engagement on mobile devices.</li>
          <li>Conducted rigorous code reviews, providing constructive feedback and ensuring code quality and consistency.</li>
          <li>Demonstrated strong teamwork and communication skills while collaborating with designers, product managers, and fellow developers.</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Programming languages: C, Python, JavaScript, HTML, CSS.</li>
          <li>Frameworks / Libraries: Tailwind CSS, React.js, Redux, Redux Toolkit, Node.js, Express.js, Flowbite React, Chakra UI, Material UI, Bootstrap 5, jQuery.</li>
          <li>Databases: MySQL, MongoDB.</li>
          <li>Tools: Git, Postman, GitHub, VS Code.</li>
        </ul>
      </div>
    </div>
  );
}

export default DevInfo;
