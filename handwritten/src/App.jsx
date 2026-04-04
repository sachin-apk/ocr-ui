import react, { useState } from 'react';
import axios from 'axios';
import Upload from './components/Upload';
import Text from './components/Text';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const api = axios.create({ baseURL: "http://127.0.0.1:3000/", });

  // handling upload
  const handleUpload = async () => {

    const formData = new FormData();
    files.forEach((f) => {
      formData.append("images", f.file);
    });

    setLoading(true);
    try {
      const res = await api.post("upload/", formData);
      console.log(res.data);
      
      // adding the state of extracted text
      const data = await res.data;
      setText(data.extractedText.join("\n\n"));
      alert("Files uploaded successfully.")
      setFiles([]);
      setLoading(false);

    } catch (err) {
      console.error(err);
      setFiles([]);
      setLoading(false);
      alert("File upload interrupted...\nTry Again.")
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div>
          {text ? <Text text={text} setText={setText} /> : <Upload files={files} setFiles={setFiles} loading={loading} handleUpload={handleUpload} />}
        </div>

      </div>
      
      <Footer />


    </>
  )
}

export default App;
