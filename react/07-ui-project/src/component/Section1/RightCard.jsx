const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://img.freepik.com/free-photo/young-business-woman-working-laptop-cafe_1303-30504.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">1</h2>
        <p className="text-xl leading-normal text-white  mb-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          necessitatibus, vitae voluptates aspernatur repellendus aut
          reprehenderit consequatur sequi consectetur quia.
        </p>
        <div className=" flex justify-between ">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-gray-600">Stisfied</button>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
            <i  className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard; 
