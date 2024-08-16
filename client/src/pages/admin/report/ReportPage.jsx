import { Box, Button, Typography } from "@mui/material";
import AdminBar from "../components/appbar/AdminBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useEffect, useState } from "react";
import ReportTable from "./ReportTable";

const DateButton = forwardRef(({ value, onClick }, ref) => (
  <Button variant="contained" color="primary" onClick={onClick} ref={ref}>
    {value}
  </Button>
));

const ReportPage = () => {
  const [today, setToday] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, []);
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      {/* function  */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", width: 400, justifyContent: "space-evenly" }}
        >
          {/* start */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography align="center" fontWeight="bold">
              Dari
            </Typography>
            <DatePicker
              closeOnScroll={true}
              selected={endDate}
              onChange={(date) => setEndtDate(date)}
              customInput={<DateButton />}
              dateFormat="dd MM yyyy"
              maxDate={today}
            />
          </Box>
          {/* end */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography align="center" fontWeight="bold">
              Sampai
            </Typography>
            <DatePicker
              closeOnScroll={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<DateButton />}
              dateFormat="dd MM yyyy"
              maxDate={today}
            />
          </Box>
        </Box>
        <Button variant="contained" color="success">
          Download
        </Button>
      </Box>
      {/* Table */}
      <Box sx={{ p: 2 }}>
        <ReportTable />
      </Box>
    </Box>
  );
};

export default ReportPage;
