import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddIDForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isPhotoIDModalOpen, setPhotoIDModalOpen] = useState(false);
  const [photoIDUploaded, setPhotoIDUploaded] = useState(false);
  const [secondIDUploaded, setSecondIDUploaded] = useState(false);
  const [photoIDSelected, setPhotoIDSelected] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    setPhotoIDUploaded(true);
    setPhotoIDModalOpen(false); // Close the modal on submit
  };

  const handleCancel = () => {
    navigate('/RenterProfile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-lg absolute left-[165px] top-[210px] rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Add your ID</h1>
        <p className="mb-6">
          Upload images of two IDs. At least one ID must have your photo on it.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-center text-gray-700 cursor-pointer hover:bg-gray-100"
              onClick={() => setPhotoIDModalOpen(true)}
            >
              Add photo ID
            </button>
          </div>
          <div className="mb-4">
            <input
              type="file"
              id="secondID"
              {...register('secondID', { required: !secondIDUploaded })}
              className="hidden"
              accept="image/*"
              onChange={(event) => setSecondIDUploaded(event.target.files.length > 0)}
            />
            <label
              htmlFor="secondID"
              className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-center text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              Add second ID
            </label>
            {errors.secondID && (
              <p className="text-red-500 text-sm mt-2">
                Please upload a second ID.
              </p>
            )}
          </div>
          <div className="flex justify-between mt-8">
            <button type="button" className="text-gray-700" onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-red-600 text-white px-4 py-2 rounded-lg ${!(photoIDUploaded && secondIDUploaded) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!(photoIDUploaded && secondIDUploaded)}
            >
              Save and back
            </button>
          </div>
        </form>
      </div>
      {isPhotoIDModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add a document</h2>
              <button
                onClick={() => setPhotoIDModalOpen(false)}
                className="text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="photoID">
                  Choose a photo ID
                </label>
                <select
                  id="photoID"
                  {...register('photoID', { required: 'Please select a photo ID' })}
                  className="w-full border rounded-lg px-3 py-2"
                  onChange={(e) => setPhotoIDSelected(e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Australian Driver Licence">Australian Driver Licence</option>
                  <option value="Australian Passport">Australian Passport</option>
                  <option value="Overseas Passport">Overseas Passport</option>
                  <option value="Other">Other</option>
                </select>
                {errors.photoID && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.photoID.message}
                  </p>
                )}
              </div>
              {photoIDSelected && (
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="photoIDImage">
                    Upload an image
                  </label>
                  <input
                    type="file"
                    id="photoIDImage"
                    {...register('photoIDImage', { required: 'Please upload an image' })}
                    className="w-full border rounded-lg px-3 py-2"
                    accept="image/*"
                    onChange={(e) => setImageUploaded(e.target.files.length > 0)}
                  />
                  {errors.photoIDImage && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.photoIDImage.message}
                    </p>
                  )}
                </div>
              )}
              <div className="flex justify-between mt-8">
                <button type="button" className="text-gray-700" onClick={() => setPhotoIDModalOpen(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-red-600 text-white px-4 py-2 rounded-lg ${!(photoIDSelected && imageUploaded) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!(photoIDSelected && imageUploaded)}
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddIDForm;
