export default function MobileComponent({ width }) {
  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <div className="min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white">Mobile Component</h2>
      </div>
      <button
        type="button"
        className="ml-3 inline-flex items-center my-4 py-2 border border-indigo-400 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 px-10"
      >
        {width}
      </button>
    </div>
  );
}