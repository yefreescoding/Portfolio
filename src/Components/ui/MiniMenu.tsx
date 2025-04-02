import { useState } from "react";

export const MiniMenu = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isOpenMail, setIsOpenMail] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyMail = (copyItems: string) => {
    navigator.clipboard.writeText(copyItems);
    setIsCopied(true);
  };

  const handleShowMail = () => {
    setIsOpenMail(!isOpenMail);
    setIsOpenChat(false);
  };

  const handleShowChat = () => {
    setIsOpenChat(!isOpenChat);
    setIsOpenMail(false);
  };
  return (
    <div className="flex items-center gap-4 justify-between border border-zinc-700 bg-zinc-800 p-4 w-full rounded-lg">
      <div className="flex-auto  flex items-center gap-2">
        <img
          src="/images/hero-images/profile-pic.png"
          alt="Profile"
          className="w-14 rounded-full aspect-square"
        />
        <div className="flex-auto relative overflow-hidden ">
          <div
            style={{
              transform: `translateY(${
                isOpenChat || isOpenMail ? "100%" : "0%"
              })`,
              transition: "transform 0.15s ease-in-out",
            }}
          >
            <h2 className="text-sm font-semibold text-zinc-200">
              Yefree Valdez
            </h2>
            <p className="text-xs flex items-center gap-1 text-balance text-zinc-400">
              <span className="h-2 w-2 bg-green-300 rounded-full"></span>
              <span>Available for work</span>
            </p>
          </div>
          <MailTag
            isCopied={isCopied}
            isOpen={isOpenMail}
            handleCopyMail={handleCopyMail}
          />
          <ChatTag
            isCopied={isCopied}
            isOpen={isOpenChat}
            handleCopyMail={handleCopyMail}
          />
        </div>
      </div>
      <div className="flex-1 flex gap-2 items-center">
        <button
          type="button"
          className="aspect-square flex items-center justify-center w-12 bg-green-200 text-green-800 hover:bg-green-400 p-2 rounded-full "
          onClick={handleShowMail}
        >
          <span className="sr-only">My personal mail</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className="aspect-square flex items-center justify-center w-12 bg-blue-200 text-blue-800 hover:bg-blue-400 p-2 rounded-full"
          onClick={handleShowChat}
        >
          <span className="sr-only">My Discord</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ChatTag = ({ isOpen, handleCopyMail, isCopied }) => {
  return (
    <div
      style={{
        transform: `translateY(${isOpen ? "0" : "-100%"})`,
        transition: "transform 0.15s ease-in-out",
      }}
      className="p-2 text-sm absolute inset-0 h-full z-10 flex items-center justify-between  border border-blue-800 bg-blue-900/40 text-blue-100 rounded-lg"
    >
      <span>Let's chat</span>
      <button
        onClick={() => {
          handleCopyMail("discord.user");
        }}
        className="hover:bg-blue-700 hover:text-blue-400 active:bg-blue-200 rounded-lg transition-all"
      >
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const MailTag = ({ isOpen, handleCopyMail, isCopied }) => {
  return (
    <div
      style={{
        transform: `translateY(${isOpen ? "0" : "-100%"})`,
        transition: "transform 0.15s ease-in-out",
      }}
      className="p-2 text-sm absolute inset-0 h-full z-10 flex items-center justify-between  border border-green-800 bg-green-900/50 text-green-200 rounded-lg"
    >
      <span>Copy mail</span>
      <button
        onClick={() => {
          handleCopyMail("mail@yefree.dev");
        }}
        className="hover:bg-green-700 hover:text-green-400 active:bg-green-200 rounded-lg transition-all"
      >
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
