import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss';


interface Props {
    day: Day;
}

export const Card = ({ day }: Props) => {
    return (
        <div className={s.card}>
            <div className={s.day}>{day.day}</div>
            <div className={s.info}>{day.day__info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={day.icon__id} />
            </div>
            <div className={s.temp__day}>{day.temp__day}</div>
            <div className={s.temp__night}>{day.temp__night}</div>
            <div className={s.descr}>{day.descr}</div>
        </div>
    );
};
