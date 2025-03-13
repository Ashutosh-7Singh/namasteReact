const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="h-100 w-80 bg-gray-200 dark:bg-gray-300 rounded-lg shadow-md animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;




// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>{" "}
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>{" "}
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//       <div className="shimmer-card">cards</div>
//     </div>
//   );
// };

// export default Shimmer;
