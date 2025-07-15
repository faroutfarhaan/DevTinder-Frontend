import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestsSlice";
import RequestShimmer from "../shimmers/RequestShimmer.jsx";
import NoRequests from "./NoRequests.jsx";
const Requests = () => {
  const user = useSelector((store) => store.user);
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const [showBtn,setShowBtn]=useState(true);
  const handleRequest = async (status, requestId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true }
      );
      setShowBtn(false);
      dispatch(removeRequest(requestId));
      console.log(res.message);
    } catch (err) {
      console.log(err, "error at handle request");
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res, "respose from fetch requests");
      dispatch(addRequests(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      fetchRequests();
    }
  }, [user]);
  if (!requests) return <div>
    <RequestShimmer/>
  </div>;

  if (requests.length === 0) {
    return <NoRequests/>
  }
  return (
    <div className="">
      <div className="flex justify-center items-center w-max shadow-gray-900 shadow rounded-4xl  text-4xl text-[#FF416C] font-bold m-5 p-2 ">
        Requests
      </div>

      <div className="m-4 ">
        {requests.map((item) => {
          const { firstName, lastName, _id, photoUrl, about, age } =
            item.senderId;
          const requestId = item._id;
          return (
            <div
              key={_id}
              className=" shadow shadow-black rounded-full flex p-2 m-4"
            >
              <figure className="w-50 justify-start items-center">
                <img src={photoUrl} alt="user photo" />
              </figure>
              <div to="/display" state={item}>
                <h2 className="text-[#FF416C] text-2xl mx-4 font-semibold">
                  {firstName + " " + lastName}
                </h2>
                <p className="mx-4">{age + ", " + about}</p>
              </div>

              {showBtn && (<div className="ml-auto flex  items-center">
                <button
                  className=" bg-green-400 btn hover:text-green-400 hover:bg-white justify-end rounded-3xl mx-1"
                  onClick={() => handleRequest("accepted", requestId)}
                >
                  accept
                </button>
                <button
                  className=" btn justify-end mx-2  bg-[#FF416C] hover:text-[#FF416C] hover:bg-white rounded-3xl"
                  onClick={() => handleRequest("accepted", requestId)}
                >
                  reject
                </button>
              </div>)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
