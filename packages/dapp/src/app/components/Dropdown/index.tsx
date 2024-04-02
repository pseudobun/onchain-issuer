import React, { type ChangeEvent } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface CustomDropdownProps {
  issuers: { id: string; name: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function CustomDropdown({
  issuers,
  onChange,
}: CustomDropdownProps) {
  return (
    <Select
      items={issuers}
      label="Issuer"
      className="max-w-sm"
      placeholder="Select an issuer"
      defaultSelectedKeys={issuers.map((i) => i.name)}
      onChange={onChange}
    >
      {(issuer) => (
        <SelectItem value={issuer.name} key={issuer.name}>
          {issuer.name}
        </SelectItem>
      )}
    </Select>
  );
}
