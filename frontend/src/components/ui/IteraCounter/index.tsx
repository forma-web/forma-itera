'use client';

import React, { memo } from 'react';
import IteraButton from '@/components/ui/IteraButton';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import styles from './styles.module.scss';

type TCounterProps = {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
};

const IteraCounter = ({ value, min, max, onChange }: TCounterProps) => {
  const decrement = () => {
    if (min !== undefined && min >= value) return;
    onChange((value) => value - 1);
  };

  const increment = () => {
    if (max !== undefined && max <= value) return;
    onChange((value) => value + 1);
  };

  return (
    <div className="list-row">
      <IteraButton
        small
        className={styles.button}
        disabled={min !== undefined && min >= value}
        onClick={decrement}
      >
        <MinusIcon className={styles.icon} />
      </IteraButton>
      <div className={styles.value}>{value}</div>
      <IteraButton
        small
        className={styles.button}
        disabled={max !== undefined && max <= value}
        onClick={increment}
      >
        <PlusIcon className={styles.icon} />
      </IteraButton>
    </div>
  );
};

export default memo(IteraCounter);