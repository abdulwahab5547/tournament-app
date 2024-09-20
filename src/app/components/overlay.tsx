
import { useState, useEffect, ReactNode } from 'react';


interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode; 
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsActive(true);
    } else {
      // Set a timeout to match the transition duration and hide the component after the animation finishes
      setTimeout(() => setIsActive(false), 300); // 300ms matches the duration of the transition effect
    }
  }, [isVisible]);

  return (
    <>
      {isActive && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose} // Close overlay when clicking the background
        >
          <div
            className={`orange-yellow-gradient p-6 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
              isVisible ? 'scale-100' : 'scale-90'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {children} {/* Render any content passed to the overlay */}
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
