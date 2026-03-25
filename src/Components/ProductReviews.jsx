import React, {  useState } from "react";
import ChevronDown from "../Icons/ChevronDown";
import ChevronUp from "../Icons/ChevronUp";

const ProductReviews = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(null);
   const light =
    "h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around";
  const dark =
    "h-12 w-screen border-2 border-black bg-black flex items-center justify-around";
  return (
    <div className="mt-16">
     <h2 className="text-2xl font-bold mb-8 border-b pb-3">
  What Customers Said
</h2>

      <div className="space-y-4 max-w-3xl">
        {reviews.map((review, index) => {
          return (
            <ReviewAccordian
              review={review}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductReviews;

const ReviewAccordian = ({ review, index, setActiveIndex, activeIndex }) => {
  const { reviewerName, rating, comment } = review;
  const isOpen = index === activeIndex;

  return (
    <div className="border border-blue-200 rounded-xl bg-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Header */}
      <div
        onClick={() =>
          isOpen ? setActiveIndex(null) : setActiveIndex(index)
        }
        className="flex justify-between items-center p-5 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <h4 className="font-semibold text-gray-800">
            {reviewerName}
          </h4>

          <div className="flex items-center text-yellow-500 font-medium">
            ⭐ {rating}
          </div>
        </div>
        

        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown />
        </div>
      </div>

      {/* Content */}
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};