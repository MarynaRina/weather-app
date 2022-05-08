import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/CurrentDayInfo/CurrentDayInfo';
import { CurrentDayItems } from '../../pages/Home/components/CurrentDayInfo/CurrentDayItems';
import s from './PopUp.module.scss';

type Props = {};

export const PopUp = (props: Props) => {
    const items = [
        {
            icon__id: 'temp',
            name: 'Temperature',
            value: '20',
        },
        {
            icon__id: 'pressure',
            name: 'Pressure',
            value: '750 mm - normal',
        },
        {
            icon__id: 'precipitation',
            name: 'Precipitation',
            value: 'Without precipitation',
        },
        {
            icon__id: 'wind',
            name: 'Wind',
            value: '3 m/s',
        },
    ];

    return (
        <>
        <div className={s.blur}></div>
        <div className={s.popup}>
          <div className={s.day}>
            <div className={s.day__temp}>20°</div>
            <div className={s.day__name}>Monday</div>
            <div className={s.img}>
              <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.day__time}>
              Time: <span>21:54</span>
            </div>
            <div className={s.day__city}>
              City: <span>Radom</span>
            </div>
          </div>
          <div className={s.this__day_info_items}>
            {items.map((item: Item) => (
              <CurrentDayItems key={item.icon__id} item={item} />
            ))}
          </div>
          <div className={s.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </div>
      </>
    );
};
