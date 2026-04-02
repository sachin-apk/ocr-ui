import react, { useState } from "react";

function Upload(props) {
    // handling files selection
    const handleFile = (e) => {
        e.preventDefault();
        const selectedFiles = Array.from(e.target.files);
        const filePreview = selectedFiles.map((file) => ({ file, preview: URL.createObjectURL(file), }));
        props.setFiles((prev) => [...prev, ...filePreview]);
    };

    // removing files
    const removeFiles = (index) => {
        const updated = [...props.files];
        URL.revokeObjectURL(updated[index].preview);
        updated.splice(index, 1);
        props.setFiles(updated);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Files</h1>
            {/* Upload Card */}
            <label className="w-72 flex flex-col items-center px-6 py-8 bg-white rounded-xl shadow-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                <svg
                    className="w-10 h-10 text-blue-500 mb-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="text-gray-700 font-medium">Click or Drag files to upload</span>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFile}
                />
            </label>
            {/* Preview Grid */}
            {props.files.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 w-full max-w-xl">
                    {props.files.map((f, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={f.preview}
                                alt="preview"
                                className="w-full h-32 object-cover"
                            />
                            <button
                                onClick={() => removeFiles(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {/* Upload Button */}
            {props.files.length > 0 && (
                <button
                    onClick={props.handleUpload}
                    disabled={props.loading}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {props.loading ? "Uploading..." : "Upload Images"}
                </button>
            )}
        </div>
    )
}

export default Upload;