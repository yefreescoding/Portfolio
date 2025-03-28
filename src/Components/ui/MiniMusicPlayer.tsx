import musicTracks from "../../Data/music-tracks.json";
import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks] = useState(musicTracks);
  const [currentTrack, setCurrentTrack] = useState(0);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrack((prevTrack) => {
      if (prevTrack === tracks.length - 1) {
        return 0;
      } else {
        return prevTrack + 1;
      }
    });
  };

  const handlePreviousTrack = () => {
    setCurrentTrack((prevTrack) => {
      if (prevTrack === 0) {
        return tracks.length - 1;
      } else {
        return prevTrack - 1;
      }
    });
  };

  return (
    <div className="w-full p-2 max-w-[400px] h-full rounded-xl overflow-hidden shadow-lg bg-zinc-800 border border-zinc-700">
      <div className="flex md:flex-row justify-between">
        {/* Controls Section */}
        <div className=" p-2 rounded-lg flex flex-col justify-between">
          {/* Song Info */}
          <div>
            <h2 className="text-base text-slate-100 text-nowrap font-bold">
              {tracks[currentTrack].song}
            </h2>
            <p className="text-sm text-gray-500">
              {tracks[currentTrack].artist}
            </p>
          </div>

          {/* Playback Controls */}
          <div className="flex justify-center items-center gap-4 mt-2">
            {/* Previous Button */}
            <button
              onClick={handlePreviousTrack}
              className="h-8 w-8 rounded-full border border-zinc-500 flex items-center justify-center active:bg-zinc-400 hover:bg-zinc-700 transition-colors"
            >
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
            <button
              onClick={handleNextTrack}
              className="h-8 w-8 rounded-full border border-zinc-500 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            >
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
        </div>

        {/* Album Cover - On the side */}
        <div className="relative w-[140px] h-full overflow-hidden rounded-lg aspect-square bg-gray-100">
          <img
            src={tracks[currentTrack].cover}
            alt="Album cover"
            loading="lazy"
            className="object-cover object-center w-full h-full"
          />
          {isPlaying && (
            <div className="absolute grid place-items-center inset-0 bg-zinc-800/20">
              <img
                src="/images/icons/waves.gif"
                alt="Music Icon"
                className="w-20 h-20 mix-blend-multiply"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
