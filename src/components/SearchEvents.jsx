"use client";

import Link from "next/link";
import React, { useState } from "react";

export const SearchEvents = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="join flex justify-center items-center">
      <input className="input input-bordered join-item" placeholder="Search Event" onChange={(e) => setSearchValue(e.target.value)} />
      <Link href={`/search?q=${searchValue}`}>
        <button className="btn btn-outline join-item rounded-r-full">Search</button>
      </Link>
    </div>
  );
};
