import React from 'react';

interface Video {
  id:  string;
  youtubeId: string;
  channelName: string;
  channelInitial: string;
}

const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    channelName: 'Councile Studio',
    channelInitial: 'C',
  },
  {
    id:  '2',
    youtubeId:  'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    channelName: 'Councile Studio',
    channelInitial: 'C',
  },
  {
    id: '3',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    channelName: 'Councile Studio',
    channelInitial: 'C',
  },
];

const FeaturedVideos:  React.FC = () => {
  return (
    <section className="w-full max-w-8xl mx-auto px-2 py-8">
       <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Uitgelichte Videos
      </h2>
      <p className="text-gray-500 text-base mb-6">
        Wil je dat jouw video hier wordt weergegeven?  Dien deze in op je bedrijfsprofiel. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-3">
            {/* Video Player Container */}
            <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-black shadow-sm">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={`Video by ${video.channelName}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Channel Info */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center text-white text-sm font-semibold">
                {video.channelInitial}
              </div>
              <span className="text-gray-900 text-sm font-medium">
                {video. channelName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideos;