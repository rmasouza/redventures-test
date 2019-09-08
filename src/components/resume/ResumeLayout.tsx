import React, { FC } from  'react';
import './ResumeLayout.scss';

const ResumeLayout: FC = ({ children }) => {

    return (
        <section className='resume-layout'>
            {children}
        </section>
    )
};

export default ResumeLayout;