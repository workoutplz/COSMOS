import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const PostInfo = () => (
    <div className={cx('post-info')}>
        <div className={cx('info')}>
            <h1>타이틀</h1>
            <div classNames={cx('tags')}>
                <a>#태그</a> <a>#태그</a> <a>#태그</a>
            </div>
            <div className={cx('date')}>April 18, 2019</div>
        </div>
    </div>
);

export default PostInfo;    