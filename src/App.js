import React from 'react';
import {v4} from "uuid";  
import TitleBar from './TitleBar';
import InputBox from './InputBox';
import api from "./api/details";
import DetailTable from './DetailTable';
import './App.css';

function App() {
  const inputRef = React.useRef();
  const editRef = React.useRef();
  const [detailList, setdetailList] = React.useState([]);
  const [ID,setID] = React.useState(0);

  const retrievedetails = async () => {
    const response = await api.get("/details");
    return response.data;
  };

  const adddetail = async (details) => {
    const request = {
      id: v4() ,
      ...details,
    }
    const response = await api.post("/details", request);
    const newItem = [
      ...detailList,
      response.data,
    ]
    setdetailList(newItem);
  };

  const deletedetail = async (id) => {
    await api.delete(`/details/${id}`);
    const newdetailList = detailList.filter((detail) => {
      return detail.id !== id;
    });

    setdetailList(newdetailList);
  };

  const updatedetail = async (detail) => {
    const response = await api.put(`/details/${ID}`, detail);
    setdetailList(
      detailList.map((detail) => {
        return ID === detail.id ? { ...response.data } : detail;
      })
    );
  };

  const handleButton = () => {
    inputRef.current.style.display = "block";
  }
  window.onclick = function (event) {
    if (event.target === inputRef.current) {
      inputRef.current.style.display = "none";
    }
    if (event.target === editRef.current) {
      editRef.current.style.display = "none";
    }
  };

  React.useEffect(() => {
    const getAlldetails = async () => {
      const alldetails = await retrievedetails();
      if (alldetails) setdetailList(alldetails);
    };

    getAlldetails();
  }, []);
  

  return (
    <>
      <TitleBar />
      <InputBox inputRef={inputRef} adddetail={adddetail} />
      
      <button type="button" className="btn btn-primary add-btn" onClick={handleButton}>Add details</button>

        <div className="details">Student List</div>
        <DetailTable detailList={detailList}  deletedetail={deletedetail} updatedetail={updatedetail}  setID={setID} editRef={editRef}/>
    </>
  )
}

export default App;
