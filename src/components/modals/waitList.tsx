import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import { createPortal } from "react-dom";

// Modal background overlay
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal wrapper for the form with gradient background
const ModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0072ff, #00c6ff); /* Gradient background */
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  position: relative;
`;

// Form title styling
const Title = styled.h1`
  color: white;
  font-size: 26px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;

// Form subtitle
const Subtitle = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 25px;
  text-align: center;
`;

// Form label styles
const Label = styled.label`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

// Form input styles
const Input = styled.input`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

// Transparent button with white border
const Button = styled(motion.button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Slight transparency on hover */
  }
`;

// Error message styling
const ErrorMessage = styled(motion.div)`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

// Success message styling
const SuccessMessage = styled(motion.div)`
  color: white;
  text-align: center;
  margin-top: 10px;

  & b {
    font-weight: bold;
  }
`;

// Close button for the modal
const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

interface WaitlistFormData {
  email: string;
  firstName: string;
  lastName: string;
  description?: string;
  waitlist_id?: number;
  referral_link?: string;
  note?: string; // We'll use this to store additional user data
}

const WaitlistModal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  const [waitlistData, setWaitlistData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  function validateName(name: string) {
    return name.trim().length >= 2;
  }

  function submitWaitlist(formData: WaitlistFormData) {
    // Validate all required fields
    if (!formData.email) {
      setError("Please enter your email");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!validateName(formData.firstName)) {
      setError("Please enter a valid first name");
      return;
    }
    if (!validateName(formData.lastName)) {
      setError("Please enter a valid last name");
      return;
    }

    setLoading(true);

    // Prepare the API data
    const apiData = {
      email: formData.email,
      waitlist_id: parseInt(`${process.env.NEXT_PUBLIC_WAITLIST_API || 18435}`),
      referral_link: document.URL,
      first_name: formData.firstName,
      last_name: formData.lastName,
      // Store additional user data in the note field as JSON
      metadata:{
        first_name: formData.firstName,
        last_name: formData.lastName,
        description: formData.description,
        email: formData.email,
      }
    };

    fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => response.json())
      .then((data) => {
        setWaitlistData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong. Please try again.");
      });
  }

  // Close modal if clicked outside the form area
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close the modal on Escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const handleSubmit = () => {
    const formData: WaitlistFormData = {
      email: (document.getElementById("email") as HTMLInputElement).value,
      firstName: (document.getElementById("firstName") as HTMLInputElement).value,
      lastName: (document.getElementById("lastName") as HTMLInputElement).value,
      description: (document.getElementById("description") as HTMLTextAreaElement).value
    };
    submitWaitlist(formData);
  };

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOverlayClick}
    >
      <ModalWrapper
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        {!waitlistData ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <Title>Join Waiting List</Title>
            <Subtitle>
             {` Let's get the raffle rolling. Please enter your details & we will respond as soon as we can.`}
            </Subtitle>

            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your First Name"
              required
            />

            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              required
            />

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              name="description"
              placeholder="Enter a short description"
            />

            <Button
              type="button"
              whileHover={{ scale: 1.05 }}
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <ClipLoader size={25} color={"#0072FF"} loading={true} />
              ) : (
                "Join Now"
              )}
            </Button>

            {error && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </ErrorMessage>
            )}
          </form>
        ) : (
          <SuccessMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              Thank you for signing up. Your position is{" "}
              <b>{waitlistData.priority}</b> on the waitlist.
            </div>
            <div>
              Referral link: <b>{waitlistData.referral_link}</b>
            </div>
            <div>
              Total referrals: <b>{waitlistData.total_referrals}</b>
            </div>
            <Button
              type="button"
              whileHover={{ scale: 1.05 }}
              onClick={() => setWaitlistData(null)}
            >
              Return to signup
            </Button>
          </SuccessMessage>
        )}
      </ModalWrapper>
    </ModalOverlay>,
    document.body
  );
};

export default WaitlistModal;