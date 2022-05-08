import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { Weather } from '../../../../store/types/types';
import { Item } from './CurrentDayInfo';
import s from './CurrentDayInfo.module.scss';

type Props = {
    item: Item;
};

export const CurrentDayItems = ({ item }: Props) => {
    const { icon__id, name, value } = item;
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector key={icon__id} id={icon__id} />
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};
