import { useState } from "react";
import * as styles from "./Search.css";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export default function Search({
  onSearch,
  placeholder = "Search articles...",
  ariaLabel = "Search articles",
}: SearchProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setValue(q);
    onSearch(q);
  };

  return (
    <search className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={handleChange}
      />
    </search>
  );
}
