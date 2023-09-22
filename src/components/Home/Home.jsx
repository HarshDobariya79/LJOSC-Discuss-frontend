import React, { useState, useEffect } from "react";
import { protectedApi } from "../../services/api";

const Home = () => {
  const [threads, setThreads] = useState();

  useEffect(() => {
    protectedApi
      .get("/api/v1/thread")
      .then((response) => {
        if (response.status === 200) {
          setThreads(response.data);
        }
      })
      .catch((err) => {
        console.error("Threads fetching failed! ", err);
      });
  }, []);

  return (
    <div>
      <div className="bg-keppel flex flex-col items-center justify-center p-16 space-y-9">
        <div className="text-[#FFFEFE] text-6xl font-medium">Hello. 👋</div>
        <div className="text-[#fcfaf7] text-3xl">
          Welcome to the LJOSC community&apos;s discussion forum.
        </div>
      </div>
      <div className="w-4/5 mx-auto h-full p-4 my-4 text-[#030509] flex justify-between items-center">
        <div className="flex font-normal text-lg">
          <button className="px-3 py-2 mx-2 bg-keppel text-[#FFFEFE] hover:bg-keppel-dark hover:text-[#FFFEFE] transition">
            All Threads
          </button>
          <button className="px-3 py-2 mx-2 hover:bg-keppel hover:text-[#FFFEFE] transition">
            Latest
          </button>
          <button className="px-3 py-2 mx-2 hover:bg-keppel hover:text-[#FFFEFE] transition">
            Unseen
          </button>
        </div>
        <button className="px-3 py-2 mx-2 bg-keppel hover:bg-keppel-dark text-white transition font-medium">
          New Thread
        </button>
      </div>

      <div className="w-4/5 mx-auto">
        <table className="w-2/3">
          <thead>
            <tr className="px-4 border-b-[3px]">
              <th>Title</th>
              <th className="px-2">views</th>
              <th className="px-2">Replies</th>
              <th className="px-2">Reach</th>
              <th className="px-2">Likes</th>
            </tr>
          </thead>
          <tbody>
            {threads
              ? threads.map((thread) => (
                  <tr
                    key={thread._id}
                    className="cursor-pointer hover:bg-[#f8f8f9] border-b-2"
                    onClick={() => console.log("Hello world")}
                  >
                    <td>
                      <div className="flex flex-col space-y-2 p-3">
                        <div className="text-xl">{thread.title}</div>
                        <div className="text-sm">
                          Author: {thread.author.username}
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{thread.views}</td>
                    <td className="text-center">{thread.replies}</td>
                    <td className="text-center">{thread.reach}</td>
                    <td className="text-center">{thread.likes}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
