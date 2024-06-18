import React from 'react';

function Profile() {
  const user = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '+1234567890',
    profileImage: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1824'
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh'}}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white text-center" style={{ fontFamily: 'Poppins' }}>
            {user.username}
          </h2>
          <p className="text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>{user.email}</p>
          <p className="text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>{user.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
