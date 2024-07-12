import React from "react";
import { useState } from "react";
import ImageGallery from "../ImageGallary";
import PropertyCard from "../Property/PropertyCard";
import ReviewCard from "../Review/ReviewCard";
import AddReviewButton from "../Review/AddReviewButton";
import Modal from "../Modal"
import ReviewForm from "../Review/ReviewForm"

const Tenant = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmitReview = (data) => {
    console.log("Review Submitted", data);
    handleCloseModal();
  };
  return (
    <>
      <section className="flex justify-center py-10 my-10">
        <div className="flex flex-col md:flex-row w-[70%] mx-auto items-start">
          <div className="md:w-1/2 p-4">
            <ImageGallery />
          </div>
          <div className="md:w-1/2 p-4">
            <PropertyCard
              title="Grymes Hill"
              address="496 Howard Avenue #2B, Staten Island, NY 10301"
              price="2,200"
              beds={2}
              baths={1}
              postedBy="Tomer"
              availabilityDate="Aug 01, 2024"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-10">
        <h2 className="underline text-center text-3xl text-[#061938]">
          Reviews
        </h2>
        <div className="py-10 my-10 w-1/2 mx-auto flex justify-center items-center gap-16">
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="p-6">
          <AddReviewButton onClick={handleOpenModal} />
          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <ReviewForm onSubmit={handleSubmitReview} />
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Tenant;
