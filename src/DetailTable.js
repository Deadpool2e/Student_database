import React from 'react';
import deleteimg from './Images/delete.png';
import editimg from './Images/edit.png';
import Editbox from './Editbox';
const detailTable = ({ detailList, deletedetail, updatedetail, setID, editRef }) => {
  
  const handleEditBtn = (id) => {
    editRef.current.style.display = "block";
    setID(id);
  }

  const handleDeleteBtn = (id) => {
    deletedetail(id);
  }

  return (
    <>
      <Editbox editRef={editRef} updatedetail={updatedetail} />
      <div className='table-header'>
        <table className='table'>
          <tr >
            <th className='col col-1'>RollNo</th>
            <th className='col col-2'>Name</th>
            <th className='col col-3'>DOB</th>
            <th className='col col-4'>Edit</th>
            <th className='col col-5'>Remove</th>
          </tr>
        </table>
      </div>
      <div className='table-cnt'>
        <table className='table table-borderless'>
          <tbody>
            {detailList.length > 0 ? (
              detailList.map((detail) => {
                return (
                  <tr className="table-ctn-rows" key={detail.id} >
                    <td className='col col-1'>{detail.RollNo}</td>
                    <td className='col col-2'>{detail.Name}</td>
                    <td className='col col-3'>{detail.DOB}</td>
                    <td className='col col-4'><img src={editimg} className='editimg' onClick={() => {
                      handleEditBtn(detail.id)
                    }}
                    /></td>
                    <td className='col col-5' ><img src={deleteimg} className='deleteimg' onClick={() => {
                      handleDeleteBtn(detail.id)
                    }}
                    /></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="Error-msg">No details Exists.. Click on add button to add a detail</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default detailTable;