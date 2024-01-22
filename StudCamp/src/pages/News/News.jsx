import NoticeCard from "../../components/Cards/NoticeCard";

function News() {
  // Sample data for multiple cards
  const noticeData = [
    {
      title: "Exciting Event Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      postedDate: "January 15, 2024",
      lastDate: "February 1, 2024",
      collegeName:"PIRENS IBMA LONI  b.k",
    },
  
    // Add more card data as needed
  ];

  return (
    <div className="min-h-screen bg-teal-800 p-4">
      <div className="flex flex-wrap justify-start">
        {noticeData.map((data, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <NoticeCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
