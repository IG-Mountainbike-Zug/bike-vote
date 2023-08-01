"use client";

import React, { createContext, useState } from "react";

export const SearchContext = createContext<{
  search: string;
  setSearch: (search: string) => void;
}>({
  search: "",
  setSearch: () => {
    void 0;
  },
});

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
