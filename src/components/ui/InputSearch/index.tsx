import { Input } from "@mantine/core";
import { useState, type FC } from "react";

import { MagnifyGlassIcon } from "../icons/MagnifyGlassIcon";

export const InputSearch: FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Input
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Search"
        leftSection={<MagnifyGlassIcon />}
        styles={{
          input: {
            border: "none",
          },
        }}
      />
    </>
  );
};
