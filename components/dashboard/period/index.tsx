import { useState } from 'react';
import AutoHeightImage from '@components/common/image';
import Select from '@components/common/select';
import ToolTip from '@components/common/tooltip';
import styles from '@components/dashboard/period/DashBoardPeriod.module.scss';

const periodArr = ['반기', '분기'];
const categorizeArr = ['상반기', '하반기'];

const DashBoardPeriod = () => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periodArr[0]);
  const [categorize, setCategorize] = useState<string>(categorizeArr[0]);

  return (
    <div className={styles.root}>
      <div className={styles.periodContainer}>
        <div className={styles.periodCategory}>
          <label>
            <span>기간</span>
            <Select value={period} setValue={setPeriod} options={periodArr} />
          </label>
          <label>
            <span className={styles.categorize}>분류</span>
            <Select
              value={categorize}
              setValue={setCategorize}
              options={categorizeArr}
            />
          </label>
        </div>
        <div className={styles.periodOfTime}>
          <button type="button" onClick={() => setTooltipOpen(!tooltipOpen)}>
            <AutoHeightImage
              src="/images/time-clock.png"
              alt="검색"
              width={20}
              height={20}
            />
            <ToolTip
              text="목표 기간 : 2023.01.01 ~ 2023.12.31"
              open={tooltipOpen}
              clasName={styles.tooltip}
            />
          </button>
          148일 15시간 45분 남았어요
        </div>
      </div>
      <ul className={styles.categoryContainer}>
        <li className={styles.objectives}>
          <AutoHeightImage
            src="/images/objectives.png"
            alt="목표"
            width={48}
            height={48}
          />
          <div>
            <strong>34%</strong>
            <p>Objectives</p>
          </div>
          <div className={styles.progress}>
            <span style={{ width: '34%' }} />
          </div>
        </li>
        <li className={styles.keyResult}>
          <AutoHeightImage
            src="/images/key-result.png"
            alt="결과"
            width={48}
            height={48}
          />
          <div>
            <strong>61%</strong>
            <p>Key Results</p>
          </div>
          <div className={styles.progress}>
            <span style={{ width: '61%' }} />
          </div>
        </li>
        <li className={styles.initiatives}>
          <AutoHeightImage
            src="/images/initiatives.png"
            alt="계획"
            width={48}
            height={48}
          />
          <div>
            <strong>82%</strong>
            <p>Initiatives</p>
          </div>
          <div className={styles.progress}>
            <span style={{ width: '82%' }} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardPeriod;
