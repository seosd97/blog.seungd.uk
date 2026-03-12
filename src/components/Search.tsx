import { useState } from "react";
import * as styles from "../styles/search.css";

export default function Search({ onSearch }: { onSearch: (query: string) => void }) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setValue(q);
    onSearch(q);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search posts..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
