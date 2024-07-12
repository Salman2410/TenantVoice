import React from "react";

const ReviewCard = ({ rating, title, author, timeAgo, pros, cons, advice }) => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
      <div className="flex items-center justify-between">
        {/* <div className="flex items-center">
          {[...Array(5)].map((star, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.141c.969 0 1.371 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.541 1.118L10 13.458a1 1 0 00-1.175 0L5.464 16.999c-.786.57-1.84-.197-1.541-1.118l1.286-3.946a1 1 0 00-.364-1.118L1.488 9.373c-.784-.57-.38-1.81.588-1.81h4.141a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
        </div> */}
        <span className="text-gray-500">{timeAgo}</span>
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{author}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Pros:</h4>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis
          ac ligula vel gravida. Vestibulum nec iaculis elit, nec volutpat est.
          Duis rutrum nisi ac risus dapibus,
        </p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Cons:</h4>
        <p className="text-gray-700">
          Quisque aliquet non odio commodo fermentum. Suspendisse nec nibh
          maximus, sollicitudin urna sed, eleifend tortor
        </p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Advice to owner:</h4>
        <p className="text-gray-700">
          {" "}
          malesuada nibh mauris ut enim. Curabitur id vulputate est. Maecenas ac
          lacus lacinia, posuere elit at, tincidunt dui.
        </p>
      </div>
      <div className="mt-4">
        <a href="#" className="text-blue-500">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
