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
  {
    image: "/images/image2.jpg",
    title: "Mumbai reaches to third , Huge jump in points table of IPL",
    category: "Sports",
    date: "23 April 2025",
    views: 728,
    status: "Draft",
  },
  {
    image: "/images/image10.jpg",
    title: "MacBook Prices rises in America",
    category: "Business",
    date: "20 Sep 2022",
    views: 428,
    status: "Published",
  },
  {
    image: "/images/image11.jpg",
    title: "Inflation around the world is not ready to stop",
    category: "Business",
    date: "21 Sep 2021",
    views: 28,
    status: "Published",
  },
  {
    image: "/images/image12.jpg",
    title: "Gold Prices reaches above 1 lakh",
    category: "Business",
    date: "24 April 2025",
    views: 128,
    status: "Draft",
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
