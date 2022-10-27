import { useCallback, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleOnSubmit = useCallback(() => {
    router.push(`products/?q=${searchTerm}`);
    setSearchTerm("");
  }, [router, searchTerm]);

  return (
    <Box>
      <TextField
        placeholder="Buscar..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyDown={(e) => (e.key === "Enter" ? handleOnSubmit() : null)}
      />
    </Box>
  );
};

export default Search;
