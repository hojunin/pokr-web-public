import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from '@components/common/select/Select.module.scss';

interface SelectProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: any;
  defaultValue?: string | number | readonly string[] | undefined;
}

const Select = (props: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { value, setValue, options, defaultValue = '' } = props;
  const btnRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleCloseSelect = (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (open && (!btnRef.current || !btnRef.current.contains(e.target))) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleCloseSelect);

    return () => {
      window.removeEventListener('click', handleCloseSelect);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={btnRef}>
      <button
        type="button"
        className={cn(styles.selectedValue, { [styles.open]: open })}
        onClick={() => setOpen(!open)}
      >
        <span>{value ? value : defaultValue}</span>
      </button>
      <ul className={styles.options}>
        {options.map((option: any, index: number) => (
          <li key={index}>
            <button
              type="button"
              className={cn({
                [styles.selected]: option === value || option === defaultValue,
              })}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
