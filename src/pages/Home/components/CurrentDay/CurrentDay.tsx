import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './CurrentDay.module.scss';

type Props = {
    weather: Weather;
};

export const CurrentDay = ({ weather }: Props) => {
    console.log(weather);
    return (
        <div className={s.current__section}>
            <div className={s.top__block}>
                <div className={s.wrapper}>
                    <div className={s.current__temp}>
                        {Math.round(weather.main.temp)}°
                    </div>
                    <div className={s.current__day}>Today</div>
                </div>
                <GlobalSvgSelector id='sun' />
            </div>
            <div className={s.bottom__block}>
                <div className={s.current__time}>
                    <span>21:10</span>
                </div>
                <div className={s.city}></div>
            </div>
        </div>
    );
};
