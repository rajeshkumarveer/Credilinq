"use client";
import FormComponents from "@/Components/Components/FormComponents/FormComponents";
import CustomSnackbar from "@/Components/Components/ReusableComponents/CustomSnackbar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  //snakbar
  const [snackbarOpen, setsnackbarOpen] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({
    duration: 5000,
    type: "error",
    infomation: "Invalid credential !!",
  });
  let router = useRouter();
  
  const onFormSubmit = async (data) => {
    try {
      const getData = await fetch(`/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      if (!getData.ok) {
        throw new Error("Failed to submit data - Try Later !!");
      }
      const result = await getData.json();
      setsnackbarValue({
        duration: 3000,
        type: "success",
        infomation: `Submitted Successfully`,
      });
      setsnackbarOpen(true);
      router.push("/results");
    } catch (error) {
      setsnackbarValue({
        duration: 3000,
        type: "error",
        infomation: `Error: ${error.message}`,
      });
      setsnackbarOpen(true);
    }
  };
  return (
    <>
      <FormComponents onFormSubmit={onFormSubmit} />
      <CustomSnackbar
        open={snackbarOpen}
        setOpen={setsnackbarOpen}
        snackbarValue={snackbarValue}
      />
    </>
  );
}

export default page;
