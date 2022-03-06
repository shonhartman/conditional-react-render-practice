import { useViewport } from "./ViewPortProvider";

export default function DesktopComponent() {
  const width = useViewport();

  return (
    <div className="flex justify-between p-10">
      <div className="min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Desktop</h2>
      </div>
      <button
        type="button"
        className="ml-3 inline-flex items-center px-20 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500"
      >
        {width}
      </button>
    </div>
  )
}