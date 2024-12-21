"use client";
 
import Image from 'next/image';

export function ProtectedContent({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen p-8 my-24">
  <div className="mb-10">
  <div className="mx-auto max-w-48">
  <Image
        className='mb-4'
        src="/OwnYourVision.png" // Path to the image (public folder or remote URL)
        alt="Logo OwnYourVision" // Alt text for accessibility
        width={400} // Width of the image
        height={290} // Height of the image
      />
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Daily alignment to <br/>crush your goals </h1>
      </div>
      </div>
       <iframe 
       src={process.env.NEXT_PUBLIC_APP_FORM_IFRAME}
       width="100%"
       height={900}
       ></iframe>
    </div>
    
  );
}