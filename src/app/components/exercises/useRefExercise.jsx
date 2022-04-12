import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [otherState, setOtherState] = useState("false");

    useEffect(() => {
        blockRef.current.state = otherState;
    }, [otherState]);

    const handleClick = () => {
        if (otherState === "false") {
            setOtherState("true");
            blockRef.current.style.height = "80px";
            blockRef.current.style.width = "150px";
            blockRef.current.innerHTML = "<small>text</small>";
            // console.log(blockRef.current);
            // console.log(blockRef.current.children[0].innerHTML);
        } else {
            setOtherState("false");
            blockRef.current.style.height = "40px";
            blockRef.current.style.width = "60px";
            blockRef.current.innerHTML = "<small>Блок</small>";
            // console.log(blockRef.current);
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                state="true"
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-4" onClick={handleClick}>
                Toggle Block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
