import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

type Props = {};

export interface Day {
    day: string;
    day__info: string;
    icon__id: string;
    temp__day: string;
    temp__night: string;
    descr: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Today',
            day__info: '28 march',
            icon__id: 'sun',
            temp__day: '+19',
            temp__night: '+10',
            descr: 'Cloudy',
        },
    ];
    return (
        <>
            <Tabs />    
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card day={day} key={day.day}/>
                ))}
            </div>
        </>
    );
};
