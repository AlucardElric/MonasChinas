import React, { Fragment, useState } from "react";

const URI = "http://localhost:8000/producto/images/post";

function Diseima() {

    const [file, setFile] = useState('') 

    const selecteHandler = e => {
        setFile( (e.target.files[0]))
    }

    const sendHandler = e => {
        if(!file){
            alert('debes cargar un archivo huevon')
            return
        }

        const formdata = new FormData()
        formdata.append('image',file)
        
        fetch(URI, {
            method: 'POST',
            body: formdata
        })
        //.then(res => res.text())
        .then(res => console.log(res))
        .catch(err => { console.error(err)})

        //document.getElementById('fileInput').value = null // resetear el input

        setFile(null)
    }

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input id='fileInput' onChange={selecteHandler} className="form-control" type="file"></input>
            </div>
            <div className="col-2">
            <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
            </div>
          </div>

          
        </div>
      </div>
    </Fragment>
  );
}

export default Diseima;
