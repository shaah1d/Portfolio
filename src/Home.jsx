import React from 'react'
import './Home.css';

function Home() {
    return (
        <>
            <div className="container">
                <div>
                    <h1>Shaahid Shaikh</h1>
                    <h2>Helping you grow your biznes online</h2></div>
                <div> <img src="https://res.cloudinary.com/dv6t6t4lp/image/upload/v1720798914/IMG_20240513_202021_237_zdvjoh.jpg" alt="" className='profilepic' /></div>
            </div>
            <h2>Introduction</h2>
            <p>Hi, I am Shaahid, a dedicated and passionate Full Stack Developer with extensive experience in utilizing the MERN stack (MongoDB, Express.js, React.js, and Node.js) to build dynamic and responsive web applications. My journey in the world of web development began with a curiosity for how websites are created and has evolved into a full-fledged career where I take pride in crafting robust and innovative solutions for clients.</p>
         <p>The MERN stack, with its combination of powerful technologies, allows me to develop applications that are not only visually appealing but also highly functional and scalable. MongoDB, as a NoSQL database, provides the flexibility and scalability needed for modern applications. Express.js simplifies the process of building robust APIs, while React.js, a popular front-end library, enables me to create interactive user interfaces. Node.js, known for its non-blocking, event-driven architecture, ensures that the backend of my applications can handle numerous simultaneous connections efficiently.</p>
         <p>I believe that the digital presence of a business is crucial in today's market. With the increasing importance of having an online presence, I am here to help you take your business online and reach a wider audience. Whether you are starting from scratch or looking to enhance your existing web platform, I am equipped with the skills and knowledge to guide you through the process.</p> <p>My approach to development is user-centric, ensuring that the applications I create are not only functional but also provide an intuitive and seamless user experience. I am committed to staying updated with the latest trends and advancements in web development to deliver cutting-edge solutions to my clients.</p>
         <p>Beyond just developing applications, I am passionate about solving problems and optimizing processes. I thrive in collaborative environments where I can contribute my expertise and learn from others. My goal is to build applications that not only meet your needs but also exceed your expectations, helping you to grow your business online effectively.</p>
         <p>I am excited about the opportunity to work with you and help transform your vision into a reality. Let’s embark on this journey together and take your business to new heights with a strong and compelling online presence.</p> 
         <br />
         <h2>Skills</h2>
    <p><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</p>
    <p><strong>Backend:</strong> Node.js, Express.js</p>
    <p><strong>Database:</strong> MongoDB</p>
    <p><strong>Version Control:</strong> Git</p>
     <br />
    <h2>Projects</h2>
    <ul>
        <li><strong>NewsJS:</strong> NewsJS is an app that allows users to search for the latest news on any topic worldwide. It provides a user-friendly interface for searching and browsing news articles, keeping users updated on current events and trends.</li>
        <li><strong>TaskVault:</strong> TaskVault is a versatile productivity platform, seamlessly integrating a robust to-do list with advanced note-taking and journaling capabilities, empowering users to efficiently manage tasks and organize their thoughts.</li>
        <li><strong>FarmStand:</strong> The Farmstand App is a web application designed for managing products available in a farm stand. It allows users to add new products, update existing ones, and view the list of available products. This app helps farmers and vendors efficiently manage their inventory and showcase their products to customers.</li>
    </ul>
    <p>You can check these out by visiting our <a href='/projects'>Project Page.</a></p>
          </>
    )
}

export default Home