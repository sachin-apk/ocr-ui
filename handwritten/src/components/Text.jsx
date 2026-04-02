import react from "react";

function Text(props) {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          📄 Extracted Text
        </h1>

        {/* Text container */}
        <div className="bg-gray-50 border rounded-lg p-4 max-h-[400px] overflow-y-auto">
          {props.text ? (
            <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
              {props.text}
            </pre>
          ) : (
            <p className="text-gray-400 text-center">
              No text extracted yet...
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-3 mt-4">

          {/* Copy button */}
          <button
            onClick={() => navigator.clipboard.writeText(props.text)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Copy
          </button>

          {/* Clear button */}
          <button
            onClick={() => props.setText("")}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Clear
          </button>
          
        </div>

      </div>
    </div>
  )

}

export default Text;