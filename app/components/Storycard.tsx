import Image from "next/image";
import { FaEye, FaEllipsisV } from "react-icons/fa";

interface StoryCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  views: number;
  status: "Published" | "Draft" | "Created";
}

const statusColor: Record<string, string> = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Created: "bg-blue-100 text-blue-700",
};

export default function StoryCard({
  image,
  title,
  category,
  date,
  views,
  status,
}: StoryCardProps) {
  return (
    <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md">
      {/* Background image */}
      <Image
        src={image}
        alt="Example"
        fill // replaces layout="fill"
        style={{ objectFit: 'cover' }}
        className="z-0"
        priority={false}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end z-10">
        {/* Views Badge */}
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs rounded-md flex items-center gap-1 text-gray-700 shadow-sm">
          <FaEye className="text-[13px]" />
          {views}
        </div>

        {/* Title */}
        <h3 className="text-white text-[16px] font-semibold leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Category, Date, and Status in one row */}
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-white/80">
            <span className="font-bold">{category}</span> • {date}
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-md ${statusColor[status]}`}
          >
            {status}
          </span>
        </div>

        {/* View and Ellipsis buttons */}
        <div className="mt-3 flex items-center gap-2">
          <button className="flex-1 cursor-pointer bg-[#eee9ff] text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-[#ded7ff] transition">
            View
          </button>
          <button className="bg-[#eee9ff] cursor-pointer text-black p-2 rounded-md hover:bg-[#ded7ff] transition">
            <FaEllipsisV className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
