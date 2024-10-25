import React ,{useState, useEffect} from 'react'
import axios from 'axios';

function Form1() {
    const [videos, setVideos] = useState([]);

     // Fetch videos from Django backend using Axios when the component loads
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/videos/form1/");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-700 mb-8">Course Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.length > 0 ? (
              videos.map((video) => (
                <div key={video.id} className="bg-white rounded-3xl shadow-2xl">
                  <img
                    src={video.cover_image_url}
                    alt={video.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h5>
                    <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                    <button
                      className="w-full mt-4  bg-custom-blue text-white py-2 rounded-3xl hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-blue-300"
                      onClick={() => window.open(video.video_url, '_blank')}
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No videos available at the moment.</p>
            )}
          </div>
    </div>
  )
}

export default Form1
