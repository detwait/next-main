import ThankYouName from './components/name';

/*
  No need to make the whole component as client one. Moved user name to separate component.
*/

export const metadata = {
  title: 'Thank You - Company Name',
  description: 'Thank you for your feedback!',
};

export default function ThankYouPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Thank You, <ThankYouName />!
        </h1>
        <p className="text-lg text-gray-600">
          We appreciate your feedback and will get back to you soon if needed.
        </p>
      </div>
    </div>
  );
}