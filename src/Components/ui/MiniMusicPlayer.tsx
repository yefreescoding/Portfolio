import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setVolume(Number(e.target.value));
  // };

  return (
    <div className="w-full p-2 max-w-[400px] h-auto rounded-xl overflow-hidden shadow-lg bg-zinc-800 border border-zinc-700">
      <div className="flex md:flex-row">
        {/* Controls Section */}
        <div className=" p-2 rounded-lg flex flex-col justify-between">
          {/* Song Info */}
          <div>
            <h2 className="text-lg font-bold">Song Title</h2>
            <p className="text-sm text-gray-500">Artist Name</p>
          </div>

          {/* Playback Controls */}
          <div className="flex justify-center items-center gap-4 mt-2">
            {/* Previous Button */}
            <button className="h-8 w-8 rounded-full border border-zinc-500 flex items-center justify-center active:bg-zinc-400 hover:bg-zinc-700 transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 20L9 12L19 4V20Z" fill="currentColor" />
                <path
                  d="M5 4V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center hover:bg-zinc-700 active:bg-zinc-400 transition-colors"
              onClick={togglePlayback}
            >
              {isPlaying ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                  <rect
                    x="14"
                    y="4"
                    width="4"
                    height="16"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4L19 12L5 20V4Z" fill="currentColor" />
                </svg>
              )}
            </button>

            {/* Next Button */}
            <button className="h-8 w-8 rounded-full border border-zinc-500 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4L15 12L5 20V4Z" fill="currentColor" />
                <path
                  d="M19 4V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Volume Control */}
          {/* <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500 flex-1"
              >
                <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                <path
                  d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />

              <span className="text-xs text-gray-500 w-8 text-right">
                {volume}%
              </span>
            </div>
          </div> */}
        </div>

        {/* Album Cover - On the side */}
        <div className="relative w-[120px] h-full overflow-hidden rounded-2xl aspect-square bg-gray-100">
          <img
            src="/images/music/music-cover.jpg"
            alt="Album cover"
            loading="lazy"
            className="object-cover object-center w-full h-full"
          />
          {isPlaying && (
            <div className="absolute grid place-items-center inset-0 bg-zinc-800/30">
              <img
                src="/images/icons/waves.gif"
                alt="Music Icon"
                className="w-24 h-24 mix-blend-multiply"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
