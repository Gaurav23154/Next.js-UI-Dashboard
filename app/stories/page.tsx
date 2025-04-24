import SearchBar from "../components/Searchbar";
import Tabs from "../components/Tabs";
import Storycard from "../components/Storycard";

// Define allowed status types
type StatusType = "Published" | "Draft" | "Created";

// Define the story type structure
interface Story {
  image: string;
  title: string;
  category: string;
  date: string;
  views: number;
  status: StatusType;
}

// Dummy data with strict types
const dummyStories: Story[] = [
  {
    image: "/images/image4.jpg",
    title: "Pakistan Terror Attack in Kashmir",
    category: "Politics",
    date: "23 April 2025",
    views: 590,
    status: "Published",
  },
  {
    image: "/images/image5.jpg",
    title: "Large amount of Oil well found in Ballia",
    category: "Discovery",
    date: "2 April 2025",
    views: 28,
    status: "Draft",
  },
  {
    image: "/images/image6.jpg",
    title: "America Put 175% Tarriff on Chinese Goods",
    category: "International",
    date: "10 April 2025",
    views: 990,
    status: "Draft",
  },
  {
    image: "/images/image7.jpg",
    title: "Hindu Muslim Violence in Mursidabad Bengal",
    category: "General",
    date: "4 April 2025",
    views: 498,
    status: "Draft",
  },
  {
    image: "/images/image8.jpg",
    title: "RCB vs RR Match in Chennaswammy today!!",
    category: "Sports",
    date: "24 April 2025",
    views: 228,
    status: "Published",
  },
];

export default function StoriesPage() {
  return (
    <div className="px-4 py-6">
      <SearchBar />
      <Tabs />
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dummyStories.map((story, idx) => (
          <Storycard key={idx} {...story} />
        ))}
      </div>
    </div>
  );
}
