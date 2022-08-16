/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TextBar from 'components/vis-elements/TextBar';

describe('TextBar', () => {
    test('renders the TextBar component with default props', () => {
        render(
            <TextBar
                data={[
                    { name: '/home', value: 100000000 },
                    { name: '/imprint', value: 351 },
                    { name: '/cancellation', value: 271 },
                    { name: `/special-offer-august-getsahdkjhagskdfjhgakshjgdfkjahsgdfjkgasdjkhfgajkshgdfjkhagsdkjhfgajh
                        ksdgfjkhasdgfjkhagsdjhkgfasjkdgfjkasdhgkjgfdsk`, value: 191 },
                    { name: '/documentation', value: 91 },
                ]}
            />
        );
    });
});
