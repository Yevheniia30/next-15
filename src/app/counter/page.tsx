import Counter from '@/app/counter/counter';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Counter',
        template: '%s | Counter',
        absolute: '',
    },
    description: 'Counter page',
};

const CounterPage = () => <Counter />;

export default CounterPage;
