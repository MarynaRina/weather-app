import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { CurrentDay } from './components/CurrentDay/CurrentDay';
import { CurrentDayInfo } from './components/CurrentDayInfo/CurrentDayInfo';
import { Days } from './components/Days/Days';
import s from './Home.module.scss';

type Props = {};

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('radom'));
    }, [dispatch]);

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <CurrentDay weather={weather} />
                <CurrentDayInfo />
            </div>
            <Days />
        </div>
    );
};
