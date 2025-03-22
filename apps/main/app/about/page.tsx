import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full '>

      <div className="min-h-screen  flex  justify-center p-6">
        <div className="shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">About Our Typing Website</h1>
          <p className=" mb-4">
            Welcome to our typing website! Our mission is to help users improve their typing speed
            and accuracy through engaging and interactive exercises.
          </p>
          <p className=" mb-4">
            Whether you&apos;re a beginner looking to develop fundamental skills or an advanced typist
            striving for perfection, our platform offers a range of challenges to suit your needs.
          </p>
          <p className=" mb-4">
            Track your progress, compete with others, and enjoy a seamless typing experience designed
            to enhance your efficiency. Start your journey to becoming a pro typist today!
          </p>
          <div className="mt-6">
            <a
                href="/"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Start Typing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

