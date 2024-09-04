import Link from "next/link";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="h-screen flex flex-col gap-1 items-center justify-center">
      <h2 className="font-semibold">
        {" "}
        {error?.message || "Something went wrong!"}
      </h2>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <Link href={"/"}>
          <button className="my-btn-one-outline">Back to home</button>
        </Link>
        <button className="my-btn-one" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
