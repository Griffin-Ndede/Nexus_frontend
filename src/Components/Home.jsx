import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const profile = {
    name: "Student Name",
    profileImage: "https://via.placeholder.com/150", // Placeholder for profile image
  };

  const [videos, setVideos] = useState([]);

  // Fetch videos from Django backend using Axios when the component loads
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/videos/");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const courses = [
    {
      id: 1,
      title: "Machine Learning",
      image: "https://via.placeholder.com/400",
      progress: 85,
      instructor: "Andrew Ng",
    },
    {
      id: 2,
      title: "Web Development",
      image: "https://via.placeholder.com/400",
      progress: 60,
      instructor: "John Doe",
    },
    {
      id: 3,
      title: "Data Science",
      image: "https://via.placeholder.com/400",
      progress: 30,
      instructor: "Jane Smith",
    },
  ];

  const upcomingDeadlines = [
    { id: 1, task: "Complete Quiz 3 - Machine Learning", due: "Oct 20, 2024" },
    { id: 2, task: "Submit Assignment - Web Development", due: "Oct 22, 2024" },
  ];

  const recommendations = [
    { id: 1, title: "Deep Learning Specialization", image: "https://via.placeholder.com/400" },
    { id: 2, title: "React for Beginners", image: "https://via.placeholder.com/400" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Section */}
      <div className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={profile.profileImage}
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">Welcome, {profile.name}!</h2>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Go to Profile
        </button>
      </div>

      {/* Video Section */}
      <h3 className="text-xl ml-12 font-semibold text-gray-700 mb-4">Course Intro Video</h3>
      <div className="p-6 flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-6">
        {videos.length > 0 ? (
          videos.map((video) => (
            <video
              key={video.id}
              className="w-full sm:w-1/3 rounded-xl shadow-lg"
              controls
            >
              <source src={video.video_file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))
        ) : (
          <p className="text-gray-600">No videos available at the moment.</p>
        )}
      </div>

      <div className="p-6">
        {/* Enrolled Courses Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-700">Your Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg">
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={course.image}
                  alt={course.title}
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{course.title}</h4>
                  <p className="text-gray-600">Instructor: {course.instructor}</p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Progress: {course.progress}%</p>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-700">Upcoming Deadlines</h3>
          <ul className="mt-4 space-y-4">
            {upcomingDeadlines.map((deadline) => (
              <li
                key={deadline.id}
                className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                <p className="text-gray-700">{deadline.task}</p>
                <span className="text-sm text-gray-500">{deadline.due}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Courses Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-700">Recommended Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {recommendations.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg">
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={course.image}
                  alt={course.title}
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{course.title}</h4>
                  <button className="w-full mt-4 bg-gray-200 text-blue-600 py-2 rounded-lg hover:bg-gray-300">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
