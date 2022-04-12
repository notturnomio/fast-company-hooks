import React, { useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import CardWrapper from "../common/Card";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-danger" onClick={onLogout}>
            Logout
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            Login
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
};

const componentWithFunc = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogout = () => {
        localStorage.removeItem("auth");
    };

    const isAuth = !!localStorage.getItem("auth");

    useEffect(() => {
        console.log(isAuth);
    }, [SimpleComponent]);

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogout={handleLogout}
            />
        </CardWrapper>
    );
};

const ComponentWithHOC = componentWithFunc(SimpleComponent);

const HocExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{" "}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>,{" "}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображайте кнопку <code>Войти</code>, если пользователь НЕ
                    авторизован.
                </li>
                <li>
                    Отображает кнопку с содержанием{" "}
                    <code>Выйти из системы</code>, если пользователь
                    авторизован.
                </li>
                <li>
                    При нажатии на кнопки вызываются методы <code>onLogin</code>{" "}
                    и <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо <code>HOC</code>, который модифицирует компонент{" "}
                <code>SimpleComponent</code> следующим образом:
            </p>
            <ul>
                <li>
                    Добавляет обертку в виде карточки boostrap (использовать
                    существующий HOC)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>, который является
                    результатом проверки наличия записи с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметр <code>onLogin</code> и{" "}
                    <code>onLogOut</code> для управления записью с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
            </ul>
            <Divider />
            <SmallTitle>Упражнение</SmallTitle>
            <ComponentWithHOC />
        </CollapseWrapper>
    );
};

export default HocExercise;
