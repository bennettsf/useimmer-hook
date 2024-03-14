import React from 'react';
import { useImmer } from 'use-immer';

function UserProfileWithImmer() {
  // Initialize userProfile state with useImmer
  const [userProfile, setUserProfile] = useImmer({
    name: 'Bennett Fife',
    email: 'bennett.fife@gmail.com',
    contactDetails: {
      phone: '123-456-7890',
      address: '123 Main St, Seattle, United States',
    },
    preferences: {
      newsletter: true,
      notifications: false,
    },
  });

  // Function to update contact details
  const updateContactDetails = (newPhone, newAddress) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
      console.log(JSON.stringify(draft))
    });
  };

  // Function to toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
      console.log(JSON.stringify(draft))
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <h3>Contact Details</h3>
      <p>Phone: {userProfile.contactDetails.phone}</p>
      <p>Address: {userProfile.contactDetails.address}</p>
      <h3>Preferences</h3>
      <p>Newsletter Subscription: {userProfile.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}</p>
      <button onClick={() => toggleNewsletterSubscription()}>
        Toggle Your Subscription
      </button>
      <div>
        <h3>Update Contact Details</h3>
        <input type="text" value={userProfile.contactDetails.phone} onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)} />
        <input type="text" value={userProfile.contactDetails.address} onChange={(e) => updateContactDetails(userProfile.contactDetails.phone, e.target.value)} />
      </div>
    </div>
  );
}

export default UserProfileWithImmer;