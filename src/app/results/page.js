"use client";
import ResultsComponets from "@/Components/Components/ResultsComponets/ResultsComponets";
import CustomSnackbar from "@/Components/Components/ReusableComponents/CustomSnackbar";
import React, { useEffect, useState } from "react";

function page() {
  //snakbar
  const [snackbarOpen, setsnackbarOpen] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({
    duration: 5000,
    type: "error",
    infomation: "Invalid credential !!",
  });

  const [rows, setrows] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const getData = await fetch(`/api`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!getData.ok) {
          throw new Error("Failed to Get data - Try Later !!");
        }
        const result = await getData.json();
        console.log([...result.data].map((e, i) => ({ ...e, sno: i + 1 })));
        setrows([...result.data].map((e, i) => ({ ...e, sno: i + 1 })));
      } catch (error) {
        setsnackbarValue({
          duration: 3000,
          type: "error",
          infomation: `Error: ${error.message}`,
        });
        setsnackbarOpen(true);
      }
    })();
  }, []);

  return (
    <>
      <ResultsComponets rows={rows} />
      <CustomSnackbar
        open={snackbarOpen}
        setOpen={setsnackbarOpen}
        snackbarValue={snackbarValue}
      />
    </>
  );
}

export default page;
