import React ,{useEffect, useState } from 'react'
import axios from "axios";
import { useLocation } from "react-router";
import './individualorder.css'

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {TextField} from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function Individualoder() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [smallitems, setsmallitems] = useState("");
  const [largeitems, setlargeitems] = useState("");
  const [hugeitems, sethugeitems] = useState("");
  const [duration, setduration] = useState("");
  const [residence, setresidence] = useState("");
  const [notes, setnotes] = useState("");
  const [price, setprice] = useState("");

  const [dateone, setdateone] = useState("")
  const [datetwo, setdatetwo] = useState("")

  const initialState = {
    collectiondate: '',
    returndate: '',
   }

   const [inputs, setInputs] = useState(initialState)

   const {
    collectiondate
  } = inputs

  const handleChange = e => {
    const {name, value} = e.target
    setInputs({...inputs, [name]:value})
  }


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/admin/" + path);
      setPost(res.data);
      setName(res.data.name);
      setdateone(res.data.collectiondate)
      setContact(res.data.contact);
      setEmail(res.data.email);
      setresidence(res.data.residence);
      setnotes(res.data.notes);
      setprice(res.data.price);
    };
    getPost();
  }, [post,path]);

  const getTotal = () => {
    let totalcost = 0.00;
    totalcost = post.duration * (post.smallitems * 8.00 + post.largeitems * 15.00 + post.hugeitems * 22.00)
    return totalcost
  }
  const returning = new Date(post.returntime).toLocaleTimeString()
  const collection = new Date(post.collectiontime).toLocaleTimeString()
  const returningdate = new Date(datetwo).toLocaleDateString()
  const collectingdate = new Date(dateone).toLocaleDateString()

  const [collectiontime, setValuetwo] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));
  const [returntime, setValue] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));

  const [updateMode, setUpdateMode] = useState(false);

  const [updateCollectiondate, setupdateCollectiondate] = useState(false);
  const [updateReturndate, setupdateReturndate] = useState(false);

  const [updatecollectime, setupdatecollectime] = useState(false);
  const [updatereturntime, setupdatereturntime] = useState(false);

  const updateCollect = async () => {
    const collectiondate = inputs.collectiondate
    try {
      await axios.put(`/admin/${post._id}`, {
        collectiondate,
      });
    } catch (err) {}
    setupdateCollectiondate(false)
    setdateone(collectiondate)
  }

  const updateReturn = async () => {
    const returndate = inputs.returndate
    try {
      await axios.put(`/admin/${post._id}`, {
        returndate,
      });
    } catch (err) {}
    setupdateReturndate(false)
    setdatetwo(returndate)
  }

  const updatecollectiontime = async () => {
    try {
      await axios.put(`/admin/${post._id}`, {
        collectiontime,
      });
    } catch (err) {}
    setupdatecollectime(false)
  }

  const updatereturningtime = async () => {
    try {
      await axios.put(`/admin/${post._id}`, {
        returntime,
      });
    } catch (err) {}
    setupdatereturntime(false)
  }



  const handleUpdate = async () => {
    try {
      await axios.put(`/admin/${post._id}`, {
        name,
        contact,
        email,
        smallitems,
        largeitems,
        hugeitems,
        duration,
        residence,
        notes,
        price,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
      <div className='individual-order'>
        <div className='singlePostWrapper'>
        <div class='wording-post'>
        <h1 class='name-title'>Customer: {post.name}</h1>
        <h1 class='PostTitle'>Customer Details: </h1>
        <div class='post-group'>
          <p className="singlePostDesc">Contact: {post.contact}</p>
          <p className="singlePostDesc">Email: {post.email}</p>
        </div>

        <h1 class='PostTitle'>Collection and return details: </h1>
        <div class='post-group'>
            <div class="side-by-side">
            {updateCollectiondate ? (<p className="singlePostTitleInput-items" >Collection Date: </p>) : (<p></p>)}
              {updateCollectiondate ? (
              <TextField 
              onChange={handleChange}
              name="collectiondate"
              type="date"
              value={inputs.collectiondate}
              variant='standard' 
              margin='normal'/>
            ) : (
              <p className="singlePostDesc">Collection Date: {collectingdate}</p>
            )}

          {!updateCollectiondate && (
            <div>
              <button className="collection-return-btn"
                onClick={() => setupdateCollectiondate(true)}
              >Edit</button>
            </div>
          )}

          {updateCollectiondate && (
            <button className="collection-return-btn" onClick={updateCollect}>
              Update
            </button>
          )}
          </div>
        
          <div class="side-by-side">
          {updatecollectime ? (<p className="singlePostTitleInput-items" >Collection Time: </p>) : (<p></p>)}
              {updatecollectime ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={collectiontime}
                onChange={setValuetwo}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            ) : (
              <p className="singlePostDesc">Collection Time: {collection}</p>
            )}

            {!updatecollectime && (
            <div>
              <button className="collection-return-btn"
                onClick={() => setupdatecollectime(true)}
              >Edit</button>
            </div>
          )}

          {updatecollectime && (
            <button className="collection-return-btn" onClick={updatecollectiontime}>
              Update
            </button>
          )}
          </div>



          <div class="side-by-side">
                {updateReturndate ? (<p className="singlePostTitleInput-items" >Return Date: </p>) : (<p></p>)}
                  {updateReturndate ? (
                  <TextField 
                  onChange={handleChange}
                  name="returndate"
                  type="date"
                  value={inputs.returndate}
                  variant='standard' 
                  margin='normal'/>
                ) : (
                  <p className="singlePostDesc">Return Date: {returningdate}</p>
                )}

                {!updateReturndate && (
                <div>
                  <button className="collection-return-btn"
                    onClick={() => setupdateReturndate(true)}
                  >Edit</button>
                </div>
              )}
              {updateReturndate && (
                <button className="collection-return-btn" onClick={updateReturn}>
                  Update
                </button>
              )}
          </div>

          <div class="side-by-side">
            {updatereturntime ? (<p className="singlePostTitleInput-items" >Return Time: </p>) : (<p></p>)}
              {updatereturntime ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                value={returntime}
                onChange={setValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            ) : (
              <p className="singlePostDesc">Return Time: {returning}</p>
            )}

            {!updatereturntime && (
            <div>
              <button className="collection-return-btn"
                onClick={() => setupdatereturntime(true)}
              >Edit</button>
            </div>
          )}

          {updatereturntime && (
            <button className="collection-return-btn" onClick={updatereturningtime}>
              Update
            </button>
          )}
          </div>
        
        </div>

        <h1 class='PostTitle'>Items for Storage: </h1>
        <div class='singlePostDesc'>
          {updateMode ? (<p className="singlePostTitleInput-items" >Small Items: </p>) : (<p></p>)}
          {updateMode ? (
          <input type="text" value={smallitems} className="singlePostTitleInput" autoFocus onChange={(e) => setsmallitems(e.target.value)}/>
        ) : (
          <p className="singlePostDesc">Small Items: {post.smallitems} </p>
        )}
        </div>

        <div class='singlePostDesc'>
          {updateMode ? (<p className="singlePostTitleInput-items" >Large Items: </p>) : (<p></p>)}
          {updateMode ? (
          <input type="text" value={largeitems} className="singlePostTitleInput" autoFocus onChange={(e) => setlargeitems(e.target.value)}/>
        ) : (
          <p className="singlePostDesc">Large Items: {post.largeitems} </p>
        )}
        </div>


        <div class='singlePostDesc'>
          {updateMode ? (<p className="singlePostTitleInput-items" >Huge Iterms: </p>) : (<p></p>)}
          {updateMode ? (
          <input type="text" value={duration} className="singlePostTitleInput" autoFocus onChange={(e) => setduration(e.target.value)}/>
        ) : (
          <p className="singlePostDesc">Huge Iterms: {post.duration} </p>
        )}
        </div>

        <h1 class='PostTitle'>Storage Duration and place of residence: </h1>
        <div class='post-group'>
          <div class='singlePostDesc'>
          {updateMode ? (<p className="singlePostTitleInput-items" >Duration: </p>) : (<p></p>)}
          {updateMode ? (
          <input type="text" value={hugeitems} className="singlePostTitleInput" autoFocus onChange={(e) => sethugeitems(e.target.value)}/>
        ) : (
          <p className="singlePostDesc">Duration: {post.duration} </p>
        )}
        </div>
          <p className="singlePostDesc">Residence: {post.residence}</p>
          <p className="singlePostDesc"> Additional Notes: {post.notes}</p>
        </div>

        <h1 className="singlePriceDesc">Total Price: {getTotal()}</h1>
        </div>
        <div class="order-button">
        {!updateMode && (
          <div>
            <button className="singlePostButton"
              onClick={() => setUpdateMode(true)}tr
            >Edit</button>
          </div>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}

        <div class="cancel-button">
        {updateMode && (
          <div>
            <button className="singlePostButton"
              onClick={() => setUpdateMode(false)}
            >Cancel</button>
          </div>
        )}
        </div>

        </div>
        </div>
      </div>
    )
}