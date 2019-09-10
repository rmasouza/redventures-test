import React, { FC } from  'react';
import './ResumeLayout.scss';
import Container from '../common/layout/Container';

const ResumeLayout: FC = ({ children }) => {

    return (
        <Container className='resume-layout'>
            {children}
        </Container>
    )
};

export default ResumeLayout;