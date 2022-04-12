import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

// const [data, setData] = useState({});
// useEffect(() => {
//     console.log(data);
//     setData((prevState) => ({
//       ...prevState,
//       [child.props.name]: child.props.value
//   }));
// }, [data]);
// const handleChange = (target) => {
//     setData((prevState) => ({
//         ...prevState,
//         [target.name]: target.value
//     }));
// };

// let count = 0;

// if (children) {
//     return React.Children.map(children, (child) => {
//         const childValue = React.Children.map(child, (childName) => {
//             console.log("childName", childName);
//             console.log("child", child);
//         });
//         console.log("childValue", childValue);
// React.cloneElement(child, {
//   className: `${child.props.className} img-special-class`
// })
// if (child.type === "div") {
//             console.log("child", child.props.children);
//             count++;
//             const childName = `${count}. ${[child.props.children]}`;
//             const config = {
//                 ...child.props,
//                 [child.props.children]: childName,
//                 name: childName,
//                 value: childName || ""
//             };

//             const newChild = React.cloneElement(child, config);
//             console.log(newChild);
//             return newChild;
//             // }
//         });
//     }
// };

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const ListComponent = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    console.log("arrayOfChildren", arrayOfChildren);
    return React.Children.map(arrayOfChildren, (child) => {
        console.log("child", child);
        console.log("child.key", child.key);
        return React.cloneElement(child, {
            ...child.props,
            number: +child.key.replace(".", "") + 1
        });
    });
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
