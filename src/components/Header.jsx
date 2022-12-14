import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from './Container';
import { setTheme } from '../store/theme/theme-actions';
import { cleanControls } from '../store/controls/controls-action';

const Title = styled(Link).attrs(() => ({
    to: '/',
}))`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: 14px;
    cursor: pointer;
    text-transform: capitalize;
    user-select: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;
export const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

    const cleanUp = () => dispatch(cleanControls());

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp}>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}
                        <span
                            style={{ marginLeft: '0.75rem' }}
                        >
                            {theme} Mode
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}