import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

export type PostProps = {
  id: number;
  username: string;
  avatar: string;
  timeAgo: string;
  content: string;
  codeSnippet: string;
  tags: object;
  likes: number;
  comments: number;
  githubLink: string;
};

export default function PostCard(props: PostProps) {
  return (
    <div className="flex flex-col w-full p-4 border-b border-gray-200 max-w-xl mx-auto">
      {/* Avatar and header section */}
      <section className="flex gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={props.avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold">{props.username}</p>
          <p className="text-sm text-gray-500">{props.timeAgo}</p>
        </div>
      </section>

      {/* Content section */}
      <section className="mt-3">
        <p className="text-sm text-gray-800 mb-2">
          {props.content.length > 120
            ? `${props.content.slice(0, 120)}...`
            : props.content}
        </p>
        {props.codeSnippet && (
          <pre className="bg-gray-100 p-2 rounded-lg text-sm w-64 break-words whitespace-normal">
            <code>{props.codeSnippet}</code>
          </pre>
        )}
      </section>

      {/* Tags Section */}
      <section className="mt-3">
        {props.tags && (
          <div className="flex space-x-2">
            {Object.values(props.tags).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-purple-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Footer with likes and comments */}
      <section className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaHeart className="text-red-500" />
            <span>{props.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaComment />
            <span>{props.comments}</span>
          </div>
        </div>
        <a
          href={props.githubLink}
          target="_blank"
          className="text-blue-500 hover:underline"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </section>
    </div>
  );
}
