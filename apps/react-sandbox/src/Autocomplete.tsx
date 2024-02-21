import { useState, ChangeEvent, useRef, useEffect } from "react";
import { Trie } from "./trie";

const Autocomplete = () => {
  const [text, setText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      const res = trie.current.find(e.target.value);
      setAutocomplete(res);
    } else {
      setAutocomplete([]);
    }
  };
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
  const trie = useRef<Trie>(new Trie());
  useEffect(() => {
    const t = trie.current;
    // insert few values
    t.insert("hello");
    t.insert("helium");
    t.insert("bathroom");
    t.insert("bath");
    t.insert("bat");
    t.insert("batman");
    t.insert("batmobile");
  }, []);
  return (
    <section>
      <label htmlFor="autocomplete">Autocomplete:</label>
      <input
        id="autocomplete"
        type="text"
        onChange={handleChange}
        value={text}
      />
      <ul>
        {autocomplete.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </section>
  );
};

export default Autocomplete;
