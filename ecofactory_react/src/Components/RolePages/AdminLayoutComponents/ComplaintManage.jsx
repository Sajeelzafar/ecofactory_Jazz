import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComplaints } from "../../../redux/slices/complaints";
// import { fetchComplaints } from "../../../redux/slices/complaints";

const ComplaintManage = () => {
  const allComplaints = useSelector((state) => state.complaints);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAllComplaints());
      console.log(allComplaints);
  }, []);
  return <div>ComplaintManage</div>;
};

export default ComplaintManage;
