import { useState } from 'react';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import Modal from './Modal';

const images = [img1, img2, img3, img4];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="flex flex-col items-center py-8 bg-slate-900 min-h-screen text-white">
      <h1 className="text-2xl font-semibold mb-4 text-blue-400">📸 Image Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl w-11/12">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            onClick={() => openModal(src)}
            className="w-full h-40 object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;
