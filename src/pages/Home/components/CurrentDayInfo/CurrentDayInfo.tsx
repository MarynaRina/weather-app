import s from './CurrentDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { CurrentDayItems } from './CurrentDayItems';
type Props = {};

export interface Item {
    icon__id: string;
    name: string;
    value: string;
}

export const CurrentDayInfo = (props: Props) => {
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
        <div className={s.current__dayInfo}>
            <div className={s.currentDay__infoItems}>
                {items.map((item: Item) => (
                    <CurrentDayItems key={item.icon__id} item={item} />
                ))}
            </div>
            <img className={s.cloud__img} src={cloud} alt='cloud' />
        </div>
    );
};
