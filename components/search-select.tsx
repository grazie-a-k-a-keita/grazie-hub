'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchSelect({
  selectValues,
  name,
  placeholder,
}: {
  selectValues: { value: string; label: string }[];
  name: string;
  placeholder: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = ({ name, value }: { name: string; value: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      defaultValue={searchParams.get(name) || ''}
      onValueChange={(value) => {
        handleSearch({ name, value });
      }}
    >
      <SelectTrigger className='w-72'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='all'>All</SelectItem>
          {selectValues.map((select) => (
            <SelectItem key={select.value} value={select.value}>
              {select.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
