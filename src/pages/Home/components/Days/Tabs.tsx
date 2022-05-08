import s from './Days.module.scss';

type Props = {};

export const Tabs = (props: Props) => {
    const tabs = [
        { value: 'On week' },
        { value: 'On 10 day' },
        { value: 'On month' },
    ];
    return (
        <div className={s.tabs}>
            <div className={s.wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    );
};
